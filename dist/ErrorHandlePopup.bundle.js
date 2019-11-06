(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ErrorHandlePopup"],{

/***/ "./src/ErrorHandlerPopup/ErrorHandlerPopup.js":
/*!****************************************************!*\
  !*** ./src/ErrorHandlerPopup/ErrorHandlerPopup.js ***!
  \****************************************************/
/*! exports provided: ErrorHandlePopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlePopup", function() { return ErrorHandlePopup; });
/* harmony import */ var _utils_createTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createTag.js */ "./src/utils/createTag.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/ErrorHandlerPopup/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ErrorHandlePopup =
/*#__PURE__*/
function () {
  function ErrorHandlePopup() {
    _classCallCheck(this, ErrorHandlePopup);

    if (typeof ErrorHandlePopup.instance === 'undefined') {
      ErrorHandlePopup.instance = this;
    }

    return ErrorHandlePopup.instance;
  }

  _createClass(ErrorHandlePopup, [{
    key: "errorMessage",
    value: function errorMessage(message) {
      if (!document.querySelector('.error-message')) {
        this.popup = Object(_utils_createTag_js__WEBPACK_IMPORTED_MODULE_0__["createTag"])('div', 'error-message');
        document.body.appendChild(this.popup);
        this.popup.setAttribute("id", "error-message");
        this.addCancelEventListener(this.popup);
      }

      this.popup.innerHTML = "".concat(message);
    }
  }, {
    key: "addCancelEventListener",
    value: function addCancelEventListener(element) {
      element.addEventListener("click", function (event) {
        var targetID = event.target.id;

        if (targetID === "error-message") {
          element.remove();
        }
      });
    }
  }]);

  return ErrorHandlePopup;
}();

/***/ }),

/***/ "./src/ErrorHandlerPopup/style.css":
/*!*****************************************!*\
  !*** ./src/ErrorHandlerPopup/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRXJyb3JIYW5kbGVyUG9wdXAvRXJyb3JIYW5kbGVyUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9ySGFuZGxlclBvcHVwL3N0eWxlLmNzcz9iNDRlIl0sIm5hbWVzIjpbIkVycm9ySGFuZGxlUG9wdXAiLCJpbnN0YW5jZSIsIm1lc3NhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cCIsImNyZWF0ZVRhZyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsImFkZENhbmNlbEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwidGFyZ2V0SUQiLCJ0YXJnZXQiLCJpZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGdCQUFiO0FBQUE7QUFBQTtBQUNJLDhCQUFjO0FBQUE7O0FBQ1YsUUFBSSxPQUFPQSxnQkFBZ0IsQ0FBQ0MsUUFBeEIsS0FBcUMsV0FBekMsRUFBc0Q7QUFDbERELHNCQUFnQixDQUFDQyxRQUFqQixHQUE0QixJQUE1QjtBQUNIOztBQUNELFdBQU9ELGdCQUFnQixDQUFDQyxRQUF4QjtBQUNIOztBQU5MO0FBQUE7QUFBQSxpQ0FRaUJDLE9BUmpCLEVBUTBCO0FBQ2xCLFVBQUksQ0FBQ0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFMLEVBQStDO0FBQzNDLGFBQUtDLEtBQUwsR0FBYUMscUVBQVMsQ0FBQyxLQUFELEVBQVEsZUFBUixDQUF0QjtBQUNBSCxnQkFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEIsS0FBS0gsS0FBL0I7QUFDQSxhQUFLQSxLQUFMLENBQVdJLFlBQVgsQ0FBd0IsSUFBeEIsRUFBOEIsZUFBOUI7QUFDQSxhQUFLQyxzQkFBTCxDQUE0QixLQUFLTCxLQUFqQztBQUNIOztBQUNJLFdBQUtBLEtBQUwsQ0FBV00sU0FBWCxhQUEwQlQsT0FBMUI7QUFFUjtBQWpCTDtBQUFBO0FBQUEsMkNBbUIyQlUsT0FuQjNCLEVBbUJvQztBQUM1QkEsYUFBTyxDQUFDQyxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFDQyxLQUFELEVBQVc7QUFDekMsWUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsRUFBOUI7O0FBQ0EsWUFBSUYsUUFBUSxLQUFLLGVBQWpCLEVBQWtDO0FBQzlCSCxpQkFBTyxDQUFDTSxNQUFSO0FBQ0g7QUFDSixPQUxEO0FBTUg7QUExQkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7OztBQ0hBLHVDIiwiZmlsZSI6IkVycm9ySGFuZGxlUG9wdXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGFnIH0gZnJvbSAnLi4vdXRpbHMvY3JlYXRlVGFnLmpzJztcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmV4cG9ydCBjbGFzcyBFcnJvckhhbmRsZVBvcHVwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBFcnJvckhhbmRsZVBvcHVwLmluc3RhbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgRXJyb3JIYW5kbGVQb3B1cC5pbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVycm9ySGFuZGxlUG9wdXAuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpKSB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwID0gY3JlYXRlVGFnKCdkaXYnLCAnZXJyb3ItbWVzc2FnZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlcnJvci1tZXNzYWdlXCIpO1xuICAgICAgICAgICAgdGhpcy5hZGRDYW5jZWxFdmVudExpc3RlbmVyKHRoaXMucG9wdXApO1xuICAgICAgICB9XG4gICAgICAgICAgICAgdGhpcy5wb3B1cC5pbm5lckhUTUwgPSBgJHttZXNzYWdlfWA7XG5cbiAgICB9XG5cbiAgICBhZGRDYW5jZWxFdmVudExpc3RlbmVyKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgICAgICAgIGlmICh0YXJnZXRJRCA9PT0gXCJlcnJvci1tZXNzYWdlXCIpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=