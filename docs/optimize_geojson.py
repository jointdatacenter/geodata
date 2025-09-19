#!/usr/bin/env python3
"""
Optimize GeoJSON for web rendering by:
1. Simplifying geometries (reducing coordinate precision)
2. Removing unnecessary properties
3. Reducing file size while maintaining visual quality
"""

import json
import math

def simplify_coordinates(coords, precision=4):
    """Reduce coordinate precision to specified decimal places"""
    if isinstance(coords[0], list):
        return [simplify_coordinates(coord, precision) for coord in coords]
    else:
        return [round(coord, precision) for coord in coords]

def douglas_peucker_simple(coords, tolerance=0.01):
    """Simple implementation of Douglas-Peucker algorithm for line simplification"""
    if len(coords) <= 2:
        return coords

    # Find the point with maximum distance from line between first and last points
    dmax = 0
    index = 0
    end = len(coords) - 1

    for i in range(1, end):
        d = point_line_distance(coords[i], coords[0], coords[end])
        if d > dmax:
            index = i
            dmax = d

    # If max distance is greater than tolerance, recursively simplify
    if dmax > tolerance:
        # Recursive call
        rec_results1 = douglas_peucker_simple(coords[:index+1], tolerance)
        rec_results2 = douglas_peucker_simple(coords[index:], tolerance)

        # Build the result list
        result = rec_results1[:-1] + rec_results2
    else:
        result = [coords[0], coords[end]]

    return result

def point_line_distance(point, line_start, line_end):
    """Calculate perpendicular distance from point to line"""
    if line_start == line_end:
        return math.sqrt((point[0] - line_start[0])**2 + (point[1] - line_start[1])**2)

    # Calculate the perpendicular distance
    A = point[0] - line_start[0]
    B = point[1] - line_start[1]
    C = line_end[0] - line_start[0]
    D = line_end[1] - line_start[1]

    dot = A * C + B * D
    len_sq = C * C + D * D

    if len_sq == 0:
        return math.sqrt(A*A + B*B)

    param = dot / len_sq

    if param < 0:
        xx = line_start[0]
        yy = line_start[1]
    elif param > 1:
        xx = line_end[0]
        yy = line_end[1]
    else:
        xx = line_start[0] + param * C
        yy = line_start[1] + param * D

    dx = point[0] - xx
    dy = point[1] - yy
    return math.sqrt(dx * dx + dy * dy)

def simplify_geometry(geometry, tolerance=0.01, precision=4):
    """Simplify geometry coordinates"""
    geom_type = geometry['type']
    coords = geometry['coordinates']

    if geom_type == 'Point':
        simplified_coords = simplify_coordinates(coords, precision)
    elif geom_type == 'LineString':
        simplified_coords = douglas_peucker_simple(coords, tolerance)
        simplified_coords = simplify_coordinates(simplified_coords, precision)
    elif geom_type == 'Polygon':
        simplified_coords = []
        for ring in coords:
            simplified_ring = douglas_peucker_simple(ring, tolerance)
            simplified_ring = simplify_coordinates(simplified_ring, precision)
            if len(simplified_ring) >= 4:  # Polygon rings need at least 4 points
                simplified_coords.append(simplified_ring)
    elif geom_type == 'MultiPolygon':
        simplified_coords = []
        for polygon in coords:
            simplified_polygon = []
            for ring in polygon:
                simplified_ring = douglas_peucker_simple(ring, tolerance)
                simplified_ring = simplify_coordinates(simplified_ring, precision)
                if len(simplified_ring) >= 4:  # Polygon rings need at least 4 points
                    simplified_polygon.append(simplified_ring)
            if simplified_polygon:
                simplified_coords.append(simplified_polygon)
    else:
        simplified_coords = simplify_coordinates(coords, precision)

    return {
        'type': geom_type,
        'coordinates': simplified_coords
    }

def optimize_geojson(input_file, output_file, tolerance=0.005, precision=3):
    """Optimize GeoJSON file for web use"""
    print(f"Loading {input_file}...")

    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    print(f"Original features: {len(data['features'])}")

    optimized_features = []

    for i, feature in enumerate(data['features']):
        if i % 50 == 0:
            print(f"Processing feature {i+1}/{len(data['features'])}")

        # Keep only essential properties
        essential_props = {
            'name': feature['properties'].get('name', ''),
            'iso3': feature['properties'].get('iso3', feature['properties'].get('color_code', '')),
            'continent': feature['properties'].get('continent', ''),
            'region': feature['properties'].get('region', '')
        }

        # Remove empty properties
        essential_props = {k: v for k, v in essential_props.items() if v}

        # Simplify geometry
        simplified_geometry = simplify_geometry(feature['geometry'], tolerance, precision)

        # Skip features with empty geometries
        if not simplified_geometry['coordinates']:
            continue

        optimized_feature = {
            'type': 'Feature',
            'properties': essential_props,
            'geometry': simplified_geometry
        }

        optimized_features.append(optimized_feature)

    optimized_data = {
        'type': 'FeatureCollection',
        'features': optimized_features
    }

    print(f"Optimized features: {len(optimized_features)}")

    # Save optimized file
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(optimized_data, f, separators=(',', ':'))

    print(f"Saved optimized GeoJSON to {output_file}")

if __name__ == "__main__":
    # Optimize with different levels of compression
    optimize_geojson(
        'world_administrative_boundaries.geojson',
        'world_countries_optimized.geojson',
        tolerance=0.005,  # Small tolerance for good quality
        precision=3       # 3 decimal places for coordinates
    )

    # Create a more compressed version for very lightweight use
    optimize_geojson(
        'world_administrative_boundaries.geojson',
        'world_countries_lite.geojson',
        tolerance=0.02,   # Higher tolerance for smaller file
        precision=2       # 2 decimal places for coordinates
    )