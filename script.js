const fs = require('fs');
const path = require('path');

const folders = [
  'src/components/Auth',
  'src/components/Todos',
  'src/pages',
  'src/services',
  'src/hooks',
  'src/context',
  'src/utils'
];

const files = {
  'src/components/Auth': ['Login.js', 'Signup.js'],
  'src/components/Todos': ['TodoList.js', 'TodoItem.js', 'TodoForm.js'],
  'src/pages': ['Home.js', 'LoginPage.js', 'SignupPage.js'],
  'src/services': ['api.js', 'auth.js'],
  'src/context': ['AuthContext.js'],
  'src/utils': ['PrivateRoute.js'],
};

function createFoldersAndFiles(basePath) {
  folders.forEach(folder => {
    const dirPath = path.join(basePath, folder);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  });

  Object.keys(files).forEach(folder => {
    files[folder].forEach(file => {
      const filePath = path.join(basePath, folder, file);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '', 'utf8');
      }
    });
  });
}

createFoldersAndFiles(__dirname);
