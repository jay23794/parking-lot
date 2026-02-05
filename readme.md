1. Install TypeScript and type definitions
npm install --save-dev typescript @types/node

2. If you're using Express or other libraries, install their types too:
npm install --save-dev @types/express

3. Create a tsconfig.json file
npx tsc --init 

4. Update your dev script
npm install --save-dev tsx