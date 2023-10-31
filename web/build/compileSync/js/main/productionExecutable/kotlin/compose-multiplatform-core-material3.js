(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-runtime.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-material-ripple.js', './compose-multiplatform-core-foundation.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './compose-multiplatform-core-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-material-ripple.js'), require('./compose-multiplatform-core-foundation.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./compose-multiplatform-core-ui-text.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-material-ripple' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-material3'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'compose-multiplatform-core-material3'.");
    }
    root['compose-multiplatform-core-material3'] = factory(typeof this['compose-multiplatform-core-material3'] === 'undefined' ? {} : this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-runtime'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-material-ripple'], this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['compose-multiplatform-core-ui-text']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var structuralEqualityPolicy = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j1;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var protoOf = kotlin_kotlin.$_$.f7;
  var VOID = kotlin_kotlin.$_$.na;
  var classMeta = kotlin_kotlin.$_$.g6;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var equals = kotlin_kotlin.$_$.j6;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var KMutableProperty1 = kotlin_kotlin.$_$.y7;
  var getPropertyCallableRef = kotlin_kotlin.$_$.p6;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var isObject = kotlin_kotlin.$_$.x6;
  var Long = kotlin_kotlin.$_$.h9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var rememberRipple$composable = kotlin_org_jetbrains_compose_material_material_ripple.$_$.c;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var get_LocalRippleTheme = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var composableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var CompositionLocalProvider$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var hashCode = kotlin_kotlin.$_$.r6;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var shadow = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var set_isContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var CoroutineImpl = kotlin_kotlin.$_$.v5;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var isInterface = kotlin_kotlin.$_$.w6;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.p1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.c2;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.h2;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var BasicText$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ColorScheme, 'ColorScheme', classMeta);
  setMetadataFor(MaterialTheme, 'MaterialTheme', objectMeta);
  setMetadataFor(MaterialRippleTheme, 'MaterialRippleTheme', objectMeta);
  setMetadataFor(Shapes, 'Shapes', classMeta);
  setMetadataFor(ShapeDefaults, 'ShapeDefaults', objectMeta);
  setMetadataFor(Surface$composable$lambda$slambda, 'Surface$composable$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(Typography, 'Typography', classMeta);
  setMetadataFor(ColorDarkTokens, 'ColorDarkTokens', objectMeta);
  setMetadataFor(ColorLightTokens, 'ColorLightTokens', objectMeta);
  setMetadataFor(PaletteTokens, 'PaletteTokens', objectMeta);
  setMetadataFor(ShapeTokens, 'ShapeTokens', objectMeta);
  setMetadataFor(StateTokens, 'StateTokens', objectMeta);
  setMetadataFor(TypeScaleTokens, 'TypeScaleTokens', objectMeta);
  setMetadataFor(TypefaceTokens, 'TypefaceTokens', objectMeta);
  setMetadataFor(TypographyTokens, 'TypographyTokens', objectMeta);
  //endregion
  function get_LocalColorScheme() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalColorScheme;
  }
  var LocalColorScheme;
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    this.t6p_1 = mutableStateOf(new Color(primary), structuralEqualityPolicy());
    this.u6p_1 = mutableStateOf(new Color(onPrimary), structuralEqualityPolicy());
    this.v6p_1 = mutableStateOf(new Color(primaryContainer), structuralEqualityPolicy());
    this.w6p_1 = mutableStateOf(new Color(onPrimaryContainer), structuralEqualityPolicy());
    this.x6p_1 = mutableStateOf(new Color(inversePrimary), structuralEqualityPolicy());
    this.y6p_1 = mutableStateOf(new Color(secondary), structuralEqualityPolicy());
    this.z6p_1 = mutableStateOf(new Color(onSecondary), structuralEqualityPolicy());
    this.a6q_1 = mutableStateOf(new Color(secondaryContainer), structuralEqualityPolicy());
    this.b6q_1 = mutableStateOf(new Color(onSecondaryContainer), structuralEqualityPolicy());
    this.c6q_1 = mutableStateOf(new Color(tertiary), structuralEqualityPolicy());
    this.d6q_1 = mutableStateOf(new Color(onTertiary), structuralEqualityPolicy());
    this.e6q_1 = mutableStateOf(new Color(tertiaryContainer), structuralEqualityPolicy());
    this.f6q_1 = mutableStateOf(new Color(onTertiaryContainer), structuralEqualityPolicy());
    this.g6q_1 = mutableStateOf(new Color(background), structuralEqualityPolicy());
    this.h6q_1 = mutableStateOf(new Color(onBackground), structuralEqualityPolicy());
    this.i6q_1 = mutableStateOf(new Color(surface), structuralEqualityPolicy());
    this.j6q_1 = mutableStateOf(new Color(onSurface), structuralEqualityPolicy());
    this.k6q_1 = mutableStateOf(new Color(surfaceVariant), structuralEqualityPolicy());
    this.l6q_1 = mutableStateOf(new Color(onSurfaceVariant), structuralEqualityPolicy());
    this.m6q_1 = mutableStateOf(new Color(surfaceTint), structuralEqualityPolicy());
    this.n6q_1 = mutableStateOf(new Color(inverseSurface), structuralEqualityPolicy());
    this.o6q_1 = mutableStateOf(new Color(inverseOnSurface), structuralEqualityPolicy());
    this.p6q_1 = mutableStateOf(new Color(error), structuralEqualityPolicy());
    this.q6q_1 = mutableStateOf(new Color(onError), structuralEqualityPolicy());
    this.r6q_1 = mutableStateOf(new Color(errorContainer), structuralEqualityPolicy());
    this.s6q_1 = mutableStateOf(new Color(onErrorContainer), structuralEqualityPolicy());
    this.t6q_1 = mutableStateOf(new Color(outline), structuralEqualityPolicy());
    this.u6q_1 = mutableStateOf(new Color(outlineVariant), structuralEqualityPolicy());
    this.v6q_1 = mutableStateOf(new Color(scrim), structuralEqualityPolicy());
    this.w6q_1 = 0;
  }
  protoOf(ColorScheme).x6q = function (_set____db54di) {
    primary$factory();
    return this.t6p_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).y6q = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    primary$factory_0();
    return this.t6p_1.w1().o2s_1;
  };
  protoOf(ColorScheme).z6q = function (_set____db54di) {
    onPrimary$factory();
    return this.u6p_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).a6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onPrimary$factory_0();
    return this.u6p_1.w1().o2s_1;
  };
  protoOf(ColorScheme).b6r = function (_set____db54di) {
    primaryContainer$factory();
    return this.v6p_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).c6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    primaryContainer$factory_0();
    return this.v6p_1.w1().o2s_1;
  };
  protoOf(ColorScheme).d6r = function (_set____db54di) {
    onPrimaryContainer$factory();
    return this.w6p_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).e6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onPrimaryContainer$factory_0();
    return this.w6p_1.w1().o2s_1;
  };
  protoOf(ColorScheme).f6r = function (_set____db54di) {
    inversePrimary$factory();
    return this.x6p_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).g6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    inversePrimary$factory_0();
    return this.x6p_1.w1().o2s_1;
  };
  protoOf(ColorScheme).h6r = function (_set____db54di) {
    secondary$factory();
    return this.y6p_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).i6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    secondary$factory_0();
    return this.y6p_1.w1().o2s_1;
  };
  protoOf(ColorScheme).j6r = function (_set____db54di) {
    onSecondary$factory();
    return this.z6p_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).k6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onSecondary$factory_0();
    return this.z6p_1.w1().o2s_1;
  };
  protoOf(ColorScheme).l6r = function (_set____db54di) {
    secondaryContainer$factory();
    return this.a6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).m6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    secondaryContainer$factory_0();
    return this.a6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).n6r = function (_set____db54di) {
    onSecondaryContainer$factory();
    return this.b6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).o6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onSecondaryContainer$factory_0();
    return this.b6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).p6r = function (_set____db54di) {
    tertiary$factory();
    return this.c6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).q6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    tertiary$factory_0();
    return this.c6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).r6r = function (_set____db54di) {
    onTertiary$factory();
    return this.d6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).s6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onTertiary$factory_0();
    return this.d6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).t6r = function (_set____db54di) {
    tertiaryContainer$factory();
    return this.e6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).u6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    tertiaryContainer$factory_0();
    return this.e6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).v6r = function (_set____db54di) {
    onTertiaryContainer$factory();
    return this.f6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).w6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onTertiaryContainer$factory_0();
    return this.f6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).x6r = function (_set____db54di) {
    background$factory();
    return this.g6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).b3d = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    background$factory_0();
    return this.g6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).y6r = function (_set____db54di) {
    onBackground$factory();
    return this.h6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).z6r = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onBackground$factory_0();
    return this.h6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).a6s = function (_set____db54di) {
    surface$factory();
    return this.i6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).b6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    surface$factory_0();
    return this.i6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).c6s = function (_set____db54di) {
    onSurface$factory();
    return this.j6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).d6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onSurface$factory_0();
    return this.j6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).e6s = function (_set____db54di) {
    surfaceVariant$factory();
    return this.k6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).f6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    surfaceVariant$factory_0();
    return this.k6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).g6s = function (_set____db54di) {
    onSurfaceVariant$factory();
    return this.l6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).h6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onSurfaceVariant$factory_0();
    return this.l6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).i6s = function (_set____db54di) {
    surfaceTint$factory();
    return this.m6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).j6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    surfaceTint$factory_0();
    return this.m6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).k6s = function (_set____db54di) {
    inverseSurface$factory();
    return this.n6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).l6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    inverseSurface$factory_0();
    return this.n6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).m6s = function (_set____db54di) {
    inverseOnSurface$factory();
    return this.o6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).n6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    inverseOnSurface$factory_0();
    return this.o6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).o6s = function (_set____db54di) {
    error$factory();
    return this.p6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).p6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    error$factory_0();
    return this.p6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).q6s = function (_set____db54di) {
    onError$factory();
    return this.q6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).r6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onError$factory_0();
    return this.q6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).s6s = function (_set____db54di) {
    errorContainer$factory();
    return this.r6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).t6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    errorContainer$factory_0();
    return this.r6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).u6s = function (_set____db54di) {
    onErrorContainer$factory();
    return this.s6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).v6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    onErrorContainer$factory_0();
    return this.s6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).w6s = function (_set____db54di) {
    outline$factory();
    return this.t6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).x6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    outline$factory_0();
    return this.t6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).y6s = function (_set____db54di) {
    outlineVariant$factory();
    return this.u6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).z6s = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    outlineVariant$factory_0();
    return this.u6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).a6t = function (_set____db54di) {
    scrim$factory();
    return this.v6q_1.bu(new Color(_set____db54di));
  };
  protoOf(ColorScheme).b6t = function () {
    // Inline function 'androidx.compose.runtime.getValue' call
    scrim$factory_0();
    return this.v6q_1.w1().o2s_1;
  };
  protoOf(ColorScheme).c6t = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  };
  protoOf(ColorScheme).d6t = function (primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, $super) {
    primary = primary === VOID ? this.y6q() : primary;
    onPrimary = onPrimary === VOID ? this.a6r() : onPrimary;
    primaryContainer = primaryContainer === VOID ? this.c6r() : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? this.e6r() : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? this.g6r() : inversePrimary;
    secondary = secondary === VOID ? this.i6r() : secondary;
    onSecondary = onSecondary === VOID ? this.k6r() : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? this.m6r() : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? this.o6r() : onSecondaryContainer;
    tertiary = tertiary === VOID ? this.q6r() : tertiary;
    onTertiary = onTertiary === VOID ? this.s6r() : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? this.u6r() : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? this.w6r() : onTertiaryContainer;
    background = background === VOID ? this.b3d() : background;
    onBackground = onBackground === VOID ? this.z6r() : onBackground;
    surface = surface === VOID ? this.b6s() : surface;
    onSurface = onSurface === VOID ? this.d6s() : onSurface;
    surfaceVariant = surfaceVariant === VOID ? this.f6s() : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? this.h6s() : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? this.j6s() : surfaceTint;
    inverseSurface = inverseSurface === VOID ? this.l6s() : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? this.n6s() : inverseOnSurface;
    error = error === VOID ? this.p6s() : error;
    onError = onError === VOID ? this.r6s() : onError;
    errorContainer = errorContainer === VOID ? this.t6s() : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? this.v6s() : onErrorContainer;
    outline = outline === VOID ? this.x6s() : outline;
    outlineVariant = outlineVariant === VOID ? this.z6s() : outlineVariant;
    scrim = scrim === VOID ? this.b6t() : scrim;
    return $super === VOID ? this.c6t(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) : $super.c6t.call(this, new Color(primary), new Color(onPrimary), new Color(primaryContainer), new Color(onPrimaryContainer), new Color(inversePrimary), new Color(secondary), new Color(onSecondary), new Color(secondaryContainer), new Color(onSecondaryContainer), new Color(tertiary), new Color(onTertiary), new Color(tertiaryContainer), new Color(onTertiaryContainer), new Color(background), new Color(onBackground), new Color(surface), new Color(onSurface), new Color(surfaceVariant), new Color(onSurfaceVariant), new Color(surfaceTint), new Color(inverseSurface), new Color(inverseOnSurface), new Color(error), new Color(onError), new Color(errorContainer), new Color(onErrorContainer), new Color(outline), new Color(outlineVariant), new Color(scrim));
  };
  protoOf(ColorScheme).toString = function () {
    return 'ColorScheme(' + ('primary=' + new Color(this.y6q())) + ('onPrimary=' + new Color(this.a6r())) + ('primaryContainer=' + new Color(this.c6r())) + ('onPrimaryContainer=' + new Color(this.e6r())) + ('inversePrimary=' + new Color(this.g6r())) + ('secondary=' + new Color(this.i6r())) + ('onSecondary=' + new Color(this.k6r())) + ('secondaryContainer=' + new Color(this.m6r())) + ('onSecondaryContainer=' + new Color(this.o6r())) + ('tertiary=' + new Color(this.q6r())) + ('onTertiary=' + new Color(this.s6r())) + ('tertiaryContainer=' + new Color(this.u6r())) + ('onTertiaryContainer=' + new Color(this.w6r())) + ('background=' + new Color(this.b3d())) + ('onBackground=' + new Color(this.z6r())) + ('surface=' + new Color(this.b6s())) + ('onSurface=' + new Color(this.d6s())) + ('surfaceVariant=' + new Color(this.f6s())) + ('onSurfaceVariant=' + new Color(this.h6s())) + ('surfaceTint=' + new Color(this.j6s())) + ('inverseSurface=' + new Color(this.l6s())) + ('inverseOnSurface=' + new Color(this.n6s())) + ('error=' + new Color(this.p6s())) + ('onError=' + new Color(this.r6s())) + ('errorContainer=' + new Color(this.t6s())) + ('onErrorContainer=' + new Color(this.v6s())) + ('outline=' + new Color(this.x6s())) + ('outlineVariant=' + new Color(this.z6s())) + ('scrim=' + new Color(this.b6t())) + ')';
  };
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    primary = primary === VOID ? ColorLightTokens_getInstance().x6t_1 : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().n6t_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().y6t_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().o6t_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().i6t_1 : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().a6u_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().p6t_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().b6u_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().q6t_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().f6u_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().t6t_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().g6u_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().u6t_1 : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().e6t_1 : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().k6t_1 : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().c6u_1 : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().r6t_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().e6u_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().s6t_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().j6t_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().h6t_1 : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().f6t_1 : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().l6t_1 : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().g6t_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().m6t_1 : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().v6t_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().w6t_1 : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().z6t_1 : scrim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  }
  function darkColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim) {
    primary = primary === VOID ? ColorDarkTokens_getInstance().a6v_1 : primary;
    onPrimary = onPrimary === VOID ? ColorDarkTokens_getInstance().q6u_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorDarkTokens_getInstance().b6v_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorDarkTokens_getInstance().r6u_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorDarkTokens_getInstance().l6u_1 : inversePrimary;
    secondary = secondary === VOID ? ColorDarkTokens_getInstance().d6v_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorDarkTokens_getInstance().s6u_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorDarkTokens_getInstance().e6v_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorDarkTokens_getInstance().t6u_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorDarkTokens_getInstance().i6v_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorDarkTokens_getInstance().w6u_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorDarkTokens_getInstance().j6v_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorDarkTokens_getInstance().x6u_1 : onTertiaryContainer;
    background = background === VOID ? ColorDarkTokens_getInstance().h6u_1 : background;
    onBackground = onBackground === VOID ? ColorDarkTokens_getInstance().n6u_1 : onBackground;
    surface = surface === VOID ? ColorDarkTokens_getInstance().f6v_1 : surface;
    onSurface = onSurface === VOID ? ColorDarkTokens_getInstance().u6u_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorDarkTokens_getInstance().h6v_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorDarkTokens_getInstance().v6u_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorDarkTokens_getInstance().m6u_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorDarkTokens_getInstance().k6u_1 : inverseOnSurface;
    error = error === VOID ? ColorDarkTokens_getInstance().i6u_1 : error;
    onError = onError === VOID ? ColorDarkTokens_getInstance().o6u_1 : onError;
    errorContainer = errorContainer === VOID ? ColorDarkTokens_getInstance().j6u_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorDarkTokens_getInstance().p6u_1 : onErrorContainer;
    outline = outline === VOID ? ColorDarkTokens_getInstance().y6u_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorDarkTokens_getInstance().z6u_1 : outlineVariant;
    scrim = scrim === VOID ? ColorDarkTokens_getInstance().c6v_1 : scrim;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim);
  }
  function contentColorFor$composable(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1618819404, 'C(contentColorFor$composable)P(0:c#ui.graphics.Color)*474@21497L11,475@21581L7:ColorScheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1618819404, $changed, -1, 'androidx.compose.material3.contentColorFor$composable (ColorScheme.kt:473)');
    }
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp0_takeOrElse = contentColorFor(MaterialTheme_getInstance().l6v($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
      tmp = tmp0_takeOrElse;
    } else {
      // Inline function 'androidx.compose.material3.contentColorFor$composable.<anonymous>' call
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      tmp = tmp0.o2s_1;
    }
    var tmp0_0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    var tmp = new Dp(elevation);
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(tmp, new Dp(tmp$ret$0)))
      return _this__u8e3s4.b6s();
    // Inline function 'kotlin.math.ln' call
    var tmp0_ln = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(tmp0_ln) + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.j6s(), alpha), _this__u8e3s4.b6s());
  }
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    return equals(backgroundColor, _this__u8e3s4.y6q()) ? _this__u8e3s4.a6r() : equals(backgroundColor, _this__u8e3s4.i6r()) ? _this__u8e3s4.k6r() : equals(backgroundColor, _this__u8e3s4.q6r()) ? _this__u8e3s4.s6r() : equals(backgroundColor, _this__u8e3s4.b3d()) ? _this__u8e3s4.z6r() : equals(backgroundColor, _this__u8e3s4.p6s()) ? _this__u8e3s4.r6s() : equals(backgroundColor, _this__u8e3s4.b6s()) ? _this__u8e3s4.d6s() : equals(backgroundColor, _this__u8e3s4.f6s()) ? _this__u8e3s4.h6s() : equals(backgroundColor, _this__u8e3s4.c6r()) ? _this__u8e3s4.e6r() : equals(backgroundColor, _this__u8e3s4.m6r()) ? _this__u8e3s4.o6r() : equals(backgroundColor, _this__u8e3s4.u6r()) ? _this__u8e3s4.w6r() : equals(backgroundColor, _this__u8e3s4.t6s()) ? _this__u8e3s4.v6s() : equals(backgroundColor, _this__u8e3s4.l6s()) ? _this__u8e3s4.n6s() : Companion_getInstance().f2t_1;
  }
  function updateColorSchemeFrom(_this__u8e3s4, other) {
    _init_properties_ColorScheme_kt__xhtsty();
    _this__u8e3s4.x6q(other.y6q());
    _this__u8e3s4.z6q(other.a6r());
    _this__u8e3s4.b6r(other.c6r());
    _this__u8e3s4.d6r(other.e6r());
    _this__u8e3s4.f6r(other.g6r());
    _this__u8e3s4.h6r(other.i6r());
    _this__u8e3s4.j6r(other.k6r());
    _this__u8e3s4.l6r(other.m6r());
    _this__u8e3s4.n6r(other.o6r());
    _this__u8e3s4.p6r(other.q6r());
    _this__u8e3s4.r6r(other.s6r());
    _this__u8e3s4.t6r(other.u6r());
    _this__u8e3s4.v6r(other.w6r());
    _this__u8e3s4.x6r(other.b3d());
    _this__u8e3s4.y6r(other.z6r());
    _this__u8e3s4.a6s(other.b6s());
    _this__u8e3s4.c6s(other.d6s());
    _this__u8e3s4.e6s(other.f6s());
    _this__u8e3s4.g6s(other.h6s());
    _this__u8e3s4.i6s(other.j6s());
    _this__u8e3s4.k6s(other.l6s());
    _this__u8e3s4.m6s(other.n6s());
    _this__u8e3s4.o6s(other.p6s());
    _this__u8e3s4.q6s(other.r6s());
    _this__u8e3s4.s6s(other.t6s());
    _this__u8e3s4.u6s(other.v6s());
    _this__u8e3s4.w6s(other.x6s());
    _this__u8e3s4.y6s(other.z6s());
    _this__u8e3s4.a6t(other.b6t());
  }
  function LocalColorScheme$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return lightColorScheme();
  }
  function primary$factory() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.y6q());
    }, function (receiver, value) {
      return receiver.x6q(value.o2s_1);
    });
  }
  function primary$factory_0() {
    return getPropertyCallableRef('primary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.y6q());
    }, function (receiver, value) {
      return receiver.x6q(value.o2s_1);
    });
  }
  function onPrimary$factory() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.a6r());
    }, function (receiver, value) {
      return receiver.z6q(value.o2s_1);
    });
  }
  function onPrimary$factory_0() {
    return getPropertyCallableRef('onPrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.a6r());
    }, function (receiver, value) {
      return receiver.z6q(value.o2s_1);
    });
  }
  function primaryContainer$factory() {
    return getPropertyCallableRef('primaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.c6r());
    }, function (receiver, value) {
      return receiver.b6r(value.o2s_1);
    });
  }
  function primaryContainer$factory_0() {
    return getPropertyCallableRef('primaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.c6r());
    }, function (receiver, value) {
      return receiver.b6r(value.o2s_1);
    });
  }
  function onPrimaryContainer$factory() {
    return getPropertyCallableRef('onPrimaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.e6r());
    }, function (receiver, value) {
      return receiver.d6r(value.o2s_1);
    });
  }
  function onPrimaryContainer$factory_0() {
    return getPropertyCallableRef('onPrimaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.e6r());
    }, function (receiver, value) {
      return receiver.d6r(value.o2s_1);
    });
  }
  function inversePrimary$factory() {
    return getPropertyCallableRef('inversePrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.g6r());
    }, function (receiver, value) {
      return receiver.f6r(value.o2s_1);
    });
  }
  function inversePrimary$factory_0() {
    return getPropertyCallableRef('inversePrimary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.g6r());
    }, function (receiver, value) {
      return receiver.f6r(value.o2s_1);
    });
  }
  function secondary$factory() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.i6r());
    }, function (receiver, value) {
      return receiver.h6r(value.o2s_1);
    });
  }
  function secondary$factory_0() {
    return getPropertyCallableRef('secondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.i6r());
    }, function (receiver, value) {
      return receiver.h6r(value.o2s_1);
    });
  }
  function onSecondary$factory() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.k6r());
    }, function (receiver, value) {
      return receiver.j6r(value.o2s_1);
    });
  }
  function onSecondary$factory_0() {
    return getPropertyCallableRef('onSecondary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.k6r());
    }, function (receiver, value) {
      return receiver.j6r(value.o2s_1);
    });
  }
  function secondaryContainer$factory() {
    return getPropertyCallableRef('secondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.m6r());
    }, function (receiver, value) {
      return receiver.l6r(value.o2s_1);
    });
  }
  function secondaryContainer$factory_0() {
    return getPropertyCallableRef('secondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.m6r());
    }, function (receiver, value) {
      return receiver.l6r(value.o2s_1);
    });
  }
  function onSecondaryContainer$factory() {
    return getPropertyCallableRef('onSecondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.o6r());
    }, function (receiver, value) {
      return receiver.n6r(value.o2s_1);
    });
  }
  function onSecondaryContainer$factory_0() {
    return getPropertyCallableRef('onSecondaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.o6r());
    }, function (receiver, value) {
      return receiver.n6r(value.o2s_1);
    });
  }
  function tertiary$factory() {
    return getPropertyCallableRef('tertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.q6r());
    }, function (receiver, value) {
      return receiver.p6r(value.o2s_1);
    });
  }
  function tertiary$factory_0() {
    return getPropertyCallableRef('tertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.q6r());
    }, function (receiver, value) {
      return receiver.p6r(value.o2s_1);
    });
  }
  function onTertiary$factory() {
    return getPropertyCallableRef('onTertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.s6r());
    }, function (receiver, value) {
      return receiver.r6r(value.o2s_1);
    });
  }
  function onTertiary$factory_0() {
    return getPropertyCallableRef('onTertiary', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.s6r());
    }, function (receiver, value) {
      return receiver.r6r(value.o2s_1);
    });
  }
  function tertiaryContainer$factory() {
    return getPropertyCallableRef('tertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.u6r());
    }, function (receiver, value) {
      return receiver.t6r(value.o2s_1);
    });
  }
  function tertiaryContainer$factory_0() {
    return getPropertyCallableRef('tertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.u6r());
    }, function (receiver, value) {
      return receiver.t6r(value.o2s_1);
    });
  }
  function onTertiaryContainer$factory() {
    return getPropertyCallableRef('onTertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.w6r());
    }, function (receiver, value) {
      return receiver.v6r(value.o2s_1);
    });
  }
  function onTertiaryContainer$factory_0() {
    return getPropertyCallableRef('onTertiaryContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.w6r());
    }, function (receiver, value) {
      return receiver.v6r(value.o2s_1);
    });
  }
  function background$factory() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.b3d());
    }, function (receiver, value) {
      return receiver.x6r(value.o2s_1);
    });
  }
  function background$factory_0() {
    return getPropertyCallableRef('background', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.b3d());
    }, function (receiver, value) {
      return receiver.x6r(value.o2s_1);
    });
  }
  function onBackground$factory() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.z6r());
    }, function (receiver, value) {
      return receiver.y6r(value.o2s_1);
    });
  }
  function onBackground$factory_0() {
    return getPropertyCallableRef('onBackground', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.z6r());
    }, function (receiver, value) {
      return receiver.y6r(value.o2s_1);
    });
  }
  function surface$factory() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.b6s());
    }, function (receiver, value) {
      return receiver.a6s(value.o2s_1);
    });
  }
  function surface$factory_0() {
    return getPropertyCallableRef('surface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.b6s());
    }, function (receiver, value) {
      return receiver.a6s(value.o2s_1);
    });
  }
  function onSurface$factory() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.d6s());
    }, function (receiver, value) {
      return receiver.c6s(value.o2s_1);
    });
  }
  function onSurface$factory_0() {
    return getPropertyCallableRef('onSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.d6s());
    }, function (receiver, value) {
      return receiver.c6s(value.o2s_1);
    });
  }
  function surfaceVariant$factory() {
    return getPropertyCallableRef('surfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.f6s());
    }, function (receiver, value) {
      return receiver.e6s(value.o2s_1);
    });
  }
  function surfaceVariant$factory_0() {
    return getPropertyCallableRef('surfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.f6s());
    }, function (receiver, value) {
      return receiver.e6s(value.o2s_1);
    });
  }
  function onSurfaceVariant$factory() {
    return getPropertyCallableRef('onSurfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.h6s());
    }, function (receiver, value) {
      return receiver.g6s(value.o2s_1);
    });
  }
  function onSurfaceVariant$factory_0() {
    return getPropertyCallableRef('onSurfaceVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.h6s());
    }, function (receiver, value) {
      return receiver.g6s(value.o2s_1);
    });
  }
  function surfaceTint$factory() {
    return getPropertyCallableRef('surfaceTint', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.j6s());
    }, function (receiver, value) {
      return receiver.i6s(value.o2s_1);
    });
  }
  function surfaceTint$factory_0() {
    return getPropertyCallableRef('surfaceTint', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.j6s());
    }, function (receiver, value) {
      return receiver.i6s(value.o2s_1);
    });
  }
  function inverseSurface$factory() {
    return getPropertyCallableRef('inverseSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.l6s());
    }, function (receiver, value) {
      return receiver.k6s(value.o2s_1);
    });
  }
  function inverseSurface$factory_0() {
    return getPropertyCallableRef('inverseSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.l6s());
    }, function (receiver, value) {
      return receiver.k6s(value.o2s_1);
    });
  }
  function inverseOnSurface$factory() {
    return getPropertyCallableRef('inverseOnSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.n6s());
    }, function (receiver, value) {
      return receiver.m6s(value.o2s_1);
    });
  }
  function inverseOnSurface$factory_0() {
    return getPropertyCallableRef('inverseOnSurface', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.n6s());
    }, function (receiver, value) {
      return receiver.m6s(value.o2s_1);
    });
  }
  function error$factory() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.p6s());
    }, function (receiver, value) {
      return receiver.o6s(value.o2s_1);
    });
  }
  function error$factory_0() {
    return getPropertyCallableRef('error', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.p6s());
    }, function (receiver, value) {
      return receiver.o6s(value.o2s_1);
    });
  }
  function onError$factory() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.r6s());
    }, function (receiver, value) {
      return receiver.q6s(value.o2s_1);
    });
  }
  function onError$factory_0() {
    return getPropertyCallableRef('onError', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.r6s());
    }, function (receiver, value) {
      return receiver.q6s(value.o2s_1);
    });
  }
  function errorContainer$factory() {
    return getPropertyCallableRef('errorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.t6s());
    }, function (receiver, value) {
      return receiver.s6s(value.o2s_1);
    });
  }
  function errorContainer$factory_0() {
    return getPropertyCallableRef('errorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.t6s());
    }, function (receiver, value) {
      return receiver.s6s(value.o2s_1);
    });
  }
  function onErrorContainer$factory() {
    return getPropertyCallableRef('onErrorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.v6s());
    }, function (receiver, value) {
      return receiver.u6s(value.o2s_1);
    });
  }
  function onErrorContainer$factory_0() {
    return getPropertyCallableRef('onErrorContainer', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.v6s());
    }, function (receiver, value) {
      return receiver.u6s(value.o2s_1);
    });
  }
  function outline$factory() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.x6s());
    }, function (receiver, value) {
      return receiver.w6s(value.o2s_1);
    });
  }
  function outline$factory_0() {
    return getPropertyCallableRef('outline', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.x6s());
    }, function (receiver, value) {
      return receiver.w6s(value.o2s_1);
    });
  }
  function outlineVariant$factory() {
    return getPropertyCallableRef('outlineVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.z6s());
    }, function (receiver, value) {
      return receiver.y6s(value.o2s_1);
    });
  }
  function outlineVariant$factory_0() {
    return getPropertyCallableRef('outlineVariant', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.z6s());
    }, function (receiver, value) {
      return receiver.y6s(value.o2s_1);
    });
  }
  function scrim$factory() {
    return getPropertyCallableRef('scrim', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.b6t());
    }, function (receiver, value) {
      return receiver.a6t(value.o2s_1);
    });
  }
  function scrim$factory_0() {
    return getPropertyCallableRef('scrim', 1, KMutableProperty1, function (receiver) {
      return new Color(receiver.b6t());
    }, function (receiver, value) {
      return receiver.a6t(value.o2s_1);
    });
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalColorScheme = staticCompositionLocalOf(LocalColorScheme$lambda);
    }
  }
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance().t2s_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  var DefaultRippleAlpha;
  function MaterialTheme() {
    MaterialTheme_instance = this;
    this.k6v_1 = 0;
  }
  protoOf(MaterialTheme).l6v = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -1686668101, 'C($get-colorScheme$$composable)95@4170L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-1686668101, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-colorScheme$$composable (MaterialTheme.kt:95)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalColorScheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).m6v = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 800335301, 'C($get-typography$$composable)103@4394L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(800335301, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-typography$$composable (MaterialTheme.kt:103)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalTypography();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  protoOf(MaterialTheme).n6v = function ($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -394650369, 'C($get-shapes$$composable)111@4602L7:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(-394650369, $changed, -1, 'androidx.compose.material3.MaterialTheme.$get-shapes$$composable (MaterialTheme.kt:111)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalShapes();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    if (MaterialTheme_instance == null)
      new MaterialTheme();
    return MaterialTheme_instance;
  }
  function MaterialTheme$composable(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(-1389881873);
    sourceInformation($composer_0, 'C(MaterialTheme$composable)P(!1,2,3)58@2824L11,59@2872L6,60@2923L10,*63@3007L194,70@3286L16,71@3329L50,72@3384L417:MaterialTheme.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.pz(colorScheme_0._v) : false) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ((($default & 2) === 0 ? $composer_0.pz(shapes_0._v) : false) ? 32 : 16);
    if (($changed & 896) === 0)
      $dirty = $dirty | ((($default & 4) === 0 ? $composer_0.pz(typography_0._v) : false) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.tz(content) ? 2048 : 1024);
    if (!(($dirty & 5851) === 1170) ? true : !$composer_0.vy()) {
      $composer_0.az();
      if (($changed & 1) === 0 ? true : $composer_0.wy()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_getInstance().l6v($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_getInstance().n6v($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_getInstance().m6v($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.hz();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.bz();
      if (isTraceInProgress()) {
        traceEventStart(-1389881873, $dirty, -1, 'androidx.compose.material3.MaterialTheme$composable (MaterialTheme.kt:57)');
      }
      // Inline function 'kotlin.apply' call
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_1 = $composer_0;
      $composer_1.yy(547886695);
      sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var tmp0_let = $composer_1.nz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp;
      if (false ? true : tmp0_let === Companion_getInstance_0().sy_1) {
        // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
        var value = colorScheme_0._v.d6t();
        $composer_1.oz(value);
        tmp = value;
      } else {
        tmp = tmp0_let;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      $composer_1.zy();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
      updateColorSchemeFrom(tmp0, colorScheme_0._v);
      var rememberedColorScheme = tmp0;
      var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
      var rippleIndication = rememberRipple$composable(false, tmp_1, _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0))), $composer_0, 0, 7);
      var selectionColors = rememberTextSelectionColors$composable(rememberedColorScheme, $composer_0, 0);
      var tmp_2 = [get_LocalColorScheme().g1e(rememberedColorScheme), get_LocalIndication().g1e(rippleIndication), get_LocalRippleTheme().g1e(MaterialRippleTheme_getInstance()), get_LocalShapes().g1e(shapes_0._v), get_LocalTextSelectionColors().g1e(selectionColors), get_LocalTypography().g1e(typography_0._v)];
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>' call
      var tmp_3 = $composer_0;
      var dispatchReceiver = composableLambda(tmp_3, -1066563262, true, MaterialTheme$composable$lambda(typography_0, content, $dirty));
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var $composer_2 = $composer_0;
      $composer_2.yy(-838505973);
      sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp1_cache = $composer_2.pz(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var tmp0_let_0 = $composer_2.nz();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_4;
      if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_0().sy_1) {
        // Inline function 'androidx.compose.material3.MaterialTheme$composable.<anonymous>.<anonymous>' call
        var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_2.oz(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = tmp0_let_0;
      }
      var tmp_5 = tmp_4;
      var tmp0_0 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
      $composer_2.zy();
      CompositionLocalProvider$composable(tmp_2, tmp0_0, $composer_0, 48);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    var tmp0_safe_receiver = $composer_0.dz();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.l1e(MaterialTheme$composable$lambda_0(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors$composable(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    $composer_0.yy(339352566);
    sourceInformation($composer_0, 'C(rememberTextSelectionColors$composable)134@5274L198:MaterialTheme.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(339352566, $changed, -1, 'androidx.compose.material3.rememberTextSelectionColors$composable (MaterialTheme.kt:132)');
    }
    var primaryColor = colorScheme.y6q();
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.yy(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.pz(new Color(primaryColor));
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().sy_1) {
      // Inline function 'androidx.compose.material3.rememberTextSelectionColors$composable.<anonymous>' call
      var value = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
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
  function MaterialRippleTheme() {
    MaterialRippleTheme_instance = this;
  }
  var MaterialRippleTheme_instance;
  function MaterialRippleTheme_getInstance() {
    if (MaterialRippleTheme_instance == null)
      new MaterialRippleTheme();
    return MaterialRippleTheme_instance;
  }
  function MaterialTheme$composable$lambda($typography, $content, $$dirty) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C80@3730L65:MaterialTheme.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
        if (isTraceInProgress()) {
          traceEventStart(-1066563262, $changed, -1, 'androidx.compose.material3.MaterialTheme$composable.<anonymous> (MaterialTheme.kt:79)');
        }
        ProvideTextStyle$composable($typography._v.x6v_1, $content, $composer_0, 112 & $$dirty >> 6);
        var tmp_0;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } else {
        $composer_0.hz();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  function MaterialTheme$composable$lambda_0($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme$composable($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (!properties_initialized_MaterialTheme_kt_8j16em) {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      StateTokens_getInstance();
      StateTokens_getInstance();
      StateTokens_getInstance();
      StateTokens_getInstance();
      DefaultRippleAlpha = new RippleAlpha(0.16, 0.12, 0.08, 0.12);
    }
  }
  function get_LocalShapes() {
    _init_properties_Shapes_kt__48nj2q();
    return LocalShapes;
  }
  var LocalShapes;
  function Shapes(extraSmall, small, medium, large, extraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().e6w_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().f6w_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().g6w_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().h6w_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().i6w_1 : extraLarge;
    this.k6w_1 = extraSmall;
    this.l6w_1 = small;
    this.m6w_1 = medium;
    this.n6w_1 = large;
    this.o6w_1 = extraLarge;
    this.p6w_1 = 0;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.k6w_1, other.k6w_1))
      return false;
    if (!equals(this.l6w_1, other.l6w_1))
      return false;
    if (!equals(this.m6w_1, other.m6w_1))
      return false;
    if (!equals(this.n6w_1, other.n6w_1))
      return false;
    if (!equals(this.o6w_1, other.o6w_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.k6w_1);
    result = imul(31, result) + hashCode(this.l6w_1) | 0;
    result = imul(31, result) + hashCode(this.m6w_1) | 0;
    result = imul(31, result) + hashCode(this.n6w_1) | 0;
    result = imul(31, result) + hashCode(this.o6w_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + this.k6w_1 + ', ') + ('small=' + this.l6w_1 + ', ') + ('medium=' + this.m6w_1 + ', ') + ('large=' + this.n6w_1 + ', ') + ('extraLarge=' + this.o6w_1 + ')');
  };
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.e6w_1 = ShapeTokens_getInstance().s6w_1;
    this.f6w_1 = ShapeTokens_getInstance().a6x_1;
    this.g6w_1 = ShapeTokens_getInstance().y6w_1;
    this.h6w_1 = ShapeTokens_getInstance().v6w_1;
    this.i6w_1 = ShapeTokens_getInstance().q6w_1;
    this.j6w_1 = 0;
  }
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return new Shapes();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
    }
  }
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function Surface$composable(modifier, shape, color, contentColor, tonalElevation, shadowElevation, border, content, $composer, $changed, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var $composer_0 = $composer;
    $composer_0.yy(-976280440);
    sourceInformation($composer_0, 'C(Surface$composable)P(4,6,1:c#ui.graphics.Color,3:c#ui.graphics.Color,7:c#ui.unit.Dp,5:c#ui.unit.Dp)102@5102L11,103@5149L22,*109@5366L7,110@5395L784:Surface.kt#uh7d8r');
    if (!(($default & 1) === 0)) {
      modifier_0._v = Companion_getInstance_1();
    }
    if (!(($default & 2) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 4) === 0)) {
      color_0._v = new Color(MaterialTheme_getInstance().l6v($composer_0, 6).b6s());
    }
    if (!(($default & 8) === 0))
      contentColor_0 = contentColorFor$composable(color_0._v.o2s_1, $composer_0, 14 & $changed >> 6);
    if (!(($default & 16) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 32) === 0)) {
      var tmp$ret$1;
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 64) === 0)) {
      border_0._v = null;
    }
    if (isTraceInProgress()) {
      traceEventStart(-976280440, $changed, -1, 'androidx.compose.material3.Surface$composable (Surface.kt:99)');
    }
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var tmp2_plus = tmp0.v23_1;
    var tmp3_plus = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp2_plus) + _Dp___get_value__impl__geb1vb(tmp3_plus));
    var tmp = [get_LocalContentColor().g1e(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().g1e(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>' call
    var tmp_0 = $composer_0;
    var dispatchReceiver = composableLambda(tmp_0, -70914509, true, Surface$composable$lambda(modifier_0, shape_0, color_0, absoluteElevation, $changed, border_0, shadowElevation_0, content));
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.yy(-838505973);
    sourceInformation($composer_2, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_2.pz(dispatchReceiver);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_2.nz();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_0().sy_1) {
      // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>' call
      var value = ComposableLambda$invoke$ref_0(dispatchReceiver);
      $composer_2.oz(value);
      tmp_1 = value;
    } else {
      tmp_1 = tmp0_let;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.zy();
    CompositionLocalProvider$composable(tmp, tmp0_0, $composer_0, 48);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
  }
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    return clip(background(shadow(_this__u8e3s4, shadowElevation, shape, false).g3t(!(border_0 == null) ? border(Companion_getInstance_1(), border_0, shape) : Companion_getInstance_1()), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation$composable(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    $composer_0.yy(369008065);
    sourceInformation($composer_0, 'C(surfaceColorAtElevation$composable)P(0:c#ui.graphics.Color,1:c#ui.unit.Dp)476@23481L11,477@23526L11:Surface.kt#uh7d8r');
    if (isTraceInProgress()) {
      traceEventStart(369008065, $changed, -1, 'androidx.compose.material3.surfaceColorAtElevation$composable (Surface.kt:475)');
    }
    var tmp;
    if (equals(color, MaterialTheme_getInstance().l6v($composer_0, 6).b6s())) {
      tmp = surfaceColorAtElevation(MaterialTheme_getInstance().l6v($composer_0, 6), elevation);
    } else {
      tmp = color;
    }
    var tmp0 = tmp;
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.zy();
    return tmp0;
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function Surface$composable$lambda$lambda($this$semantics) {
    _init_properties_Surface_kt__8o7unv();
    set_isContainer($this$semantics, true);
    return Unit_getInstance();
  }
  function Surface$composable$lambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Surface$composable$lambda$slambda).n4f = function ($this$pointerInput, $completion) {
    var tmp = this.o4f($this$pointerInput, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(Surface$composable$lambda$slambda).se = function (p1, $completion) {
    return this.n4f((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Surface$composable$lambda$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        if (tmp === 0) {
          this.yd_1 = 1;
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Surface$composable$lambda$slambda).o4f = function ($this$pointerInput, completion) {
    var i = new Surface$composable$lambda$slambda(completion);
    i.j6x_1 = $this$pointerInput;
    return i;
  };
  function Surface$composable$lambda$slambda_0(resultContinuation) {
    var i = new Surface$composable$lambda$slambda(resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.n4f($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Surface$composable$lambda($modifier, $shape, $color, $absoluteElevation, $$changed, $border, $shadowElevation, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      sourceInformation($composer_0, 'C118@5685L139,125@5988L58,128@6083L2,114@5549L624:Surface.kt#uh7d8r');
      var tmp;
      if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
        if (isTraceInProgress()) {
          traceEventStart(-70914509, $changed, -1, 'androidx.compose.material3.Surface$composable.<anonymous> (Surface.kt:113)');
        }
        // Inline function 'androidx.compose.foundation.layout.Box$composable' call
        var tmp_0 = surface($modifier._v, $shape._v, surfaceColorAtElevation$composable($color._v.o2s_1, $absoluteElevation, $composer_0, 14 & $$changed >> 6), $border._v, $shadowElevation._v.v23_1);
        var tmp$ret$4;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp0_remember$composable = $composer_0;
        var $composer_1 = tmp0_remember$composable;
        $composer_1.yy(547886695);
        sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$3;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache = $composer_1;
        var tmp$ret$2;
        // Inline function 'kotlin.let' call
        var tmp0_let = tmp0_cache.nz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$1;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_1;
        if (false ? true : tmp0_let === Companion_getInstance_0().sy_1) {
          var tmp$ret$0;
          // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$0 = Surface$composable$lambda$lambda;
          var value = tmp$ret$0;
          tmp0_cache.oz(value);
          tmp_1 = value;
        } else {
          tmp_1 = tmp0_let;
        }
        tmp$ret$1 = tmp_1;
        tmp$ret$2 = tmp$ret$1;
        var tmp_2 = tmp$ret$2;
        tmp$ret$3 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
        var tmp0 = tmp$ret$3;
        $composer_1.zy();
        tmp$ret$4 = tmp0;
        var tmp_3 = semantics(tmp_0, false, tmp$ret$4);
        var tmp$ret$9;
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var tmp1_remember$composable = $composer_0;
        var $composer_2 = tmp1_remember$composable;
        $composer_2.yy(547886695);
        sourceInformation($composer_2, 'CC(remember$composable):Composables.kt#9igjgp');
        var tmp$ret$8;
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp0_cache_0 = $composer_2;
        var tmp$ret$7;
        // Inline function 'kotlin.let' call
        var tmp0_let_0 = tmp0_cache_0.nz();
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$6;
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_4;
        if (false ? true : tmp0_let_0 === Companion_getInstance_0().sy_1) {
          var tmp$ret$5;
          // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
          tmp$ret$5 = Surface$composable$lambda$slambda_0(null);
          var value_0 = tmp$ret$5;
          tmp0_cache_0.oz(value_0);
          tmp_4 = value_0;
        } else {
          tmp_4 = tmp0_let_0;
        }
        tmp$ret$6 = tmp_4;
        tmp$ret$7 = tmp$ret$6;
        var tmp_5 = tmp$ret$7;
        tmp$ret$8 = (tmp_5 == null ? true : isObject(tmp_5)) ? tmp_5 : THROW_CCE();
        var tmp0_0 = tmp$ret$8;
        $composer_2.zy();
        tmp$ret$9 = tmp0_0;
        var tmp2_Box$composable = pointerInput(tmp_3, Unit_getInstance(), tmp$ret$9);
        var tmp3_Box$composable = null;
        var tmp4_Box$composable = $composer_0;
        var modifier = tmp2_Box$composable;
        var contentAlignment = tmp3_Box$composable;
        var propagateMinConstraints = true;
        var $composer_3 = tmp4_Box$composable;
        $composer_3.yy(1330882304);
        sourceInformation($composer_3, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
        if (!(0 === 0))
          modifier = Companion_getInstance_1();
        if (!(2 === 0))
          contentAlignment = Companion_getInstance_2().h3s_1;
        if (!(0 === 0))
          propagateMinConstraints = false;
        var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_3, 48);
        // Inline function 'androidx.compose.ui.layout.Layout$composable' call
        var tmp0_Layout$composable = modifier;
        var tmp1_Layout$composable = $composer_3;
        var tmp2_Layout$composable = 0;
        var modifier_0 = tmp0_Layout$composable;
        var $composer_4 = tmp1_Layout$composable;
        $composer_4.yy(1725976829);
        sourceInformation($composer_4, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
        if (!(0 === 0))
          modifier_0 = Companion_getInstance_1();
        var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_4, 0);
        var localMap = $composer_4.wz();
        // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
        var tmp0_ReusableComposeNode$composable = Companion_getInstance_3().o4l_1;
        var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
        var tmp2_ReusableComposeNode$composable = $composer_4;
        var tmp3_ReusableComposeNode$composable = 6 | 7168 & tmp2_Layout$composable << 9;
        var $composer_5 = tmp2_ReusableComposeNode$composable;
        var tmp_6 = $composer_5.ty();
        if (!isInterface(tmp_6, Applier)) {
          invalidApplier();
        }
        $composer_5.iz();
        if ($composer_5.uy()) {
          $composer_5.jz(tmp0_ReusableComposeNode$composable);
        } else {
          $composer_5.kz();
        }
        // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
        var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_5);
        Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_3().t4l_1);
        Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_3().s4l_1);
        var tmp$ret$11;
        // Inline function 'androidx.compose.runtime.Updater.set' call
        var tmp0_set = Companion_getInstance_3().w4l_1;
        var tmp$ret$10;
        // Inline function 'kotlin.with' call
        var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
        // Inline function 'kotlin.contracts.contract' call
        var tmp_7;
        if (tmp0_with.uy() ? true : !equals(tmp0_with.nz(), compositeKeyHash)) {
          tmp0_with.oz(compositeKeyHash);
          _Updater___get_composer__impl__9ty7av(tmp4_anonymous).mz(compositeKeyHash, tmp0_set);
          tmp_7 = Unit_getInstance();
        }
        tmp$ret$10 = tmp_7;
        tmp$ret$11 = tmp$ret$10;
        tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_5)), $composer_5, 112 & tmp3_ReusableComposeNode$composable >> 3);
        $composer_5.yy(2058660585);
        // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
        var tmp3_anonymous = $composer_5;
        var tmp4_anonymous_0 = 14 & tmp3_ReusableComposeNode$composable >> 9;
        var $composer_6 = tmp3_anonymous;
        sourceInformationMarkerStart($composer_6, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
        // Inline function 'androidx.compose.material3.Surface$composable.<anonymous>.<anonymous>.<anonymous>' call
        var tmp5_anonymous = BoxScopeInstance_getInstance();
        var tmp6_anonymous = $composer_6;
        var tmp7_anonymous = 6;
        var $composer_7 = tmp6_anonymous;
        sourceInformationMarkerStart($composer_7, 675025957, 'C131@6154L9:Surface.kt#uh7d8r');
        $content($composer_7, 14 & $$changed >> 21);
        sourceInformationMarkerEnd($composer_7);
        sourceInformationMarkerEnd($composer_6);
        $composer_5.zy();
        $composer_5.lz();
        $composer_4.zy();
        $composer_3.zy();
        var tmp_8;
        if (isTraceInProgress()) {
          traceEventEnd();
          tmp_8 = Unit_getInstance();
        }
        tmp = tmp_8;
      } else {
        $composer_0.hz();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function ProvideTextStyle$composable(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(915084672);
    sourceInformation($composer_0, 'C(ProvideTextStyle$composable)P(1)358@14903L7,359@14928L80:Text.kt#uh7d8r');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.pz(value) ? 4 : 2);
    if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.tz(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(915084672, $dirty, -1, 'androidx.compose.material3.ProvideTextStyle$composable (Text.kt:357)');
      }
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalTextStyle();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var mergedStyle = tmp0.m3c(value);
      CompositionLocalProvider$composable([get_LocalTextStyle().g1e(mergedStyle)], content, $composer_0, 112 & $dirty);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    var tmp0_safe_receiver = $composer_0.dz();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.l1e(ProvideTextStyle$composable$lambda(value, content, $changed));
    }
  }
  function Text$composable(text, modifier, color, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(-1760961850);
    sourceInformation($composer_0, 'C(Text$composable)P(14,9,0:c#ui.graphics.Color,2:c#ui.unit.TextUnit,3:c#ui.text.font.FontStyle,4!1,5:c#ui.unit.TextUnit,16,15:c#ui.text.style.TextAlign,6:c#ui.unit.TextUnit,11:c#ui.text.style.TextOverflow,12)107@5541L2,108@5583L7,131@6301L162:Text.kt#uh7d8r');
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.pz(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.pz(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.sz(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.o2s_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.sz(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.l24_1)) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.pz(fontStyle_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.pz(fontWeight_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.pz(fontFamily_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.sz(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.l24_1)) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.pz(textDecoration_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 1879048192) === 0)
      $dirty = $dirty | ($composer_0.pz(textAlign_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 14) === 0)
      $dirty1 = $dirty1 | ($composer_0.sz(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.l24_1)) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 112) === 0)
      $dirty1 = $dirty1 | ($composer_0.rz(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.j3m_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 896) === 0)
      $dirty1 = $dirty1 | ($composer_0.qz(softWrap_0._v) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 7168) === 0)
      $dirty1 = $dirty1 | ($composer_0.rz(maxLines_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 57344) === 0)
      $dirty1 = $dirty1 | ($composer_0.rz(minLines_0._v) ? 16384 : 8192);
    if (($changed1 & 458752) === 0)
      $dirty1 = $dirty1 | ((($default & 32768) === 0 ? $composer_0.tz(onTextLayout_0._v) : false) ? 131072 : 65536);
    if (($changed1 & 3670016) === 0)
      $dirty1 = $dirty1 | ((($default & 65536) === 0 ? $composer_0.pz(style_0._v) : false) ? 1048576 : 524288);
    if ((!(($dirty & 1533916891) === 306783378) ? true : !(($dirty1 & 2995931) === 599186)) ? true : !$composer_0.vy()) {
      $composer_0.az();
      if (($changed & 1) === 0 ? true : $composer_0.wy()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_getInstance_1();
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance().f2t_1);
        }
        if (!(($default & 8) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_4().j24_1);
        }
        if (!(($default & 16) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 32) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_4().j24_1);
        }
        if (!(($default & 256) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 512) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_4().j24_1);
        }
        if (!(($default & 2048) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_5().g3m_1);
        }
        if (!(($default & 4096) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 8192) === 0)) {
          maxLines_0._v = IntCompanionObject_getInstance().MAX_VALUE;
        }
        if (!(($default & 16384) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 32768) === 0)) {
          // Inline function 'androidx.compose.runtime.remember$composable' call
          var $composer_1 = $composer_0;
          $composer_1.yy(547886695);
          sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var tmp0_let = $composer_1.nz();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
          var tmp_1;
          if (false ? true : tmp0_let === Companion_getInstance_0().sy_1) {
            // Inline function 'androidx.compose.material3.Text$composable.<anonymous>' call
            var value = Text$composable$lambda;
            $composer_1.oz(value);
            tmp_1 = value;
          } else {
            tmp_1 = tmp0_let;
          }
          var tmp_2 = tmp_1;
          var tmp0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
          $composer_1.zy();
          onTextLayout_0._v = tmp0;
          $dirty1 = $dirty1 & -458753;
        }
        if (!(($default & 65536) === 0)) {
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp1_$get_current$$composable_gn3xww = get_LocalTextStyle();
          var $composer_2 = $composer_0;
          sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_0 = $composer_2.xz(tmp1_$get_current$$composable_gn3xww);
          sourceInformationMarkerEnd($composer_2);
          style_0._v = tmp0_0;
          $dirty1 = $dirty1 & -3670017;
        }
      } else {
        $composer_0.hz();
        if (!(($default & 32768) === 0))
          $dirty1 = $dirty1 & -458753;
        if (!(($default & 65536) === 0))
          $dirty1 = $dirty1 & -3670017;
      }
      $composer_0.bz();
      if (isTraceInProgress()) {
        traceEventStart(-1760961850, $dirty, $dirty1, 'androidx.compose.material3.Text$composable (Text.kt:91)');
      }
      $composer_0.yy(-502032011);
      sourceInformation($composer_0, '*113@5698L7');
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var tmp3_takeOrElse = color_0._v.o2s_1;
      var tmp_3;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(tmp3_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
        tmp_3 = tmp3_takeOrElse;
      } else {
        // Inline function 'androidx.compose.material3.Text$composable.<anonymous>' call
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var tmp0_takeOrElse = style_0._v.g32();
        var tmp_4;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(tmp0_takeOrElse), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
          tmp_4 = tmp0_takeOrElse;
        } else {
          // Inline function 'androidx.compose.material3.Text$composable.<anonymous>.<anonymous>' call
          // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
          var tmp0_$get_current$$composable_h5ksy7 = get_LocalContentColor();
          var $composer_3 = $composer_0;
          sourceInformationMarkerStart($composer_3, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
          var tmp0_1 = $composer_3.xz(tmp0_$get_current$$composable_h5ksy7);
          sourceInformationMarkerEnd($composer_3);
          tmp_4 = tmp0_1.o2s_1;
        }
        tmp_3 = tmp_4;
      }
      var tmp0_group = tmp_3;
      $composer_0.zy();
      var textColor = tmp0_group;
      var tmp_5 = style_0._v;
      var tmp_6 = fontSize_0._v.l24_1;
      var tmp_7 = fontWeight_0._v;
      var tmp_8 = fontStyle_0._v;
      var tmp_9 = tmp_8 == null ? null : tmp_8.s3k_1;
      var tmp_10 = fontFamily_0._v;
      var tmp_11 = letterSpacing_0._v.l24_1;
      var tmp_12 = textDecoration_0._v;
      var tmp_13 = textAlign_0._v;
      var mergedStyle = tmp_5.m3c(TextStyle_init_$Create$(textColor, tmp_6, tmp_7, tmp_9, VOID, tmp_10, VOID, tmp_11, VOID, VOID, VOID, VOID, tmp_12, VOID, VOID, tmp_13 == null ? null : tmp_13.q3l_1, VOID, lineHeight_0._v.l24_1));
      var tmp_14 = modifier_0._v;
      var tmp_15 = onTextLayout_0._v;
      var tmp_16 = overflow_0._v.j3m_1;
      var tmp_17 = softWrap_0._v;
      var tmp_18 = maxLines_0._v;
      var tmp_19 = minLines_0._v;
      BasicText$composable(text, tmp_14, mergedStyle, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, null, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 6 | 57344 & $dirty1 << 9 | 458752 & $dirty1 << 9 | 3670016 & $dirty1 << 9 | 29360128 & $dirty1 << 9, 256);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    var tmp1_safe_receiver = $composer_0.dz();
    if (tmp1_safe_receiver === null)
      null;
    else {
      tmp1_safe_receiver.l1e(Text$composable$lambda_0(text, modifier_0, color_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function ProvideTextStyle$composable$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle$composable($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Text$composable$lambda(it) {
    _init_properties_Text_kt__l2j80d();
    return Unit_getInstance();
  }
  function Text$composable$lambda_0($text, $modifier, $color, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v.o2s_1;
      var tmp_1 = $fontSize._v.l24_1;
      var tmp_2 = $fontStyle._v;
      var tmp_3 = tmp_2 == null ? null : tmp_2.s3k_1;
      var tmp_4 = $fontWeight._v;
      var tmp_5 = $fontFamily._v;
      var tmp_6 = $letterSpacing._v.l24_1;
      var tmp_7 = $textDecoration._v;
      var tmp_8 = $textAlign._v;
      Text$composable($text, tmp, tmp_0, tmp_1, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8 == null ? null : tmp_8.q3l_1, $lineHeight._v.l24_1, $overflow._v.j3m_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  function get_LocalTypography() {
    _init_properties_Typography_kt__rm3fch();
    return LocalTypography;
  }
  var LocalTypography;
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    displayLarge = displayLarge === VOID ? TypographyTokens_getInstance().n6x_1 : displayLarge;
    displayMedium = displayMedium === VOID ? TypographyTokens_getInstance().o6x_1 : displayMedium;
    displaySmall = displaySmall === VOID ? TypographyTokens_getInstance().p6x_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? TypographyTokens_getInstance().q6x_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? TypographyTokens_getInstance().r6x_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? TypographyTokens_getInstance().s6x_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? TypographyTokens_getInstance().w6x_1 : titleLarge;
    titleMedium = titleMedium === VOID ? TypographyTokens_getInstance().x6x_1 : titleMedium;
    titleSmall = titleSmall === VOID ? TypographyTokens_getInstance().y6x_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? TypographyTokens_getInstance().k6x_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? TypographyTokens_getInstance().l6x_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? TypographyTokens_getInstance().m6x_1 : bodySmall;
    labelLarge = labelLarge === VOID ? TypographyTokens_getInstance().t6x_1 : labelLarge;
    labelMedium = labelMedium === VOID ? TypographyTokens_getInstance().u6x_1 : labelMedium;
    labelSmall = labelSmall === VOID ? TypographyTokens_getInstance().v6x_1 : labelSmall;
    this.o6v_1 = displayLarge;
    this.p6v_1 = displayMedium;
    this.q6v_1 = displaySmall;
    this.r6v_1 = headlineLarge;
    this.s6v_1 = headlineMedium;
    this.t6v_1 = headlineSmall;
    this.u6v_1 = titleLarge;
    this.v6v_1 = titleMedium;
    this.w6v_1 = titleSmall;
    this.x6v_1 = bodyLarge;
    this.y6v_1 = bodyMedium;
    this.z6v_1 = bodySmall;
    this.a6w_1 = labelLarge;
    this.b6w_1 = labelMedium;
    this.c6w_1 = labelSmall;
    this.d6w_1 = 0;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.o6v_1.equals(other.o6v_1))
      return false;
    if (!this.p6v_1.equals(other.p6v_1))
      return false;
    if (!this.q6v_1.equals(other.q6v_1))
      return false;
    if (!this.r6v_1.equals(other.r6v_1))
      return false;
    if (!this.s6v_1.equals(other.s6v_1))
      return false;
    if (!this.t6v_1.equals(other.t6v_1))
      return false;
    if (!this.u6v_1.equals(other.u6v_1))
      return false;
    if (!this.v6v_1.equals(other.v6v_1))
      return false;
    if (!this.w6v_1.equals(other.w6v_1))
      return false;
    if (!this.x6v_1.equals(other.x6v_1))
      return false;
    if (!this.y6v_1.equals(other.y6v_1))
      return false;
    if (!this.z6v_1.equals(other.z6v_1))
      return false;
    if (!this.a6w_1.equals(other.a6w_1))
      return false;
    if (!this.b6w_1.equals(other.b6w_1))
      return false;
    if (!this.c6w_1.equals(other.c6w_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.o6v_1.hashCode();
    result = imul(31, result) + this.p6v_1.hashCode() | 0;
    result = imul(31, result) + this.q6v_1.hashCode() | 0;
    result = imul(31, result) + this.r6v_1.hashCode() | 0;
    result = imul(31, result) + this.s6v_1.hashCode() | 0;
    result = imul(31, result) + this.t6v_1.hashCode() | 0;
    result = imul(31, result) + this.u6v_1.hashCode() | 0;
    result = imul(31, result) + this.v6v_1.hashCode() | 0;
    result = imul(31, result) + this.w6v_1.hashCode() | 0;
    result = imul(31, result) + this.x6v_1.hashCode() | 0;
    result = imul(31, result) + this.y6v_1.hashCode() | 0;
    result = imul(31, result) + this.z6v_1.hashCode() | 0;
    result = imul(31, result) + this.a6w_1.hashCode() | 0;
    result = imul(31, result) + this.b6w_1.hashCode() | 0;
    result = imul(31, result) + this.c6w_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.o6v_1 + ', displayMedium=' + this.p6v_1 + ',' + ('displaySmall=' + this.q6v_1 + ', ') + ('headlineLarge=' + this.r6v_1 + ', headlineMedium=' + this.s6v_1 + ',') + (' headlineSmall=' + this.t6v_1 + ', ') + ('titleLarge=' + this.u6v_1 + ', titleMedium=' + this.v6v_1 + ', titleSmall=' + this.w6v_1 + ', ') + ('bodyLarge=' + this.x6v_1 + ', bodyMedium=' + this.y6v_1 + ', bodySmall=' + this.z6v_1 + ', ') + ('labelLarge=' + this.a6w_1 + ', labelMedium=' + this.b6w_1 + ', labelSmall=' + this.c6w_1 + ')');
  };
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return new Typography();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
    }
  }
  function ColorDarkTokens() {
    ColorDarkTokens_instance = this;
    this.h6u_1 = PaletteTokens_getInstance().o6y_1;
    this.i6u_1 = PaletteTokens_getInstance().j6y_1;
    this.j6u_1 = PaletteTokens_getInstance().e6y_1;
    this.k6u_1 = PaletteTokens_getInstance().q6y_1;
    this.l6u_1 = PaletteTokens_getInstance().s6z_1;
    this.m6u_1 = PaletteTokens_getInstance().x6y_1;
    this.n6u_1 = PaletteTokens_getInstance().x6y_1;
    this.o6u_1 = PaletteTokens_getInstance().d6y_1;
    this.p6u_1 = PaletteTokens_getInstance().k6y_1;
    this.q6u_1 = PaletteTokens_getInstance().q6z_1;
    this.r6u_1 = PaletteTokens_getInstance().x6z_1;
    this.s6u_1 = PaletteTokens_getInstance().d70_1;
    this.t6u_1 = PaletteTokens_getInstance().k70_1;
    this.u6u_1 = PaletteTokens_getInstance().x6y_1;
    this.v6u_1 = PaletteTokens_getInstance().j6z_1;
    this.w6u_1 = PaletteTokens_getInstance().q70_1;
    this.x6u_1 = PaletteTokens_getInstance().x70_1;
    this.y6u_1 = PaletteTokens_getInstance().h6z_1;
    this.z6u_1 = PaletteTokens_getInstance().e6z_1;
    this.a6v_1 = PaletteTokens_getInstance().w6z_1;
    this.b6v_1 = PaletteTokens_getInstance().r6z_1;
    this.c6v_1 = PaletteTokens_getInstance().n6y_1;
    this.d6v_1 = PaletteTokens_getInstance().j70_1;
    this.e6v_1 = PaletteTokens_getInstance().e70_1;
    this.f6v_1 = PaletteTokens_getInstance().o6y_1;
    this.g6v_1 = this.a6v_1;
    this.h6v_1 = PaletteTokens_getInstance().e6z_1;
    this.i6v_1 = PaletteTokens_getInstance().w70_1;
    this.j6v_1 = PaletteTokens_getInstance().r70_1;
  }
  var ColorDarkTokens_instance;
  function ColorDarkTokens_getInstance() {
    if (ColorDarkTokens_instance == null)
      new ColorDarkTokens();
    return ColorDarkTokens_instance;
  }
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.e6t_1 = PaletteTokens_getInstance().z6y_1;
    this.f6t_1 = PaletteTokens_getInstance().f6y_1;
    this.g6t_1 = PaletteTokens_getInstance().k6y_1;
    this.h6t_1 = PaletteTokens_getInstance().y6y_1;
    this.i6t_1 = PaletteTokens_getInstance().w6z_1;
    this.j6t_1 = PaletteTokens_getInstance().q6y_1;
    this.k6t_1 = PaletteTokens_getInstance().o6y_1;
    this.l6t_1 = PaletteTokens_getInstance().c6y_1;
    this.m6t_1 = PaletteTokens_getInstance().b6y_1;
    this.n6t_1 = PaletteTokens_getInstance().p6z_1;
    this.o6t_1 = PaletteTokens_getInstance().o6z_1;
    this.p6t_1 = PaletteTokens_getInstance().c70_1;
    this.q6t_1 = PaletteTokens_getInstance().b70_1;
    this.r6t_1 = PaletteTokens_getInstance().o6y_1;
    this.s6t_1 = PaletteTokens_getInstance().e6z_1;
    this.t6t_1 = PaletteTokens_getInstance().p70_1;
    this.u6t_1 = PaletteTokens_getInstance().o70_1;
    this.v6t_1 = PaletteTokens_getInstance().g6z_1;
    this.w6t_1 = PaletteTokens_getInstance().j6z_1;
    this.x6t_1 = PaletteTokens_getInstance().s6z_1;
    this.y6t_1 = PaletteTokens_getInstance().x6z_1;
    this.z6t_1 = PaletteTokens_getInstance().n6y_1;
    this.a6u_1 = PaletteTokens_getInstance().f70_1;
    this.b6u_1 = PaletteTokens_getInstance().k70_1;
    this.c6u_1 = PaletteTokens_getInstance().z6y_1;
    this.d6u_1 = this.x6t_1;
    this.e6u_1 = PaletteTokens_getInstance().k6z_1;
    this.f6u_1 = PaletteTokens_getInstance().s70_1;
    this.g6u_1 = PaletteTokens_getInstance().x70_1;
  }
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.z6x_1 = Color_0(0, 0, 0);
    this.a6y_1 = Color_0(0, 0, 0);
    this.b6y_1 = Color_0(65, 14, 11);
    this.c6y_1 = Color_0(255, 255, 255);
    this.d6y_1 = Color_0(96, 20, 16);
    this.e6y_1 = Color_0(140, 29, 24);
    this.f6y_1 = Color_0(179, 38, 30);
    this.g6y_1 = Color_0(220, 54, 46);
    this.h6y_1 = Color_0(228, 105, 98);
    this.i6y_1 = Color_0(236, 146, 142);
    this.j6y_1 = Color_0(242, 184, 181);
    this.k6y_1 = Color_0(249, 222, 220);
    this.l6y_1 = Color_0(252, 238, 238);
    this.m6y_1 = Color_0(255, 251, 249);
    this.n6y_1 = Color_0(0, 0, 0);
    this.o6y_1 = Color_0(28, 27, 31);
    this.p6y_1 = Color_0(255, 255, 255);
    this.q6y_1 = Color_0(49, 48, 51);
    this.r6y_1 = Color_0(72, 70, 73);
    this.s6y_1 = Color_0(96, 93, 98);
    this.t6y_1 = Color_0(120, 117, 121);
    this.u6y_1 = Color_0(147, 144, 148);
    this.v6y_1 = Color_0(174, 170, 174);
    this.w6y_1 = Color_0(201, 197, 202);
    this.x6y_1 = Color_0(230, 225, 229);
    this.y6y_1 = Color_0(244, 239, 244);
    this.z6y_1 = Color_0(255, 251, 254);
    this.a6z_1 = Color_0(0, 0, 0);
    this.b6z_1 = Color_0(29, 26, 34);
    this.c6z_1 = Color_0(255, 255, 255);
    this.d6z_1 = Color_0(50, 47, 55);
    this.e6z_1 = Color_0(73, 69, 79);
    this.f6z_1 = Color_0(96, 93, 102);
    this.g6z_1 = Color_0(121, 116, 126);
    this.h6z_1 = Color_0(147, 143, 153);
    this.i6z_1 = Color_0(174, 169, 180);
    this.j6z_1 = Color_0(202, 196, 208);
    this.k6z_1 = Color_0(231, 224, 236);
    this.l6z_1 = Color_0(245, 238, 250);
    this.m6z_1 = Color_0(255, 251, 254);
    this.n6z_1 = Color_0(0, 0, 0);
    this.o6z_1 = Color_0(33, 0, 93);
    this.p6z_1 = Color_0(255, 255, 255);
    this.q6z_1 = Color_0(56, 30, 114);
    this.r6z_1 = Color_0(79, 55, 139);
    this.s6z_1 = Color_0(103, 80, 164);
    this.t6z_1 = Color_0(127, 103, 190);
    this.u6z_1 = Color_0(154, 130, 219);
    this.v6z_1 = Color_0(182, 157, 248);
    this.w6z_1 = Color_0(208, 188, 255);
    this.x6z_1 = Color_0(234, 221, 255);
    this.y6z_1 = Color_0(246, 237, 255);
    this.z6z_1 = Color_0(255, 251, 254);
    this.a70_1 = Color_0(0, 0, 0);
    this.b70_1 = Color_0(29, 25, 43);
    this.c70_1 = Color_0(255, 255, 255);
    this.d70_1 = Color_0(51, 45, 65);
    this.e70_1 = Color_0(74, 68, 88);
    this.f70_1 = Color_0(98, 91, 113);
    this.g70_1 = Color_0(122, 114, 137);
    this.h70_1 = Color_0(149, 141, 165);
    this.i70_1 = Color_0(176, 167, 192);
    this.j70_1 = Color_0(204, 194, 220);
    this.k70_1 = Color_0(232, 222, 248);
    this.l70_1 = Color_0(246, 237, 255);
    this.m70_1 = Color_0(255, 251, 254);
    this.n70_1 = Color_0(0, 0, 0);
    this.o70_1 = Color_0(49, 17, 29);
    this.p70_1 = Color_0(255, 255, 255);
    this.q70_1 = Color_0(73, 37, 50);
    this.r70_1 = Color_0(99, 59, 72);
    this.s70_1 = Color_0(125, 82, 96);
    this.t70_1 = Color_0(152, 105, 119);
    this.u70_1 = Color_0(181, 131, 146);
    this.v70_1 = Color_0(210, 157, 172);
    this.w70_1 = Color_0(239, 184, 200);
    this.x70_1 = Color_0(255, 216, 228);
    this.y70_1 = Color_0(255, 236, 241);
    this.z70_1 = Color_0(255, 251, 250);
    this.a71_1 = Color_0(255, 255, 255);
  }
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$0 = _Dp___init__impl__ms3zkb(28.0);
    tmp.q6w_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_1 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_2 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
    var tmp$ret$4;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$4 = _Dp___init__impl__ms3zkb(0.0);
    tmp_0.r6w_1 = RoundedCornerShape_0(tmp_1, tmp_2, tmp_3, tmp$ret$4);
    var tmp_4 = this;
    var tmp$ret$5;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$5 = _Dp___init__impl__ms3zkb(4.0);
    tmp_4.s6w_1 = RoundedCornerShape(tmp$ret$5);
    var tmp_5 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_6 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_7 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_8 = _Dp___init__impl__ms3zkb(0.0);
    var tmp$ret$9;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$9 = _Dp___init__impl__ms3zkb(0.0);
    tmp_5.t6w_1 = RoundedCornerShape_0(tmp_6, tmp_7, tmp_8, tmp$ret$9);
    this.u6w_1 = get_CircleShape();
    var tmp_9 = this;
    var tmp$ret$10;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$10 = _Dp___init__impl__ms3zkb(16.0);
    tmp_9.v6w_1 = RoundedCornerShape(tmp$ret$10);
    var tmp_10 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_11 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_12 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_13 = _Dp___init__impl__ms3zkb(16.0);
    var tmp$ret$14;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$14 = _Dp___init__impl__ms3zkb(0.0);
    tmp_10.w6w_1 = RoundedCornerShape_0(tmp_11, tmp_12, tmp_13, tmp$ret$14);
    var tmp_14 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_15 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_16 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_17 = _Dp___init__impl__ms3zkb(0.0);
    var tmp$ret$18;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$18 = _Dp___init__impl__ms3zkb(0.0);
    tmp_14.x6w_1 = RoundedCornerShape_0(tmp_15, tmp_16, tmp_17, tmp$ret$18);
    var tmp_18 = this;
    var tmp$ret$19;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$19 = _Dp___init__impl__ms3zkb(12.0);
    tmp_18.y6w_1 = RoundedCornerShape(tmp$ret$19);
    this.z6w_1 = get_RectangleShape();
    var tmp_19 = this;
    var tmp$ret$20;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$20 = _Dp___init__impl__ms3zkb(8.0);
    tmp_19.a6x_1 = RoundedCornerShape(tmp$ret$20);
  }
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  function StateTokens() {
    StateTokens_instance = this;
    this.b71_1 = 0.16;
    this.c71_1 = 0.12;
    this.d71_1 = 0.08;
    this.e71_1 = 0.12;
  }
  var StateTokens_instance;
  function StateTokens_getInstance() {
    if (StateTokens_instance == null)
      new StateTokens();
    return StateTokens_instance;
  }
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.f71_1 = TypefaceTokens_getInstance().d74_1;
    this.g71_1 = get_sp(24.0);
    this.h71_1 = get_sp_0(16);
    this.i71_1 = get_sp(0.5);
    this.j71_1 = TypefaceTokens_getInstance().g74_1;
    this.k71_1 = TypefaceTokens_getInstance().d74_1;
    this.l71_1 = get_sp(20.0);
    this.m71_1 = get_sp_0(14);
    this.n71_1 = get_sp(0.2);
    this.o71_1 = TypefaceTokens_getInstance().g74_1;
    this.p71_1 = TypefaceTokens_getInstance().d74_1;
    this.q71_1 = get_sp(16.0);
    this.r71_1 = get_sp_0(12);
    this.s71_1 = get_sp(0.4);
    this.t71_1 = TypefaceTokens_getInstance().g74_1;
    this.u71_1 = TypefaceTokens_getInstance().c74_1;
    this.v71_1 = get_sp(64.0);
    this.w71_1 = get_sp_0(57);
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var tmp0_unaryMinus = get_sp(0.2);
    checkArithmetic(tmp0_unaryMinus);
    tmp.x71_1 = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0_unaryMinus), -_TextUnit___get_value__impl__hpbx0k(tmp0_unaryMinus));
    this.y71_1 = TypefaceTokens_getInstance().g74_1;
    this.z71_1 = TypefaceTokens_getInstance().c74_1;
    this.a72_1 = get_sp(52.0);
    this.b72_1 = get_sp_0(45);
    this.c72_1 = get_sp(0.0);
    this.d72_1 = TypefaceTokens_getInstance().g74_1;
    this.e72_1 = TypefaceTokens_getInstance().c74_1;
    this.f72_1 = get_sp(44.0);
    this.g72_1 = get_sp_0(36);
    this.h72_1 = get_sp(0.0);
    this.i72_1 = TypefaceTokens_getInstance().g74_1;
    this.j72_1 = TypefaceTokens_getInstance().c74_1;
    this.k72_1 = get_sp(40.0);
    this.l72_1 = get_sp_0(32);
    this.m72_1 = get_sp(0.0);
    this.n72_1 = TypefaceTokens_getInstance().g74_1;
    this.o72_1 = TypefaceTokens_getInstance().c74_1;
    this.p72_1 = get_sp(36.0);
    this.q72_1 = get_sp_0(28);
    this.r72_1 = get_sp(0.0);
    this.s72_1 = TypefaceTokens_getInstance().g74_1;
    this.t72_1 = TypefaceTokens_getInstance().c74_1;
    this.u72_1 = get_sp(32.0);
    this.v72_1 = get_sp_0(24);
    this.w72_1 = get_sp(0.0);
    this.x72_1 = TypefaceTokens_getInstance().g74_1;
    this.y72_1 = TypefaceTokens_getInstance().d74_1;
    this.z72_1 = get_sp(20.0);
    this.a73_1 = get_sp_0(14);
    this.b73_1 = get_sp(0.1);
    this.c73_1 = TypefaceTokens_getInstance().f74_1;
    this.d73_1 = TypefaceTokens_getInstance().d74_1;
    this.e73_1 = get_sp(16.0);
    this.f73_1 = get_sp_0(12);
    this.g73_1 = get_sp(0.5);
    this.h73_1 = TypefaceTokens_getInstance().f74_1;
    this.i73_1 = TypefaceTokens_getInstance().d74_1;
    this.j73_1 = get_sp(16.0);
    this.k73_1 = get_sp_0(11);
    this.l73_1 = get_sp(0.5);
    this.m73_1 = TypefaceTokens_getInstance().f74_1;
    this.n73_1 = TypefaceTokens_getInstance().c74_1;
    this.o73_1 = get_sp(28.0);
    this.p73_1 = get_sp_0(22);
    this.q73_1 = get_sp(0.0);
    this.r73_1 = TypefaceTokens_getInstance().g74_1;
    this.s73_1 = TypefaceTokens_getInstance().d74_1;
    this.t73_1 = get_sp(24.0);
    this.u73_1 = get_sp_0(16);
    this.v73_1 = get_sp(0.2);
    this.w73_1 = TypefaceTokens_getInstance().f74_1;
    this.x73_1 = TypefaceTokens_getInstance().d74_1;
    this.y73_1 = get_sp(20.0);
    this.z73_1 = get_sp_0(14);
    this.a74_1 = get_sp(0.1);
    this.b74_1 = TypefaceTokens_getInstance().f74_1;
  }
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.c74_1 = Companion_getInstance_6().a3b_1;
    this.d74_1 = Companion_getInstance_6().a3b_1;
    this.e74_1 = Companion_getInstance_7().p3a_1;
    this.f74_1 = Companion_getInstance_7().n3a_1;
    this.g74_1 = Companion_getInstance_7().m3a_1;
  }
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  function get_DefaultTextStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  function TypographyTokens() {
    TypographyTokens_instance = this;
    var tmp = this;
    var tmp0_$this = get_DefaultTextStyle();
    var tmp1_fontFamily = TypeScaleTokens_getInstance().f71_1;
    var tmp2_fontWeight = TypeScaleTokens_getInstance().j71_1;
    var tmp3_fontSize = TypeScaleTokens_getInstance().h71_1;
    var tmp4_lineHeight = TypeScaleTokens_getInstance().g71_1;
    var tmp5_letterSpacing = TypeScaleTokens_getInstance().i71_1;
    tmp.k6x_1 = tmp0_$this.o3c(VOID, tmp3_fontSize, tmp2_fontWeight, VOID, VOID, tmp1_fontFamily, VOID, tmp5_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight);
    var tmp_0 = this;
    var tmp0_$this_0 = get_DefaultTextStyle();
    var tmp1_fontFamily_0 = TypeScaleTokens_getInstance().k71_1;
    var tmp2_fontWeight_0 = TypeScaleTokens_getInstance().o71_1;
    var tmp3_fontSize_0 = TypeScaleTokens_getInstance().m71_1;
    var tmp4_lineHeight_0 = TypeScaleTokens_getInstance().l71_1;
    var tmp5_letterSpacing_0 = TypeScaleTokens_getInstance().n71_1;
    tmp_0.l6x_1 = tmp0_$this_0.o3c(VOID, tmp3_fontSize_0, tmp2_fontWeight_0, VOID, VOID, tmp1_fontFamily_0, VOID, tmp5_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_0);
    var tmp_1 = this;
    var tmp0_$this_1 = get_DefaultTextStyle();
    var tmp1_fontFamily_1 = TypeScaleTokens_getInstance().p71_1;
    var tmp2_fontWeight_1 = TypeScaleTokens_getInstance().t71_1;
    var tmp3_fontSize_1 = TypeScaleTokens_getInstance().r71_1;
    var tmp4_lineHeight_1 = TypeScaleTokens_getInstance().q71_1;
    var tmp5_letterSpacing_1 = TypeScaleTokens_getInstance().s71_1;
    tmp_1.m6x_1 = tmp0_$this_1.o3c(VOID, tmp3_fontSize_1, tmp2_fontWeight_1, VOID, VOID, tmp1_fontFamily_1, VOID, tmp5_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_1);
    var tmp_2 = this;
    var tmp0_$this_2 = get_DefaultTextStyle();
    var tmp1_fontFamily_2 = TypeScaleTokens_getInstance().u71_1;
    var tmp2_fontWeight_2 = TypeScaleTokens_getInstance().y71_1;
    var tmp3_fontSize_2 = TypeScaleTokens_getInstance().w71_1;
    var tmp4_lineHeight_2 = TypeScaleTokens_getInstance().v71_1;
    var tmp5_letterSpacing_2 = TypeScaleTokens_getInstance().x71_1;
    tmp_2.n6x_1 = tmp0_$this_2.o3c(VOID, tmp3_fontSize_2, tmp2_fontWeight_2, VOID, VOID, tmp1_fontFamily_2, VOID, tmp5_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_2);
    var tmp_3 = this;
    var tmp0_$this_3 = get_DefaultTextStyle();
    var tmp1_fontFamily_3 = TypeScaleTokens_getInstance().z71_1;
    var tmp2_fontWeight_3 = TypeScaleTokens_getInstance().d72_1;
    var tmp3_fontSize_3 = TypeScaleTokens_getInstance().b72_1;
    var tmp4_lineHeight_3 = TypeScaleTokens_getInstance().a72_1;
    var tmp5_letterSpacing_3 = TypeScaleTokens_getInstance().c72_1;
    tmp_3.o6x_1 = tmp0_$this_3.o3c(VOID, tmp3_fontSize_3, tmp2_fontWeight_3, VOID, VOID, tmp1_fontFamily_3, VOID, tmp5_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_3);
    var tmp_4 = this;
    var tmp0_$this_4 = get_DefaultTextStyle();
    var tmp1_fontFamily_4 = TypeScaleTokens_getInstance().e72_1;
    var tmp2_fontWeight_4 = TypeScaleTokens_getInstance().i72_1;
    var tmp3_fontSize_4 = TypeScaleTokens_getInstance().g72_1;
    var tmp4_lineHeight_4 = TypeScaleTokens_getInstance().f72_1;
    var tmp5_letterSpacing_4 = TypeScaleTokens_getInstance().h72_1;
    tmp_4.p6x_1 = tmp0_$this_4.o3c(VOID, tmp3_fontSize_4, tmp2_fontWeight_4, VOID, VOID, tmp1_fontFamily_4, VOID, tmp5_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_4);
    var tmp_5 = this;
    var tmp0_$this_5 = get_DefaultTextStyle();
    var tmp1_fontFamily_5 = TypeScaleTokens_getInstance().j72_1;
    var tmp2_fontWeight_5 = TypeScaleTokens_getInstance().n72_1;
    var tmp3_fontSize_5 = TypeScaleTokens_getInstance().l72_1;
    var tmp4_lineHeight_5 = TypeScaleTokens_getInstance().k72_1;
    var tmp5_letterSpacing_5 = TypeScaleTokens_getInstance().m72_1;
    tmp_5.q6x_1 = tmp0_$this_5.o3c(VOID, tmp3_fontSize_5, tmp2_fontWeight_5, VOID, VOID, tmp1_fontFamily_5, VOID, tmp5_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_5);
    var tmp_6 = this;
    var tmp0_$this_6 = get_DefaultTextStyle();
    var tmp1_fontFamily_6 = TypeScaleTokens_getInstance().o72_1;
    var tmp2_fontWeight_6 = TypeScaleTokens_getInstance().s72_1;
    var tmp3_fontSize_6 = TypeScaleTokens_getInstance().q72_1;
    var tmp4_lineHeight_6 = TypeScaleTokens_getInstance().p72_1;
    var tmp5_letterSpacing_6 = TypeScaleTokens_getInstance().r72_1;
    tmp_6.r6x_1 = tmp0_$this_6.o3c(VOID, tmp3_fontSize_6, tmp2_fontWeight_6, VOID, VOID, tmp1_fontFamily_6, VOID, tmp5_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_6);
    var tmp_7 = this;
    var tmp0_$this_7 = get_DefaultTextStyle();
    var tmp1_fontFamily_7 = TypeScaleTokens_getInstance().t72_1;
    var tmp2_fontWeight_7 = TypeScaleTokens_getInstance().x72_1;
    var tmp3_fontSize_7 = TypeScaleTokens_getInstance().v72_1;
    var tmp4_lineHeight_7 = TypeScaleTokens_getInstance().u72_1;
    var tmp5_letterSpacing_7 = TypeScaleTokens_getInstance().w72_1;
    tmp_7.s6x_1 = tmp0_$this_7.o3c(VOID, tmp3_fontSize_7, tmp2_fontWeight_7, VOID, VOID, tmp1_fontFamily_7, VOID, tmp5_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_7);
    var tmp_8 = this;
    var tmp0_$this_8 = get_DefaultTextStyle();
    var tmp1_fontFamily_8 = TypeScaleTokens_getInstance().y72_1;
    var tmp2_fontWeight_8 = TypeScaleTokens_getInstance().c73_1;
    var tmp3_fontSize_8 = TypeScaleTokens_getInstance().a73_1;
    var tmp4_lineHeight_8 = TypeScaleTokens_getInstance().z72_1;
    var tmp5_letterSpacing_8 = TypeScaleTokens_getInstance().b73_1;
    tmp_8.t6x_1 = tmp0_$this_8.o3c(VOID, tmp3_fontSize_8, tmp2_fontWeight_8, VOID, VOID, tmp1_fontFamily_8, VOID, tmp5_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_8);
    var tmp_9 = this;
    var tmp0_$this_9 = get_DefaultTextStyle();
    var tmp1_fontFamily_9 = TypeScaleTokens_getInstance().d73_1;
    var tmp2_fontWeight_9 = TypeScaleTokens_getInstance().h73_1;
    var tmp3_fontSize_9 = TypeScaleTokens_getInstance().f73_1;
    var tmp4_lineHeight_9 = TypeScaleTokens_getInstance().e73_1;
    var tmp5_letterSpacing_9 = TypeScaleTokens_getInstance().g73_1;
    tmp_9.u6x_1 = tmp0_$this_9.o3c(VOID, tmp3_fontSize_9, tmp2_fontWeight_9, VOID, VOID, tmp1_fontFamily_9, VOID, tmp5_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_9);
    var tmp_10 = this;
    var tmp0_$this_10 = get_DefaultTextStyle();
    var tmp1_fontFamily_10 = TypeScaleTokens_getInstance().i73_1;
    var tmp2_fontWeight_10 = TypeScaleTokens_getInstance().m73_1;
    var tmp3_fontSize_10 = TypeScaleTokens_getInstance().k73_1;
    var tmp4_lineHeight_10 = TypeScaleTokens_getInstance().j73_1;
    var tmp5_letterSpacing_10 = TypeScaleTokens_getInstance().l73_1;
    tmp_10.v6x_1 = tmp0_$this_10.o3c(VOID, tmp3_fontSize_10, tmp2_fontWeight_10, VOID, VOID, tmp1_fontFamily_10, VOID, tmp5_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_10);
    var tmp_11 = this;
    var tmp0_$this_11 = get_DefaultTextStyle();
    var tmp1_fontFamily_11 = TypeScaleTokens_getInstance().n73_1;
    var tmp2_fontWeight_11 = TypeScaleTokens_getInstance().r73_1;
    var tmp3_fontSize_11 = TypeScaleTokens_getInstance().p73_1;
    var tmp4_lineHeight_11 = TypeScaleTokens_getInstance().o73_1;
    var tmp5_letterSpacing_11 = TypeScaleTokens_getInstance().q73_1;
    tmp_11.w6x_1 = tmp0_$this_11.o3c(VOID, tmp3_fontSize_11, tmp2_fontWeight_11, VOID, VOID, tmp1_fontFamily_11, VOID, tmp5_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_11);
    var tmp_12 = this;
    var tmp0_$this_12 = get_DefaultTextStyle();
    var tmp1_fontFamily_12 = TypeScaleTokens_getInstance().s73_1;
    var tmp2_fontWeight_12 = TypeScaleTokens_getInstance().w73_1;
    var tmp3_fontSize_12 = TypeScaleTokens_getInstance().u73_1;
    var tmp4_lineHeight_12 = TypeScaleTokens_getInstance().t73_1;
    var tmp5_letterSpacing_12 = TypeScaleTokens_getInstance().v73_1;
    tmp_12.x6x_1 = tmp0_$this_12.o3c(VOID, tmp3_fontSize_12, tmp2_fontWeight_12, VOID, VOID, tmp1_fontFamily_12, VOID, tmp5_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_12);
    var tmp_13 = this;
    var tmp0_$this_13 = get_DefaultTextStyle();
    var tmp1_fontFamily_13 = TypeScaleTokens_getInstance().x73_1;
    var tmp2_fontWeight_13 = TypeScaleTokens_getInstance().b74_1;
    var tmp3_fontSize_13 = TypeScaleTokens_getInstance().z73_1;
    var tmp4_lineHeight_13 = TypeScaleTokens_getInstance().y73_1;
    var tmp5_letterSpacing_13 = TypeScaleTokens_getInstance().a74_1;
    tmp_13.y6x_1 = tmp0_$this_13.o3c(VOID, tmp3_fontSize_13, tmp2_fontWeight_13, VOID, VOID, tmp1_fontFamily_13, VOID, tmp5_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp4_lineHeight_13);
  }
  var TypographyTokens_instance;
  function TypographyTokens_getInstance() {
    if (TypographyTokens_instance == null)
      new TypographyTokens();
    return TypographyTokens_instance;
  }
  var properties_initialized_TypographyTokens_kt_gw7fqt;
  function _init_properties_TypographyTokens_kt__by6b7t() {
    if (!properties_initialized_TypographyTokens_kt_gw7fqt) {
      properties_initialized_TypographyTokens_kt_gw7fqt = true;
      DefaultTextStyle = Companion_getInstance_8().k3c_1.o3c(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle());
    }
  }
  function defaultPlatformTextStyle() {
    return null;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = MaterialTheme$composable;
  _.$_$.b = Surface$composable;
  _.$_$.c = Text$composable;
  _.$_$.d = Typography;
  _.$_$.e = darkColorScheme;
  _.$_$.f = lightColorScheme;
  _.$_$.g = MaterialTheme_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-material3.js.map
