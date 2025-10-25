# melodi-connector-python

Python translation of the `melodi-connector` package. This package provides simple functions to query the MELoDi API.

How to run locally:

```powershell
# install dev deps
python -m pip install -r requirements.txt

# run tests
pytest -q

# run package CLI
python -m melodiconnector catalog
```

Notes:

- This is an initial translation focusing on basic API getters. Further work can port other modules and include the data files found in the TypeScript package.
