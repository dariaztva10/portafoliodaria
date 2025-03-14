const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack'); 

const port = 3000;
let publicUrl = `ws://localhost:${port}/ws`;

if (process.env.GITPOD_WORKSPACE_URL) {
  const [schema, host] = process.env.GITPOD_WORKSPACE_URL.split('://');
  publicUrl = `wss://${port}-${host}/ws`;
}

// Solo para Codespaces
if (process.env.CODESPACE_NAME) {
  publicUrl = `wss://${process.env.CODESPACE_NAME}-${port}.app.github.dev/ws`;
}

// Verificación de variables de entorno
console.log("🚀 BACKEND_URL en Webpack:", process.env.BACKEND_URL);

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        port,
        hot: true,
        allowedHosts: "all",
        historyApiFallback: true,
        static: {
          directory: path.resolve(__dirname, "src/front"), // Cambia 'src/front' a tu ruta real
        },
        
        client: {
          webSocketURL: publicUrl
        },
    },
    plugins: [
        new Dotenv({
            systemvars: true 
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});