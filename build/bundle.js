/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_Partie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

var partie = new _services_Partie_service__WEBPACK_IMPORTED_MODULE_0__["PartieService"]();
partie.addPlayers();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartieService", function() { return PartieService; });
/* harmony import */ var _models_Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Tour_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _models_Personnage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PartieService = /** @class */ (function () {
    function PartieService(equipeMechants, equipeGentils) {
        var _this = this;
        if (equipeMechants === void 0) { equipeMechants = []; }
        if (equipeGentils === void 0) { equipeGentils = []; }
        this.readLine = function (question) { return __awaiter(_this, void 0, void 0, function () {
            var response, rl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rl = readline__WEBPACK_IMPORTED_MODULE_3___default.a.createInterface({
                            input: process.stdin,
                            output: process.stdout
                        });
                        // je génère la question en asynchrone que je await
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                rl.question(question, function (answer) {
                                    resolve(answer);
                                });
                            }).then(function (onfull) {
                                response = onfull;
                                rl.close();
                            })];
                    case 1:
                        // je génère la question en asynchrone que je await
                        _a.sent();
                        return [2 /*return*/, response];
                }
            });
        }); };
        this.startGame = function () {
            if (_this._equipeGentils.length > 0) {
                console.log("\nEquipe des Gentils :");
                for (var _i = 0, _a = _this._equipeGentils; _i < _a.length; _i++) {
                    var gentil = _a[_i];
                    console.log(gentil.getNom());
                }
                console.log("\nEquipe des M\u00E9chants :");
                for (var _b = 0, _c = _this._equipeMechants; _b < _c.length; _b++) {
                    var mechant = _c[_b];
                    console.log(mechant.getNom());
                }
                _this.initTour();
            }
            else
                console.log("Pas de personnage\nFin de partie");
        };
        this.selectArme = function () { return __awaiter(_this, void 0, void 0, function () {
            var nb, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = Number;
                        return [4 /*yield*/, this.readLine('Quel arme lui attribuer [1 => Hache /2 => Epee]? ')];
                    case 1:
                        nb = _a.apply(void 0, [_b.sent()]);
                        if (nb === 1) {
                            return [2 /*return*/, new _models_Arme__WEBPACK_IMPORTED_MODULE_0__["Hache"]()];
                        }
                        else if (nb === 2) {
                            return [2 /*return*/, new _models_Arme__WEBPACK_IMPORTED_MODULE_0__["Epee"]()];
                        }
                        else
                            this.selectArme();
                        return [2 /*return*/];
                }
            });
        }); };
        this.getName = function (question) { return __awaiter(_this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readLine(question)];
                    case 1:
                        name = _a.sent();
                        return [2 /*return*/, name];
                }
            });
        }); };
        this.addPlayers = function () { return __awaiter(_this, void 0, void 0, function () {
            var test, name_1, arme, player;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readLine('Ajouter un personnage [y/n]? ')];
                    case 1:
                        test = _a.sent();
                        if (test === 'n') {
                            this.startGame();
                        }
                        if (!(test != 'n' && test === 'y')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getName('Quel nom lui donner? ')];
                    case 2:
                        name_1 = _a.sent();
                        return [4 /*yield*/, this.selectArme()];
                    case 3:
                        arme = _a.sent();
                        player = new _models_Personnage__WEBPACK_IMPORTED_MODULE_2__["Gentil"](name_1.toString(), arme);
                        this.addToEquipeGentils(player);
                        this.addPlayers();
                        return [3 /*break*/, 5];
                    case 4:
                        if (test != 'n' && test != 'y')
                            this.addPlayers();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.addToEquipeGentils = function (player) {
            _this._equipeGentils.push(player);
            _this._equipeMechants.push(new _models_Personnage__WEBPACK_IMPORTED_MODULE_2__["Mechant"](new _models_Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"](3, 6, 5)));
        };
        this.getGentilsLengh = function () {
            return _this._equipeGentils.length;
        };
        this.getMechantsLengh = function () {
            return _this._equipeMechants.length;
        };
        this.initTour = function () {
            var tour = new _Tour_service__WEBPACK_IMPORTED_MODULE_1__["TourService"](_this);
        };
        this.getGentilsTab = function () {
            return _this._equipeGentils;
        };
        this.getMechantsTab = function () {
            return _this._equipeMechants;
        };
        this._equipeGentils = equipeGentils;
        this._equipeMechants = equipeMechants;
    }
    return PartieService;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arme", function() { return Arme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hache", function() { return Hache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Epee", function() { return Epee; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Arme = /** @class */ (function () {
    function Arme(minDmg, maxDmg, criticChance) {
        var _this = this;
        /**
        * Get damage by generating random number between interval
        *
        * @return number
        */
        this.getDmg = function () {
            //Random number generation between minDmg and maxDmg
            if (_this.isCriticalHit()) {
                return (_this._maxDmg + 1);
            }
            else
                return (Math.floor(Math.random() * (_this._maxDmg - (_this._minDmg))) + _this._minDmg);
        };
        /**
        * Ask if attack will critical hit
        *
        * @return boolean
        */
        this.isCriticalHit = function () {
            //Random number generation between 0 and 100 
            var nb = Math.floor(Math.random() * 100) - 1;
            //If number generated is lower or equal to criticChance, return true
            if (nb <= _this._criticChance) {
                console.log('Critical Hit!');
                return true;
            }
            //If not, return false
            else
                return false;
        };
        this._minDmg = minDmg;
        this._maxDmg = maxDmg;
        this._criticChance = criticChance;
    }
    return Arme;
}());

var Hache = /** @class */ (function (_super) {
    __extends(Hache, _super);
    function Hache(minDmg, maxDmg, criticChance) {
        if (minDmg === void 0) { minDmg = 4; }
        if (maxDmg === void 0) { maxDmg = 8; }
        if (criticChance === void 0) { criticChance = 10; }
        return _super.call(this, minDmg, maxDmg, criticChance) || this;
    }
    return Hache;
}(Arme));

var Epee = /** @class */ (function (_super) {
    __extends(Epee, _super);
    function Epee(minDmg, maxDmg, criticChance) {
        if (minDmg === void 0) { minDmg = 4; }
        if (maxDmg === void 0) { maxDmg = 10; }
        if (criticChance === void 0) { criticChance = 5; }
        return _super.call(this, minDmg, maxDmg, criticChance) || this;
    }
    return Epee;
}(Arme));



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return TourService; });
var TourService = /** @class */ (function () {
    function TourService(partie) {
        var _this = this;
        this.go = function () {
            console.log('\n---Début de partie---');
            _this.playTour();
            console.log("end");
            // while (this._partie.getGentilsLengh() > 0 || this._partie.getMechantsLengh() > 0) {
            // this.playTour();
            // }
        };
        this.playTour = function () {
            var Gentils = _this._partie.getGentilsTab();
            var Mechants = _this._partie.getMechantsTab();
            _this.rumble(Gentils, Mechants);
        };
        this.rumble = function (Gentils, Mechants) {
            while (Gentils.length > 0 && Mechants.length > 0) {
                console.log(Gentils.length);
                console.log(Mechants.length);
                if (Gentils[0]) {
                    if (Mechants.length > 0) {
                        Gentils[0].attack(Mechants[0]);
                        Mechants[0].attack(Gentils[0]);
                        Gentils = Gentils.splice(0, 1);
                        Mechants = Mechants.splice(0, 1);
                        console.log(Gentils, Mechants);
                    }
                }
            }
        };
        this._partie = partie;
        this._tour = [];
        this.go();
    }
    return TourService;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personnage", function() { return Personnage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gentil", function() { return Gentil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mechant", function() { return Mechant; });
/* harmony import */ var _Arme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _lib_nameGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Personnage = /** @class */ (function () {
    function Personnage(nom, pv, pvMax, defense, arme) {
        var _this = this;
        if (defense === void 0) { defense = 0; }
        this.attack = function (cible) {
            var dmg = _this._arme.getDmg();
            _this._cible = cible;
            if (_this._arme.constructor === _Arme__WEBPACK_IMPORTED_MODULE_0__["Arme"]) {
                console.log(_this._nom + " attaque " + cible.getNom() + "\nMontant des d\u00E9gats : " + dmg);
            }
            else
                console.log(_this._nom + " attaque " + cible.getNom() + " avec " + _this._arme.constructor.name + "\nMontant des d\u00E9gats : " + dmg);
            cible.getAttacked(cible, dmg);
        };
        this.getAttacked = function (cible, dmg) {
            cible._pv -= dmg;
            console.log("Point de vie de " + cible.getNom() + " : " + cible.getPv() + "\n");
        };
        this.isKilled = function () {
            if (_this._pv <= 0) {
                console.log(_this._nom + " a \u00E9t\u00E9 tu\u00E9");
                return true;
            }
            else
                return false;
        };
        //Getters
        /**
        * Get Name
        *
        * @return string
        */
        this.getNom = function () {
            return _this._nom;
        };
        /**
        * Get actual health point
        *
        * @return number
        */
        this.getPv = function () {
            if (_this._pv < 0)
                return 0;
            else
                return _this._pv;
        };
        /**
        * Get max health point
        *
        * @return number
        */
        this.getPvMax = function () {
            return _this._pvMax;
        };
        /**
       * Get defense point
       *
       * @return number
       */
        this.getDefense = function () {
            return _this._defense;
        };
        /**
        *  get arme
        *
        * @return Arme
        */
        this.getArme = function () {
            return _this._arme;
        };
        //Setters
        /**
         * set name
         *
         * @return void
         */
        this.setNom = function (nom) {
            _this._nom = nom;
        };
        /**
         * set actual health point
         *
         * @return void
         */
        this.setPv = function (pv) {
            _this._pvMax = pv;
        };
        /**
        * set max health point
        *
        * @return void
        */
        this.setPvMax = function (pvMax) {
            _this._pvMax = pvMax;
        };
        /**
        * set defense point
        *
        * @return void
        */
        this.setDefense = function (defense) {
            _this._defense = defense;
        };
        /**
        *  Set arme
        *
        * @return void
        */
        this.setArme = function (arme) {
            _this._arme = arme;
        };
        this._nom = nom;
        this._pv = pv;
        this._pvMax = pvMax;
        this._defense = defense;
        this._arme = arme;
        this._cible = this;
    }
    return Personnage;
}());

var Gentil = /** @class */ (function (_super) {
    __extends(Gentil, _super);
    function Gentil(nom, arme) {
        return _super.call(this, nom, 30, 30, 0, arme) || this;
    }
    return Gentil;
}(Personnage));

var Mechant = /** @class */ (function (_super) {
    __extends(Mechant, _super);
    function Mechant(arme) {
        var _this = this;
        var nom = Object(_lib_nameGenerator__WEBPACK_IMPORTED_MODULE_1__["generateName"])();
        _this = _super.call(this, nom, 40, 40, 0, arme) || this;
        return _this;
    }
    return Mechant;
}(Personnage));



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateName", function() { return generateName; });
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function generateName() {
    var name1 = ["Billy", "Bobby", "Kenny", "Helmut", "Chris", "Peter", "Carl"];
    var name2 = ["La Terreur", "Le Guetteur", "La Fouine", "Les Doigts Crochus", "Bottleneck", "Dinguo", "Martinez"];
    var name = capitalizeFirstLetter(name1[getRandomInt(0, name1.length - 1)]) + ' ' + capitalizeFirstLetter(name2[getRandomInt(0, name2.length - 1)]);
    return name;
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9QYXJ0aWUuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL0FybWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1RvdXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1BlcnNvbm5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9uYW1lR2VuZXJhdG9yLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWRsaW5lXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUF5RDtBQUd6RCxJQUFJLE1BQU0sR0FBRyxJQUFJLHNFQUFhLEVBQUUsQ0FBQztBQUVqQyxNQUFN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QVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25KLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7Ozs7Ozs7QUNmRCxxQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBQYXJ0aWVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9QYXJ0aWUuc2VydmljZSdcbmltcG9ydCB7IFRvdXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9Ub3VyLnNlcnZpY2UnO1xuXG5sZXQgcGFydGllID0gbmV3IFBhcnRpZVNlcnZpY2UoKTtcblxucGFydGllLmFkZFBsYXllcnMoKTtcblxuXG4iLCJpbXBvcnQgeyBBcm1lLCBIYWNoZSwgRXBlZSB9IGZyb20gXCIuLi9tb2RlbHMvQXJtZVwiO1xuaW1wb3J0IHsgVG91clNlcnZpY2UgfSBmcm9tICcuL1RvdXIuc2VydmljZSc7XG5pbXBvcnQgeyBQZXJzb25uYWdlLCBHZW50aWwsIE1lY2hhbnQgfSBmcm9tIFwiLi4vbW9kZWxzL1BlcnNvbm5hZ2VcIjtcbmltcG9ydCByZWFkbGluZSBmcm9tICdyZWFkbGluZSdcbmV4cG9ydCBjbGFzcyBQYXJ0aWVTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgX2VxdWlwZUdlbnRpbHM6IFBlcnNvbm5hZ2VbXTtcbiAgICBwcml2YXRlIF9lcXVpcGVNZWNoYW50czogUGVyc29ubmFnZVtdO1xuXG4gICAgY29uc3RydWN0b3IoZXF1aXBlTWVjaGFudHMgPSBbXSwgZXF1aXBlR2VudGlscyA9IFtdKSB7XG4gICAgICAgIHRoaXMuX2VxdWlwZUdlbnRpbHMgPSBlcXVpcGVHZW50aWxzO1xuICAgICAgICB0aGlzLl9lcXVpcGVNZWNoYW50cyA9IGVxdWlwZU1lY2hhbnRzO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVhZExpbmUgPSBhc3luYyAocXVlc3Rpb246IHN0cmluZykgPT4ge1xuICAgICAgICAvLyByw6lwb25zZSBkZSBsYSBxdWVzdGlvblxuICAgICAgICBsZXQgcmVzcG9uc2U7XG5cbiAgICAgICAgLy8gY3LDqWF0aW9uIGRlIGwnb3V0aWwgcG91ciBnw6lyZXIgbGVzIGVudHLDqWVzIGV0IHNvcnRpZXMgY29uc29sZXNcbiAgICAgICAgY29uc3QgcmwgPSByZWFkbGluZS5jcmVhdGVJbnRlcmZhY2Uoe1xuICAgICAgICAgICAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXG4gICAgICAgICAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gamUgZ8OpbsOocmUgbGEgcXVlc3Rpb24gZW4gYXN5bmNocm9uZSBxdWUgamUgYXdhaXRcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmwucXVlc3Rpb24ocXVlc3Rpb24sIChhbnN3ZXI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoYW5zd2VyKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkudGhlbihvbmZ1bGwgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBvbmZ1bGw7XG4gICAgICAgICAgICBybC5jbG9zZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhcnRHYW1lID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZXF1aXBlR2VudGlscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgXFxuRXF1aXBlIGRlcyBHZW50aWxzIDpgKTtcbiAgICAgICAgICAgIGZvciAobGV0IGdlbnRpbCBvZiB0aGlzLl9lcXVpcGVHZW50aWxzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ2VudGlsLmdldE5vbSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBcXG5FcXVpcGUgZGVzIE3DqWNoYW50cyA6YCk7XG4gICAgICAgICAgICBmb3IgKGxldCBtZWNoYW50IG9mIHRoaXMuX2VxdWlwZU1lY2hhbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVjaGFudC5nZXROb20oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRUb3VyKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXMgZGUgcGVyc29ubmFnZVxcbkZpbiBkZSBwYXJ0aWVcIik7XG4gICAgfVxuXG4gICAgcHVibGljIHNlbGVjdEFybWUgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBuYiA9IE51bWJlcihhd2FpdCB0aGlzLnJlYWRMaW5lKCdRdWVsIGFybWUgbHVpIGF0dHJpYnVlciBbMSA9PiBIYWNoZSAvMiA9PiBFcGVlXT8gJykpO1xuICAgICAgICBpZiAobmIgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgSGFjaGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuYiA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcGVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB0aGlzLnNlbGVjdEFybWUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TmFtZSA9IGFzeW5jIChxdWVzdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICAgIGxldCBuYW1lID0gYXdhaXQgdGhpcy5yZWFkTGluZShxdWVzdGlvbik7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAvL1ZlcmlmIG5vbSBlbiBkb3VibGVcbiAgICAgICAgLy9JZiBuYW1lIGFscmVhZHkgZXhpc3RcbiAgICAgICAgLy90aGlzLmdldE5hbWUoJ05vbSBkw6lqw6AgdXRpbGlzw6knKTtcbiAgICAgICAgLy9lbHNlXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGxheWVycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IHRlc3Q6IGFueSA9IGF3YWl0IHRoaXMucmVhZExpbmUoJ0Fqb3V0ZXIgdW4gcGVyc29ubmFnZSBbeS9uXT8gJyk7XG4gICAgICAgIGlmICh0ZXN0ID09PSAnbicpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRlc3QgIT0gJ24nICYmIHRlc3QgPT09ICd5Jykge1xuICAgICAgICAgICAgbGV0IG5hbWU6IGFueSA9IGF3YWl0IHRoaXMuZ2V0TmFtZSgnUXVlbCBub20gbHVpIGRvbm5lcj8gJyk7XG4gICAgICAgICAgICBsZXQgYXJtZTogQXJtZSA9IGF3YWl0IHRoaXMuc2VsZWN0QXJtZSgpIGFzIEFybWU7XG4gICAgICAgICAgICBsZXQgcGxheWVyOiBHZW50aWwgPSBuZXcgR2VudGlsKG5hbWUudG9TdHJpbmcoKSwgYXJtZSk7XG4gICAgICAgICAgICB0aGlzLmFkZFRvRXF1aXBlR2VudGlscyhwbGF5ZXIpO1xuICAgICAgICAgICAgdGhpcy5hZGRQbGF5ZXJzKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGVzdCAhPSAnbicgJiYgdGVzdCAhPSAneScpXG4gICAgICAgICAgICB0aGlzLmFkZFBsYXllcnMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFRvRXF1aXBlR2VudGlscyA9IChwbGF5ZXI6IFBlcnNvbm5hZ2UpID0+IHtcbiAgICAgICAgdGhpcy5fZXF1aXBlR2VudGlscy5wdXNoKHBsYXllcik7XG4gICAgICAgIHRoaXMuX2VxdWlwZU1lY2hhbnRzLnB1c2gobmV3IE1lY2hhbnQobmV3IEFybWUoMywgNiwgNSkpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0R2VudGlsc0xlbmdoID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBlR2VudGlscy5sZW5ndGhcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWVjaGFudHNMZW5naCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VxdWlwZU1lY2hhbnRzLmxlbmd0aFxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFRvdXIgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0b3VyID0gbmV3IFRvdXJTZXJ2aWNlKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHZW50aWxzVGFiID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBlR2VudGlscztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TWVjaGFudHNUYWIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lcXVpcGVNZWNoYW50cztcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEFybWUge1xuICAgIHByaXZhdGUgX21pbkRtZzogbnVtYmVyO1xuICAgIHByaXZhdGUgX21heERtZzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NyaXRpY0NoYW5jZTogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IobWluRG1nOiBudW1iZXIsIG1heERtZzogbnVtYmVyLCBjcml0aWNDaGFuY2U6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9taW5EbWcgPSBtaW5EbWc7XG4gICAgICAgIHRoaXMuX21heERtZyA9IG1heERtZztcbiAgICAgICAgdGhpcy5fY3JpdGljQ2hhbmNlID0gY3JpdGljQ2hhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0IGRhbWFnZSBieSBnZW5lcmF0aW5nIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBpbnRlcnZhbFxuICAgICogXG4gICAgKiBAcmV0dXJuIG51bWJlclxuICAgICovXG4gICAgcHVibGljIGdldERtZyA9ICgpID0+IHtcbiAgICAgICAgLy9SYW5kb20gbnVtYmVyIGdlbmVyYXRpb24gYmV0d2VlbiBtaW5EbWcgYW5kIG1heERtZ1xuICAgICAgICBpZiAodGhpcy5pc0NyaXRpY2FsSGl0KCkpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fbWF4RG1nICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy5fbWF4RG1nIC0gKHRoaXMuX21pbkRtZykpKSArIHRoaXMuX21pbkRtZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBc2sgaWYgYXR0YWNrIHdpbGwgY3JpdGljYWwgaGl0XG4gICAgKiBcbiAgICAqIEByZXR1cm4gYm9vbGVhblxuICAgICovXG4gICAgcHJpdmF0ZSBpc0NyaXRpY2FsSGl0ID0gKCkgPT4ge1xuICAgICAgICAvL1JhbmRvbSBudW1iZXIgZ2VuZXJhdGlvbiBiZXR3ZWVuIDAgYW5kIDEwMCBcbiAgICAgICAgbGV0IG5iOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApIC0gMTtcbiAgICAgICAgLy9JZiBudW1iZXIgZ2VuZXJhdGVkIGlzIGxvd2VyIG9yIGVxdWFsIHRvIGNyaXRpY0NoYW5jZSwgcmV0dXJuIHRydWVcbiAgICAgICAgaWYgKG5iIDw9IHRoaXMuX2NyaXRpY0NoYW5jZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0NyaXRpY2FsIEhpdCEnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vSWYgbm90LCByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgSGFjaGUgZXh0ZW5kcyBBcm1lIHtcbiAgICBjb25zdHJ1Y3RvcihtaW5EbWcgPSA0LCBtYXhEbWcgPSA4LCBjcml0aWNDaGFuY2UgPSAxMCkge1xuICAgICAgICBzdXBlcihtaW5EbWcsIG1heERtZywgY3JpdGljQ2hhbmNlKVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFcGVlIGV4dGVuZHMgQXJtZSB7XG4gICAgY29uc3RydWN0b3IobWluRG1nID0gNCwgbWF4RG1nID0gMTAsIGNyaXRpY0NoYW5jZSA9IDUpIHtcbiAgICAgICAgc3VwZXIobWluRG1nLCBtYXhEbWcsIGNyaXRpY0NoYW5jZSlcbiAgICB9XG59IiwiaW1wb3J0IHsgUGFydGllU2VydmljZSB9IGZyb20gXCIuL1BhcnRpZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQZXJzb25uYWdlIH0gZnJvbSBcIi4uL21vZGVscy9QZXJzb25uYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3VyU2VydmljZSB7XG5cblxuICAgIHByaXZhdGUgX3BhcnRpZTogUGFydGllU2VydmljZTtcbiAgICBwcml2YXRlIF90b3VyOiBzdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBhcnRpZTogUGFydGllU2VydmljZSkge1xuICAgICAgICB0aGlzLl9wYXJ0aWUgPSBwYXJ0aWU7XG4gICAgICAgIHRoaXMuX3RvdXIgPSBbXTtcbiAgICAgICAgdGhpcy5nbygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ28gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdcXG4tLS1Ew6lidXQgZGUgcGFydGllLS0tJyk7XG4gICAgICAgIHRoaXMucGxheVRvdXIoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJlbmRcIik7XG4gICAgICAgIC8vIHdoaWxlICh0aGlzLl9wYXJ0aWUuZ2V0R2VudGlsc0xlbmdoKCkgPiAwIHx8IHRoaXMuX3BhcnRpZS5nZXRNZWNoYW50c0xlbmdoKCkgPiAwKSB7XG4gICAgICAgIC8vIHRoaXMucGxheVRvdXIoKTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICBwcml2YXRlIHBsYXlUb3VyID0gKCkgPT4ge1xuICAgICAgICBsZXQgR2VudGlsczogUGVyc29ubmFnZVtdID0gdGhpcy5fcGFydGllLmdldEdlbnRpbHNUYWIoKTtcbiAgICAgICAgbGV0IE1lY2hhbnRzOiBQZXJzb25uYWdlW10gPSB0aGlzLl9wYXJ0aWUuZ2V0TWVjaGFudHNUYWIoKTtcbiAgICAgICAgdGhpcy5ydW1ibGUoR2VudGlscywgTWVjaGFudHMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcnVtYmxlID0gKEdlbnRpbHM6IFBlcnNvbm5hZ2VbXSwgTWVjaGFudHM6IFBlcnNvbm5hZ2VbXSkgPT4ge1xuICAgICAgICB3aGlsZSAoR2VudGlscy5sZW5ndGggPiAwICYmIE1lY2hhbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEdlbnRpbHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKE1lY2hhbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoR2VudGlsc1swXSkge1xuICAgICAgICAgICAgICAgIGlmIChNZWNoYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIEdlbnRpbHNbMF0uYXR0YWNrKE1lY2hhbnRzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgTWVjaGFudHNbMF0uYXR0YWNrKEdlbnRpbHNbMF0pO1xuICAgICAgICAgICAgICAgICAgICBHZW50aWxzID0gR2VudGlscy5zcGxpY2UoMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIE1lY2hhbnRzID0gTWVjaGFudHMuc3BsaWNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhHZW50aWxzLCBNZWNoYW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEFybWUsIEhhY2hlLCBFcGVlIH0gZnJvbSBcIi4vQXJtZVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVOYW1lIH0gZnJvbSAnLi4vbGliL25hbWVHZW5lcmF0b3InXG5leHBvcnQgY2xhc3MgUGVyc29ubmFnZSB7XG5cbiAgICBwcml2YXRlIF9ub206IHN0cmluZztcbiAgICBwcml2YXRlIF9wdjogbnVtYmVyO1xuICAgIHByaXZhdGUgX3B2TWF4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfZGVmZW5zZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2FybWU6IEFybWU7XG4gICAgcHJpdmF0ZSBfY2libGU6IFBlcnNvbm5hZ2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihub206IGFueSwgcHY6IG51bWJlciwgcHZNYXg6IG51bWJlciwgZGVmZW5zZSA9IDAsIGFybWU6IEFybWUpIHtcbiAgICAgICAgdGhpcy5fbm9tID0gbm9tO1xuICAgICAgICB0aGlzLl9wdiA9IHB2O1xuICAgICAgICB0aGlzLl9wdk1heCA9IHB2TWF4O1xuICAgICAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcbiAgICAgICAgdGhpcy5fYXJtZSA9IGFybWU7XG4gICAgICAgIHRoaXMuX2NpYmxlID0gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXR0YWNrID0gKGNpYmxlOiBQZXJzb25uYWdlKSA9PiB7XG4gICAgICAgIGxldCBkbWcgPSB0aGlzLl9hcm1lLmdldERtZygpO1xuICAgICAgICB0aGlzLl9jaWJsZSA9IGNpYmxlO1xuICAgICAgICBpZiAodGhpcy5fYXJtZS5jb25zdHJ1Y3RvciA9PT0gQXJtZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fbm9tfSBhdHRhcXVlICR7Y2libGUuZ2V0Tm9tKCl9XFxuTW9udGFudCBkZXMgZMOpZ2F0cyA6ICR7ZG1nfWApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuX25vbX0gYXR0YXF1ZSAke2NpYmxlLmdldE5vbSgpfSBhdmVjICR7dGhpcy5fYXJtZS5jb25zdHJ1Y3Rvci5uYW1lfVxcbk1vbnRhbnQgZGVzIGTDqWdhdHMgOiAke2RtZ31gKTtcblxuICAgICAgICBjaWJsZS5nZXRBdHRhY2tlZChjaWJsZSwgZG1nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXR0YWNrZWQgPSAoY2libGU6IFBlcnNvbm5hZ2UsIGRtZzogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNpYmxlLl9wdiAtPSBkbWc7XG4gICAgICAgIGNvbnNvbGUubG9nKGBQb2ludCBkZSB2aWUgZGUgJHtjaWJsZS5nZXROb20oKX0gOiAke2NpYmxlLmdldFB2KCl9XFxuYCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzS2lsbGVkID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHYgPD0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5fbm9tfSBhIMOpdMOpIHR1w6lgKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvL0dldHRlcnNcblxuICAgIC8qKlxuICAgICogR2V0IE5hbWVcbiAgICAqIFxuICAgICogQHJldHVybiBzdHJpbmdcbiAgICAqL1xuICAgIHB1YmxpYyBnZXROb20gPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ub207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXQgYWN0dWFsIGhlYWx0aCBwb2ludFxuICAgICogXG4gICAgKiBAcmV0dXJuIG51bWJlclxuICAgICovXG4gICAgcHVibGljIGdldFB2ID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fcHYgPCAwKVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldCBtYXggaGVhbHRoIHBvaW50XG4gICAgKiBcbiAgICAqIEByZXR1cm4gbnVtYmVyXG4gICAgKi9cbiAgICBwdWJsaWMgZ2V0UHZNYXggPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdk1heDtcbiAgICB9XG5cbiAgICAvKipcbiAgICogR2V0IGRlZmVuc2UgcG9pbnRcbiAgICogXG4gICAqIEByZXR1cm4gbnVtYmVyXG4gICAqL1xuICAgIHB1YmxpYyBnZXREZWZlbnNlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVmZW5zZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqICBnZXQgYXJtZVxuICAgICogXG4gICAgKiBAcmV0dXJuIEFybWVcbiAgICAqL1xuICAgIHB1YmxpYyBnZXRBcm1lID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYXJtZTtcbiAgICB9XG5cbiAgICAvL1NldHRlcnNcblxuICAgIC8qKlxuICAgICAqIHNldCBuYW1lXG4gICAgICogXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgcHVibGljIHNldE5vbSA9IChub206IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9ub20gPSBub207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2V0IGFjdHVhbCBoZWFsdGggcG9pbnRcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UHYgPSAocHY6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9wdk1heCA9IHB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc2V0IG1heCBoZWFsdGggcG9pbnRcbiAgICAqIFxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0UHZNYXggPSAocHZNYXg6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLl9wdk1heCA9IHB2TWF4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICogc2V0IGRlZmVuc2UgcG9pbnRcbiAgICAqIFxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0RGVmZW5zZSA9IChkZWZlbnNlOiBudW1iZXIpID0+IHtcbiAgICAgICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiAgU2V0IGFybWVcbiAgICAqIFxuICAgICogQHJldHVybiB2b2lkXG4gICAgKi9cbiAgICBwdWJsaWMgc2V0QXJtZSA9IChhcm1lOiBBcm1lKSA9PiB7XG4gICAgICAgIHRoaXMuX2FybWUgPSBhcm1lO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgR2VudGlsIGV4dGVuZHMgUGVyc29ubmFnZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZywgYXJtZTogQXJtZSkge1xuICAgICAgICBzdXBlcihub20sIDMwLCAzMCwgMCwgYXJtZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWVjaGFudCBleHRlbmRzIFBlcnNvbm5hZ2Uge1xuXG4gICAgY29uc3RydWN0b3IoYXJtZTogQXJtZSlcbiAgICB7XG4gICAgICAgIGxldCBub20gPSBnZW5lcmF0ZU5hbWUoKTtcbiAgICAgICAgc3VwZXIobm9tLCA0MCwgNDAsIDAsIGFybWUpO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZzogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOYW1lKCkge1xuICAgIHZhciBuYW1lMSA9IFtcIkJpbGx5XCIsIFwiQm9iYnlcIiwgXCJLZW5ueVwiLCBcIkhlbG11dFwiLCBcIkNocmlzXCIsIFwiUGV0ZXJcIiwgXCJDYXJsXCJdO1xuXG4gICAgdmFyIG5hbWUyID0gW1wiTGEgVGVycmV1clwiLCBcIkxlIEd1ZXR0ZXVyXCIsIFwiTGEgRm91aW5lXCIsIFwiTGVzIERvaWd0cyBDcm9jaHVzXCIsIFwiQm90dGxlbmVja1wiLCBcIkRpbmd1b1wiLCBcIk1hcnRpbmV6XCJdO1xuXG4gICAgdmFyIG5hbWUgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIobmFtZTFbZ2V0UmFuZG9tSW50KDAsIG5hbWUxLmxlbmd0aCAtIDEpXSkgKyAnICcgKyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIobmFtZTJbZ2V0UmFuZG9tSW50KDAsIG5hbWUyLmxlbmd0aCAtIDEpXSk7XG4gICAgcmV0dXJuIG5hbWU7XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==