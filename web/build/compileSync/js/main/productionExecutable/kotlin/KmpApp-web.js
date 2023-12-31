(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-runtime.js', './KmpApp-common.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-runtime.js'), require('./KmpApp-common.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui.js'));
  else {
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-web'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'KmpApp-web'.");
    }
    if (typeof this['KmpApp-common'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-web'. Its dependency 'KmpApp-common' was not found. Please, check whether 'KmpApp-common' is loaded prior to 'KmpApp-web'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-web'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'KmpApp-web'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'KmpApp-web'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'KmpApp-web'.");
    }
    root['KmpApp-web'] = factory(typeof this['KmpApp-web'] === 'undefined' ? {} : this['KmpApp-web'], this['compose-multiplatform-core-runtime'], this['KmpApp-common'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_KmpApp_common, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui) {
  'use strict';
  //region block: imports
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var App$composable = kotlin_KmpApp_common.$_$.a;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var VOID = kotlin_kotlin.$_$.na;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var Window$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt', objectMeta);
  //endregion
  function main() {
    onWasmReady(main$lambda);
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.i19(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 11) === 2) ? true : !$composer_0.vy()) {
      if (isTraceInProgress()) {
        traceEventStart(-2040062495, $changed, -1, 'ComposableSingletons$MainKt.lambda-1.<anonymous> (Main.kt:7)');
      }
      App$composable($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.l74_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-2040062495, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function main$lambda() {
    Window$composable('KmpApp', ComposableSingletons$MainKt_getInstance().l74_1);
    return Unit_getInstance();
  }
  main();
  return _;
}));

//# sourceMappingURL=KmpApp-web.js.map
