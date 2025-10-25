"""CLI entrypoint for melodiconnector package.

Usage:
  python -m melodiconnector catalog
  python -m melodiconnector info <DATASET_ID>
  python -m melodiconnector data <DATASET_ID>
"""
from __future__ import annotations

import json
import sys

from . import get_dataset, get_dataset_catalog, get_dataset_info


def main() -> None:
    if len(sys.argv) < 2:
        print("Usage: melodiconnector [catalog|info <id>|data <id>]")
        sys.exit(1)

    cmd = sys.argv[1]
    if cmd == "catalog":
        print(json.dumps(get_dataset_catalog(), indent=2, ensure_ascii=False))
    elif cmd == "info" and len(sys.argv) > 2:
        print(json.dumps(get_dataset_info(sys.argv[2]), indent=2, ensure_ascii=False))
    elif cmd == "data" and len(sys.argv) > 2:
        print(json.dumps(get_dataset(sys.argv[2]), indent=2, ensure_ascii=False))
    else:
        print("Unknown command")
        sys.exit(2)


if __name__ == "__main__":
    main()
