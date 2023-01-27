// vite.config.js
import { defineConfig } from "file:///mnt/d/web/react/ceacademy-paypal/node_modules/.pnpm/vite@4.0.4_sass@1.57.1/node_modules/vite/dist/node/index.js";
import react from "file:///mnt/d/web/react/ceacademy-paypal/node_modules/.pnpm/@vitejs+plugin-react@3.0.1_vite@4.0.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { qrcode } from "file:///mnt/d/web/react/ceacademy-paypal/node_modules/.pnpm/vite-plugin-qrcode@0.2.1_vite@4.0.4/node_modules/vite-plugin-qrcode/dist/index.js";
import removeConsole from "file:///mnt/d/web/react/ceacademy-paypal/node_modules/.pnpm/vite-plugin-remove-console@1.3.0/node_modules/vite-plugin-remove-console/dist/index.mjs";
import { viteStaticCopy } from "file:///mnt/d/web/react/ceacademy-paypal/node_modules/.pnpm/vite-plugin-static-copy@0.13.0_vite@4.0.4/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  server: {
    port: 3e3
  },
  plugins: [
    react(),
    // removeConsole(),
    qrcode(),
    viteStaticCopy({
      targets: [
        {
          src: "_redirects",
          dest: ""
        }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2Qvd2ViL3JlYWN0L2NlYWNhZGVteS1wYXlwYWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9tbnQvZC93ZWIvcmVhY3QvY2VhY2FkZW15LXBheXBhbC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vbW50L2Qvd2ViL3JlYWN0L2NlYWNhZGVteS1wYXlwYWwvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgcXJjb2RlIH0gZnJvbSAndml0ZS1wbHVnaW4tcXJjb2RlJztcclxuaW1wb3J0IHJlbW92ZUNvbnNvbGUgZnJvbSAndml0ZS1wbHVnaW4tcmVtb3ZlLWNvbnNvbGUnO1xyXG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5JztcclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDAsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgLy8gcmVtb3ZlQ29uc29sZSgpLFxyXG4gICAgcXJjb2RlKCksXHJcbiAgICB2aXRlU3RhdGljQ29weSh7XHJcbiAgICAgIHRhcmdldHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6ICdfcmVkaXJlY3RzJyxcclxuICAgICAgICAgIGRlc3Q6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUixTQUFTLG9CQUFvQjtBQUNsVCxPQUFPLFdBQVc7QUFDbEIsU0FBUyxjQUFjO0FBQ3ZCLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsc0JBQXNCO0FBRS9CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQSxJQUVOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
