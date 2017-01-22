# sort  

## ready  

  1. typescript  
  > build and run  
  > config typescript  
  > tsc -w  
  
  ```
  tsconfig.json
  {
    "compilerOptions": {
      "module": "commonjs",
      "allowJs": true,
      "target": "es6",
      "allowUnreachableCode": false,
      "allowUnusedLabels": false,
      "alwaysStrict": true,
      "charset": "utf-8",
      "declaration": true,
      "declarationDir": "./typings",
      "inlineSourceMap": false,
      "listFiles": true,
      "listEmittedFiles": true,
      "moduleResolution": "node",
      "outDir": "./dist",
      "pretty": true,
      "removeComments": true,
      "sourceMap": false,
      "jsx": "preserve"
    },
    "include": [
      "./*.ts"
    ],
    "exclude": [
      "./*.js",
      "./*.json",
      "./*.md",
      "./images",
      "./node_modules",
      "typings",
      "./dist"
    ]
  }
  ```

  2. ts-node  
  > run  

  ```
  ts-node *.ts
  ```

## apriori  
