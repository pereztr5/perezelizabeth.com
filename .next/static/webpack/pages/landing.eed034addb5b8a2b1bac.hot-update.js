webpackHotUpdate_N_E("pages/landing",{

/***/ "./pages/landing.tsx":
/*!***************************!*\
  !*** ./pages/landing.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Landing; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _components_Member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Member */ \"./components/Member.tsx\");\n/* harmony import */ var _components_Artwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Artwork */ \"./components/Artwork.tsx\");\n/* harmony import */ var _components_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/_data */ \"./components/_data.tsx\");\n/* harmony import */ var _components_artwork_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/_artwork_data */ \"./components/_artwork_data.tsx\");\n\nvar _jsxFileName = \"/Users/tony/projects/github/perezelizabeth.com/pages/landing.tsx\";\n\n\n\n\n\nfunction Landing() {\n  var _this = this;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"VStack\"], {\n    spacing: 4,\n    align: \"stretch\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      as: \"section\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        mx: \"auto\",\n        maxW: {\n          base: 'xl',\n          md: '7xl'\n        },\n        px: {\n          base: '6',\n          md: '8'\n        },\n        py: {\n          base: '12',\n          md: '20'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          textAlign: \"center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n            size: \"3xl\",\n            letterSpacing: \"tight\",\n            mr: \"1\",\n            mb: \"5\",\n            fontWeight: \"extrabold\",\n            children: \"Elizabeth Perez\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n            fontSize: \"xl\",\n            maxW: \"2xl\",\n            mx: \"auto\",\n            children: \"NYC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      children: _components_data__WEBPACK_IMPORTED_MODULE_4__[\"members\"].map(function (member, idx) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Member__WEBPACK_IMPORTED_MODULE_2__[\"Member\"], {\n          role: member.role,\n          image: member.image,\n          name: member.name,\n          twitter: member.twitter,\n          linkedIn: member.linkedin,\n          children: member.description\n        }, idx, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"SimpleGrid\"], {\n        columns: 4,\n        minChildWidth: \"120px\",\n        spacing: \"40\",\n        children: [_components_artwork_data__WEBPACK_IMPORTED_MODULE_5__[\"artworks\"].map(function (item, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Artwork__WEBPACK_IMPORTED_MODULE_3__[\"Artwork\"], {\n            src: item.image,\n            alt: item.description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          bg: \"tomato\",\n          height: \"80px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          bg: \"tomato\",\n          height: \"80px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          bg: \"tomato\",\n          height: \"80px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n_c = Landing;\n\nvar _c;\n\n$RefreshReg$(_c, \"Landing\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFuZGluZy50c3g/ZjljNiJdLCJuYW1lcyI6WyJMYW5kaW5nIiwiYmFzZSIsIm1kIiwibWVtYmVycyIsIm1hcCIsIm1lbWJlciIsImlkeCIsInJvbGUiLCJpbWFnZSIsIm5hbWUiLCJ0d2l0dGVyIiwibGlua2VkaW4iLCJkZXNjcmlwdGlvbiIsImFydHdvcmtzIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2hDLHNCQUNFLHFFQUFDLHVEQUFEO0FBQVEsV0FBTyxFQUFFLENBQWpCO0FBQW9CLFNBQUssRUFBQyxTQUExQjtBQUFBLDRCQUNFLHFFQUFDLG9EQUFEO0FBQUssUUFBRSxFQUFDLFNBQVI7QUFBQSw2QkFDRSxxRUFBQyxvREFBRDtBQUNFLFVBQUUsRUFBQyxNQURMO0FBRUUsWUFBSSxFQUFFO0FBQUVDLGNBQUksRUFBRSxJQUFSO0FBQWNDLFlBQUUsRUFBRTtBQUFsQixTQUZSO0FBR0UsVUFBRSxFQUFFO0FBQUVELGNBQUksRUFBRSxHQUFSO0FBQWFDLFlBQUUsRUFBRTtBQUFqQixTQUhOO0FBSUUsVUFBRSxFQUFFO0FBQUVELGNBQUksRUFBRSxJQUFSO0FBQWNDLFlBQUUsRUFBRTtBQUFsQixTQUpOO0FBQUEsK0JBTUUscUVBQUMsb0RBQUQ7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxrQ0FDRSxxRUFBQyx3REFBRDtBQUNFLGdCQUFJLEVBQUMsS0FEUDtBQUVFLHlCQUFhLEVBQUMsT0FGaEI7QUFHRSxjQUFFLEVBQUMsR0FITDtBQUlFLGNBQUUsRUFBQyxHQUpMO0FBS0Usc0JBQVUsRUFBQyxXQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBVUUscUVBQUMscURBQUQ7QUFBTSxvQkFBUSxFQUFDLElBQWY7QUFBb0IsZ0JBQUksRUFBQyxLQUF6QjtBQUErQixjQUFFLEVBQUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQXdCRSxxRUFBQyxvREFBRDtBQUFBLGdCQUNHQyx3REFBTyxDQUFDQyxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxHQUFUO0FBQUEsNEJBQ1gscUVBQUMseURBQUQ7QUFFRSxjQUFJLEVBQUVELE1BQU0sQ0FBQ0UsSUFGZjtBQUdFLGVBQUssRUFBRUYsTUFBTSxDQUFDRyxLQUhoQjtBQUlFLGNBQUksRUFBRUgsTUFBTSxDQUFDSSxJQUpmO0FBS0UsaUJBQU8sRUFBRUosTUFBTSxDQUFDSyxPQUxsQjtBQU1FLGtCQUFRLEVBQUVMLE1BQU0sQ0FBQ00sUUFObkI7QUFBQSxvQkFRR04sTUFBTSxDQUFDTztBQVJWLFdBQ09OLEdBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJGLGVBc0NFLHFFQUFDLG9EQUFEO0FBQUEsNkJBQ0UscUVBQUMsMkRBQUQ7QUFBWSxlQUFPLEVBQUUsQ0FBckI7QUFBd0IscUJBQWEsRUFBQyxPQUF0QztBQUE4QyxlQUFPLEVBQUMsSUFBdEQ7QUFBQSxtQkFDR08saUVBQVEsQ0FBQ1QsR0FBVCxDQUFhLFVBQUNVLElBQUQsRUFBT0MsS0FBUDtBQUFBLDhCQUNaLHFFQUFDLDJEQUFEO0FBQVMsZUFBRyxFQUFFRCxJQUFJLENBQUNOLEtBQW5CO0FBQTBCLGVBQUcsRUFBRU0sSUFBSSxDQUFDRjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYixDQURILGVBSUUscUVBQUMsb0RBQUQ7QUFBSyxZQUFFLEVBQUMsUUFBUjtBQUFpQixnQkFBTSxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRSxxRUFBQyxvREFBRDtBQUFLLFlBQUUsRUFBQyxRQUFSO0FBQWlCLGdCQUFNLEVBQUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQU1FLHFFQUFDLG9EQUFEO0FBQUssWUFBRSxFQUFDLFFBQVI7QUFBaUIsZ0JBQU0sRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtREQ7S0FwRHVCWixPIiwiZmlsZSI6Ii4vcGFnZXMvbGFuZGluZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgSGVhZGluZyxcbiAgR3JpZCxcbiAgR3JpZEl0ZW0sXG4gIFZTdGFjayxcbiAgRmxleCxcbiAgU2ltcGxlR3JpZCxcbiAgU3BhY2VyLFxuICBUZXh0LFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgTWVtYmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9NZW1iZXInXG5pbXBvcnQgeyBBcnR3b3JrIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BcnR3b3JrJ1xuaW1wb3J0IHsgbWVtYmVycyB9IGZyb20gJy4uL2NvbXBvbmVudHMvX2RhdGEnXG5pbXBvcnQgeyBhcnR3b3JrcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvX2FydHdvcmtfZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZygpIHtcbiAgcmV0dXJuIChcbiAgICA8VlN0YWNrIHNwYWNpbmc9ezR9IGFsaWduPVwic3RyZXRjaFwiPlxuICAgICAgPEJveCBhcz1cInNlY3Rpb25cIj5cbiAgICAgICAgPEJveFxuICAgICAgICAgIG14PVwiYXV0b1wiXG4gICAgICAgICAgbWF4Vz17eyBiYXNlOiAneGwnLCBtZDogJzd4bCcgfX1cbiAgICAgICAgICBweD17eyBiYXNlOiAnNicsIG1kOiAnOCcgfX1cbiAgICAgICAgICBweT17eyBiYXNlOiAnMTInLCBtZDogJzIwJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgICAgIHNpemU9XCIzeGxcIlxuICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwidGlnaHRcIlxuICAgICAgICAgICAgICBtcj1cIjFcIlxuICAgICAgICAgICAgICBtYj1cIjVcIlxuICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiZXh0cmFib2xkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgRWxpemFiZXRoIFBlcmV6XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInhsXCIgbWF4Vz1cIjJ4bFwiIG14PVwiYXV0b1wiPlxuICAgICAgICAgICAgICBOWUNcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3g+XG4gICAgICAgIHttZW1iZXJzLm1hcCgobWVtYmVyLCBpZHgpID0+IChcbiAgICAgICAgICA8TWVtYmVyXG4gICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgIHJvbGU9e21lbWJlci5yb2xlfVxuICAgICAgICAgICAgaW1hZ2U9e21lbWJlci5pbWFnZX1cbiAgICAgICAgICAgIG5hbWU9e21lbWJlci5uYW1lfVxuICAgICAgICAgICAgdHdpdHRlcj17bWVtYmVyLnR3aXR0ZXJ9XG4gICAgICAgICAgICBsaW5rZWRJbj17bWVtYmVyLmxpbmtlZGlufVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW1iZXIuZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9NZW1iZXI+XG4gICAgICAgICkpfVxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94PlxuICAgICAgICA8U2ltcGxlR3JpZCBjb2x1bW5zPXs0fSBtaW5DaGlsZFdpZHRoPVwiMTIwcHhcIiBzcGFjaW5nPVwiNDBcIj5cbiAgICAgICAgICB7YXJ0d29ya3MubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPEFydHdvcmsgc3JjPXtpdGVtLmltYWdlfSBhbHQ9e2l0ZW0uZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPEJveCBiZz1cInRvbWF0b1wiIGhlaWdodD1cIjgwcHhcIj48L0JveD5cbiAgICAgICAgICA8Qm94IGJnPVwidG9tYXRvXCIgaGVpZ2h0PVwiODBweFwiPjwvQm94PlxuICAgICAgICAgIDxCb3ggYmc9XCJ0b21hdG9cIiBoZWlnaHQ9XCI4MHB4XCI+PC9Cb3g+XG4gICAgICAgIDwvU2ltcGxlR3JpZD5cbiAgICAgIDwvQm94PlxuICAgIDwvVlN0YWNrPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/landing.tsx\n");

/***/ })

})