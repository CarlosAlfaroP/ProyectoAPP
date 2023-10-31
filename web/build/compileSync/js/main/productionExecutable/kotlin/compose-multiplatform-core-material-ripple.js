(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-animation-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-animation-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material-ripple'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-material-ripple'.");
    }
    root['compose-multiplatform-core-material-ripple'] = factory(typeof this['compose-multiplatform-core-material-ripple'] === 'undefined' ? {} : this['compose-multiplatform-core-material-ripple'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-animation-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_animation_animation_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.f7;
  var classMeta = kotlin_kotlin.$_$.g6;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var isObject = kotlin_kotlin.$_$.x6;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var equals = kotlin_kotlin.$_$.j6;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var hashCode = kotlin_kotlin.$_$.r6;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Ripple, 'Ripple', classMeta);
  setMetadataFor(CommonRipple, 'CommonRipple', classMeta, Ripple);
  setMetadataFor(DebugRippleTheme, 'DebugRippleTheme', objectMeta);
  setMetadataFor(RippleAlpha, 'RippleAlpha', classMeta);
  //endregion
  function CommonRipple(bounded, radius, color) {
    Ripple.call(this, bounded, radius, color);
  }
  var DefaultTweenSpec;
  function rememberRipple$composable(bounded, radius, color, $composer, $changed, $default) {
    _init_properties_Ripple_kt__d55ieo();
    var bounded_0 = {_v: bounded};
    var radius_0 = {_v: new Dp(radius)};
    var color_0 = color;
    var $composer_0 = $composer;
    $composer_0.yy(821185160);
    sourceInformation($composer_0, 'C(rememberRipple$composable)P(!1,2:c#ui.unit.Dp,1:c#ui.graphics.Color)81@3890L27,82@3929L85:Ripple.kt#vhb33q');
    if (!(($default & 1) === 0)) {
      bounded_0._v = true;
    }
    if (!(($default & 2) === 0)) {
      radius_0._v = new Dp(Companion_getInstance().u23_1);
    }
    if (!(($default & 4) === 0))
      color_0 = Companion_getInstance_0().f2t_1;
    if (isTraceInProgress()) {
      traceEventStart(821185160, $changed, -1, 'androidx.compose.material.ripple.rememberRipple$composable (Ripple.kt:76)');
    }
    var colorState = rememberUpdatedState$composable(new Color(color_0), $composer_0, 14 & $changed >> 6);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var tmp0_remember$composable = bounded_0._v;
    var tmp1_remember$composable = radius_0._v.v23_1;
    var $composer_1 = $composer_0;
    $composer_1.yy(-1124426577);
    sourceInformation($composer_1, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_1.pz(tmp0_remember$composable) | $composer_1.pz(new Dp(tmp1_remember$composable)));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_1().sy_1) {
      // Inline function 'androidx.compose.material.ripple.rememberRipple$composable.<anonymous>' call
      var value = new CommonRipple(bounded_0._v, radius_0._v.v23_1, colorState);
      $composer_1.oz(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.zy();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
    return tmp0;
  }
  function Ripple(bounded, radius, color) {
    this.l6p_1 = bounded;
    this.m6p_1 = radius;
    this.n6p_1 = color;
  }
  protoOf(Ripple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Ripple))
      return false;
    if (!(this.l6p_1 === other.l6p_1))
      return false;
    if (!equals(this.m6p_1, other.m6p_1))
      return false;
    if (!equals(this.n6p_1, other.n6p_1))
      return false;
    return true;
  };
  protoOf(Ripple).hashCode = function () {
    var result = this.l6p_1 | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.m6p_1) | 0;
    result = imul(31, result) + hashCode(this.n6p_1) | 0;
    return result;
  };
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
    }
  }
  function get_LocalRippleTheme() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return LocalRippleTheme;
  }
  var LocalRippleTheme;
  var LightThemeHighContrastRippleAlpha;
  var LightThemeLowContrastRippleAlpha;
  var DarkThemeRippleAlpha;
  function DebugRippleTheme() {
    DebugRippleTheme_instance = this;
  }
  var DebugRippleTheme_instance;
  function DebugRippleTheme_getInstance() {
    if (DebugRippleTheme_instance == null)
      new DebugRippleTheme();
    return DebugRippleTheme_instance;
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.o6p_1 = draggedAlpha;
    this.p6p_1 = focusedAlpha;
    this.q6p_1 = hoveredAlpha;
    this.r6p_1 = pressedAlpha;
    this.s6p_1 = 0;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.o6p_1 === other.o6p_1))
      return false;
    if (!(this.p6p_1 === other.p6p_1))
      return false;
    if (!(this.q6p_1 === other.q6p_1))
      return false;
    if (!(this.r6p_1 === other.r6p_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.o6p_1);
    result = imul(31, result) + getNumberHashCode(this.p6p_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.q6p_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.r6p_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.o6p_1 + ', focusedAlpha=' + this.p6p_1 + ', ' + ('hoveredAlpha=' + this.q6p_1 + ', pressedAlpha=' + this.r6p_1 + ')');
  };
  function LocalRippleTheme$lambda() {
    _init_properties_RippleTheme_kt__e4jrk7();
    return DebugRippleTheme_getInstance();
  }
  var properties_initialized_RippleTheme_kt_m09bsn;
  function _init_properties_RippleTheme_kt__e4jrk7() {
    if (!properties_initialized_RippleTheme_kt_m09bsn) {
      properties_initialized_RippleTheme_kt_m09bsn = true;
      LocalRippleTheme = staticCompositionLocalOf(LocalRippleTheme$lambda);
      LightThemeHighContrastRippleAlpha = new RippleAlpha(0.16, 0.24, 0.08, 0.24);
      LightThemeLowContrastRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.12);
      DarkThemeRippleAlpha = new RippleAlpha(0.08, 0.12, 0.04, 0.1);
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalRippleTheme;
  _.$_$.b = RippleAlpha;
  _.$_$.c = rememberRipple$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material-ripple.js.map
