(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-foundation-layout.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-material3.js', './compose-multiplatform-core-ui-graphics.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-foundation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-foundation-layout.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-material3.js'), require('./compose-multiplatform-core-ui-graphics.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-foundation.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-foundation-layout' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-material3'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-material3' was not found. Please, check whether 'compose-multiplatform-core-material3' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'ProyectoApp-common'.");
    }
    if (typeof this['compose-multiplatform-core-foundation'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-common'. Its dependency 'compose-multiplatform-core-foundation' was not found. Please, check whether 'compose-multiplatform-core-foundation' is loaded prior to 'ProyectoApp-common'.");
    }
    root['ProyectoApp-common'] = factory(typeof this['ProyectoApp-common'] === 'undefined' ? {} : this['ProyectoApp-common'], this['compose-multiplatform-core-runtime'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-foundation-layout'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-material3'], this['compose-multiplatform-core-ui-graphics'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-foundation']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_kotlin, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_foundation_foundation) {
  'use strict';
  //region block: imports
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var rememberBoxMeasurePolicy$composable = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var materializerOf = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var isInterface = kotlin_kotlin.$_$.ga;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var Unit_getInstance = kotlin_kotlin.$_$.f3;
  var equals = kotlin_kotlin.$_$.n9;
  var _SkippableUpdater___init__impl__4ft0t9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a2;
  var SkippableUpdater = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var BoxScopeInstance_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.s;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var MaterialTheme_getInstance = kotlin_org_jetbrains_compose_material3_material3.$_$.g;
  var Long = kotlin_kotlin.$_$.rd;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.o2;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var Surface$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ta;
  var objectMeta = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.df;
  var setMetadataFor = kotlin_kotlin.$_$.ua;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Text$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var isSystemInDarkTheme$composable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var MaterialTheme$composable = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var darkColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.e;
  var lightColorScheme = kotlin_org_jetbrains_compose_material3_material3.$_$.f;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h1;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var Typography = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt', objectMeta);
  //endregion
  function App$composable($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(-1900498271);
    sourceInformation($composer_0, 'C(App$composable)');
    if (!($changed === 0) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-1900498271, $changed, -1, 'com.example.proyectoapp.common.App$composable (App.kt:13)');
      }
      ProyectoAppTheme$composable(false, ComposableSingletons$AppKt_getInstance().lambda_2_r8sbbo_1, $composer_0, 48, 1);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(App$composable$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(1110623624, $changed, -1, 'com.example.proyectoapp.common.ComposableSingletons$AppKt.lambda-1.<anonymous> (App.kt:20)');
      }
      var tmp0_contentAlignment = Companion_getInstance().get_Center_3arb0i_k$();
      // Inline function 'androidx.compose.foundation.layout.Box$composable' call
      var modifier = fillMaxSize(Companion_getInstance_0());
      var contentAlignment = tmp0_contentAlignment;
      var propagateMinConstraints = false;
      var $composer_1 = $composer_0;
      $composer_1.startReplaceableGroup_rp6air_k$(1330882304);
      sourceInformation($composer_1, 'CC(Box$composable)P(2,1,3)69@3214L67,70@3286L130:Box.kt#2w3rfo');
      if (!(0 === 0))
        modifier = Companion_getInstance_0();
      if (!(0 === 0))
        contentAlignment = Companion_getInstance().get_TopStart_o4x792_k$();
      if (!(4 === 0))
        propagateMinConstraints = false;
      var measurePolicy = rememberBoxMeasurePolicy$composable(contentAlignment, propagateMinConstraints, $composer_1, 6);
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      $composer_2.startReplaceableGroup_rp6air_k$(1725976829);
      sourceInformation($composer_2, 'CC(Layout$composable)P(!1,2)78@3158L23,80@3248L420:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_0 = Companion_getInstance_0();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_2, 0);
      var localMap = $composer_2.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_1().get_Constructor_f7ieep_k$();
      var tmp1_ReusableComposeNode$composable = materializerOf(modifier_0);
      var tmp3_ReusableComposeNode$composable = 6 | 7168 & 48 << 9;
      var $composer_3 = $composer_2;
      var tmp = $composer_3.get_applier_bupu8u_k$();
      if (!isInterface(tmp, Applier)) {
        invalidApplier();
      }
      $composer_3.startReusableNode_jk07k2_k$();
      if ($composer_3.get_inserting_25mlsw_k$()) {
        $composer_3.createNode_p4ouwd_k$(tmp0_ReusableComposeNode$composable);
      } else {
        $composer_3.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp4_anonymous = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss(tmp4_anonymous, measurePolicy, Companion_getInstance_1().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp4_anonymous, localMap, Companion_getInstance_1().get_SetResolvedCompositionLocals_rc2u9t_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_1().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp4_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp4_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
        tmp_0 = Unit_getInstance();
      }
      tmp1_ReusableComposeNode$composable(new SkippableUpdater(_SkippableUpdater___init__impl__4ft0t9($composer_3)), $composer_3, 112 & tmp3_ReusableComposeNode$composable >> 3);
      $composer_3.startReplaceableGroup_rp6air_k$(2058660585);
      // Inline function 'androidx.compose.foundation.layout.Box$composable.<anonymous>' call
      var $composer_4 = $composer_3;
      sourceInformationMarkerStart($composer_4, -1851536925, 'C71@3331L9:Box.kt#2w3rfo');
      // Inline function 'com.example.proyectoapp.common.ComposableSingletons$AppKt.lambda-1.<anonymous>.<anonymous>' call
      BoxScopeInstance_getInstance();
      var $composer_5 = $composer_4;
      var tmp_1 = getPlatformName();
      Saludos$composable(tmp_1, null, $composer_5, 0, 2);
      sourceInformationMarkerEnd($composer_4);
      $composer_3.endReplaceableGroup_er37p7_k$();
      $composer_3.endNode_3mkr10_k$();
      $composer_2.endReplaceableGroup_er37p7_k$();
      $composer_1.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(692600771, $changed, -1, 'com.example.proyectoapp.common.ComposableSingletons$AppKt.lambda-2.<anonymous> (App.kt:16)');
      }
      var tmp = fillMaxSize(Companion_getInstance_0());
      var tmp_0 = MaterialTheme_getInstance().$get_colorScheme$$composable_cyyz8_k$($composer_0, 6).get_background_ubksc_k$();
      var tmp_1 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
      Surface$composable(tmp, null, tmp_0, tmp_1, tmp_2, tmp_3, null, ComposableSingletons$AppKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 12582918, 122);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(1110623624, false, ComposableSingletons$AppKt$lambda_1$lambda_ua4ft5));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(692600771, false, ComposableSingletons$AppKt$lambda_2$lambda_1ghyqy));
  }
  protoOf(ComposableSingletons$AppKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$AppKt).get_lambda_2_bzdzzp_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function Saludos$composable(name, modifier, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(756100328);
    sourceInformation($composer_0, 'C(Saludos$composable)P(1)');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(name) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_0();
      }
      if (isTraceInProgress()) {
        traceEventStart(756100328, $dirty, -1, 'com.example.proyectoapp.common.Saludos$composable (App.kt:32)');
      }
      var tmp = 'Bienvenid@ a la App ' + name + '!';
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
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(Saludos$composable$lambda(name, modifier_0, $changed, $default));
    }
  }
  function App$composable$lambda($$changed) {
    return function ($composer, $force) {
      App$composable($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function Saludos$composable$lambda($name, $modifier, $$changed, $$default) {
    return function ($composer, $force) {
      Saludos$composable($name, $modifier._v, $composer, updateChangedFlags($$changed | 1), $$default);
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
  function ProyectoAppTheme$composable(darkTheme, content, $composer, $changed, $default) {
    _init_properties_Theme_kt__w31tqv();
    var darkTheme_0 = {_v: darkTheme};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(1581767326);
    sourceInformation($composer_0, 'C(ProyectoAppTheme$composable)P(1)');
    var $dirty = $changed;
    if (($changed & 14) === 0)
      $dirty = $dirty | ((($default & 1) === 0 ? $composer_0.changed_i0nym2_k$(darkTheme_0._v) : false) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 32 : 16);
    if (!(($dirty & 91) === 18) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startDefaults_g7jseb_k$();
      if (($changed & 1) === 0 ? true : $composer_0.get_defaultsInvalid_y88fc4_k$()) {
        if (!(($default & 1) === 0)) {
          darkTheme_0._v = isSystemInDarkTheme$composable($composer_0, 0);
          $dirty = $dirty & -15;
        }
      } else {
        $composer_0.skipToGroupEnd_lhns3f_k$();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
      }
      $composer_0.endDefaults_b0883g_k$();
      if (isTraceInProgress()) {
        traceEventStart(1581767326, $dirty, -1, 'com.example.proyectoapp.common.ui.theme.ProyectoAppTheme$composable (Theme.kt:34)');
      }
      var colorScheme = darkTheme_0._v ? get_DarkColorScheme() : get_LightColorScheme();
      MaterialTheme$composable(colorScheme, null, get_Typography(), content, $composer_0, 384 | 7168 & $dirty << 6, 2);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver === null)
      null;
    else {
      tmp0_safe_receiver.updateScope_xhrf9y_k$(ProyectoAppTheme$composable$lambda(darkTheme_0, content, $changed, $default));
    }
  }
  function ProyectoAppTheme$composable$lambda($darkTheme, $content, $$changed, $$default) {
    return function ($composer, $force) {
      ProyectoAppTheme$composable($darkTheme._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
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
      var tmp0_fontFamily = Companion_getInstance_2().get_Default_goqax4_k$();
      var tmp1_fontWeight = Companion_getInstance_3().get_Normal_22avww_k$();
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

//# sourceMappingURL=ProyectoApp-common.js.map
