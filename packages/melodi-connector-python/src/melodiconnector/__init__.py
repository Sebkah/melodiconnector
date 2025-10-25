"""melodiconnector - Python translation of the TypeScript melodi-connector getters.

This module provides simple wrappers around the MELoDi REST API endpoints used
by the TypeScript package.
"""
from __future__ import annotations

import json
from typing import Any, Dict, List

import requests

BASE = "https://api.insee.fr/melodi"


def _request_json(path: str) -> Any:
    url = f"{BASE}/{path}"
    resp = requests.get(url)
    resp.raise_for_status()
    return resp.json()


def get_dataset_catalog() -> List[Dict[str, Any]]:
    """Return the dataset catalog (catalog/all)."""
    return _request_json("catalog/all")


def get_dataset_info(dataset_id: str) -> Dict[str, Any]:
    """Return catalog information for a single dataset (catalog/{id})."""
    return _request_json(f"catalog/{dataset_id}")


def get_dataset(dataset_id: str) -> Dict[str, Any]:
    """Return dataset data (data/{id})."""
    return _request_json(f"data/{dataset_id}")


__all__ = ["get_dataset", "get_dataset_catalog", "get_dataset_info"]
