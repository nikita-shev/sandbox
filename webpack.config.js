import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProd = process.env.NODE_ENV === 'production';

export default {
   mode: 'development',
   context: path.resolve(__dirname, 'src'),
   output: {
      filename: 'main.js'
   },
   devtool: !isProd ? 'source-map' : false,
   module: {
      rules: [
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env']
               }
            }
         },
         {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
         },
      ]
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   optimization: {
      minimize: isProd
   }
};
