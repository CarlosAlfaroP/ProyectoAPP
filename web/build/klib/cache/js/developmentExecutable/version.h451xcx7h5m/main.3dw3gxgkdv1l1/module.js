(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './ProyectoApp-common.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./ProyectoApp-common.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-web'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'ProyectoApp-web'.");
    }
    if (typeof this['ProyectoApp-common'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-web'. Its dependency 'ProyectoApp-common' was not found. Please, check whether 'ProyectoApp-common' is loaded prior to 'ProyectoApp-web'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-web'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'ProyectoApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'ProyectoApp-web'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'ProyectoApp-web'.");
    }
    root['ProyectoApp-web'] = factory(typeof this['ProyectoApp-web'] === 'undefined' ? {} : this['ProyectoApp-web'], this['compose-multiplatform-core-runtime'], this['ProyectoApp-common'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_ProyectoApp_common, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var App$composable = kotlin_ProyectoApp_common.$_$.a;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var Unit_getInstance = kotlin_kotlin.$_$.f3;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var protoOf = kotlin_kotlin.$_$.ta;
  var objectMeta = kotlin_kotlin.$_$.sa;
  var VOID = kotlin_kotlin.$_$.df;
  var setMetadataFor = kotlin_kotlin.$_$.ua;
  var Window$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  //endregion
  function main() {
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_6harzl_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (isTraceInProgress()) {
        traceEventStart(-2040062495, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:7)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-2040062495, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_bzdzzo_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    Window$composable('ProyectoApp', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    return Unit_getInstance();
  }
  main();
  return _;
}));
