//@flow

const importBase = typeof module !== undefined ? module.id : __module

asyncImport(importBase, "src/asyncModule.js")