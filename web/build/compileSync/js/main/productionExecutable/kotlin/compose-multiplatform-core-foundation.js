(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-graphics.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-runtime-saveable.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-graphics.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-runtime-saveable.js'));
  else {
    if (typeof this['compose-multiplatform-core-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-ui-graphics' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-ui' was not found. Please, check whether 'compose-multiplatform-core-ui' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-ui-geometry' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-ui-unit' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-runtime' was not found. Please, check whether 'compose-multiplatform-core-runtime' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    root['compose-multiplatform-core-foundation'] = factory(typeof this['compose-multiplatform-core-foundation'] === 'undefined' ? {} : this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-runtime-saveable']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_runtime_runtime_saveable) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var VOID = kotlin_kotlin.$_$.na;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.l1;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.m1;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f2;
  var protoOf = kotlin_kotlin.$_$.f7;
  var THROW_CCE = kotlin_kotlin.$_$.m9;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n1;
  var hashCode = kotlin_kotlin.$_$.r6;
  var getNumberHashCode = kotlin_kotlin.$_$.n6;
  var equals = kotlin_kotlin.$_$.j6;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var classMeta = kotlin_kotlin.$_$.g6;
  var setMetadataFor = kotlin_kotlin.$_$.g7;
  var Unit_getInstance = kotlin_kotlin.$_$.m2;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.t9;
  var drawOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var drawOutline_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i1;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var numberToInt = kotlin_kotlin.$_$.b7;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var ImageBitmapConfig = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o1;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n1;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d2;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.z9;
  var Rectangle = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Rounded = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Generic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e2;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var CacheDrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c2;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.l1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.z;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.k1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var objectMeta = kotlin_kotlin.$_$.e7;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var CoroutineImpl = kotlin_kotlin.$_$.v5;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var isInterface = kotlin_kotlin.$_$.w6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.h5;
  var changedToUp = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var CancellationException = kotlin_kotlin.$_$.g5;
  var PointerEventPass_Main_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.j;
  var isOutOfBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var PointerEventPass_Final_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var PointerEventTimeoutCancellationException = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var positionChangedIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var interfaceMeta = kotlin_kotlin.$_$.t6;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var changedToDownIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.h;
  var changedToDown = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var get_isPrimaryPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var toString = kotlin_kotlin.$_$.j7;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y;
  var RoundRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.h1;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.h2;
  var rememberSaveable$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.a;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var isObject = kotlin_kotlin.$_$.x6;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.q1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var roundToInt = kotlin_kotlin.$_$.o7;
  var toBits = kotlin_kotlin.$_$.ga;
  var toLong = kotlin_kotlin.$_$.h7;
  var Long = kotlin_kotlin.$_$.h9;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.g2;
  var floatFromBits = kotlin_kotlin.$_$.l6;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var coerceAtLeast = kotlin_kotlin.$_$.q7;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f1;
  var coerceIn = kotlin_kotlin.$_$.u7;
  var resolveDefaults = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n;
  var Paragraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l;
  var isNaN_0 = kotlin_kotlin.$_$.v9;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e1;
  var coerceAtMost = kotlin_kotlin.$_$.r7;
  var repeat = kotlin_kotlin.$_$.q8;
  var emptyList = kotlin_kotlin.$_$.s3;
  var TextLayoutInput_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var TextLayoutResult = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m;
  var MultiParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h;
  var MultiParagraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.g1;
  var ParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j;
  var Paragraph_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var TextOverflow__hashCode_impl_kqdwgt = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var GlobalPositionAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.x1;
  var pointerHoverIcon = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var KProperty0 = kotlin_kotlin.$_$.z7;
  var THROW_ISE = kotlin_kotlin.$_$.n9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.m6;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var set_text = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var getTextLayoutResult = kotlin_org_jetbrains_compose_ui_ui.$_$.n1;
  var invalidateLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var to = kotlin_kotlin.$_$.ka;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var mapOf = kotlin_kotlin.$_$.q4;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o1;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var getStringHashCode = kotlin_kotlin.$_$.q6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var get_isShiftPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var DummyPointerIcon_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var get_LocalSystemTheme = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var SystemTheme_Dark_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BackgroundElement, 'BackgroundElement', classMeta, ModifierNodeElement);
  setMetadataFor(BackgroundNode, 'BackgroundNode', classMeta, Node, [DrawModifierNode, Node]);
  setMetadataFor(BorderModifierNodeElement, 'BorderModifierNodeElement', classMeta, ModifierNodeElement);
  setMetadataFor(BorderModifierNode, 'BorderModifierNode', classMeta, DelegatingNode);
  setMetadataFor(BorderCache, 'BorderCache', classMeta);
  setMetadataFor(DefaultDebugIndication, 'DefaultDebugIndication', objectMeta);
  setMetadataFor(HorizontalPointerDirectionConfig$1, VOID, classMeta);
  setMetadataFor(VerticalPointerDirectionConfig$1, VOID, classMeta);
  setMetadataFor(detectDragGesturesAfterLongPress$slambda, 'detectDragGesturesAfterLongPress$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(awaitLongPressOrCancellation$slambda, 'awaitLongPressOrCancellation$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$0, '$dragCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitLongPressOrCancellationCOROUTINE$1, '$awaitLongPressOrCancellationCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrCancellationCOROUTINE$2, '$awaitDragOrCancellationCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor(awaitEachGesture$slambda, 'awaitEachGesture$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitAllPointersUpCOROUTINE$4, '$awaitAllPointersUpCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(PressGestureScope, 'PressGestureScope', interfaceMeta, VOID, [Density], VOID, VOID, [0]);
  setMetadataFor(NoPressGesture$slambda, 'NoPressGesture$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [2]);
  setMetadataFor($awaitFirstDownCOROUTINE$5, '$awaitFirstDownCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(CornerBasedShape, 'CornerBasedShape', classMeta);
  setMetadataFor(PercentCornerSize, 'PercentCornerSize', classMeta);
  setMetadataFor(DpCornerSize, 'DpCornerSize', classMeta);
  setMetadataFor(ZeroCornerSize$1, VOID, classMeta);
  setMetadataFor(RoundedCornerShape, 'RoundedCornerShape', classMeta, CornerBasedShape);
  setMetadataFor(EmptyMeasurePolicy, 'EmptyMeasurePolicy', objectMeta);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(InlineDensity, 'InlineDensity', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(MinLinesConstrainer, 'MinLinesConstrainer', classMeta);
  setMetadataFor(MultiParagraphLayoutCache, 'MultiParagraphLayoutCache', classMeta);
  setMetadataFor(ParagraphLayoutCache, 'ParagraphLayoutCache', classMeta);
  setMetadataFor(SelectableTextAnnotatedStringElement, 'SelectableTextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(SelectableTextAnnotatedStringNode, 'SelectableTextAnnotatedStringNode', classMeta, DelegatingNode, [DelegatingNode, LayoutModifierNode, DrawModifierNode, GlobalPositionAwareModifierNode]);
  setMetadataFor(SelectionController, 'SelectionController', classMeta, VOID, [RememberObserver]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(StaticTextSelectionParams, 'StaticTextSelectionParams', classMeta);
  setMetadataFor(makeSelectionModifier$longPressDragObserver$1, VOID, classMeta);
  setMetadataFor(makeSelectionModifier$slambda, 'makeSelectionModifier$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(makeSelectionModifier$mouseSelectionObserver$1, VOID, classMeta);
  setMetadataFor(makeSelectionModifier$lambda$slambda, 'makeSelectionModifier$lambda$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor(TextAnnotatedStringElement, 'TextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextAnnotatedStringNode, 'TextAnnotatedStringNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  setMetadataFor(TextStringSimpleElement, 'TextStringSimpleElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextStringSimpleNode, 'TextStringSimpleNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  setMetadataFor(MultiWidgetSelectionDelegate, 'MultiWidgetSelectionDelegate', classMeta);
  setMetadataFor(SelectionAdjustment$Companion$None$1, VOID, classMeta);
  setMetadataFor(SelectionAdjustment$Companion$Character$1, VOID, classMeta);
  setMetadataFor(SelectionAdjustment$Companion$Word$1, VOID, classMeta);
  setMetadataFor(SelectionAdjustment$Companion$Paragraph$1, VOID, classMeta);
  setMetadataFor(SelectionAdjustment$Companion$CharacterWithWordAccelerate$1, VOID, classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(TextSelectionColors, 'TextSelectionColors', classMeta);
  setMetadataFor(ClicksCounter, 'ClicksCounter', classMeta);
  setMetadataFor(mouseSelectionDetector$slambda, 'mouseSelectionDetector$slambda', classMeta, CoroutineImpl, VOID, VOID, VOID, [1]);
  setMetadataFor($awaitMouseEventDownCOROUTINE$6, '$awaitMouseEventDownCOROUTINE$6', classMeta, CoroutineImpl);
  //endregion
  function background(_this__u8e3s4, color, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    var alpha = 1.0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = background$lambda(color, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.g3t(new BackgroundElement(color, VOID, alpha, shape, tmp0_inspectorInfo));
  }
  function BackgroundElement(color, brush, alpha, shape, inspectorInfo) {
    color = color === VOID ? Companion_getInstance().f2t_1 : color;
    brush = brush === VOID ? null : brush;
    ModifierNodeElement.call(this);
    this.s66_1 = color;
    this.t66_1 = brush;
    this.u66_1 = alpha;
    this.v66_1 = shape;
    this.w66_1 = inspectorInfo;
  }
  protoOf(BackgroundElement).a1l = function () {
    return new BackgroundNode(this.s66_1, this.t66_1, this.u66_1, this.v66_1);
  };
  protoOf(BackgroundElement).x66 = function (node) {
    node.m67_1 = this.s66_1;
    node.n67_1 = this.t66_1;
    node.o67_1 = this.u66_1;
    node.p67_1 = this.v66_1;
  };
  protoOf(BackgroundElement).k42 = function (node) {
    return this.x66(node instanceof BackgroundNode ? node : THROW_CCE());
  };
  protoOf(BackgroundElement).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.s66_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.t66_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.u66_1) | 0;
    result = imul(31, result) + hashCode(this.v66_1) | 0;
    return result;
  };
  protoOf(BackgroundElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof BackgroundElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return ((equals(this.s66_1, otherModifier.s66_1) ? equals(this.t66_1, otherModifier.t66_1) : false) ? this.u66_1 === otherModifier.u66_1 : false) ? equals(this.v66_1, otherModifier.v66_1) : false;
  };
  function drawRect(_this__u8e3s4, $this) {
    if (!equals($this.m67_1, Companion_getInstance().f2t_1)) {
      _this__u8e3s4.v32($this.m67_1);
    }
    var tmp0_safe_receiver = $this.n67_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.u32(tmp0_safe_receiver, VOID, VOID, $this.o67_1);
    }
  }
  function drawOutline_1(_this__u8e3s4, $this) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = new Size(_this__u8e3s4.y31());
    var tmp_3 = $this.q67_1;
    if (equals(tmp_2, tmp_3 == null ? null : new Size(tmp_3))) {
      tmp_1 = _this__u8e3s4.s32().equals($this.r67_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals($this.t67_1, $this.p67_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = ensureNotNull($this.s67_1);
    } else {
      tmp = $this.p67_1.s2w(_this__u8e3s4.y31(), _this__u8e3s4.s32(), _this__u8e3s4);
    }
    var outline = tmp;
    if (!equals($this.m67_1, Companion_getInstance().f2t_1)) {
      drawOutline(_this__u8e3s4, outline, $this.m67_1);
    }
    var tmp0_safe_receiver = $this.n67_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline_0(_this__u8e3s4, outline, tmp0_safe_receiver, $this.o67_1);
    }
    $this.s67_1 = outline;
    $this.q67_1 = _this__u8e3s4.y31();
    $this.r67_1 = _this__u8e3s4.s32();
    $this.t67_1 = $this.p67_1;
  }
  function BackgroundNode(color, brush, alpha, shape) {
    Node.call(this);
    this.m67_1 = color;
    this.n67_1 = brush;
    this.o67_1 = alpha;
    this.p67_1 = shape;
    this.q67_1 = null;
    this.r67_1 = null;
    this.s67_1 = null;
    this.t67_1 = null;
  }
  protoOf(BackgroundNode).u3u = function (_this__u8e3s4) {
    if (this.p67_1 === get_RectangleShape()) {
      drawRect(_this__u8e3s4, this);
    } else {
      drawOutline_1(_this__u8e3s4, this);
    }
    _this__u8e3s4.q56();
  };
  function background$lambda($color, $shape) {
    return function ($this$null) {
      $this$null.a3x_1 = 'background';
      $this$null.b3x_1 = new Color($color);
      $this$null.c3x_1.g3x('color', new Color($color));
      $this$null.c3x_1.g3x('shape', $shape);
      return Unit_getInstance();
    };
  }
  function border(_this__u8e3s4, border, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    return border_0(_this__u8e3s4, border.u67_1, border.v67_1, shape);
  }
  function border_0(_this__u8e3s4, width, brush, shape) {
    return _this__u8e3s4.g3t(new BorderModifierNodeElement(width, brush, shape));
  }
  function BorderModifierNodeElement(width, brush, shape) {
    ModifierNodeElement.call(this);
    this.z67_1 = width;
    this.a68_1 = brush;
    this.b68_1 = shape;
  }
  protoOf(BorderModifierNodeElement).a1l = function () {
    return new BorderModifierNode(this.z67_1, this.a68_1, this.b68_1);
  };
  protoOf(BorderModifierNodeElement).c68 = function (node) {
    node.z68(this.z67_1);
    node.a69(this.a68_1);
    node.i3x(this.b68_1);
  };
  protoOf(BorderModifierNodeElement).k42 = function (node) {
    return this.c68(node instanceof BorderModifierNode ? node : THROW_CCE());
  };
  protoOf(BorderModifierNodeElement).toString = function () {
    return 'BorderModifierNodeElement(width=' + new Dp(this.z67_1) + ', brush=' + this.a68_1 + ', shape=' + this.b68_1 + ')';
  };
  protoOf(BorderModifierNodeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.z67_1);
    result = imul(result, 31) + hashCode(this.a68_1) | 0;
    result = imul(result, 31) + hashCode(this.b68_1) | 0;
    return result;
  };
  protoOf(BorderModifierNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderModifierNodeElement))
      return false;
    var tmp0_other_with_cast = other instanceof BorderModifierNodeElement ? other : THROW_CCE();
    if (!equals(this.z67_1, tmp0_other_with_cast.z67_1))
      return false;
    if (!equals(this.a68_1, tmp0_other_with_cast.a68_1))
      return false;
    if (!equals(this.b68_1, tmp0_other_with_cast.b68_1))
      return false;
    return true;
  };
  function drawGenericBorder(_this__u8e3s4, $this, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = _this__u8e3s4.y3u(BorderModifierNode$drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance_0().x2u_1;
        colorFilter = Companion_getInstance_1().l2t(brush.w3l_1);
      } else {
        config = Companion_getInstance_0().w2u_1;
        colorFilter = null;
      }
      var pathBounds = outline.w2v_1.j2w();
      if ($this.u68_1 == null) {
        $this.u68_1 = new BorderCache();
      }
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ensureNotNull($this.u68_1).f69();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>' call
      tmp0_apply.v1a();
      tmp0_apply.f2w(pathBounds);
      tmp0_apply.k2w(tmp0_apply, outline.w2v_1, Companion_getInstance_2().n2w_1);
      var maskPath = tmp0_apply;
      var cacheImageBitmap;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ceil' call
      var tmp1_ceil = pathBounds.t21();
      tmp$ret$1 = Math.ceil(tmp1_ceil);
      var tmp_0 = numberToInt(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'kotlin.math.ceil' call
      var tmp2_ceil = pathBounds.u21();
      tmp$ret$2 = Math.ceil(tmp2_ceil);
      var pathBoundsSize = IntSize(tmp_0, numberToInt(tmp$ret$2));
      // Inline function 'kotlin.with' call
      var tmp3_with = ensureNotNull($this.u68_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var targetImageBitmap = tmp3_with.b69_1;
      var targetCanvas = tmp3_with.c69_1;
      var tmp_1;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g34();
      if (equals(tmp_2 == null ? null : new ImageBitmapConfig(tmp_2), new ImageBitmapConfig(Companion_getInstance_0().w2u_1))) {
        tmp_1 = true;
      } else {
        var tmp_3 = new ImageBitmapConfig(config);
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_4 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g34();
        tmp_1 = equals(tmp_3, tmp_4 == null ? null : new ImageBitmapConfig(tmp_4));
      }
      var compatibleConfig = tmp_1;
      if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.y31()) > targetImageBitmap.t21()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.y31()) > targetImageBitmap.u21()) ? true : !compatibleConfig) {
        // Inline function 'kotlin.also' call
        var tmp0_also = ImageBitmap(_IntSize___get_width__impl__d9yl4o(pathBoundsSize), _IntSize___get_height__impl__prv63b(pathBoundsSize), config);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        tmp3_with.b69_1 = tmp0_also;
        targetImageBitmap = tmp0_also;
        // Inline function 'kotlin.also' call
        var tmp1_also = Canvas(targetImageBitmap);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        tmp3_with.c69_1 = tmp1_also;
        targetCanvas = tmp1_also;
      }
      var tmp2_elvis_lhs = tmp3_with.d69_1;
      var tmp_5;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp2_also = new CanvasDrawScope();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        tmp3_with.d69_1 = tmp2_also;
        tmp_5 = tmp2_also;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_5;
      var drawSize = toSize(pathBoundsSize);
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var tmp3_draw = _this__u8e3s4.s32();
      var tmp4_draw = targetCanvas;
      var tmp0_container = targetDrawScope.f31_1;
      var prevDensity = tmp0_container.e3();
      var prevLayoutDirection = tmp0_container.f3();
      var prevCanvas = tmp0_container.m32();
      var prevSize = tmp0_container.n32();
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = targetDrawScope.f31_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp0_apply_0.i32_1 = _this__u8e3s4;
      tmp0_apply_0.j32_1 = tmp3_draw;
      tmp0_apply_0.k32_1 = tmp4_draw;
      tmp0_apply_0.l32_1 = drawSize;
      tmp4_draw.r2q();
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      targetDrawScope.v32(Companion_getInstance().t2s_1, VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_3().m2p_1);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var tmp0_translate = -pathBounds.o21_1;
      var tmp1_translate = -pathBounds.p21_1;
      targetDrawScope.t32().r32().u2q(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.a33(outline.w2v_1, brush, VOID, new Stroke(strokeWidth * 2));
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
      var tmp0_scale = (_Size___get_width__impl__58y75t(targetDrawScope.y31()) + 1) / _Size___get_width__impl__58y75t(targetDrawScope.y31());
      var tmp1_scale = (_Size___get_height__impl__a04p02(targetDrawScope.y31()) + 1) / _Size___get_height__impl__a04p02(targetDrawScope.y31());
      var tmp2_scale = targetDrawScope.b33();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var tmp0_with = targetDrawScope.t32();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.y31();
      tmp0_with.u2e().r2q();
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      tmp0_with.r32().d33(tmp0_scale, tmp1_scale, tmp2_scale);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.a33(maskPath, brush, VOID, VOID, VOID, Companion_getInstance_3().m2p_1);
      tmp0_with.u2e().s2q();
      tmp0_with.q32(previousSize);
      targetDrawScope.t32().r32().u2q(-tmp0_translate, -tmp1_translate);
      tmp4_draw.s2q();
      // Inline function 'kotlin.apply' call
      var tmp1_apply = targetDrawScope.f31_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp1_apply.i32_1 = prevDensity;
      tmp1_apply.j32_1 = prevLayoutDirection;
      tmp1_apply.k32_1 = prevCanvas;
      tmp1_apply.l32_1 = prevSize;
      targetImageBitmap.h34();
      cacheImageBitmap = targetImageBitmap;
      tmp = _this__u8e3s4.y3u(BorderModifierNode$drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder(_this__u8e3s4, $this, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.r2v_1)) {
      var cornerRadius = outline.r2v_1.c22_1;
      var halfStroke = strokeWidth / 2;
      var borderStroke = new Stroke(strokeWidth);
      tmp = _this__u8e3s4.y3u(BorderModifierNode$drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      if ($this.u68_1 == null) {
        $this.u68_1 = new BorderCache();
      }
      var path = ensureNotNull($this.u68_1).f69();
      var roundedRectPath = createRoundRectPath(path, outline.r2v_1, strokeWidth, fillArea);
      tmp = _this__u8e3s4.y3u(BorderModifierNode$drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function BorderModifierNode$drawWithCacheModifierNode$lambda(this$0) {
    return function ($this$CacheDrawModifierNode) {
      var hasValidBorderParams = $this$CacheDrawModifierNode.i23(this$0.v68_1) >= 0.0 ? _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.y31()) > 0.0 : false;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$CacheDrawModifierNode);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp_0;
        if (equals(this$0.v68_1, Companion_getInstance_4().s23_1)) {
          tmp_0 = 1.0;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.math.ceil' call
          var tmp0_ceil = $this$CacheDrawModifierNode.i23(this$0.v68_1);
          tmp$ret$0 = Math.ceil(tmp0_ceil);
          tmp_0 = tmp$ret$0;
        }
        var tmp2_min = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.ceil' call
        var tmp1_ceil = _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.y31()) / 2;
        tmp$ret$1 = Math.ceil(tmp1_ceil);
        var tmp3_min = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
        var strokeWidthPx = tmp$ret$2;
        var halfStroke = strokeWidthPx / 2;
        var topLeft = Offset(halfStroke, halfStroke);
        var borderSize = Size_0(_Size___get_width__impl__58y75t($this$CacheDrawModifierNode.y31()) - strokeWidthPx, _Size___get_height__impl__a04p02($this$CacheDrawModifierNode.y31()) - strokeWidthPx);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.y31());
        var outline = this$0.x68_1.s2w($this$CacheDrawModifierNode.y31(), $this$CacheDrawModifierNode.s32(), $this$CacheDrawModifierNode);
        var tmp_1;
        if (outline instanceof Generic) {
          tmp_1 = drawGenericBorder($this$CacheDrawModifierNode, this$0, this$0.w68_1, outline, fillArea, strokeWidthPx);
        } else {
          if (outline instanceof Rounded) {
            tmp_1 = drawRoundRectBorder($this$CacheDrawModifierNode, this$0, this$0.w68_1, outline, topLeft, borderSize, fillArea, strokeWidthPx);
          } else {
            if (outline instanceof Rectangle) {
              tmp_1 = drawRectBorder($this$CacheDrawModifierNode, this$0.w68_1, topLeft, borderSize, fillArea, strokeWidthPx);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda($outline, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.q56();
      $this$onDrawWithContent.a33($outline.w2v_1, $brush);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.q56();
      var tmp0_translate = $pathBounds.o21_1;
      var tmp1_translate = $pathBounds.p21_1;
      $this$onDrawWithContent.t32().r32().u2q(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>' call
      $this$onDrawWithContent.x32($cacheImageBitmap, VOID, $pathBoundsSize, VOID, VOID, VOID, VOID, $colorFilter);
      $this$onDrawWithContent.t32().r32().u2q(-tmp0_translate, -tmp1_translate);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.q56();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.y32($brush, VOID, VOID, $cornerRadius);
        tmp = Unit_getInstance();
      } else if (_CornerRadius___get_x__impl__1594cn($cornerRadius) < $halfStroke) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = _Size___get_width__impl__58y75t($this$onDrawWithContent.y31()) - $strokeWidth;
        var tmp1_clipRect = _Size___get_height__impl__a04p02($this$onDrawWithContent.y31()) - $strokeWidth;
        var tmp2_clipRect = Companion_getInstance_5().a2r_1;
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = $this$onDrawWithContent.t32();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.y31();
        tmp0_with.u2e().r2q();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp0_anonymous = tmp0_with.r32();
        tmp0_anonymous.y2q($strokeWidth, $strokeWidth, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.foundation.BorderModifierNode.drawRoundRectBorder.<anonymous>.<anonymous>' call
        $this$onDrawWithContent.y32($brush, VOID, VOID, $cornerRadius);
        tmp0_with.u2e().s2q();
        tmp0_with.q32(previousSize);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        $this$onDrawWithContent.y32($brush, $topLeft, $borderSize, shrink($cornerRadius, $halfStroke), VOID, $borderStroke);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.q56();
      $this$onDrawWithContent.a33($roundedRectPath, $brush);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode(widthParameter, brushParameter, shapeParameter) {
    DelegatingNode.call(this);
    this.u68_1 = null;
    this.v68_1 = widthParameter;
    this.w68_1 = brushParameter;
    this.x68_1 = shapeParameter;
    var tmp = this;
    tmp.y68_1 = this.o4t(CacheDrawModifierNode(BorderModifierNode$drawWithCacheModifierNode$lambda(this)));
  }
  protoOf(BorderModifierNode).z68 = function (value) {
    if (!equals(this.v68_1, value)) {
      this.v68_1 = value;
      this.y68_1.v3w();
    }
  };
  protoOf(BorderModifierNode).a69 = function (value) {
    if (!equals(this.w68_1, value)) {
      this.w68_1 = value;
      this.y68_1.v3w();
    }
  };
  protoOf(BorderModifierNode).i3x = function (value) {
    if (!equals(this.x68_1, value)) {
      this.x68_1 = value;
      this.y68_1.v3w();
    }
  };
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    imageBitmap = imageBitmap === VOID ? null : imageBitmap;
    canvas = canvas === VOID ? null : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? null : canvasDrawScope;
    borderPath = borderPath === VOID ? null : borderPath;
    this.b69_1 = imageBitmap;
    this.c69_1 = canvas;
    this.d69_1 = canvasDrawScope;
    this.e69_1 = borderPath;
  }
  protoOf(BorderCache).f69 = function () {
    var tmp0_elvis_lhs = this.e69_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.obtainPath.<anonymous>' call
      this.e69_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(BorderCache).toString = function () {
    return 'BorderCache(imageBitmap=' + this.b69_1 + ', canvas=' + this.c69_1 + ', canvasDrawScope=' + this.d69_1 + ', borderPath=' + this.e69_1 + ')';
  };
  protoOf(BorderCache).hashCode = function () {
    var result = this.b69_1 == null ? 0 : hashCode(this.b69_1);
    result = imul(result, 31) + (this.c69_1 == null ? 0 : hashCode(this.c69_1)) | 0;
    result = imul(result, 31) + (this.d69_1 == null ? 0 : hashCode(this.d69_1)) | 0;
    result = imul(result, 31) + (this.e69_1 == null ? 0 : hashCode(this.e69_1)) | 0;
    return result;
  };
  protoOf(BorderCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    var tmp0_other_with_cast = other instanceof BorderCache ? other : THROW_CCE();
    if (!equals(this.b69_1, tmp0_other_with_cast.b69_1))
      return false;
    if (!equals(this.c69_1, tmp0_other_with_cast.c69_1))
      return false;
    if (!equals(this.d69_1, tmp0_other_with_cast.d69_1))
      return false;
    if (!equals(this.e69_1, tmp0_other_with_cast.e69_1))
      return false;
    return true;
  };
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.y3u(drawContentWithoutBorder$lambda);
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_6().j21_1 : topLeft;
    var size = fillArea ? _this__u8e3s4.y31() : borderSize;
    var style = fillArea ? Fill_getInstance() : new Stroke(strokeWidthPx);
    return _this__u8e3s4.y3u(drawRectBorder$lambda(brush, rectTopLeft, size, style));
  }
  function shrink(_this__u8e3s4, value) {
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _CornerRadius___get_x__impl__1594cn(_this__u8e3s4) - value;
    var tmp = Math.max(0.0, tmp0_max);
    var tmp$ret$1;
    // Inline function 'kotlin.math.max' call
    var tmp1_max = _CornerRadius___get_y__impl__tyvleu(_this__u8e3s4) - value;
    tmp$ret$1 = Math.max(0.0, tmp1_max);
    return CornerRadius(tmp, tmp$ret$1);
  }
  function createRoundRectPath(targetPath, roundedRect, strokeWidth, fillArea) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>' call
    targetPath.v1a();
    targetPath.t2v(roundedRect);
    if (!fillArea) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>.<anonymous>' call
      tmp0_apply.t2v(createInsetRoundedRect(strokeWidth, roundedRect));
      var insetPath = tmp0_apply;
      targetPath.k2w(targetPath, insetPath, Companion_getInstance_2().n2w_1);
    }
    return targetPath;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.t21() - widthPx;
    var tmp1_bottom = roundedRect.u21() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.c22_1, widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.d22_1, widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.f22_1, widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.e22_1, widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.q56();
    return Unit_getInstance();
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.q56();
      $this$onDrawWithContent.u32($brush, $rectTopLeft, $size, VOID, $style);
      return Unit_getInstance();
    };
  }
  function isSystemInDarkTheme$composable($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, 1894054335, 'C(isSystemInDarkTheme$composable)40@1721L22:DarkTheme.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(1894054335, $changed, -1, 'androidx.compose.foundation.isSystemInDarkTheme$composable (DarkTheme.kt:40)');
    }
    var tmp0 = _isSystemInDarkTheme$composable($composer_0, 0);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0;
  }
  function get_LocalIndication() {
    _init_properties_Indication_kt__w3ndj0();
    return LocalIndication;
  }
  var LocalIndication;
  function DefaultDebugIndication() {
    DefaultDebugIndication_instance = this;
  }
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    if (DefaultDebugIndication_instance == null)
      new DefaultDebugIndication();
    return DefaultDebugIndication_instance;
  }
  function LocalIndication$lambda() {
    _init_properties_Indication_kt__w3ndj0();
    return DefaultDebugIndication_getInstance();
  }
  var properties_initialized_Indication_kt_w71gpq;
  function _init_properties_Indication_kt__w3ndj0() {
    if (!properties_initialized_Indication_kt_w71gpq) {
      properties_initialized_Indication_kt_w71gpq = true;
      LocalIndication = staticCompositionLocalOf(LocalIndication$lambda);
    }
  }
  var HorizontalPointerDirectionConfig;
  var VerticalPointerDirectionConfig;
  function get_mouseSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  var mouseToTouchSlopRatio;
  function detectDragGesturesAfterLongPress(_this__u8e3s4, onDragStart, onDragEnd, onDragCancel, onDrag, $completion) {
    var tmp;
    if (onDragStart === VOID) {
      tmp = detectDragGesturesAfterLongPress$lambda;
    } else {
      tmp = onDragStart;
    }
    onDragStart = tmp;
    var tmp_0;
    if (onDragEnd === VOID) {
      tmp_0 = detectDragGesturesAfterLongPress$lambda_0;
    } else {
      tmp_0 = onDragEnd;
    }
    onDragEnd = tmp_0;
    var tmp_1;
    if (onDragCancel === VOID) {
      tmp_1 = detectDragGesturesAfterLongPress$lambda_1;
    } else {
      tmp_1 = onDragCancel;
    }
    onDragCancel = tmp_1;
    return awaitEachGesture(_this__u8e3s4, detectDragGesturesAfterLongPress$slambda_0(onDragStart, onDragEnd, onDragCancel, onDrag, null), $completion);
  }
  function drag(_this__u8e3s4, pointerId, onDrag, $completion) {
    var tmp = new $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      var tmp0_fastFirstOrNull = _this__u8e3s4.f4c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastFirstOrNull.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastFirstOrNull.l(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          if (equals(item.m4b_1, pointerId)) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.p4b_1) === true);
  }
  function HorizontalPointerDirectionConfig$1() {
  }
  function VerticalPointerDirectionConfig$1() {
  }
  function detectDragGesturesAfterLongPress$lambda(it) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$lambda_0() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$lambda_1() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return Unit_getInstance();
  }
  function detectDragGesturesAfterLongPress$slambda$lambda($onDrag) {
    return function (it) {
      $onDrag(it, new Offset_0(positionChange(it)));
      it.p4d();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    this.b6b_1 = $onDragStart;
    this.c6b_1 = $onDragEnd;
    this.d6b_1 = $onDragCancel;
    this.e6b_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectDragGesturesAfterLongPress$slambda).a4f = function ($this$awaitEachGesture, $completion) {
    var tmp = this.b4f($this$awaitEachGesture, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).se = function (p1, $completion) {
    return this.a4f((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 7;
            this.yd_1 = 6;
            this.xd_1 = 1;
            suspendResult = awaitFirstDown(this.f6b_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g6b_1 = suspendResult;
            this.xd_1 = 2;
            suspendResult = awaitLongPressOrCancellation(this.f6b_1, this.g6b_1.m4b_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.h6b_1 = suspendResult;
            if (!(this.h6b_1 == null)) {
              this.b6b_1(new Offset_0(this.h6b_1.o4b_1));
              this.xd_1 = 3;
              suspendResult = drag(this.f6b_1, this.h6b_1.m4b_1, detectDragGesturesAfterLongPress$slambda$lambda(this.e6b_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.xd_1 = 5;
              continue $sm;
            }

          case 3:
            if (suspendResult) {
              var tmp0_fastForEach = this.f6b_1.a4j().f4c_1;
              var inductionVariable = 0;
              var last = tmp0_fastForEach.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastForEach.l(index);
                  if (changedToUp(item)) {
                    item.p4d();
                  }
                }
                 while (inductionVariable <= last);
              this.c6b_1();
              this.xd_1 = 4;
              continue $sm;
            } else {
              this.d6b_1();
              this.xd_1 = 4;
              continue $sm;
            }

          case 4:
            this.xd_1 = 5;
            continue $sm;
          case 5:
            this.yd_1 = 7;
            this.xd_1 = 8;
            continue $sm;
          case 6:
            this.yd_1 = 7;
            var tmp_0 = this.ae_1;
            if (tmp_0 instanceof CancellationException) {
              var c = this.ae_1;
              this.d6b_1();
              throw c;
            } else {
              throw this.ae_1;
            }

          case 7:
            throw this.ae_1;
          case 8:
            this.yd_1 = 7;
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 7) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).b4f = function ($this$awaitEachGesture, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda(this.b6b_1, this.c6b_1, this.d6b_1, this.e6b_1, completion);
    i.f6b_1 = $this$awaitEachGesture;
    return i;
  };
  function detectDragGesturesAfterLongPress$slambda_0($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.a4f($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.q6b_1 = $currentDown;
    this.r6b_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitLongPressOrCancellation$slambda).a4f = function ($this$withTimeout, $completion) {
    var tmp = this.b4f($this$withTimeout, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(awaitLongPressOrCancellation$slambda).se = function (p1, $completion) {
    return this.a4f((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitLongPressOrCancellation$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 5;
            this.t6b_1 = false;
            this.xd_1 = 1;
            continue $sm;
          case 1:
            if (!!this.t6b_1) {
              this.xd_1 = 4;
              continue $sm;
            }

            this.xd_1 = 2;
            suspendResult = this.s6b_1.c4f(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u6b_1 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAll = this.u6b_1.f4c_1;
              var inductionVariable = 0;
              var last = tmp0_fastAll.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAll.l(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (tmp$ret$0) {
              this.t6b_1 = true;
            }

            var tmp$ret$2;
            l$ret$3: do {
              var tmp1_fastAny = this.u6b_1.f4c_1;
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.f() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.l(index_0);
                  if (item_0.l4d() ? true : isOutOfBounds(item_0, this.s6b_1.t3w(), this.s6b_1.c4j())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              this.t6b_1 = true;
            }

            this.xd_1 = 3;
            suspendResult = this.s6b_1.c4f(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny = consumeCheck.f4c_1;
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny.f() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp2_fastAny.l(index_1);
                  if (item_1.l4d()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.t6b_1 = true;
            }

            if (isPointerUp(this.u6b_1, this.q6b_1._v.m4b_1)) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp3_fastFirstOrNull = this.u6b_1.f4c_1;
                var inductionVariable_2 = 0;
                var last_2 = tmp3_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = tmp3_fastFirstOrNull.l(index_2);
                    if (item_2.p4b_1) {
                      tmp$ret$6 = item_2;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              var newPressed = tmp$ret$6;
              if (!(newPressed == null)) {
                this.q6b_1._v = newPressed;
                this.r6b_1._v = this.q6b_1._v;
              } else {
                this.t6b_1 = true;
              }
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var tmp4_fastFirstOrNull = this.u6b_1.f4c_1;
                var inductionVariable_3 = 0;
                var last_3 = tmp4_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = tmp4_fastFirstOrNull.l(index_3);
                    if (equals(item_3.m4b_1, this.q6b_1._v.m4b_1)) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.r6b_1._v = tmp$ret$8;
            }

            this.xd_1 = 1;
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 5) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(awaitLongPressOrCancellation$slambda).b4f = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.q6b_1, this.r6b_1, completion);
    i.s6b_1 = $this$withTimeout;
    return i;
  };
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.a4f($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o69_1 = _this__u8e3s4;
    this.p69_1 = pointerId;
    this.q69_1 = onDrag;
  }
  protoOf($dragCOROUTINE$0).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 3;
            this.r69_1 = this.p69_1;
            this.xd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.xd_1 = 4;
              continue $sm;
            }

            this.xd_1 = 2;
            suspendResult = awaitDragOrCancellation(this.o69_1, this.r69_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.q69_1(change);
            this.r69_1 = change.m4b_1;
            this.xd_1 = 1;
            continue $sm;
          case 3:
            throw this.ae_1;
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 3) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  function $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.a6a_1 = _this__u8e3s4;
    this.b6a_1 = pointerId;
  }
  protoOf($awaitLongPressOrCancellationCOROUTINE$1).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 3;
            if (isPointerUp(this.a6a_1.a4j(), this.b6a_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = this.a6a_1.a4j().f4c_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.l(index);
                  if (equals(item.m4b_1, this.b6a_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.c6a_1 = tmp_1;
            this.d6a_1 = {_v: null};
            this.e6a_1 = {_v: this.c6a_1};
            this.f6a_1 = this.a6a_1.b4j().f51();
            this.yd_1 = 2;
            this.xd_1 = 1;
            suspendResult = this.a6a_1.g4j(this.f6a_1, awaitLongPressOrCancellation$slambda_0(this.e6a_1, this.d6a_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.g6a_1 = null;
            this.yd_1 = 3;
            this.xd_1 = 4;
            continue $sm;
          case 2:
            this.yd_1 = 3;
            var tmp_2 = this.ae_1;
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.ae_1;
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.d6a_1._v;
              tmp_3.g6a_1 = tmp1_elvis_lhs == null ? this.c6a_1 : tmp1_elvis_lhs;
              this.xd_1 = 4;
              continue $sm;
            } else {
              throw this.ae_1;
            }

          case 3:
            throw this.ae_1;
          case 4:
            this.yd_1 = 3;
            return this.g6a_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 3) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  function $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.p6a_1 = _this__u8e3s4;
    this.q6a_1 = pointerId;
  }
  protoOf($awaitDragOrCancellationCOROUTINE$2).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 7;
            if (isPointerUp(this.p6a_1.a4j(), this.q6a_1)) {
              return null;
            }

            this.xd_1 = 1;
            continue $sm;
          case 1:
            this.s6a_1 = this.q6a_1;
            this.xd_1 = 2;
            continue $sm;
          case 2:
            if (false) {
              this.xd_1 = 8;
              continue $sm;
            }

            this.xd_1 = 3;
            suspendResult = this.p6a_1.f4j(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.f4c_1;
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.l(index);
                  if (equals(item.m4b_1, this.s6a_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.r6a_1 = null;
              this.xd_1 = 9;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.xd_1 = 4;
              continue $sm;
            }

          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var tmp1_fastFirstOrNull = event.f4c_1;
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.f() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.l(index_0);
                    if (item_0.p4b_1) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.r6a_1 = dragEvent;
                this.xd_1 = 9;
                continue $sm;
              } else {
                this.s6a_1 = otherDown.m4b_1;
                this.xd_1 = 5;
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.r6a_1 = dragEvent;
                this.xd_1 = 9;
                continue $sm;
              } else {
                this.xd_1 = 6;
                continue $sm;
              }
            }

          case 5:
            this.xd_1 = 6;
            continue $sm;
          case 6:
            this.xd_1 = 2;
            continue $sm;
          case 7:
            throw this.ae_1;
          case 8:
            if (false) {
              this.xd_1 = 1;
              continue $sm;
            }

            this.xd_1 = 9;
            continue $sm;
          case 9:
            var change = this.r6a_1;
            var tmp_0;
            if ((change == null ? null : change.l4d()) === false) {
              tmp_0 = change;
            } else {
              tmp_0 = null;
            }

            return tmp_0;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 7) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_DragGestureDetector_kt_xqxw6j;
  function _init_properties_DragGestureDetector_kt__sw7hnt() {
    if (!properties_initialized_DragGestureDetector_kt_xqxw6j) {
      properties_initialized_DragGestureDetector_kt_xqxw6j = true;
      HorizontalPointerDirectionConfig = new HorizontalPointerDirectionConfig$1();
      VerticalPointerDirectionConfig = new VerticalPointerDirectionConfig$1();
      // Inline function 'androidx.compose.ui.unit.dp' call
      mouseSlop = _Dp___init__impl__ms3zkb(0.125);
      // Inline function 'androidx.compose.ui.unit.dp' call
      defaultTouchSlop = _Dp___init__impl__ms3zkb(18);
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var tmp0_div = get_mouseSlop();
      var tmp1_div = get_defaultTouchSlop();
      mouseToTouchSlopRatio = _Dp___get_value__impl__geb1vb(tmp0_div) / _Dp___get_value__impl__geb1vb(tmp1_div);
    }
  }
  function awaitEachGesture(_this__u8e3s4, block, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.t3();
    return _this__u8e3s4.p4f(awaitEachGesture$slambda_0(currentContext, block, null), $completion);
  }
  function awaitAllPointersUp(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = _this__u8e3s4.a4j().f4c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.l(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          if (item.p4b_1) {
            tmp$ret$1 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = false;
    }
    return !tmp$ret$1;
  }
  function awaitEachGesture$slambda($currentContext, $block, resultContinuation) {
    this.m6c_1 = $currentContext;
    this.n6c_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitEachGesture$slambda).a4f = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.b4f($this$awaitPointerEventScope, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(awaitEachGesture$slambda).se = function (p1, $completion) {
    return this.a4f((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitEachGesture$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 9;
            this.xd_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.m6c_1)) {
              this.xd_1 = 8;
              continue $sm;
            }

            this.yd_1 = 4;
            this.xd_1 = 2;
            suspendResult = this.n6c_1(this.o6c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.xd_1 = 3;
            suspendResult = awaitAllPointersUp(this.o6c_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.yd_1 = 9;
            this.xd_1 = 7;
            continue $sm;
          case 4:
            this.yd_1 = 9;
            var tmp_0 = this.ae_1;
            if (tmp_0 instanceof CancellationException) {
              this.p6c_1 = this.ae_1;
              if (get_isActive(this.m6c_1)) {
                this.xd_1 = 5;
                suspendResult = awaitAllPointersUp(this.o6c_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.p6c_1;
              }
            } else {
              throw this.ae_1;
            }

          case 5:
            this.xd_1 = 6;
            continue $sm;
          case 6:
            this.xd_1 = 7;
            continue $sm;
          case 7:
            this.yd_1 = 9;
            this.xd_1 = 1;
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 9) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(awaitEachGesture$slambda).b4f = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitEachGesture$slambda(this.m6c_1, this.n6c_1, completion);
    i.o6c_1 = $this$awaitPointerEventScope;
    return i;
  };
  function awaitEachGesture$slambda_0($currentContext, $block, resultContinuation) {
    var i = new awaitEachGesture$slambda($currentContext, $block, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $completion) {
      return i.a4f($this$awaitPointerEventScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.d6c_1 = _this__u8e3s4;
  }
  protoOf($awaitAllPointersUpCOROUTINE$4).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 5;
            if (!allPointersUp(this.d6c_1)) {
              this.xd_1 = 1;
              continue $sm;
            } else {
              this.xd_1 = 4;
              continue $sm;
            }

          case 1:
            this.xd_1 = 2;
            suspendResult = this.d6c_1.c4f(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAny = events.f4c_1;
              var inductionVariable = 0;
              var last = tmp0_fastAny.f() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAny.l(index);
                  if (item.p4b_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.xd_1 = 1;
              continue $sm;
            }

            this.xd_1 = 3;
            continue $sm;
          case 3:
            this.xd_1 = 4;
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 5) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  var NoPressGesture;
  function PressGestureScope() {
  }
  function awaitFirstDown(_this__u8e3s4, requireUnconsumed, pass, $completion) {
    requireUnconsumed = requireUnconsumed === VOID ? true : requireUnconsumed;
    pass = pass === VOID ? PointerEventPass_Main_getInstance() : pass;
    var tmp = new $awaitFirstDownCOROUTINE$5(_this__u8e3s4, requireUnconsumed, pass, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function isPrimaryChangedDown(_this__u8e3s4, requireUnconsumed) {
    _init_properties_TapGestureDetector_kt__k4yygc();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp0_fastAll = _this__u8e3s4.f4c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAll.f() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAll.l(index);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          if (!(item.u4b_1 === Companion_getInstance_7().i4d_1)) {
            tmp$ret$1 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = true;
    }
    var primaryButtonCausesDown = tmp$ret$1;
    var tmp$ret$3;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp1_fastAll = _this__u8e3s4.f4c_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_fastAll.f() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_fastAll.l(index_0);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          if (!(requireUnconsumed ? changedToDown(item_0) : changedToDownIgnoreConsumed(item_0))) {
            tmp$ret$3 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$3 = true;
    }
    var changedToDown_0 = tmp$ret$3;
    return changedToDown_0 ? get_isPrimaryPressed(_this__u8e3s4.g4c_1) ? true : !primaryButtonCausesDown : false;
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoPressGesture$slambda).m6d = function ($this$null, it, $completion) {
    var tmp = this.n6d($this$null, it, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(NoPressGesture$slambda).f1j = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.m6d(tmp, p2 instanceof Offset_0 ? p2.m21_1 : THROW_CCE(), $completion);
  };
  protoOf(NoPressGesture$slambda).ge = function () {
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
  protoOf(NoPressGesture$slambda).n6d = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.k6d_1 = $this$null;
    i.l6d_1 = it;
    return i;
  };
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $completion) {
      return i.m6d($this$null, it.m21_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $awaitFirstDownCOROUTINE$5(_this__u8e3s4, requireUnconsumed, pass, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.y6c_1 = _this__u8e3s4;
    this.z6c_1 = requireUnconsumed;
    this.a6d_1 = pass;
  }
  protoOf($awaitFirstDownCOROUTINE$5).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 4;
            this.xd_1 = 1;
            continue $sm;
          case 1:
            this.xd_1 = 2;
            suspendResult = this.y6c_1.c4f(this.a6d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.b6d_1 = suspendResult;
            if (!isPrimaryChangedDown(this.b6d_1, this.z6c_1)) {
              this.xd_1 = 1;
              continue $sm;
            }

            this.xd_1 = 3;
            continue $sm;
          case 3:
            return this.b6d_1.f4c_1.l(0);
          case 4:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 4) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_TapGestureDetector_kt_lhe8oi;
  function _init_properties_TapGestureDetector_kt__k4yygc() {
    if (!properties_initialized_TapGestureDetector_kt_lhe8oi) {
      properties_initialized_TapGestureDetector_kt_lhe8oi = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
    }
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.o6d_1 = topStart;
    this.p6d_1 = topEnd;
    this.q6d_1 = bottomEnd;
    this.r6d_1 = bottomStart;
    this.s6d_1 = 0;
  }
  protoOf(CornerBasedShape).s2w = function (size, layoutDirection, density) {
    var topStart = this.o6d_1.t6d(size, density);
    var topEnd = this.p6d_1.t6d(size, density);
    var bottomEnd = this.q6d_1.t6d(size, density);
    var bottomStart = this.r6d_1.t6d(size, density);
    var minDimension = _Size___get_minDimension__impl__4iso0r(size);
    if (topStart + bottomStart > minDimension) {
      var scale = minDimension / (topStart + bottomStart);
      topStart = topStart * scale;
      bottomStart = bottomStart * scale;
    }
    if (topEnd + bottomEnd > minDimension) {
      var scale_0 = minDimension / (topEnd + bottomEnd);
      topEnd = topEnd * scale_0;
      bottomEnd = bottomEnd * scale_0;
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(((topStart >= 0.0 ? topEnd >= 0.0 : false) ? bottomEnd >= 0.0 : false) ? bottomStart >= 0.0 : false)) {
      // Inline function 'androidx.compose.foundation.shape.CornerBasedShape.createOutline.<anonymous>' call
      var message = "Corner size in Px can't be negative(topStart = " + topStart + ', topEnd = ' + topEnd + ', ' + ('bottomEnd = ' + bottomEnd + ', bottomStart = ' + bottomStart + ')!');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.u6d(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  var ZeroCornerSize;
  function CornerSize(percent) {
    _init_properties_CornerSize_kt__adzyne();
    return new PercentCornerSize(percent);
  }
  function PercentCornerSize(percent) {
    this.v6d_1 = percent;
    if (this.v6d_1 < 0 ? true : this.v6d_1 > 100) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  protoOf(PercentCornerSize).t6d = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.v6d_1 / 100.0);
  };
  protoOf(PercentCornerSize).toString = function () {
    return 'CornerSize(size = ' + this.v6d_1 + '%)';
  };
  protoOf(PercentCornerSize).hashCode = function () {
    return getNumberHashCode(this.v6d_1);
  };
  protoOf(PercentCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.v6d_1, tmp0_other_with_cast.v6d_1))
      return false;
    return true;
  };
  function CornerSize_0(size) {
    _init_properties_CornerSize_kt__adzyne();
    return new DpCornerSize(size);
  }
  function DpCornerSize(size) {
    this.w6d_1 = size;
  }
  protoOf(DpCornerSize).t6d = function (shapeSize, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.shape.DpCornerSize.toPx.<anonymous>' call
    return density.i23(this.w6d_1);
  };
  protoOf(DpCornerSize).toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.w6d_1) + '.dp)';
  };
  protoOf(DpCornerSize).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.w6d_1);
  };
  protoOf(DpCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.w6d_1, tmp0_other_with_cast.w6d_1))
      return false;
    return true;
  };
  function ZeroCornerSize$1() {
  }
  protoOf(ZeroCornerSize$1).t6d = function (shapeSize, density) {
    return 0.0;
  };
  protoOf(ZeroCornerSize$1).toString = function () {
    return 'ZeroCornerSize';
  };
  var properties_initialized_CornerSize_kt_9yvmfc;
  function _init_properties_CornerSize_kt__adzyne() {
    if (!properties_initialized_CornerSize_kt_9yvmfc) {
      properties_initialized_CornerSize_kt_9yvmfc = true;
      ZeroCornerSize = new ZeroCornerSize$1();
    }
  }
  function get_CircleShape() {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return CircleShape;
  }
  var CircleShape;
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
    this.c6e_1 = 0;
  }
  protoOf(RoundedCornerShape).u6d = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect(size));
    } else {
      tmp = new Rounded(RoundRect_0(toRect(size), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd)));
    }
    return tmp;
  };
  protoOf(RoundedCornerShape).toString = function () {
    return 'RoundedCornerShape(topStart = ' + this.o6d_1 + ', topEnd = ' + this.p6d_1 + ', bottomEnd = ' + ('' + this.q6d_1 + ', bottomStart = ' + this.r6d_1 + ')');
  };
  protoOf(RoundedCornerShape).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.o6d_1, other.o6d_1))
      return false;
    if (!equals(this.p6d_1, other.p6d_1))
      return false;
    if (!equals(this.q6d_1, other.q6d_1))
      return false;
    if (!equals(this.r6d_1, other.r6d_1))
      return false;
    return true;
  };
  protoOf(RoundedCornerShape).hashCode = function () {
    var result = hashCode(this.o6d_1);
    result = imul(31, result) + hashCode(this.p6d_1) | 0;
    result = imul(31, result) + hashCode(this.q6d_1) | 0;
    result = imul(31, result) + hashCode(this.r6d_1) | 0;
    return result;
  };
  function RoundedCornerShape_0(percent) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize(percent));
  }
  function RoundedCornerShape_1(corner) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_2(size) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_0(size));
  }
  function RoundedCornerShape_3(topStart, topEnd, bottomEnd, bottomStart) {
    var tmp;
    if (topStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = topStart;
    }
    topStart = tmp;
    var tmp_0;
    if (topEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = topEnd;
    }
    topEnd = tmp_0;
    var tmp_1;
    if (bottomEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = bottomEnd;
    }
    bottomEnd = tmp_1;
    var tmp_2;
    if (bottomStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottomStart;
    }
    bottomStart = tmp_2;
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(CornerSize_0(topStart), CornerSize_0(topEnd), CornerSize_0(bottomEnd), CornerSize_0(bottomStart));
  }
  var properties_initialized_RoundedCornerShape_kt_5mose9;
  function _init_properties_RoundedCornerShape_kt__vzposf() {
    if (!properties_initialized_RoundedCornerShape_kt_5mose9) {
      properties_initialized_RoundedCornerShape_kt_5mose9 = true;
      CircleShape = RoundedCornerShape_0(50);
    }
  }
  function BasicText$composable(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, color, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var color_0 = {_v: color};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.cz(136909683);
    sourceInformation($composer_0, 'C(BasicText$composable)P(8,3,7,4,5:c#ui.text.style.TextOverflow,6,1,2)95@4657L7,143@6403L41:BasicText.kt#423gt5');
    var $dirty = $changed;
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
      $dirty = $dirty | ($composer_0.pz(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.tz(onTextLayout_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.rz(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.j3m_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.qz(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.rz(maxLines_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.rz(minLines_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.pz(color_0._v) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.vy()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_8();
      }
      if (!(($default & 4) === 0)) {
        style_0._v = Companion_getInstance_9().k3c_1;
      }
      if (!(($default & 8) === 0)) {
        onTextLayout_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        overflow_0._v = new TextOverflow(Companion_getInstance_10().g3m_1);
      }
      if (!(($default & 32) === 0)) {
        softWrap_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        maxLines_0._v = IntCompanionObject_getInstance().MAX_VALUE;
      }
      if (!(($default & 128) === 0)) {
        minLines_0._v = 1;
      }
      if (!(($default & 256) === 0)) {
        color_0._v = null;
      }
      if (isTraceInProgress()) {
        traceEventStart(136909683, $changed, -1, 'androidx.compose.foundation.text.BasicText$composable (BasicText.kt:80)');
      }
      validateMinMaxLines(minLines_0._v, maxLines_0._v);
      // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
      var tmp0_$get_current$$composable_h5ksy7 = get_LocalSelectionRegistrar();
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
      var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var selectionRegistrar = tmp0;
      $composer_0.yy(1388300698);
      sourceInformation($composer_0, '97@4793L7,98@4844L98,101@4951L234');
      var tmp;
      if (!(selectionRegistrar == null)) {
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalTextSelectionColors();
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_2.xz(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_2);
        var backgroundSelectionColor = tmp0_0.e6e_1;
        var selectableId = rememberSaveable$composable([selectionRegistrar], null, null, BasicText$composable$lambda(selectionRegistrar), $composer_0, 0, 6);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.yy(-1058148781);
        sourceInformation($composer_3, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = !!(!!($composer_3.pz(selectableId) | $composer_3.pz(selectionRegistrar)) | $composer_3.pz(new Color(backgroundSelectionColor)));
        // Inline function 'kotlin.let' call
        var tmp0_let = $composer_3.nz();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_11().sy_1) {
          // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
          var value = new SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor);
          $composer_3.oz(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        var tmp_1 = tmp_0;
        var tmp0_1 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        $composer_3.zy();
        tmp = tmp0_1;
      } else {
        tmp = null;
      }
      var tmp0_group = tmp;
      $composer_0.zy();
      var selectionController = tmp0_group;
      var tmp_2;
      if (!(selectionController == null) ? true : !(onTextLayout_0._v == null)) {
        $composer_0.yy(1388301302);
        sourceInformation($composer_0, '123@5765L7');
        var tmp_3 = graphicsLayer(modifier_0._v);
        var tmp_4 = AnnotatedString_init_$Create$(text);
        var tmp_5 = style_0._v;
        var tmp_6 = onTextLayout_0._v;
        var tmp_7 = overflow_0._v.j3m_1;
        var tmp_8 = softWrap_0._v;
        var tmp_9 = maxLines_0._v;
        var tmp_10 = minLines_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp5_$get_current$$composable_el8hro = get_LocalFontFamilyResolver();
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_4.xz(tmp5_$get_current$$composable_el8hro);
        sourceInformationMarkerEnd($composer_4);
        var tmp1_group = textModifier(tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp0_2, null, null, selectionController, color_0._v);
        $composer_0.zy();
        tmp_2 = tmp1_group;
      } else {
        $composer_0.yy(1388301972);
        sourceInformation($composer_0, '135@6216L7');
        var tmp_11 = graphicsLayer(modifier_0._v);
        var tmp_12 = style_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp7_$get_current$$composable_dkarp2 = get_LocalFontFamilyResolver();
        var $composer_5 = $composer_0;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_5.xz(tmp7_$get_current$$composable_dkarp2);
        sourceInformationMarkerEnd($composer_5);
        var tmp2_group = tmp_11.g3t(new TextStringSimpleElement(text, tmp_12, tmp0_3, overflow_0._v.j3m_1, softWrap_0._v, maxLines_0._v, minLines_0._v, color_0._v));
        $composer_0.zy();
        tmp_2 = tmp2_group;
      }
      var finalModifier = tmp_2;
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp9_Layout$composable = EmptyMeasurePolicy_getInstance();
      var modifier_1 = finalModifier;
      var $composer_6 = $composer_0;
      $composer_6.yy(310513410);
      sourceInformation($composer_6, 'CC(Layout$composable)P(1)123@4760L23,126@4911L385:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_8();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_6, 0);
      var materialized = materialize($composer_6, modifier_1);
      var localMap = $composer_6.wz();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_12().o4l_1;
      var $composer_7 = $composer_6;
      $composer_7.yy(-1096955905);
      sourceInformation($composer_7, 'CC(ReusableComposeNode$composable):Composables.kt#9igjgp');
      var tmp_13 = $composer_7.ty();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_7.iz();
      if ($composer_7.uy()) {
        var tmp_14 = $composer_7;
        tmp_14.jz(BasicText$composable$lambda_0(tmp0_ReusableComposeNode$composable));
      } else {
        $composer_7.kz();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp2_anonymous = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss(tmp2_anonymous, tmp9_Layout$composable, Companion_getInstance_12().t4l_1);
      Updater__set_impl_v7kwss(tmp2_anonymous, localMap, Companion_getInstance_12().s4l_1);
      Updater__set_impl_v7kwss(tmp2_anonymous, materialized, Companion_getInstance_12().q4l_1);
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_12().w4l_1;
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp2_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_15;
      if (tmp0_with.uy() ? true : !equals(tmp0_with.nz(), compositeKeyHash)) {
        tmp0_with.oz(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp2_anonymous).mz(compositeKeyHash, tmp0_set);
        tmp_15 = Unit_getInstance();
      }
      $composer_7.lz();
      $composer_7.zy();
      $composer_6.zy();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.hz();
    }
    var tmp3_safe_receiver = $composer_0.dz();
    if (tmp3_safe_receiver === null)
      null;
    else {
      tmp3_safe_receiver.l1e(BasicText$composable$lambda_1(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, minLines_0, color_0, $changed, $default));
    }
  }
  function textModifier(_this__u8e3s4, text, style, onTextLayout, overflow, softWrap, maxLines, minLines, fontFamilyResolver, placeholders, onPlaceholderLayout, selectionController, color) {
    if (selectionController == null) {
      var staticTextModifier = new TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, null, color);
      return _this__u8e3s4.g3t(Companion_getInstance_8()).g3t(staticTextModifier);
    } else {
      var selectableTextModifier = new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
      return _this__u8e3s4.g3t(selectionController.l6e_1).g3t(selectableTextModifier);
    }
  }
  function EmptyMeasurePolicy$placementBlock$lambda($this$null) {
    return Unit_getInstance();
  }
  function EmptyMeasurePolicy() {
    EmptyMeasurePolicy_instance = this;
    var tmp = this;
    tmp.m6e_1 = EmptyMeasurePolicy$placementBlock$lambda;
  }
  protoOf(EmptyMeasurePolicy).i4o = function (_this__u8e3s4, measurables, constraints) {
    return _this__u8e3s4.h47(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints), VOID, this.m6e_1);
  };
  var EmptyMeasurePolicy_instance;
  function EmptyMeasurePolicy_getInstance() {
    if (EmptyMeasurePolicy_instance == null)
      new EmptyMeasurePolicy();
    return EmptyMeasurePolicy_instance;
  }
  function BasicText$composable$lambda($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.n6e();
    };
  }
  function BasicText$composable$lambda_0($tmp0_ReusableComposeNode$composable) {
    return function () {
      return $tmp0_ReusableComposeNode$composable();
    };
  }
  function BasicText$composable$lambda_1($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $minLines, $color, $$changed, $$default) {
    return function ($composer, $force) {
      BasicText$composable($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.j3m_1, $softWrap._v, $maxLines._v, $minLines._v, $color._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  function validateMinMaxLines(minLines, maxLines) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minLines > 0 ? maxLines > 0 : false)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message = 'both minLines ' + minLines + ' and maxLines ' + maxLines + ' must be greater than zero';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(minLines <= maxLines)) {
      // Inline function 'androidx.compose.foundation.text.validateMinMaxLines.<anonymous>' call
      var message_0 = 'minLines ' + minLines + ' must be less than or equal to maxLines ' + maxLines;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  function get_DefaultMinLines() {
    return DefaultMinLines;
  }
  var DefaultMinLines;
  function detectDragGesturesAfterLongPressWithObserver(_this__u8e3s4, observer, $completion) {
    var tmp = detectDragGesturesAfterLongPressWithObserver$lambda(observer);
    var tmp_0 = detectDragGesturesAfterLongPressWithObserver$lambda_0(observer);
    var tmp_1 = detectDragGesturesAfterLongPressWithObserver$lambda_1(observer);
    return detectDragGesturesAfterLongPress(_this__u8e3s4, tmp, tmp_0, tmp_1, detectDragGesturesAfterLongPressWithObserver$lambda_2(observer), $completion);
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda($observer) {
    return function (it) {
      $observer.o6e(it.m21_1);
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_0($observer) {
    return function () {
      $observer.p6e();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_1($observer) {
    return function () {
      $observer.g4s();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_2($observer) {
    return function (_anonymous_parameter_0__qggqh8, offset) {
      $observer.q6e(offset.m21_1);
      return Unit_getInstance();
    };
  }
  function ceilToIntPx(_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    // Inline function 'kotlin.math.ceil' call
    var tmp0_roundToInt = Math.ceil(_this__u8e3s4);
    return roundToInt(tmp0_roundToInt);
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function _InlineDensity___init__impl__1m7u8m(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _InlineDensity___init__impl__1m7u8m_0(density, fontScale) {
    var tmp$ret$0;
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = toLong(toBits(density));
    var v2 = toLong(toBits(fontScale));
    tmp$ret$0 = v1.a6(32).sd(v2.m6(new Long(-1, 0)));
    return _InlineDensity___init__impl__1m7u8m(tmp$ret$0);
  }
  function _InlineDensity___init__impl__1m7u8m_1(density) {
    return _InlineDensity___init__impl__1m7u8m_0(density.g23(), density.h23());
  }
  function _InlineDensity___get_density__impl__uz12rr($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _get_packedValue__aj623s($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.y5(32).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function _InlineDensity___get_fontScale__impl__ao594c($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _get_packedValue__aj623s($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.m6(new Long(-1, 0)).z5();
    return floatFromBits(tmp1_fromBits);
  }
  function InlineDensity__toString_impl_9jhvwu($this) {
    return 'InlineDensity(density=' + _InlineDensity___get_density__impl__uz12rr($this) + ', fontScale=' + _InlineDensity___get_fontScale__impl__ao594c($this) + ')';
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    FloatCompanionObject_getInstance();
    FloatCompanionObject_getInstance();
    tmp.r6e_1 = _InlineDensity___init__impl__1m7u8m_0(NaN, NaN);
  }
  var Companion_instance;
  function Companion_getInstance_16() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function InlineDensity__hashCode_impl_vanspp($this) {
    return $this.hashCode();
  }
  function InlineDensity__equals_impl_ppdv5r($this, other) {
    if (!(other instanceof InlineDensity))
      return false;
    var tmp0_other_with_cast = other instanceof InlineDensity ? other.s6e_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineDensity(packedValue) {
    Companion_getInstance_16();
    this.s6e_1 = packedValue;
  }
  protoOf(InlineDensity).toString = function () {
    return InlineDensity__toString_impl_9jhvwu(this.s6e_1);
  };
  protoOf(InlineDensity).hashCode = function () {
    return InlineDensity__hashCode_impl_vanspp(this.s6e_1);
  };
  protoOf(InlineDensity).equals = function (other) {
    return InlineDensity__equals_impl_ppdv5r(this.s6e_1, other);
  };
  function finalConstraints(constraints, softWrap, overflow, maxIntrinsicWidth) {
    return Constraints(VOID, finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth), VOID, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
  }
  function finalMaxLines(softWrap, overflow, maxLinesIn) {
    var overwriteMaxLines = !softWrap ? overflow === Companion_getInstance_10().h3m_1 : false;
    return overwriteMaxLines ? 1 : coerceAtLeast(maxLinesIn, 1);
  }
  function finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth) {
    var widthMatters = softWrap ? true : overflow === Companion_getInstance_10().h3m_1;
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      Companion_getInstance_13();
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (_Constraints___get_minWidth__impl__hi9lfi(constraints) === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn(ceilToIntPx(maxIntrinsicWidth), _Constraints___get_minWidth__impl__hi9lfi(constraints), maxWidth);
    }
    return tmp_0;
  }
  function get_EmptyTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_TwoLineTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return TwoLineTextReplacement;
  }
  var TwoLineTextReplacement;
  function Companion_0() {
    Companion_instance_0 = this;
    this.t6e_1 = null;
  }
  protoOf(Companion_0).u6e = function (minMaxUtil, layoutDirection, paramStyle, density, fontFamilyResolver) {
    if (minMaxUtil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (((layoutDirection.equals(minMaxUtil.v6e_1) ? paramStyle.equals(minMaxUtil.w6e_1) : false) ? density.g23() === minMaxUtil.x6e_1.g23() : false) ? fontFamilyResolver === minMaxUtil.y6e_1 : false) {
        return minMaxUtil;
      }
    }
    var tmp1_safe_receiver = this.t6e_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (((layoutDirection.equals(tmp1_safe_receiver.v6e_1) ? paramStyle.equals(tmp1_safe_receiver.w6e_1) : false) ? density.g23() === tmp1_safe_receiver.x6e_1.g23() : false) ? fontFamilyResolver === tmp1_safe_receiver.y6e_1 : false) {
        return tmp1_safe_receiver;
      }
    }
    // Inline function 'kotlin.also' call
    var tmp0_also = new MinLinesConstrainer(layoutDirection, resolveDefaults(paramStyle, layoutDirection), density, fontFamilyResolver);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.Companion.from.<anonymous>' call
    Companion_getInstance_17().t6e_1 = tmp0_also;
    return tmp0_also;
  };
  var Companion_instance_0;
  function Companion_getInstance_17() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function MinLinesConstrainer(layoutDirection, inputTextStyle, density, fontFamilyResolver) {
    Companion_getInstance_17();
    this.v6e_1 = layoutDirection;
    this.w6e_1 = inputTextStyle;
    this.x6e_1 = density;
    this.y6e_1 = fontFamilyResolver;
    this.z6e_1 = resolveDefaults(this.w6e_1, this.v6e_1);
    var tmp = this;
    FloatCompanionObject_getInstance();
    tmp.a6f_1 = NaN;
    var tmp_0 = this;
    FloatCompanionObject_getInstance();
    tmp_0.b6f_1 = NaN;
  }
  protoOf(MinLinesConstrainer).c6f = function (inConstraints, minLines) {
    var oneLineHeight = this.b6f_1;
    var lineHeight = this.a6f_1;
    if (isNaN_0(oneLineHeight) ? true : isNaN_0(lineHeight)) {
      oneLineHeight = Paragraph(get_EmptyTextReplacement(), this.z6e_1, Constraints(), this.x6e_1, this.y6e_1, VOID, VOID, 1, false).u21();
      var twoLineHeight = Paragraph(get_TwoLineTextReplacement(), this.z6e_1, Constraints(), this.x6e_1, this.y6e_1, VOID, VOID, 2, false).u21();
      lineHeight = twoLineHeight - oneLineHeight;
      this.b6f_1 = oneLineHeight;
      this.a6f_1 = lineHeight;
    }
    var tmp;
    if (!(minLines === 1)) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = oneLineHeight + lineHeight * (minLines - 1 | 0);
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      tmp = coerceAtMost(coerceAtLeast(tmp$ret$0, 0), _Constraints___get_maxHeight__impl__dt3e8z(inConstraints));
    } else {
      tmp = _Constraints___get_minHeight__impl__ev4bgx(inConstraints);
    }
    var minHeight = tmp;
    var tmp0_maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(inConstraints);
    var tmp1_minWidth = _Constraints___get_minWidth__impl__hi9lfi(inConstraints);
    var tmp2_maxWidth = _Constraints___get_maxWidth__impl__uuyqc(inConstraints);
    return Constraints(tmp1_minWidth, tmp2_maxWidth, minHeight, tmp0_maxHeight);
  };
  var properties_initialized_MinLinesConstrainer_kt_uvu6cn;
  function _init_properties_MinLinesConstrainer_kt__odtdjv() {
    if (!properties_initialized_MinLinesConstrainer_kt_uvu6cn) {
      properties_initialized_MinLinesConstrainer_kt_uvu6cn = true;
      EmptyTextReplacement = repeat('H', 10);
      TwoLineTextReplacement = get_EmptyTextReplacement() + '\n' + get_EmptyTextReplacement();
    }
  }
  function textLayoutResult($this, layoutDirection, finalConstraints, multiParagraph) {
    var tmp = $this.d6f_1;
    var tmp_0 = $this.e6f_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = $this.k6f_1;
    tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    return new TextLayoutResult(TextLayoutInput_init_$Create$(tmp, tmp_0, tmp$ret$0, $this.i6f_1, $this.h6f_1, $this.g6f_1, ensureNotNull($this.n6f_1), layoutDirection, $this.f6f_1, finalConstraints), multiParagraph, constrain(finalConstraints, IntSize(ceilToIntPx(multiParagraph.b36_1), ceilToIntPx(multiParagraph.c36_1))));
  }
  function setLayoutDirection($this, layoutDirection) {
    var localIntrinsics = $this.o6f_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.p6f_1)) ? true : localIntrinsics.v37()) {
      $this.p6f_1 = layoutDirection;
      var tmp0_annotatedString = $this.d6f_1;
      var tmp1_style = resolveDefaults($this.e6f_1, layoutDirection);
      var tmp2_density = ensureNotNull($this.n6f_1);
      var tmp3_fontFamilyResolver = $this.f6f_1;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = $this.k6f_1;
      var tmp4_placeholders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.o6f_1 = intrinsics;
    return intrinsics;
  }
  function layoutText($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection($this, layoutDirection);
    return new MultiParagraph(localParagraphIntrinsics, finalConstraints(constraints, $this.h6f_1, $this.g6f_1, localParagraphIntrinsics.o2h()), finalMaxLines($this.h6f_1, $this.g6f_1, $this.i6f_1), $this.g6f_1 === Companion_getInstance_10().h3m_1);
  }
  function newLayoutWillBeDifferent(_this__u8e3s4, $this, constraints, layoutDirection) {
    if (_this__u8e3s4 == null)
      return true;
    if (_this__u8e3s4.m3b_1.y35_1.v37())
      return true;
    if (!layoutDirection.equals(_this__u8e3s4.l3b_1.c3c_1))
      return true;
    if (equals(constraints, _this__u8e3s4.l3b_1.e3c_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4.l3b_1.e3c_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < _this__u8e3s4.m3b_1.c36_1 ? true : _this__u8e3s4.m3b_1.a36_1) {
      return true;
    }
    return false;
  }
  function markDirty($this) {
    $this.o6f_1 = null;
    $this.q6f_1 = null;
  }
  function MultiParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    this.d6f_1 = text;
    this.e6f_1 = style;
    this.f6f_1 = fontFamilyResolver;
    this.g6f_1 = overflow;
    this.h6f_1 = softWrap;
    this.i6f_1 = maxLines;
    this.j6f_1 = minLines;
    this.k6f_1 = placeholders;
    this.l6f_1 = null;
    this.m6f_1 = Companion_getInstance_16().r6e_1;
    this.n6f_1 = null;
    this.o6f_1 = null;
    this.p6f_1 = null;
    this.q6f_1 = null;
    this.r6f_1 = -1;
    this.s6f_1 = -1;
  }
  protoOf(MultiParagraphLayoutCache).t6f = function (value) {
    var localField = this.n6f_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_16().r6e_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.n6f_1 = value;
      this.m6f_1 = newDensity;
      return Unit_getInstance();
    }
    if (value == null ? true : !equals(this.m6f_1, newDensity)) {
      this.n6f_1 = value;
      this.m6f_1 = newDensity;
      markDirty(this);
    }
  };
  protoOf(MultiParagraphLayoutCache).u6f = function () {
    var tmp0_elvis_lhs = this.q6f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('You must call layoutWithConstraints first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MultiParagraphLayoutCache).v6f = function () {
    return this.q6f_1;
  };
  protoOf(MultiParagraphLayoutCache).w6f = function (constraints, layoutDirection) {
    var tmp;
    if (this.j6f_1 > 1) {
      // Inline function 'kotlin.also' call
      var tmp0_also = Companion_getInstance_17().u6e(this.l6f_1, layoutDirection, this.e6f_1, ensureNotNull(this.n6f_1), this.f6f_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.l6f_1 = tmp0_also;
      var localMin = tmp0_also;
      tmp = localMin.c6f(constraints, this.j6f_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent(this.q6f_1, this, finalConstraints, layoutDirection)) {
      if (equals(finalConstraints, ensureNotNull(this.q6f_1).l3b_1.e3c_1))
        return false;
      this.q6f_1 = textLayoutResult(this, layoutDirection, finalConstraints, ensureNotNull(this.q6f_1).m3b_1);
      return true;
    }
    var multiParagraph = layoutText(this, finalConstraints, layoutDirection);
    this.q6f_1 = textLayoutResult(this, layoutDirection, finalConstraints, multiParagraph);
    return true;
  };
  protoOf(MultiParagraphLayoutCache).x6f = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    this.d6f_1 = text;
    this.e6f_1 = style;
    this.f6f_1 = fontFamilyResolver;
    this.g6f_1 = overflow;
    this.h6f_1 = softWrap;
    this.i6f_1 = maxLines;
    this.j6f_1 = minLines;
    this.k6f_1 = placeholders;
    markDirty(this);
  };
  function setLayoutDirection_0($this, layoutDirection) {
    var localIntrinsics = $this.l6g_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.m6g_1)) ? true : localIntrinsics.v37()) {
      $this.m6g_1 = layoutDirection;
      tmp = ParagraphIntrinsics($this.y6f_1, resolveDefaults($this.z6f_1, layoutDirection), VOID, VOID, ensureNotNull($this.g6g_1), $this.a6g_1);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.l6g_1 = intrinsics;
    return intrinsics;
  }
  function layoutText_0($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection_0($this, layoutDirection);
    return Paragraph_0(localParagraphIntrinsics, finalConstraints(constraints, $this.c6g_1, $this.b6g_1, localParagraphIntrinsics.o2h()), finalMaxLines($this.c6g_1, $this.b6g_1, $this.d6g_1), $this.b6g_1 === Companion_getInstance_10().h3m_1);
  }
  function newLayoutWillBeDifferent_0($this, constraints, layoutDirection) {
    var tmp0_elvis_lhs = $this.h6g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localParagraph = tmp;
    var tmp1_elvis_lhs = $this.l6g_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return true;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localParagraphIntrinsics = tmp_0;
    if (localParagraphIntrinsics.v37())
      return true;
    if (!layoutDirection.equals($this.m6g_1))
      return true;
    if (equals(constraints, $this.n6g_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc($this.n6g_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < localParagraph.u21() ? true : localParagraph.l36()) {
      return true;
    }
    return false;
  }
  function markDirty_0($this) {
    $this.h6g_1 = null;
    $this.l6g_1 = null;
    $this.m6g_1 = null;
    $this.o6g_1 = -1;
    $this.p6g_1 = -1;
    $this.n6g_1 = Companion_getInstance_13().f23(0, 0);
    $this.j6g_1 = IntSize(0, 0);
    $this.i6g_1 = false;
  }
  function ParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    this.y6f_1 = text;
    this.z6f_1 = style;
    this.a6g_1 = fontFamilyResolver;
    this.b6g_1 = overflow;
    this.c6g_1 = softWrap;
    this.d6g_1 = maxLines;
    this.e6g_1 = minLines;
    this.f6g_1 = Companion_getInstance_16().r6e_1;
    this.g6g_1 = null;
    this.h6g_1 = null;
    this.i6g_1 = false;
    this.j6g_1 = IntSize(0, 0);
    this.k6g_1 = null;
    this.l6g_1 = null;
    this.m6g_1 = null;
    this.n6g_1 = Companion_getInstance_13().f23(0, 0);
    this.o6g_1 = -1;
    this.p6g_1 = -1;
  }
  protoOf(ParagraphLayoutCache).t6f = function (value) {
    var localField = this.g6g_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.<set-density>.<anonymous>' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_16().r6e_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.g6g_1 = value;
      this.f6g_1 = newDensity;
      return Unit_getInstance();
    }
    if (value == null ? true : !equals(this.f6g_1, newDensity)) {
      this.g6g_1 = value;
      this.f6g_1 = newDensity;
      markDirty_0(this);
    }
  };
  protoOf(ParagraphLayoutCache).q6g = function () {
    var tmp0_safe_receiver = this.l6g_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.v37();
  };
  protoOf(ParagraphLayoutCache).w6f = function (constraints, layoutDirection) {
    var tmp;
    if (this.e6g_1 > 1) {
      // Inline function 'kotlin.also' call
      var tmp0_also = Companion_getInstance_17().u6e(this.k6g_1, layoutDirection, this.z6f_1, ensureNotNull(this.g6g_1), this.a6g_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.k6g_1 = tmp0_also;
      var localMin = tmp0_also;
      tmp = localMin.c6f(constraints, this.e6g_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent_0(this, finalConstraints, layoutDirection)) {
      if (!equals(finalConstraints, this.n6g_1)) {
        var localParagraph = ensureNotNull(this.h6g_1);
        var localSize = constrain(finalConstraints, IntSize(ceilToIntPx(localParagraph.t21()), ceilToIntPx(localParagraph.u21())));
        this.j6g_1 = localSize;
        this.i6g_1 = !(this.b6g_1 === Companion_getInstance_10().i3m_1) ? _IntSize___get_width__impl__d9yl4o(localSize) < localParagraph.t21() ? true : _IntSize___get_height__impl__prv63b(localSize) < localParagraph.u21() : false;
      }
      return false;
    }
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var tmp1_also = layoutText_0(this, finalConstraints, layoutDirection);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
    this.n6g_1 = finalConstraints;
    var localSize_0 = constrain(finalConstraints, IntSize(ceilToIntPx(tmp1_also.t21()), ceilToIntPx(tmp1_also.u21())));
    this.j6g_1 = localSize_0;
    this.i6g_1 = !(this.b6g_1 === Companion_getInstance_10().i3m_1) ? _IntSize___get_width__impl__d9yl4o(localSize_0) < tmp1_also.t21() ? true : _IntSize___get_height__impl__prv63b(localSize_0) < tmp1_also.u21() : false;
    tmp_0.h6g_1 = tmp1_also;
    return true;
  };
  protoOf(ParagraphLayoutCache).r6g = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    this.y6f_1 = text;
    this.z6f_1 = style;
    this.a6g_1 = fontFamilyResolver;
    this.b6g_1 = overflow;
    this.c6g_1 = softWrap;
    this.d6g_1 = maxLines;
    this.e6g_1 = minLines;
    markDirty_0(this);
  };
  protoOf(ParagraphLayoutCache).s6g = function () {
    var tmp0_elvis_lhs = this.m6g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localLayoutDirection = tmp;
    var tmp1_elvis_lhs = this.g6g_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localDensity = tmp_0;
    var annotatedString = AnnotatedString_init_$Create$(this.y6f_1);
    if (this.h6g_1 == null)
      return null;
    if (this.l6g_1 == null)
      return null;
    var finalConstraints = Constraints__copy$default_impl_f452rp(this.n6g_1, 0, VOID, 0);
    return new TextLayoutResult(TextLayoutInput_init_$Create$(annotatedString, this.z6f_1, emptyList(), this.d6g_1, this.c6g_1, this.b6g_1, localDensity, localLayoutDirection, this.a6g_1, finalConstraints), new MultiParagraph(new MultiParagraphIntrinsics(annotatedString, this.z6f_1, emptyList(), localDensity, this.a6g_1), finalConstraints, this.d6g_1, this.b6g_1 === Companion_getInstance_10().h3m_1), this.j6g_1);
  };
  function SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.v6g_1 = text;
    this.w6g_1 = style;
    this.x6g_1 = fontFamilyResolver;
    this.y6g_1 = onTextLayout;
    this.z6g_1 = overflow;
    this.a6h_1 = softWrap;
    this.b6h_1 = maxLines;
    this.c6h_1 = minLines;
    this.d6h_1 = placeholders;
    this.e6h_1 = onPlaceholderLayout;
    this.f6h_1 = selectionController;
    this.g6h_1 = color;
  }
  protoOf(SelectableTextAnnotatedStringElement).a1l = function () {
    return new SelectableTextAnnotatedStringNode(this.v6g_1, this.w6g_1, this.x6g_1, this.y6g_1, this.z6g_1, this.a6h_1, this.b6h_1, this.c6h_1, this.d6h_1, this.e6h_1, this.f6h_1, this.g6h_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).h6h = function (node) {
    node.b6i(this.v6g_1, this.w6g_1, this.d6h_1, this.c6h_1, this.b6h_1, this.a6h_1, this.x6g_1, this.z6g_1, this.y6g_1, this.e6h_1, this.f6h_1, this.g6h_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).k42 = function (node) {
    return this.h6h(node instanceof SelectableTextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(SelectableTextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectableTextAnnotatedStringElement))
      return false;
    if (!equals(this.g6h_1, other.g6h_1))
      return false;
    if (!this.v6g_1.equals(other.v6g_1))
      return false;
    if (!this.w6g_1.equals(other.w6g_1))
      return false;
    if (!equals(this.d6h_1, other.d6h_1))
      return false;
    if (!equals(this.x6g_1, other.x6g_1))
      return false;
    if (!equals(this.y6g_1, other.y6g_1))
      return false;
    if (!(this.z6g_1 === other.z6g_1))
      return false;
    if (!(this.a6h_1 === other.a6h_1))
      return false;
    if (!(this.b6h_1 === other.b6h_1))
      return false;
    if (!(this.c6h_1 === other.c6h_1))
      return false;
    if (!equals(this.e6h_1, other.e6h_1))
      return false;
    if (!equals(this.f6h_1, other.f6h_1))
      return false;
    return true;
  };
  protoOf(SelectableTextAnnotatedStringElement).hashCode = function () {
    var result = this.v6g_1.hashCode();
    result = imul(31, result) + this.w6g_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.x6g_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.y6g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.z6g_1) | 0;
    result = imul(31, result) + (this.a6h_1 | 0) | 0;
    result = imul(31, result) + this.b6h_1 | 0;
    result = imul(31, result) + this.c6h_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.d6h_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.e6h_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.f6h_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.g6h_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  protoOf(SelectableTextAnnotatedStringElement).toString = function () {
    return 'SelectableTextAnnotatedStringElement(text=' + this.v6g_1 + ', style=' + this.w6g_1 + ', fontFamilyResolver=' + this.x6g_1 + ', onTextLayout=' + this.y6g_1 + ', overflow=' + new TextOverflow(this.z6g_1) + ', softWrap=' + this.a6h_1 + ', maxLines=' + this.b6h_1 + ', minLines=' + this.c6h_1 + ', placeholders=' + this.d6h_1 + ', onPlaceholderLayout=' + this.e6h_1 + ', selectionController=' + this.f6h_1 + ', color=' + this.g6h_1 + ')';
  };
  function SelectableTextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    DelegatingNode.call(this);
    this.z6h_1 = selectionController;
    this.a6i_1 = this.o4t(new TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, this.z6h_1, overrideColor));
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.z6h_1 == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.SelectableTextAnnotatedStringNode.<anonymous>' call
        var message = 'Do not use SelectionCapableStaticTextModifier unless selectionController != null';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
  }
  protoOf(SelectableTextAnnotatedStringNode).q4n = function (coordinates) {
    var tmp0_safe_receiver = this.z6h_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.c6i(coordinates);
    }
  };
  protoOf(SelectableTextAnnotatedStringNode).u3u = function (_this__u8e3s4) {
    return this.a6i_1.g6j(_this__u8e3s4);
  };
  protoOf(SelectableTextAnnotatedStringNode).z46 = function (_this__u8e3s4, measurable, constraints) {
    return this.a6i_1.h6j(_this__u8e3s4, measurable, constraints);
  };
  protoOf(SelectableTextAnnotatedStringNode).b6i = function (text, style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, onTextLayout, onPlaceholderLayout, selectionController, color) {
    this.a6i_1.m6j(this.a6i_1.i6j(color, style), this.a6i_1.j6j(text), this.a6i_1.k6j(style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow), this.a6i_1.l6j(onTextLayout, onPlaceholderLayout, selectionController));
    this.z6h_1 = selectionController;
    invalidateMeasurement(this);
  };
  function SelectionController$modifier$lambda(this$0) {
    return function () {
      return this$0.j6e_1.n6j_1;
    };
  }
  function SelectionController$modifier$lambda_0(this$0) {
    return function () {
      return this$0.j6e_1.o6j_1;
    };
  }
  function SelectionController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.j6e_1.n6j_1;
    };
  }
  function SelectionController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.j6e_1.o6j_1;
    };
  }
  function SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor, params) {
    params = params === VOID ? Companion_getInstance_18().p6j_1 : params;
    this.g6e_1 = selectableId;
    this.h6e_1 = selectionRegistrar;
    this.i6e_1 = backgroundSelectionColor;
    this.j6e_1 = params;
    this.k6e_1 = null;
    var tmp = this;
    var tmp_0 = SelectionController$modifier$lambda(this);
    tmp.l6e_1 = textPointerHoverIcon(makeSelectionModifier(this.h6e_1, this.g6e_1, tmp_0, SelectionController$modifier$lambda_0(this), get_isInTouchMode()), this.h6e_1);
  }
  protoOf(SelectionController).t1c = function () {
    var tmp = this;
    var tmp_0 = SelectionController$onRemembered$lambda(this);
    tmp.k6e_1 = this.h6e_1.q6j(new MultiWidgetSelectionDelegate(this.g6e_1, tmp_0, SelectionController$onRemembered$lambda_0(this)));
  };
  protoOf(SelectionController).s1c = function () {
    var localSelectable = this.k6e_1;
    if (!(localSelectable == null)) {
      this.h6e_1.r6j(localSelectable);
      this.k6e_1 = null;
    }
  };
  protoOf(SelectionController).u1c = function () {
    var localSelectable = this.k6e_1;
    if (!(localSelectable == null)) {
      this.h6e_1.r6j(localSelectable);
      this.k6e_1 = null;
    }
  };
  protoOf(SelectionController).s6j = function (textLayoutResult) {
    this.j6e_1 = this.j6e_1.t6j(VOID, textLayoutResult);
  };
  protoOf(SelectionController).c6i = function (coordinates) {
    this.j6e_1 = this.j6e_1.t6j(coordinates);
  };
  protoOf(SelectionController).u6j = function (drawScope) {
    var tmp0_elvis_lhs = this.h6e_1.v6j().l2(this.g6e_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var selection = tmp;
    var tmp_0;
    if (!selection.b6k_1) {
      tmp_0 = selection.z6j_1.x6j_1;
    } else {
      tmp_0 = selection.a6k_1.x6j_1;
    }
    var start = tmp_0;
    var tmp_1;
    if (!selection.b6k_1) {
      tmp_1 = selection.a6k_1.x6j_1;
    } else {
      tmp_1 = selection.z6j_1.x6j_1;
    }
    var end = tmp_1;
    if (start === end)
      return Unit_getInstance();
    var tmp1_safe_receiver = this.k6e_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c6k();
    var lastOffset = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var clippedStart = coerceAtMost(start, lastOffset);
    var clippedEnd = coerceAtMost(end, lastOffset);
    var tmp3_elvis_lhs = this.j6e_1.c37(clippedStart, clippedEnd);
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    var selectionPath = tmp_2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3;
    if (this.j6e_1.d6k()) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var tmp0_clipRect = _Size___get_width__impl__58y75t(drawScope.y31());
      var tmp1_clipRect = _Size___get_height__impl__a04p02(drawScope.y31());
      var tmp2_clipRect = Companion_getInstance_5().b2r_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var tmp0_with = drawScope.t32();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.y31();
      tmp0_with.u2e().r2q();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      tmp0_with.r32().y2q(0.0, 0.0, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
      // Inline function 'androidx.compose.foundation.text.modifiers.SelectionController.draw.<anonymous>.<anonymous>' call
      drawScope.z32(selectionPath, this.i6e_1);
      tmp0_with.u2e().s2q();
      tmp0_with.q32(previousSize);
      tmp_3 = Unit_getInstance();
    } else {
      drawScope.z32(selectionPath, this.i6e_1);
      tmp_3 = Unit_getInstance();
    }
  };
  function Companion_1() {
    Companion_instance_1 = this;
    this.p6j_1 = new StaticTextSelectionParams(null, null);
  }
  var Companion_instance_1;
  function Companion_getInstance_18() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function StaticTextSelectionParams(layoutCoordinates, textLayoutResult) {
    Companion_getInstance_18();
    this.n6j_1 = layoutCoordinates;
    this.o6j_1 = textLayoutResult;
  }
  protoOf(StaticTextSelectionParams).c37 = function (start, end) {
    var tmp0_safe_receiver = this.o6j_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c37(start, end);
  };
  protoOf(StaticTextSelectionParams).d6k = function () {
    var tmp0_safe_receiver = this.o6j_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l3b_1;
    var tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.a3c_1;
    return equals(tmp == null ? null : new TextOverflow(tmp), new TextOverflow(Companion_getInstance_10().i3m_1));
  };
  protoOf(StaticTextSelectionParams).e6k = function (layoutCoordinates, textLayoutResult) {
    return new StaticTextSelectionParams(layoutCoordinates, textLayoutResult);
  };
  protoOf(StaticTextSelectionParams).t6j = function (layoutCoordinates, textLayoutResult, $super) {
    layoutCoordinates = layoutCoordinates === VOID ? this.n6j_1 : layoutCoordinates;
    textLayoutResult = textLayoutResult === VOID ? this.o6j_1 : textLayoutResult;
    return $super === VOID ? this.e6k(layoutCoordinates, textLayoutResult) : $super.e6k.call(this, layoutCoordinates, textLayoutResult);
  };
  function makeSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates, textLayoutResult, isInTouchMode) {
    var tmp;
    if (isInTouchMode) {
      var longPressDragObserver = new makeSelectionModifier$longPressDragObserver$1(layoutCoordinates, textLayoutResult, _this__u8e3s4, selectableId);
      var tmp_0 = Companion_getInstance_8();
      tmp = pointerInput(tmp_0, longPressDragObserver, makeSelectionModifier$slambda_0(longPressDragObserver, null));
    } else {
      var mouseSelectionObserver = new makeSelectionModifier$mouseSelectionObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
      var tmp_1 = Companion_getInstance_8();
      tmp = pointerHoverIcon(composed$composable(tmp_1, VOID, makeSelectionModifier$lambda(mouseSelectionObserver)), get_textPointerIcon());
    }
    return tmp;
  }
  function outOfBoundary(_this__u8e3s4, start, end) {
    if (_this__u8e3s4 == null)
      return false;
    var lastOffset = _this__u8e3s4.l3b_1.v3b_1.y34_1.length;
    var rawStartOffset = _this__u8e3s4.i37(start);
    var rawEndOffset = _this__u8e3s4.i37(end);
    return (rawStartOffset >= (lastOffset - 1 | 0) ? rawEndOffset >= (lastOffset - 1 | 0) : false) ? true : rawStartOffset < 0 ? rawEndOffset < 0 : false;
  }
  function makeSelectionModifier$longPressDragObserver$1($layoutCoordinates, $textLayoutResult, $this_makeSelectionModifier, $selectableId) {
    this.h6k_1 = $layoutCoordinates;
    this.i6k_1 = $textLayoutResult;
    this.j6k_1 = $this_makeSelectionModifier;
    this.k6k_1 = $selectableId;
    this.f6k_1 = Companion_getInstance_6().j21_1;
    this.g6k_1 = Companion_getInstance_6().j21_1;
  }
  protoOf(makeSelectionModifier$longPressDragObserver$1).o6e = function (startPoint) {
    var tmp0_safe_receiver = this.h6k_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.a44())
        return Unit_getInstance();
      if (outOfBoundary(this.i6k_1(), startPoint, startPoint)) {
        this.j6k_1.r6k(this.k6k_1);
      } else {
        this.j6k_1.q6k(tmp0_safe_receiver, startPoint, Companion_getInstance_19().n6k_1);
      }
      this.f6k_1 = startPoint;
    }
    if (!hasSelection(this.j6k_1, this.k6k_1))
      return Unit_getInstance();
    this.g6k_1 = Companion_getInstance_6().j21_1;
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).q6e = function (delta) {
    var tmp0_safe_receiver = this.h6k_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.a44())
        return Unit_getInstance();
      if (!hasSelection(this.j6k_1, this.k6k_1))
        return Unit_getInstance();
      this.g6k_1 = Offset__plus_impl_c78cg0(this.g6k_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.f6k_1, this.g6k_1);
      var tmp;
      if (!outOfBoundary(this.i6k_1(), this.f6k_1, newPosition)) {
        var tmp1_previousPosition = this.f6k_1;
        var tmp2_adjustment = Companion_getInstance_19().p6k_1;
        var consumed = this.j6k_1.s6k(tmp0_safe_receiver, newPosition, tmp1_previousPosition, false, tmp2_adjustment);
        var tmp_0;
        if (consumed) {
          this.f6k_1 = newPosition;
          this.g6k_1 = Companion_getInstance_6().j21_1;
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
    }
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).p6e = function () {
    if (hasSelection(this.j6k_1, this.k6k_1)) {
      this.j6k_1.t6k();
    }
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).g4s = function () {
    if (hasSelection(this.j6k_1, this.k6k_1)) {
      this.j6k_1.t6k();
    }
  };
  function makeSelectionModifier$slambda($longPressDragObserver, resultContinuation) {
    this.c6l_1 = $longPressDragObserver;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(makeSelectionModifier$slambda).n4f = function ($this$pointerInput, $completion) {
    var tmp = this.o4f($this$pointerInput, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(makeSelectionModifier$slambda).se = function (p1, $completion) {
    return this.n4f((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(makeSelectionModifier$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.xd_1 = 1;
            suspendResult = detectDragGesturesAfterLongPressWithObserver(this.d6l_1, this.c6l_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 2) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(makeSelectionModifier$slambda).o4f = function ($this$pointerInput, completion) {
    var i = new makeSelectionModifier$slambda(this.c6l_1, completion);
    i.d6l_1 = $this$pointerInput;
    return i;
  };
  function makeSelectionModifier$slambda_0($longPressDragObserver, resultContinuation) {
    var i = new makeSelectionModifier$slambda($longPressDragObserver, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.n4f($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function makeSelectionModifier$mouseSelectionObserver$1($layoutCoordinates, $this_makeSelectionModifier, $selectableId) {
    this.f6l_1 = $layoutCoordinates;
    this.g6l_1 = $this_makeSelectionModifier;
    this.h6l_1 = $selectableId;
    this.e6l_1 = Companion_getInstance_6().j21_1;
  }
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).i6l = function (downPosition) {
    var tmp0_safe_receiver = this.f6l_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.a44())
        return false;
      var consumed = this.g6l_1.s6k(tmp0_safe_receiver, downPosition, this.e6l_1, false, Companion_getInstance_19().l6k_1);
      if (consumed) {
        this.e6l_1 = downPosition;
      }
      return hasSelection(this.g6l_1, this.h6l_1);
    }
    return false;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).j6l = function (dragPosition) {
    var tmp0_safe_receiver = this.f6l_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.a44())
        return false;
      if (!hasSelection(this.g6l_1, this.h6l_1))
        return false;
      var consumed = this.g6l_1.s6k(tmp0_safe_receiver, dragPosition, this.e6l_1, false, Companion_getInstance_19().l6k_1);
      var tmp;
      if (consumed) {
        this.e6l_1 = dragPosition;
        tmp = Unit_getInstance();
      }
    }
    return true;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).k6l = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.f6l_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.a44())
        return false;
      this.g6l_1.q6k(tmp0_safe_receiver, downPosition, adjustment);
      this.e6l_1 = downPosition;
      return hasSelection(this.g6l_1, this.h6l_1);
    }
    return false;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).l6l = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.f6l_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.a44())
        return false;
      if (!hasSelection(this.g6l_1, this.h6l_1))
        return false;
      var tmp0_previousPosition = this.e6l_1;
      var consumed = this.g6l_1.s6k(tmp0_safe_receiver, dragPosition, tmp0_previousPosition, false, adjustment);
      var tmp;
      if (consumed) {
        this.e6l_1 = dragPosition;
        tmp = Unit_getInstance();
      }
    }
    return true;
  };
  function invoke$lambda($currentMouseSelectionObserver$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('currentMouseSelectionObserver', KProperty0, false, function () {
      return THROW_ISE();
    });
    return $currentMouseSelectionObserver$delegate.w1();
  }
  function makeSelectionModifier$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation) {
    this.u6l_1 = $currentMouseSelectionObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(makeSelectionModifier$lambda$slambda).n4f = function ($this$pointerInput, $completion) {
    var tmp = this.o4f($this$pointerInput, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(makeSelectionModifier$lambda$slambda).se = function (p1, $completion) {
    return this.n4f((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(makeSelectionModifier$lambda$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 2;
            this.xd_1 = 1;
            suspendResult = mouseSelectionDetector(this.v6l_1, invoke$lambda(this.u6l_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 2) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(makeSelectionModifier$lambda$slambda).o4f = function ($this$pointerInput, completion) {
    var i = new makeSelectionModifier$lambda$slambda(this.u6l_1, completion);
    i.v6l_1 = $this$pointerInput;
    return i;
  };
  function makeSelectionModifier$lambda$slambda_0($currentMouseSelectionObserver$delegate, resultContinuation) {
    var i = new makeSelectionModifier$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.n4f($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function makeSelectionModifier$lambda($mouseSelectionObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.yy(1772367819);
      sourceInformation($composer_0, 'C348@13399L44,349@13475L85:SelectionController.kt#hmzc7f');
      var tmp;
      if (isTraceInProgress()) {
        traceEventStart(1772367819, $changed, -1, 'androidx.compose.foundation.text.modifiers.makeSelectionModifier.<anonymous> (SelectionController.kt:346)');
        tmp = Unit_getInstance();
      }
      var currentMouseSelectionObserver$delegate = rememberUpdatedState$composable($mouseSelectionObserver, $composer_0, 8);
      var tmp$ret$4;
      // Inline function 'androidx.compose.runtime.remember$composable' call
      var tmp0_remember$composable = $composer_0;
      var $composer_1 = tmp0_remember$composable;
      $composer_1.yy(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp0_cache = $composer_1;
      var tmp1_cache = $composer_1.pz(currentMouseSelectionObserver$delegate);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp0_cache.nz();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_11().sy_1) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.text.modifiers.makeSelectionModifier.<anonymous>.<anonymous>' call
        tmp$ret$0 = makeSelectionModifier$lambda$slambda_0(currentMouseSelectionObserver$delegate, null);
        var value = tmp$ret$0;
        tmp0_cache.oz(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.zy();
      tmp$ret$4 = tmp0;
      var tmp0_0 = pointerInput($this$composed, Unit_getInstance(), tmp$ret$4);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.zy();
      return tmp0_0;
    };
  }
  function TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.y6l_1 = text;
    this.z6l_1 = style;
    this.a6m_1 = fontFamilyResolver;
    this.b6m_1 = onTextLayout;
    this.c6m_1 = overflow;
    this.d6m_1 = softWrap;
    this.e6m_1 = maxLines;
    this.f6m_1 = minLines;
    this.g6m_1 = placeholders;
    this.h6m_1 = onPlaceholderLayout;
    this.i6m_1 = selectionController;
    this.j6m_1 = color;
  }
  protoOf(TextAnnotatedStringElement).a1l = function () {
    return new TextAnnotatedStringNode(this.y6l_1, this.z6l_1, this.a6m_1, this.b6m_1, this.c6m_1, this.d6m_1, this.e6m_1, this.f6m_1, this.g6m_1, this.h6m_1, this.i6m_1, this.j6m_1);
  };
  protoOf(TextAnnotatedStringElement).k6m = function (node) {
    node.m6j(node.i6j(this.j6m_1, this.z6l_1), node.j6j(this.y6l_1), node.k6j(this.z6l_1, this.g6m_1, this.f6m_1, this.e6m_1, this.d6m_1, this.a6m_1, this.c6m_1), node.l6j(this.b6m_1, this.h6m_1, this.i6m_1));
  };
  protoOf(TextAnnotatedStringElement).k42 = function (node) {
    return this.k6m(node instanceof TextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(TextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextAnnotatedStringElement))
      return false;
    if (!equals(this.j6m_1, other.j6m_1))
      return false;
    if (!this.y6l_1.equals(other.y6l_1))
      return false;
    if (!this.z6l_1.equals(other.z6l_1))
      return false;
    if (!equals(this.g6m_1, other.g6m_1))
      return false;
    if (!equals(this.a6m_1, other.a6m_1))
      return false;
    if (!equals(this.b6m_1, other.b6m_1))
      return false;
    if (!(this.c6m_1 === other.c6m_1))
      return false;
    if (!(this.d6m_1 === other.d6m_1))
      return false;
    if (!(this.e6m_1 === other.e6m_1))
      return false;
    if (!(this.f6m_1 === other.f6m_1))
      return false;
    if (!equals(this.h6m_1, other.h6m_1))
      return false;
    if (!equals(this.i6m_1, other.i6m_1))
      return false;
    return true;
  };
  protoOf(TextAnnotatedStringElement).hashCode = function () {
    var result = this.y6l_1.hashCode();
    result = imul(31, result) + this.z6l_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.a6m_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.b6m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.c6m_1) | 0;
    result = imul(31, result) + (this.d6m_1 | 0) | 0;
    result = imul(31, result) + this.e6m_1 | 0;
    result = imul(31, result) + this.f6m_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.g6m_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.h6m_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.i6m_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.j6m_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  function _get_layoutCache__kch9ev($this) {
    if ($this.e6j_1 == null) {
      $this.e6j_1 = new MultiParagraphLayoutCache($this.r6i_1, $this.s6i_1, $this.t6i_1, $this.v6i_1, $this.w6i_1, $this.x6i_1, $this.y6i_1, $this.z6i_1);
    }
    return ensureNotNull($this.e6j_1);
  }
  function getLayoutCache($this, density) {
    // Inline function 'kotlin.also' call
    var tmp0_also = _get_layoutCache__kch9ev($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>' call
    tmp0_also.t6f(density);
    return tmp0_also;
  }
  function TextAnnotatedStringNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp0_safe_receiver = _get_layoutCache__kch9ev(this$0).v6f();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.a(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_safe_receiver;
        tmp = tmp$ret$0;
      }
      var layout = tmp;
      return !(layout == null);
    };
  }
  function TextAnnotatedStringNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.z4n($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.r6i_1 = text;
    this.s6i_1 = style;
    this.t6i_1 = fontFamilyResolver;
    this.u6i_1 = onTextLayout;
    this.v6i_1 = overflow;
    this.w6i_1 = softWrap;
    this.x6i_1 = maxLines;
    this.y6i_1 = minLines;
    this.z6i_1 = placeholders;
    this.a6j_1 = onPlaceholderLayout;
    this.b6j_1 = selectionController;
    this.c6j_1 = overrideColor;
    this.d6j_1 = null;
    this.e6j_1 = null;
    this.f6j_1 = null;
  }
  protoOf(TextAnnotatedStringNode).i6j = function (color, style) {
    var changed = false;
    if (!equals(color, this.c6j_1)) {
      changed = true;
    }
    this.c6j_1 = color;
    changed = changed ? true : !style.o3d(this.s6i_1);
    return changed;
  };
  protoOf(TextAnnotatedStringNode).j6j = function (text) {
    if (this.r6i_1.equals(text))
      return false;
    this.r6i_1 = text;
    return true;
  };
  protoOf(TextAnnotatedStringNode).k6j = function (style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.s6i_1.n3d(style);
    this.s6i_1 = style;
    if (!equals(this.z6i_1, placeholders)) {
      this.z6i_1 = placeholders;
      changed = true;
    }
    if (!(this.y6i_1 === minLines)) {
      this.y6i_1 = minLines;
      changed = true;
    }
    if (!(this.x6i_1 === maxLines)) {
      this.x6i_1 = maxLines;
      changed = true;
    }
    if (!(this.w6i_1 === softWrap)) {
      this.w6i_1 = softWrap;
      changed = true;
    }
    if (!equals(this.t6i_1, fontFamilyResolver)) {
      this.t6i_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.v6i_1 === overflow)) {
      this.v6i_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).l6j = function (onTextLayout, onPlaceholderLayout, selectionController) {
    var changed = false;
    if (!equals(this.u6i_1, onTextLayout)) {
      this.u6i_1 = onTextLayout;
      changed = true;
    }
    if (!equals(this.a6j_1, onPlaceholderLayout)) {
      this.a6j_1 = onPlaceholderLayout;
      changed = true;
    }
    if (!equals(this.b6j_1, selectionController)) {
      this.b6j_1 = selectionController;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).m6j = function (drawChanged, textChanged, layoutChanged, callbacksChanged) {
    if (textChanged) {
      invalidateSemantics(this);
    }
    if ((textChanged ? true : layoutChanged) ? true : callbacksChanged) {
      _get_layoutCache__kch9ev(this).x6f(this.r6i_1, this.s6i_1, this.t6i_1, this.v6i_1, this.w6i_1, this.x6i_1, this.y6i_1, this.z6i_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextAnnotatedStringNode).z4r = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.f6j_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextAnnotatedStringNode$applySemantics$lambda(this);
      this.f6j_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, this.r6i_1);
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextAnnotatedStringNode).h6j = function (measureScope, measurable, constraints) {
    return this.z46(measureScope, measurable, constraints);
  };
  protoOf(TextAnnotatedStringNode).z46 = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.w6f(constraints, _this__u8e3s4.s32());
    var textLayoutResult = layoutCache.u6f();
    textLayoutResult.m3b_1.y35_1.v37();
    if (didChangeLayout) {
      invalidateLayer(this);
      var tmp0_safe_receiver = this.u6i_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(textLayoutResult);
      var tmp1_safe_receiver = this.b6j_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.s6j(textLayoutResult);
      }
      var tmp = this;
      var tmp_0 = get_FirstBaseline();
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = textLayoutResult.o3b_1;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var tmp_1 = to(tmp_0, tmp$ret$0);
      var tmp_2 = get_LastBaseline();
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = textLayoutResult.p3b_1;
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      tmp.d6j_1 = mapOf([tmp_1, to(tmp_2, tmp$ret$1)]);
    }
    var tmp2_safe_receiver = this.a6j_1;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver(textLayoutResult.q3b_1);
    var placeable = measurable.a47(Companion_getInstance_13().f23(_IntSize___get_width__impl__d9yl4o(textLayoutResult.n3b_1), _IntSize___get_height__impl__prv63b(textLayoutResult.n3b_1)));
    var tmp_3 = _IntSize___get_width__impl__d9yl4o(textLayoutResult.n3b_1);
    var tmp_4 = _IntSize___get_height__impl__prv63b(textLayoutResult.n3b_1);
    var tmp_5 = ensureNotNull(this.d6j_1);
    return _this__u8e3s4.p4n(tmp_3, tmp_4, tmp_5, TextAnnotatedStringNode$measure$lambda(placeable));
  };
  protoOf(TextAnnotatedStringNode).g6j = function (contentDrawScope) {
    return this.u3u(contentDrawScope);
  };
  protoOf(TextAnnotatedStringNode).u3u = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.b6j_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.u6j(_this__u8e3s4);
    }
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var tmp0_anonymous = _this__u8e3s4.t32().u2e();
    var textLayoutResult = _get_layoutCache__kch9ev(this).u6f();
    var localParagraph = textLayoutResult.m3b_1;
    var willClip = textLayoutResult.u3b() ? !(this.v6i_1 === Companion_getInstance_10().i3m_1) : false;
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.n3b_1);
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.n3b_1);
      var bounds = Rect(Companion_getInstance_6().j21_1, Size_0(width, height));
      tmp0_anonymous.r2q();
      tmp0_anonymous.z2q(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.s6i_1.c3d();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_14().i3b_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.s6i_1.d3d();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_15().t2w_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.s6i_1.e3d();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.s6i_1.q39();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.s6i_1.a2p();
        localParagraph.b37(tmp0_anonymous, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp3_safe_receiver = this.c6j_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l6m();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().f2t_1;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var tmp0_get_isSpecified_4wup3r = this.s6i_1.g32();
          if (!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
            tmp_3 = this.s6i_1.g32();
          } else {
            tmp_3 = Companion_getInstance().t2s_1;
          }
        }
        var color = tmp_3;
        localParagraph.z36(tmp0_anonymous, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        tmp0_anonymous.s2q();
      }
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp1_isNullOrEmpty = this.z6i_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp1_isNullOrEmpty == null ? true : tmp1_isNullOrEmpty.k())) {
      _this__u8e3s4.q56();
    }
  };
  function TextStringSimpleElement(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, color) {
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.o6m_1 = text;
    this.p6m_1 = style;
    this.q6m_1 = fontFamilyResolver;
    this.r6m_1 = overflow;
    this.s6m_1 = softWrap;
    this.t6m_1 = maxLines;
    this.u6m_1 = minLines;
    this.v6m_1 = color;
  }
  protoOf(TextStringSimpleElement).a1l = function () {
    return new TextStringSimpleNode(this.o6m_1, this.p6m_1, this.q6m_1, this.r6m_1, this.s6m_1, this.t6m_1, this.u6m_1, this.v6m_1);
  };
  protoOf(TextStringSimpleElement).w6m = function (node) {
    node.y6n(node.i6j(this.v6m_1, this.p6m_1), node.w6n(this.o6m_1), node.x6n(this.p6m_1, this.u6m_1, this.t6m_1, this.s6m_1, this.q6m_1, this.r6m_1));
  };
  protoOf(TextStringSimpleElement).k42 = function (node) {
    return this.w6m(node instanceof TextStringSimpleNode ? node : THROW_CCE());
  };
  protoOf(TextStringSimpleElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStringSimpleElement))
      return false;
    if (!equals(this.v6m_1, other.v6m_1))
      return false;
    if (!(this.o6m_1 === other.o6m_1))
      return false;
    if (!this.p6m_1.equals(other.p6m_1))
      return false;
    if (!equals(this.q6m_1, other.q6m_1))
      return false;
    if (!(this.r6m_1 === other.r6m_1))
      return false;
    if (!(this.s6m_1 === other.s6m_1))
      return false;
    if (!(this.t6m_1 === other.t6m_1))
      return false;
    if (!(this.u6m_1 === other.u6m_1))
      return false;
    return true;
  };
  protoOf(TextStringSimpleElement).hashCode = function () {
    var result = getStringHashCode(this.o6m_1);
    result = imul(31, result) + this.p6m_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.q6m_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.r6m_1) | 0;
    result = imul(31, result) + (this.s6m_1 | 0) | 0;
    result = imul(31, result) + this.t6m_1 | 0;
    result = imul(31, result) + this.u6m_1 | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.v6m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  function _get_layoutCache__kch9ev_0($this) {
    if ($this.u6n_1 == null) {
      $this.u6n_1 = new ParagraphLayoutCache($this.l6n_1, $this.m6n_1, $this.n6n_1, $this.o6n_1, $this.p6n_1, $this.q6n_1, $this.r6n_1);
    }
    return ensureNotNull($this.u6n_1);
  }
  function getLayoutCache_0($this, density) {
    // Inline function 'kotlin.also' call
    var tmp0_also = _get_layoutCache__kch9ev_0($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>' call
    tmp0_also.t6f(density);
    return tmp0_also;
  }
  function TextStringSimpleNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp0_safe_receiver = _get_layoutCache__kch9ev_0(this$0).s6g();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.a(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_safe_receiver;
        tmp = tmp$ret$0;
      }
      var layout = tmp;
      !(layout == null);
      return false;
    };
  }
  function TextStringSimpleNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.z4n($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function TextStringSimpleNode(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, overrideColor) {
    overflow = overflow === VOID ? Companion_getInstance_10().g3m_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().MAX_VALUE : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.l6n_1 = text;
    this.m6n_1 = style;
    this.n6n_1 = fontFamilyResolver;
    this.o6n_1 = overflow;
    this.p6n_1 = softWrap;
    this.q6n_1 = maxLines;
    this.r6n_1 = minLines;
    this.s6n_1 = overrideColor;
    this.t6n_1 = null;
    this.u6n_1 = null;
    this.v6n_1 = null;
  }
  protoOf(TextStringSimpleNode).i6j = function (color, style) {
    var changed = false;
    if (!equals(color, this.s6n_1)) {
      changed = true;
    }
    this.s6n_1 = color;
    changed = changed ? true : !style.o3d(this.m6n_1);
    return changed;
  };
  protoOf(TextStringSimpleNode).w6n = function (text) {
    if (this.l6n_1 === text)
      return false;
    this.l6n_1 = text;
    return true;
  };
  protoOf(TextStringSimpleNode).x6n = function (style, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.m6n_1.n3d(style);
    this.m6n_1 = style;
    if (!(this.r6n_1 === minLines)) {
      this.r6n_1 = minLines;
      changed = true;
    }
    if (!(this.q6n_1 === maxLines)) {
      this.q6n_1 = maxLines;
      changed = true;
    }
    if (!(this.p6n_1 === softWrap)) {
      this.p6n_1 = softWrap;
      changed = true;
    }
    if (!equals(this.n6n_1, fontFamilyResolver)) {
      this.n6n_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.o6n_1 === overflow)) {
      this.o6n_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextStringSimpleNode).y6n = function (drawChanged, textChanged, layoutChanged) {
    if (textChanged) {
      invalidateSemantics(this);
    }
    if (textChanged ? true : layoutChanged) {
      _get_layoutCache__kch9ev_0(this).r6g(this.l6n_1, this.m6n_1, this.n6n_1, this.o6n_1, this.p6n_1, this.q6n_1, this.r6n_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextStringSimpleNode).z4r = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.v6n_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextStringSimpleNode$applySemantics$lambda(this);
      this.v6n_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, AnnotatedString_init_$Create$(this.l6n_1));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextStringSimpleNode).z46 = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache_0(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.w6f(constraints, _this__u8e3s4.s32());
    layoutCache.q6g();
    var paragraph = ensureNotNull(layoutCache.h6g_1);
    var layoutSize = layoutCache.j6g_1;
    if (didChangeLayout) {
      invalidateLayer(this);
      var cache = this.t6n_1;
      if (cache == null) {
        cache = LinkedHashMap_init_$Create$(2);
      }
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = cache;
      var tmp2_set = get_FirstBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = paragraph.v36();
      var tmp3_set = roundToInt(tmp0_roundToInt);
      tmp1_set.g3(tmp2_set, tmp3_set);
      // Inline function 'kotlin.collections.set' call
      var tmp5_set = cache;
      var tmp6_set = get_LastBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var tmp4_roundToInt = paragraph.w36();
      var tmp7_set = roundToInt(tmp4_roundToInt);
      tmp5_set.g3(tmp6_set, tmp7_set);
      this.t6n_1 = cache;
    }
    var placeable = measurable.a47(Companion_getInstance_13().f23(_IntSize___get_width__impl__d9yl4o(layoutSize), _IntSize___get_height__impl__prv63b(layoutSize)));
    var tmp = _IntSize___get_width__impl__d9yl4o(layoutSize);
    var tmp_0 = _IntSize___get_height__impl__prv63b(layoutSize);
    var tmp_1 = ensureNotNull(this.t6n_1);
    return _this__u8e3s4.p4n(tmp, tmp_0, tmp_1, TextStringSimpleNode$measure$lambda(placeable));
  };
  protoOf(TextStringSimpleNode).u3u = function (_this__u8e3s4) {
    // Inline function 'kotlin.requireNotNull' call
    var tmp0_requireNotNull = _get_layoutCache__kch9ev_0(this).h6g_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (tmp0_requireNotNull == null) {
        // Inline function 'kotlin.requireNotNull.<anonymous>' call
        var message = 'Required value was null.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_requireNotNull;
        break $l$block;
      }
    }
    var localParagraph = tmp$ret$1;
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var tmp1_anonymous = _this__u8e3s4.t32().u2e();
    var willClip = _get_layoutCache__kch9ev_0(this).i6g_1;
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(_get_layoutCache__kch9ev_0(this).j6g_1);
      var height = _IntSize___get_height__impl__prv63b(_get_layoutCache__kch9ev_0(this).j6g_1);
      var bounds = Rect(Companion_getInstance_6().j21_1, Size_0(width, height));
      tmp1_anonymous.r2q();
      tmp1_anonymous.z2q(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.m6n_1.c3d();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_14().i3b_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.m6n_1.d3d();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_15().t2w_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.m6n_1.e3d();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.m6n_1.q39();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.m6n_1.a2p();
        localParagraph.w3n(tmp1_anonymous, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp3_safe_receiver = this.s6n_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.l6m();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().f2t_1;
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var tmp0_get_isSpecified_4wup3r = this.m6n_1.g32();
          if (!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().f2t_1))) {
            tmp_3 = this.m6n_1.g32();
          } else {
            tmp_3 = Companion_getInstance().t2s_1;
          }
        }
        var color = tmp_3;
        localParagraph.v3n(tmp1_anonymous, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        tmp1_anonymous.s2q();
      }
    }
  };
  function _get_lastVisibleOffset__v7xite(_this__u8e3s4, $this) {
    if (!($this.c6o_1 === _this__u8e3s4)) {
      var tmp;
      if (!_this__u8e3s4.s3b() ? true : _this__u8e3s4.m3b_1.a36_1) {
        tmp = _this__u8e3s4.k36() - 1 | 0;
      } else {
        var finalVisibleLine = coerceAtMost(_this__u8e3s4.f37(_IntSize___get_height__impl__prv63b(_this__u8e3s4.n3b_1)), _this__u8e3s4.k36() - 1 | 0);
        while (_this__u8e3s4.l37(finalVisibleLine) >= _IntSize___get_height__impl__prv63b(_this__u8e3s4.n3b_1)) {
          finalVisibleLine = finalVisibleLine - 1 | 0;
        }
        tmp = finalVisibleLine;
      }
      var lastVisibleLine = tmp;
      $this.d6o_1 = _this__u8e3s4.n37(lastVisibleLine, true);
      $this.c6o_1 = _this__u8e3s4;
    }
    return $this.d6o_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.z6n_1 = selectableId;
    this.a6o_1 = coordinatesCallback;
    this.b6o_1 = layoutResultCallback;
    this.c6o_1 = null;
    this.d6o_1 = -1;
  }
  protoOf(MultiWidgetSelectionDelegate).c6k = function () {
    var tmp0_elvis_lhs = this.b6o_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return _get_lastVisibleOffset__v7xite(textLayoutResult, this);
  };
  function SelectionAdjustment$Companion$None$1() {
  }
  function SelectionAdjustment$Companion$Character$1() {
  }
  function SelectionAdjustment$Companion$Word$1() {
  }
  function SelectionAdjustment$Companion$Paragraph$1() {
  }
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$1() {
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    tmp.l6k_1 = new SelectionAdjustment$Companion$None$1();
    var tmp_0 = this;
    tmp_0.m6k_1 = new SelectionAdjustment$Companion$Character$1();
    var tmp_1 = this;
    tmp_1.n6k_1 = new SelectionAdjustment$Companion$Word$1();
    var tmp_2 = this;
    tmp_2.o6k_1 = new SelectionAdjustment$Companion$Paragraph$1();
    var tmp_3 = this;
    tmp_3.p6k_1 = new SelectionAdjustment$Companion$CharacterWithWordAccelerate$1();
  }
  var Companion_instance_2;
  function Companion_getInstance_19() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function get_LocalSelectionRegistrar() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function hasSelection(_this__u8e3s4, selectableId) {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    var tmp1_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.v6j();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f2(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return null;
  }
  var properties_initialized_SelectionRegistrar_kt_shxs4d;
  function _init_properties_SelectionRegistrar_kt__oigj6p() {
    if (!properties_initialized_SelectionRegistrar_kt_shxs4d) {
      properties_initialized_SelectionRegistrar_kt_shxs4d = true;
      LocalSelectionRegistrar = compositionLocalOf(VOID, LocalSelectionRegistrar$lambda);
    }
  }
  function get_LocalTextSelectionColors() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  function TextSelectionColors(handleColor, backgroundColor) {
    this.d6e_1 = handleColor;
    this.e6e_1 = backgroundColor;
    this.f6e_1 = 0;
  }
  protoOf(TextSelectionColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.d6e_1, other.d6e_1))
      return false;
    if (!equals(this.e6e_1, other.e6e_1))
      return false;
    return true;
  };
  protoOf(TextSelectionColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.d6e_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.e6e_1) | 0;
    return result;
  };
  protoOf(TextSelectionColors).toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.d6e_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.e6e_1) + ')');
  };
  function LocalTextSelectionColors$lambda() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return get_DefaultTextSelectionColors();
  }
  var properties_initialized_TextSelectionColors_kt_x2xmyn;
  function _init_properties_TextSelectionColors_kt__lgomir() {
    if (!properties_initialized_TextSelectionColors_kt_x2xmyn) {
      properties_initialized_TextSelectionColors_kt_x2xmyn = true;
      LocalTextSelectionColors = compositionLocalOf(VOID, LocalTextSelectionColors$lambda);
    }
  }
  function mouseSelectionDetector(_this__u8e3s4, observer, $completion) {
    return awaitEachGesture(_this__u8e3s4, mouseSelectionDetector$slambda_0(observer, null), $completion);
  }
  function ClicksCounter(viewConfiguration, clicksSlop) {
    this.e6o_1 = viewConfiguration;
    this.f6o_1 = clicksSlop;
    this.g6o_1 = 0;
    this.h6o_1 = null;
  }
  protoOf(ClicksCounter).i6o = function (event) {
    var currentPrevEvent = this.h6o_1;
    if ((!(currentPrevEvent == null) ? this.k6o(currentPrevEvent, event) : false) ? this.j6o(currentPrevEvent, event) : false) {
      this.g6o_1 = this.g6o_1 + 1 | 0;
    } else {
      this.g6o_1 = 1;
    }
    this.h6o_1 = event;
  };
  protoOf(ClicksCounter).k6o = function (prevClick, newClick) {
    var diff = newClick.n4b_1.n5(prevClick.n4b_1);
    return diff.s(this.e6o_1.g51()) < 0;
  };
  protoOf(ClicksCounter).j6o = function (prevClick, newClick) {
    var diff = Offset__minus_impl_hoj2c0(newClick.o4b_1, prevClick.o4b_1);
    return Offset__getDistance_impl_pclvxn(diff) < this.f6o_1;
  };
  function awaitMouseEventDown(_this__u8e3s4, $completion) {
    var tmp = new $awaitMouseEventDownCOROUTINE$6(_this__u8e3s4, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  }
  function mouseSelectionDetector$slambda$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.j6l(it.o4b_1)) {
        it.p4d();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$lambda_0($observer, $selectionMode) {
    return function (it) {
      var tmp;
      if ($observer.l6l(it.o4b_1, $selectionMode)) {
        it.p4d();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda($observer, resultContinuation) {
    this.d6p_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mouseSelectionDetector$slambda).a4f = function ($this$awaitEachGesture, $completion) {
    var tmp = this.b4f($this$awaitEachGesture, $completion);
    tmp.zd_1 = Unit_getInstance();
    tmp.ae_1 = null;
    return tmp.ge();
  };
  protoOf(mouseSelectionDetector$slambda).se = function (p1, $completion) {
    return this.a4f((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mouseSelectionDetector$slambda).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 8;
            var tmp_0 = this;
            var tmp_1 = this.e6p_1.b4j();
            tmp_0.f6p_1 = new ClicksCounter(tmp_1, this.e6p_1.i23(_Dp___init__impl__ms3zkb(50)));
            this.xd_1 = 1;
            continue $sm;
          case 1:
            if (false) {
              this.xd_1 = 9;
              continue $sm;
            }

            this.xd_1 = 2;
            suspendResult = awaitMouseEventDown(this.e6p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.g6p_1 = suspendResult;
            this.h6p_1 = this.g6p_1.f4c_1.l(0);
            this.f6p_1.i6o(this.h6p_1);
            if (get_isShiftPressed(this.g6p_1.h4c_1)) {
              this.i6p_1 = this.d6p_1.i6l(this.h6p_1.o4b_1);
              if (this.i6p_1) {
                this.h6p_1.p4d();
                this.xd_1 = 5;
                suspendResult = drag(this.e6p_1, this.h6p_1.m4b_1, mouseSelectionDetector$slambda$lambda(this.d6p_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.xd_1 = 6;
                continue $sm;
              }
            } else {
              var tmp_2 = this;
              switch (this.f6p_1.g6o_1) {
                case 1:
                  tmp_2.j6p_1 = Companion_getInstance_19().l6k_1;
                  break;
                case 2:
                  tmp_2.j6p_1 = Companion_getInstance_19().n6k_1;
                  break;
                default:
                  tmp_2.j6p_1 = Companion_getInstance_19().o6k_1;
                  break;
              }
              this.k6p_1 = this.d6p_1.k6l(this.h6p_1.o4b_1, this.j6p_1);
              if (this.k6p_1) {
                this.h6p_1.p4d();
                this.xd_1 = 3;
                suspendResult = drag(this.e6p_1, this.h6p_1.m4b_1, mouseSelectionDetector$slambda$lambda_0(this.d6p_1, this.j6p_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.xd_1 = 4;
                continue $sm;
              }
            }

          case 3:
            this.xd_1 = 4;
            continue $sm;
          case 4:
            this.xd_1 = 7;
            continue $sm;
          case 5:
            this.xd_1 = 6;
            continue $sm;
          case 6:
            this.xd_1 = 7;
            continue $sm;
          case 7:
            this.xd_1 = 1;
            continue $sm;
          case 8:
            throw this.ae_1;
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 8) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  protoOf(mouseSelectionDetector$slambda).b4f = function ($this$awaitEachGesture, completion) {
    var i = new mouseSelectionDetector$slambda(this.d6p_1, completion);
    i.e6p_1 = $this$awaitEachGesture;
    return i;
  };
  function mouseSelectionDetector$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda($observer, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.a4f($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitMouseEventDownCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.t6o_1 = _this__u8e3s4;
  }
  protoOf($awaitMouseEventDownCOROUTINE$6).ge = function () {
    var suspendResult = this.zd_1;
    $sm: do
      try {
        var tmp = this.xd_1;
        switch (tmp) {
          case 0:
            this.yd_1 = 4;
            this.xd_1 = 1;
            continue $sm;
          case 1:
            this.xd_1 = 2;
            suspendResult = this.t6o_1.c4f(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.u6o_1 = suspendResult;
            var tmp_0;
            if (get_isPrimaryPressed(this.u6o_1.g4c_1)) {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_fastAll = this.u6o_1.f4c_1;
                var inductionVariable = 0;
                var last = tmp0_fastAll.f() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = tmp0_fastAll.l(index);
                    if (!(item.u4b_1 === Companion_getInstance_7().i4d_1 ? changedToDown(item) : false)) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (!tmp_0) {
              this.xd_1 = 1;
              continue $sm;
            }

            this.xd_1 = 3;
            continue $sm;
          case 3:
            return this.u6o_1;
          case 4:
            throw this.ae_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.yd_1 === 4) {
          throw e;
        } else {
          this.xd_1 = this.yd_1;
          this.ae_1 = e;
        }
      }
     while (true);
  };
  var TapIndicationDelay;
  function textPointerHoverIcon(_this__u8e3s4, selectionRegistrar) {
    return _this__u8e3s4;
  }
  function get_textPointerIcon() {
    _init_properties_TextPointerIcon_js_kt__ixjsfm();
    return textPointerIcon;
  }
  var textPointerIcon;
  var properties_initialized_TextPointerIcon_js_kt_plq52o;
  function _init_properties_TextPointerIcon_js_kt__ixjsfm() {
    if (!properties_initialized_TextPointerIcon_js_kt_plq52o) {
      properties_initialized_TextPointerIcon_js_kt_plq52o = true;
      textPointerIcon = DummyPointerIcon_getInstance();
    }
  }
  function get_isInTouchMode() {
    return isInTouchMode;
  }
  var isInTouchMode;
  function get_DefaultSelectionColor() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function get_DefaultTextSelectionColors() {
    _init_properties_DefaultTextSelectionColors_js_kt__ohmec7();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  var properties_initialized_DefaultTextSelectionColors_js_kt_i7z293;
  function _init_properties_DefaultTextSelectionColors_js_kt__ohmec7() {
    if (!properties_initialized_DefaultTextSelectionColors_js_kt_i7z293) {
      properties_initialized_DefaultTextSelectionColors_js_kt_i7z293 = true;
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      DefaultTextSelectionColors = new TextSelectionColors(get_DefaultSelectionColor(), Color__copy$default_impl_ectz3s(get_DefaultSelectionColor(), 0.4));
    }
  }
  function _isSystemInDarkTheme$composable($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformationMarkerStart($composer_0, -700866316, 'C(_isSystemInDarkTheme$composable)49@2205L7:DarkTheme.skiko.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(-700866316, $changed, -1, 'androidx.compose.foundation._isSystemInDarkTheme$composable (DarkTheme.skiko.kt:48)');
    }
    // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
    var tmp0_$get_current$$composable_h5ksy7 = get_LocalSystemTheme();
    var $composer_1 = $composer_0;
    sourceInformationMarkerStart($composer_1, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
    var tmp0 = $composer_1.xz(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.equals(SystemTheme_Dark_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  //region block: post-declaration
  protoOf(BackgroundElement).l3t = foldIn;
  protoOf(BackgroundElement).m3t = all;
  protoOf(BackgroundElement).g3t = then;
  protoOf(BackgroundNode).u3w = onMeasureResultChanged;
  protoOf(BorderModifierNodeElement).l3t = foldIn;
  protoOf(BorderModifierNodeElement).m3t = all;
  protoOf(BorderModifierNodeElement).g3t = then;
  protoOf(SelectableTextAnnotatedStringElement).l3t = foldIn;
  protoOf(SelectableTextAnnotatedStringElement).m3t = all;
  protoOf(SelectableTextAnnotatedStringElement).g3t = then;
  protoOf(SelectableTextAnnotatedStringNode).u3w = onMeasureResultChanged;
  protoOf(TextAnnotatedStringElement).l3t = foldIn;
  protoOf(TextAnnotatedStringElement).m3t = all;
  protoOf(TextAnnotatedStringElement).g3t = then;
  protoOf(TextAnnotatedStringNode).u3w = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).j4s = get_shouldClearDescendantSemantics;
  protoOf(TextAnnotatedStringNode).k4s = get_shouldMergeDescendantSemantics;
  protoOf(TextStringSimpleElement).l3t = foldIn;
  protoOf(TextStringSimpleElement).m3t = all;
  protoOf(TextStringSimpleElement).g3t = then;
  protoOf(TextStringSimpleNode).u3w = onMeasureResultChanged;
  protoOf(TextStringSimpleNode).j4s = get_shouldClearDescendantSemantics;
  protoOf(TextStringSimpleNode).k4s = get_shouldMergeDescendantSemantics;
  //endregion
  //region block: init
  DefaultMinLines = 1;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  TapIndicationDelay = new Long(0, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_CircleShape;
  _.$_$.b = RoundedCornerShape_2;
  _.$_$.c = RoundedCornerShape_3;
  _.$_$.d = get_LocalTextSelectionColors;
  _.$_$.e = TextSelectionColors;
  _.$_$.f = BasicText$composable;
  _.$_$.g = get_LocalIndication;
  _.$_$.h = background;
  _.$_$.i = border;
  _.$_$.j = isSystemInDarkTheme$composable;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-foundation.js.map
