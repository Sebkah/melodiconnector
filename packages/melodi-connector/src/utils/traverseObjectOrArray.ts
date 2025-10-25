/**
 * Traverses an object, array, or primitive value, allowing modification via a callback.
 * The callback receives the current value, its path in the structure, and a setValue function
 * to modify the value at that location. The function returns the modified structure.
 *
 * @param objOrArrayOrValue - The root object, array, or primitive to traverse and potentially modify.
 * @param callback - A function called for each value in the structure. It receives:
 *   - value: The current value being visited.
 *   - path: An array of keys/indices representing the path to this value from the root.
 *   - setValue: A function to set a new value at this path.
 * @returns The modified root structure (or new primitive value if the root was a primitive).
 */
export function traverseObjectOrArray(
  objOrArrayOrValue: Record<string, any> | any[] | any,
  callback: (
    value: any,
    path: (string | number)[],
    setValue: (newValue: any) => void,
  ) => void,
): any {
  // Use a container object to allow mutation of the root reference
  let rootContainer = { value: objOrArrayOrValue };

  /**
   * Sets a value at a specific path in the root object/array.
   * For the root itself (empty path), updates the root container.
   * For nested paths, navigates to the parent and sets the value.
   */
  function setAtPath(path: (string | number)[], value: any) {
    if (path.length === 0) {
      // Special case: setting the root value itself
      rootContainer.value = value;
      return;
    }
    let current = rootContainer.value;
    // Navigate to the parent of the target
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]!];
    }
    // Set the value at the final key/index
    current[path[path.length - 1]!] = value;
  }

  /**
   * Retrieves the value at a specific path in the object/array.
   */
  function getAtPath(path: (string | number)[]): any {
    if (path.length === 0) {
      return rootContainer.value;
    }
    let current = rootContainer.value;
    for (const p of path) {
      current = current[p];
    }
    return current;
  }

  /**
   * Recursive helper to traverse the structure.
   * Calls the callback on the current value, then recurses into nested objects/arrays.
   */
  function traverse(path: (string | number)[]): void {
    const current = getAtPath(path);

    // Call the user callback, allowing modification via setValue
    callback(current, path, (newVal) => setAtPath(path, newVal));

    // Get the potentially updated value at this path
    const updatedCurrent = getAtPath(path);

    // If it's a plain object, traverse its properties
    if (
      typeof updatedCurrent === "object" &&
      !Array.isArray(updatedCurrent) &&
      updatedCurrent !== null &&
      typeof updatedCurrent !== "function"
    ) {
      const obj = updatedCurrent as Record<string, any>;
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          traverse([...path, key]);
        }
      }
    }
    // If it's an array, traverse its elements
    else if (Array.isArray(updatedCurrent)) {
      const arr = updatedCurrent as any[];
      for (let i = 0; i < arr.length; i++) {
        traverse([...path, i]);
      }
    }
  }

  // Start traversal from the root with an empty path
  traverse([]);

  // Return the final root value (which may have been replaced)
  return rootContainer.value;
}
