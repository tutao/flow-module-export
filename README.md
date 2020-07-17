This is a repo to report an issue with flow where you cannot access `module` when you have
`well_formed_exports` enabled.

To reproduce:
```sh
npm ci
npx flow
```

Result:
```
Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ import-inline.js:3:20

module may only be used as part of a legal top level export statement [invalid-export]

     1│ //@flow
     2│
     3│ asyncImport(typeof module !== undefined ? module.id : __module, "src/asyncModule.js")


Error ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ import-top-level.js:3:25

module may only be used as part of a legal top level export statement [invalid-export]

     1│ //@flow
     2│
     3│ let importBase = typeof module !== undefined ? module.id : __module
     4│
     5│ asyncImport(importBase, "src/asyncModule.js")



Found 2 errors
```