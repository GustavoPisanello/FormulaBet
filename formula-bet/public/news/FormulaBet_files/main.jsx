import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=87cb8a98"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=87cb8a98"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=87cb8a98"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import App from "/src/App.jsx?t=1727105811601";
import "/src/index.css?t=1727105882707";
import { RouterProvider, createBrowserRouter } from "/node_modules/.vite/deps/react-router-dom.js?v=87cb8a98";
import Home from "/src/pages/Home.jsx?t=1727105811601";
import Bet from "/src/pages/Bet.jsx";
import Pilots from "/src/pages/Pilots.jsx";
import News from "/src/pages/News.jsx";
import SingleNews from "/src/pages/SingleNews.jsx";
import Authenticate from "/src/Authenticate.jsx?t=1727098087323";
import Login from "/src/pages/Login.jsx?t=1727105136276";
import Register from "/src/pages/Register.jsx";
const router = createBrowserRouter(
  [
    {
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
        lineNumber: 17,
        columnNumber: 12
      }, this),
      path: "/",
      children: [
        { index: true, element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
          fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
          lineNumber: 20,
          columnNumber: 27
        }, this) },
        { path: "/Race", element: /* @__PURE__ */ jsxDEV(Bet, {}, void 0, false, {
          fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
          lineNumber: 21,
          columnNumber: 29
        }, this) },
        { path: "/Pilots", element: /* @__PURE__ */ jsxDEV(Pilots, {}, void 0, false, {
          fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
          lineNumber: 22,
          columnNumber: 31
        }, this) },
        { path: "/News", element: /* @__PURE__ */ jsxDEV(News, {}, void 0, false, {
          fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
          lineNumber: 23,
          columnNumber: 29
        }, this) },
        { path: "/News/:id", element: /* @__PURE__ */ jsxDEV(SingleNews, {}, void 0, false, {
          fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
          lineNumber: 24,
          columnNumber: 33
        }, this) }
      ]
    },
    {
      element: /* @__PURE__ */ jsxDEV(Authenticate, {}, void 0, false, {
        fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
        lineNumber: 28,
        columnNumber: 12
      }, this),
      path: "/authenticate",
      children: [
        {
          path: "/Login",
          element: /* @__PURE__ */ jsxDEV(Login, {}, void 0, false, {
            fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
            lineNumber: 32,
            columnNumber: 30
          }, this),
          path: "/Register",
          element: /* @__PURE__ */ jsxDEV(Register, {}, void 0, false, {
            fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
            lineNumber: 33,
            columnNumber: 33
          }, this)
        }
      ]
    }
  ]
);
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
    fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "C:/Users/gusta/Desktop/WebSite/formula-bet/src/main.jsx",
    lineNumber: 40,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBZ0JhO0FBaEJiLFNBQVNBLGtCQUFrQjtBQUMzQixTQUFTQyxrQkFBa0I7QUFDM0IsT0FBT0MsU0FBUztBQUNoQixPQUFPO0FBQ1AsU0FBU0MsZ0JBQWdCQywyQkFBMkI7QUFDcEQsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxTQUFTO0FBQ2hCLE9BQU9DLFlBQVk7QUFDbkIsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxnQkFBZ0I7QUFDdkIsT0FBT0Msa0JBQWtCO0FBQ3pCLE9BQU9DLFdBQVc7QUFDbEIsT0FBT0MsY0FBYztBQUVyQixNQUFNQyxTQUFTVDtBQUFBQSxFQUFvQjtBQUFBLElBQ2pDO0FBQUEsTUFDRVUsU0FBUyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSTtBQUFBLE1BQ2JDLE1BQU07QUFBQSxNQUNOQyxVQUFVO0FBQUEsUUFDUixFQUFDQyxPQUFPLE1BQU1ILFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUssRUFBRztBQUFBLFFBQy9CLEVBQUNDLE1BQU0sU0FBU0QsU0FBUyx1QkFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSSxFQUFFO0FBQUEsUUFDL0IsRUFBQ0MsTUFBTSxXQUFXRCxTQUFTLHVCQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFPLEVBQUU7QUFBQSxRQUNwQyxFQUFDQyxNQUFNLFNBQVNELFNBQVMsdUJBQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUssRUFBRTtBQUFBLFFBQ2hDLEVBQUNDLE1BQU0sYUFBYUQsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVcsRUFBRTtBQUFBLE1BQUM7QUFBQSxJQUUvQztBQUFBLElBQ0E7QUFBQSxNQUNFQSxTQUFTLHVCQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBYTtBQUFBLE1BQ3RCQyxNQUFNO0FBQUEsTUFDTkMsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFRCxNQUFNO0FBQUEsVUFBVUQsU0FBUyx1QkFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQU07QUFBQSxVQUMvQkMsTUFBTTtBQUFBLFVBQWFELFNBQVMsdUJBQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFTO0FBQUEsUUFDdkM7QUFBQSxNQUFDO0FBQUEsSUFFTDtBQUFBLEVBQUM7QUFDRjtBQUVEYixXQUFXaUIsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDMUMsdUJBQUMsY0FDQyxpQ0FBQyxrQkFBZSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWlDLEtBRG5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUNGIiwibmFtZXMiOlsiU3RyaWN0TW9kZSIsImNyZWF0ZVJvb3QiLCJBcHAiLCJSb3V0ZXJQcm92aWRlciIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJIb21lIiwiQmV0IiwiUGlsb3RzIiwiTmV3cyIsIlNpbmdsZU5ld3MiLCJBdXRoZW50aWNhdGUiLCJMb2dpbiIsIlJlZ2lzdGVyIiwicm91dGVyIiwiZWxlbWVudCIsInBhdGgiLCJjaGlsZHJlbiIsImluZGV4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50J1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLmpzeCdcclxuaW1wb3J0ICcuL2luZGV4LmNzcydcclxuaW1wb3J0IHsgUm91dGVyUHJvdmlkZXIsIGNyZWF0ZUJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUuanN4J1xyXG5pbXBvcnQgQmV0IGZyb20gJy4vcGFnZXMvQmV0LmpzeCdcclxuaW1wb3J0IFBpbG90cyBmcm9tICcuL3BhZ2VzL1BpbG90cy5qc3gnXHJcbmltcG9ydCBOZXdzIGZyb20gJy4vcGFnZXMvTmV3cy5qc3gnXHJcbmltcG9ydCBTaW5nbGVOZXdzIGZyb20gJy4vcGFnZXMvU2luZ2xlTmV3cy5qc3gnXHJcbmltcG9ydCBBdXRoZW50aWNhdGUgZnJvbSAnLi9BdXRoZW50aWNhdGUuanN4J1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9wYWdlcy9Mb2dpbi5qc3gnXHJcbmltcG9ydCBSZWdpc3RlciBmcm9tICcuL3BhZ2VzL1JlZ2lzdGVyLmpzeCdcclxuXHJcbmNvbnN0IHJvdXRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xyXG4gIHtcclxuICAgIGVsZW1lbnQ6IDxBcHAgLz4sXHJcbiAgICBwYXRoOiBcIi9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtpbmRleDogdHJ1ZSwgZWxlbWVudDogPEhvbWUgLz59LFxyXG4gICAgICB7cGF0aDogXCIvUmFjZVwiLCBlbGVtZW50OiA8QmV0Lz59LFxyXG4gICAgICB7cGF0aDogXCIvUGlsb3RzXCIsIGVsZW1lbnQ6IDxQaWxvdHMvPn0sXHJcbiAgICAgIHtwYXRoOiBcIi9OZXdzXCIsIGVsZW1lbnQ6IDxOZXdzLz59LFxyXG4gICAgICB7cGF0aDogXCIvTmV3cy86aWRcIiwgZWxlbWVudDogPFNpbmdsZU5ld3MvPn1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGVsZW1lbnQ6IDxBdXRoZW50aWNhdGUgLz4sXHJcbiAgICBwYXRoOiBcIi9hdXRoZW50aWNhdGVcIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9Mb2dpblwiLCBlbGVtZW50OiA8TG9naW4gLz4sXHJcbiAgICAgICAgcGF0aDogXCIvUmVnaXN0ZXJcIiwgZWxlbWVudDogPFJlZ2lzdGVyLz5cclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXSlcclxuXHJcbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSkucmVuZGVyKFxyXG4gIDxTdHJpY3RNb2RlPlxyXG4gICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlciA9IHtyb3V0ZXJ9Lz5cclxuICA8L1N0cmljdE1vZGU+LFxyXG4pXHJcbiJdLCJmaWxlIjoiQzovVXNlcnMvZ3VzdGEvRGVza3RvcC9XZWJTaXRlL2Zvcm11bGEtYmV0L3NyYy9tYWluLmpzeCJ9