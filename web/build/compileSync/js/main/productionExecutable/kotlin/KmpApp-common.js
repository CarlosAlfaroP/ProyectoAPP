(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-foundation.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'KmpApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-common'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'KmpApp-common'.");
    }
    root['KmpApp-common'] = factory(typeof this['KmpApp-common'] === 'undefined' ? {} : this['KmpApp-common'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_kotlin, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var isInterface = kotlin_kotlin.$_$.w6;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var equals = kotlin_kotlin.$_$.j6;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.n1;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.v;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var Long = kotlin_kotlin.$_$.h9;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.b2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var Surface$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var Text$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var isSystemInDarkTheme$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var MaterialTheme$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt', objectMeta);
  //endregion
  function App$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(407308456);
    sourceInformation($composer_0, 'C(App$composable)');
    if (!($changed === 0) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(407308456, $changed, -1, 'com.example.kmpapp.common.App$composable (App.kt:13)');
      }
      KmpAppTheme$composable(false, ComposableSingletons$AppKt_getInstance().k74_1, $composer_0, 48, 1);
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
      tmp0_safe_receiver.l1e(App$composable$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(375290212, $changed, -1, 'com.example.kmpapp.common.ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:20)');
      }
      var tmp0_contentAlignment = Companion_getInstance().l3s_1;
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier = fillMaxSize(Companion_getInstance_0());
      var contentAlignment = tmp0_contentAlignment;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.yy(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance_0();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance().h3s_1;
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      $composer_2.yy(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.wz();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().o4l_1;
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 48 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.ty();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.iz();
      if ($composer_3.uy()) {
        $composer_3.jz(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.kz();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().t4l_1);
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().s4l_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().w4l_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (tmp0_with.uy() ? true : !equals(tmp0_with.nz(), compositeKeyHash)) {
        tmp0_with.oz(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).mz(compositeKeyHash, tmp0_set);
        tmp_0 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.yy(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.example.kmpapp.common.ComposableSingletons$AppKt.lambda-1.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_1 = getPlatformName();
      Greeting$composable(tmp_1, null, $composer_5, 0, 2);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.zy();
      $composer_3.lz();
      $composer_2.zy();
      $composer_1.zy();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(-1958645409, $changed, -1, 'com.example.kmpapp.common.ComposableSingletons$AppKt.lambda-2.<anonymous> (App.kt:16)');
      }
      var tmp = fillMaxSize(Companion_getInstance_0());
      var tmp_0 = MaterialTheme_getInstance().l6v($composer_0, 6).b3d();
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      Surface$composable(tmp, null, tmp_0, tmp_1, tmp_2, tmp_3, null, ComposableSingletons$AppKt_getInstance().j74_1, $composer_0, 12582918, 122);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.j74_1 = ComposableLambda$invoke$ref(composableLambdaInstance(375290212, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
    var tmp_0 = this;
    tmp_0.k74_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(-1958645409, false, ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy));
  }
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function Greeting$composable(name, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(1641525575);
    sourceInformation($composer_0, 'C(Greeting$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.pz(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.pz(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.vy()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(1641525575, $dirty, -1, 'com.example.kmpapp.common.Greeting$composable (App.kt:33)');
      }
      var tmp = 'Hello ' + name + '!';
      var tmp_0 = modifier_0._v;
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextOverflow___init__impl__obguoe(0);
      Text$composable(tmp, tmp_0, tmp_1, tmp_2, null, null, null, tmp_3, null, null, tmp_4, tmp_5, false, 0, 0, null, null, $composer_0, 112 & $dirty, 0, 131068);
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
      tmp0_safe_receiver.l1e(Greeting$composable$lambda(name, modifier_0, $changed, $default));
    }
  }
  function App$composable$lambda($$changed) {
    return function ($composer, $force) {
      App$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Greeting$composable$lambda($name, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Greeting$composable($name, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function get_Purple80() {
    _init_properties_Color_kt__6h0l1r();
    return Purple80;
  }
  var Purple80;
  function get_PurpleGrey80() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey80;
  }
  var PurpleGrey80;
  function get_Pink80() {
    _init_properties_Color_kt__6h0l1r();
    return Pink80;
  }
  var Pink80;
  function get_Purple40() {
    _init_properties_Color_kt__6h0l1r();
    return Purple40;
  }
  var Purple40;
  function get_PurpleGrey40() {
    _init_properties_Color_kt__6h0l1r();
    return PurpleGrey40;
  }
  var PurpleGrey40;
  function get_Pink40() {
    _init_properties_Color_kt__6h0l1r();
    return Pink40;
  }
  var Pink40;
  var properties_initialized_Color_kt_bdybnx;
  function _init_properties_Color_kt__6h0l1r() {
    if (!properties_initialized_Color_kt_bdybnx) {
      properties_initialized_Color_kt_bdybnx = true;
      Purple80 = Color(new Long(-3097345, 0));
      PurpleGrey80 = Color(new Long(-3357988, 0));
      Pink80 = Color(new Long(-1066808, 0));
      Purple40 = Color(new Long(-10071900, 0));
      PurpleGrey40 = Color(new Long(-10331279, 0));
      Pink40 = Color(new Long(-8564128, 0));
    }
  }
  function get_DarkColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return DarkColorScheme;
  }
  var DarkColorScheme;
  function get_LightColorScheme() {
    _init_properties_Theme_kt__w31tqv();
    return LightColorScheme;
  }
  var LightColorScheme;
  function KmpAppTheme$composable(darkTheme, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var darkTheme_0 = {_v: darkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(1385415074);
    sourceInformation($composer_0, 'C(KmpAppTheme$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.qz(darkTheme_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.tz(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.vy()) {
      $composer_0.az();
      if (($changed & 1) === 0 ? true : $composer_0.wy()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme$composable($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.hz();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.bz();
      if (isTraceInProgress()) {
        traceEventStart(1385415074, $dirty, -1, 'com.example.kmpapp.common.ui.theme.KmpAppTheme$composable (Theme.kt:35)');
      }
      var colorScheme = darkTheme_0._v ? get_DarkColorScheme() : get_LightColorScheme();
      MaterialTheme$composable(colorScheme, null, get_Typography(), content, $composer_0, 384 | 7168 & $dirty << 6, 2);
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
      tmp0_safe_receiver.l1e(KmpAppTheme$composable$lambda(darkTheme_0, content, $changed, $default));
    }
  }
  function KmpAppTheme$composable$lambda($darkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      KmpAppTheme$composable($darkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var properties_initialized_Theme_kt_uwj6hl;
  function _init_properties_Theme_kt__w31tqv() {
    if (!properties_initialized_Theme_kt_uwj6hl) {
      properties_initialized_Theme_kt_uwj6hl = true;
      DarkColorScheme = darkColorScheme(get_Purple80(), VOID, VOID, VOID, VOID, get_PurpleGrey80(), VOID, VOID, VOID, get_Pink80());
      LightColorScheme = lightColorScheme(get_Purple40(), VOID, VOID, VOID, VOID, get_PurpleGrey40(), VOID, VOID, VOID, get_Pink40());
    }
  }
  function get_Typography() {
    _init_properties_Type_kt__qhesii();
    return Typography_0;
  }
  var Typography_0;
  var properties_initialized_Type_kt_b459h8;
  function _init_properties_Type_kt__qhesii() {
    if (!properties_initialized_Type_kt_b459h8) {
      properties_initialized_Type_kt_b459h8 = true;
      var tmp0_fontFamily = Companion_getInstance_2().z3a_1;
      var tmp1_fontWeight = Companion_getInstance_3().m3a_1;
      var tmp2_fontSize = get_sp(16);
      var tmp3_lineHeight = get_sp(24);
      var tmp4_letterSpacing = get_sp_0(0.5);
      Typography_0 = new Typography(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, TextStyle_init_$Create$(VOID, tmp2_fontSize, tmp1_fontWeight, VOID, VOID, tmp0_fontFamily, VOID, tmp4_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp3_lineHeight));
    }
  }
  function getPlatformName() {
    return 'Web';
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = App$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=KmpApp-common.js.map
