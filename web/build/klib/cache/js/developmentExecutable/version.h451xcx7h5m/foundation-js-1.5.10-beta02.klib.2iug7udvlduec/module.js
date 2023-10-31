(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-ui-graphics.js', './kotlin-kotlin-stdlib-js-ir.js', './compose-multiplatform-core-ui.js', './compose-multiplatform-core-ui-geometry.js', './compose-multiplatform-core-ui-unit.js', './compose-multiplatform-core-runtime.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './compose-multiplatform-core-animation-core.js', './compose-multiplatform-core-ui-text.js', './compose-multiplatform-core-runtime-saveable.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-ui-graphics.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./compose-multiplatform-core-ui.js'), require('./compose-multiplatform-core-ui-geometry.js'), require('./compose-multiplatform-core-ui-unit.js'), require('./compose-multiplatform-core-runtime.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./compose-multiplatform-core-animation-core.js'), require('./compose-multiplatform-core-ui-text.js'), require('./compose-multiplatform-core-runtime-saveable.js'), require('./skiko-kjs.js'));
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
    if (typeof this['compose-multiplatform-core-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-animation-core' was not found. Please, check whether 'compose-multiplatform-core-animation-core' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-ui-text' was not found. Please, check whether 'compose-multiplatform-core-ui-text' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['compose-multiplatform-core-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'compose-multiplatform-core-runtime-saveable' was not found. Please, check whether 'compose-multiplatform-core-runtime-saveable' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    if (typeof this['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-foundation'.");
    }
    root['compose-multiplatform-core-foundation'] = factory(typeof this['compose-multiplatform-core-foundation'] === 'undefined' ? {} : this['compose-multiplatform-core-foundation'], this['compose-multiplatform-core-ui-graphics'], this['kotlin-kotlin-stdlib-js-ir'], this['compose-multiplatform-core-ui'], this['compose-multiplatform-core-ui-geometry'], this['compose-multiplatform-core-ui-unit'], this['compose-multiplatform-core-runtime'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['compose-multiplatform-core-animation-core'], this['compose-multiplatform-core-ui-text'], this['compose-multiplatform-core-runtime-saveable'], this['skiko-kjs']);
  }
}(this, function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_runtime_runtime_saveable, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var VOID = kotlin_kotlin.$_$.df;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m3;
  var protoOf = kotlin_kotlin.$_$.ta;
  var THROW_CCE = kotlin_kotlin.$_$.xd;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var hashCode = kotlin_kotlin.$_$.v9;
  var getNumberHashCode = kotlin_kotlin.$_$.r9;
  var equals = kotlin_kotlin.$_$.n9;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var foldOut = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var any = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  var classMeta = kotlin_kotlin.$_$.j9;
  var setMetadataFor = kotlin_kotlin.$_$.ua;
  var Unit_getInstance = kotlin_kotlin.$_$.f3;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var ensureNotNull = kotlin_kotlin.$_$.he;
  var drawOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e1;
  var drawOutline_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f1;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var roundToInt = kotlin_kotlin.$_$.db;
  var objectMeta = kotlin_kotlin.$_$.sa;
  var interfaceMeta = kotlin_kotlin.$_$.x9;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var numberToInt = kotlin_kotlin.$_$.pa;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var ImageBitmapConfig = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k;
  var _IntSize___get_width__impl__d9yl4o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var _IntSize___get_height__impl__prv63b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.f;
  var _Size___get_height__impl__a04p02 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f1;
  var _Size___get_width__impl__58y75t = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d3;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Size_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.pe;
  var Rectangle = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var Rounded = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var Generic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var _CornerRadius___get_x__impl__1594cn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.u;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var CacheDrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.m1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j3;
  var _CornerRadius___get_y__impl__tyvleu = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var CornerRadius = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g;
  var Shape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s1;
  var traceEventStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x1;
  var isTraceInProgress = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g1;
  var traceEventEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w1;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.r1;
  var Annotation = kotlin_kotlin.$_$.gd;
  var get_LocalInputModeManager = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var FocusPropertiesModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var identityHashCode = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e1;
  var InspectableModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var modifierLocalOf = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e3;
  var illegalDecoyCallException = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d;
  var sourceInformation = kotlin_org_jetbrains_compose_runtime_runtime.$_$.t1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g2;
  var isObject = kotlin_kotlin.$_$.ia;
  var staticCompositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u1;
  var _Offset___get_x__impl__xvi35n = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c1;
  var _Offset___get_y__impl__8bzhra = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var Offset_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var CoroutineImpl = kotlin_kotlin.$_$.s8;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var isInterface = kotlin_kotlin.$_$.ga;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.c8;
  var changedToUp = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var CancellationException = kotlin_kotlin.$_$.b8;
  var PointerEventPass_Main_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var isOutOfBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var PointerEventPass_Final_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var PointerEventTimeoutCancellationException = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var positionChangedIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var SuspendFunction1 = kotlin_kotlin.$_$.u8;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o1;
  var THROW_ISE = kotlin_kotlin.$_$.yd;
  var Enum = kotlin_kotlin.$_$.md;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var get = kotlin_kotlin.$_$.n8;
  var fold = kotlin_kotlin.$_$.m8;
  var minusKey = kotlin_kotlin.$_$.o8;
  var plus = kotlin_kotlin.$_$.r8;
  var MotionDurationScale = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var SuspendFunction2 = kotlin_kotlin.$_$.v8;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var changedToDownIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var changedToDown = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var get_isPrimaryPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m1;
  var LaunchedEffect$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.u;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var Spring_getInstance = kotlin_org_jetbrains_compose_animation_animation_core.$_$.u;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var Velocity__copy$default_impl_eql69u = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var Offset__copy$default_impl_bmwjg8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var Velocity = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var onPreScroll = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var onPreFling = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
  var NestedScrollConnection = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var emptyList = kotlin_kotlin.$_$.l5;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var roundToPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toSp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var toSp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var toSp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var toDp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l;
  var toDpSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toString = kotlin_kotlin.$_$.ya;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m1;
  var get_inspectableElements = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var get_nameFallback = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var InspectableValue = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var toRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var RoundRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Pair = kotlin_kotlin.$_$.vd;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m1;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.x2;
  var rememberSaveable$composable = kotlin_org_jetbrains_compose_runtime_runtime_saveable.$_$.b;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.i;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var $get_currentCompositeKeyHash$$composable_u3vbzj = kotlin_org_jetbrains_compose_runtime_runtime.$_$.g;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var invalidApplier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f1;
  var Applier = kotlin_org_jetbrains_compose_runtime_runtime.$_$.j;
  var _Updater___init__impl__rbfxm8 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c2;
  var Updater__set_impl_v7kwss = kotlin_org_jetbrains_compose_runtime_runtime.$_$.e2;
  var _Updater___get_composer__impl__9ty7av = kotlin_org_jetbrains_compose_runtime_runtime.$_$.d2;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c2;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var minIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.l1;
  var minIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var maxIntrinsicWidth = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var maxIntrinsicHeight = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.m1;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y1;
  var get_key_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var get_isAltPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.k;
  var get_isShiftPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var get_isCtrlPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var KeyEvent = kotlin_org_jetbrains_compose_ui_ui.$_$.j;
  var KProperty1 = kotlin_kotlin.$_$.wb;
  var getPropertyCallableRef = kotlin_kotlin.$_$.t9;
  var TextRange = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var charSequenceGet = kotlin_kotlin.$_$.g9;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.e2;
  var charSequenceLength = kotlin_kotlin.$_$.h9;
  var keyframes = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var infiniteRepeatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var repeat = kotlin_kotlin.$_$.sc;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var OffsetMapping = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i1;
  var toBits = kotlin_kotlin.$_$.we;
  var toLong = kotlin_kotlin.$_$.wa;
  var Long = kotlin_kotlin.$_$.rd;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.w2;
  var floatFromBits = kotlin_kotlin.$_$.p9;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var coerceAtLeast = kotlin_kotlin.$_$.ib;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var coerceIn = kotlin_kotlin.$_$.ob;
  var resolveDefaults = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var Paragraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p;
  var isNaN_0 = kotlin_kotlin.$_$.le;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d2;
  var coerceAtMost = kotlin_kotlin.$_$.lb;
  var TextLayoutInput_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var TextLayoutResult = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var MultiParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l;
  var MultiParagraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m;
  var ParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n;
  var Paragraph_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o;
  var Constraints__copy$default_impl_f452rp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var TextOverflow__hashCode_impl_kqdwgt = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var GlobalPositionAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var RememberObserver = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var composed$composable = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var pointerHoverIcon = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var pointerInput = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var KProperty0 = kotlin_kotlin.$_$.vb;
  var getLocalDelegateReference = kotlin_kotlin.$_$.q9;
  var rememberUpdatedState$composable = kotlin_org_jetbrains_compose_runtime_runtime.$_$.p1;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var set_text = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var getTextLayoutResult = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var invalidateLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var to = kotlin_kotlin.$_$.af;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var mapOf = kotlin_kotlin.$_$.v6;
  var Rect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var Companion_getInstance_19 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j1;
  var Companion_getInstance_20 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var getStringHashCode = kotlin_kotlin.$_$.u9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.p;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.z;
  var Companion_getInstance_21 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n1;
  var Companion_getInstance_22 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l1;
  var _TextRange___get_reversed__impl__emhnbm = kotlin_org_jetbrains_compose_ui_ui_text.$_$.e1;
  var _TextRange___get_start__impl__ww4t90 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f1;
  var _TextRange___get_end__impl__gcdxpp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.d1;
  var TextRange_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var get_lastIndex = kotlin_kotlin.$_$.rc;
  var _TextRange___get_collapsed__impl__cilesp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Offset__hashCode_impl_hbql41 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var SemanticsPropertyKey = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var get_isSpecified = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var SpringSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var compositionLocalOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.b1;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var get_isShiftPressed_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var SkikoKey_KEY_SPACE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s6;
  var Companion_getInstance_23 = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var _Key___get_keyCode__impl__ymzu5v = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var _Key___init__impl__p6mluu = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.k9;
  var DummyPointerIcon_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var MainScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.i1;
  var get_LocalSystemTheme = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var SystemTheme_Dark_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  var get_isMetaPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var Companion_getInstance_24 = kotlin_org_jetbrains_skiko_skiko.$_$.q7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BackgroundElement, 'BackgroundElement', classMeta, ModifierNodeElement);
  setMetadataFor(BackgroundNode, 'BackgroundNode', classMeta, Node, [DrawModifierNode, Node]);
  setMetadataFor(MarqueeSpacing, 'MarqueeSpacing', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_MarqueeSpacing$0, 'sam$androidx_compose_foundation_MarqueeSpacing$0', classMeta, VOID, [MarqueeSpacing]);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(BorderModifierNodeElement, 'BorderModifierNodeElement', classMeta, ModifierNodeElement);
  setMetadataFor(BorderModifierNode, 'BorderModifierNode', classMeta, DelegatingNode);
  setMetadataFor(BorderCache, 'BorderCache', classMeta);
  setMetadataFor(BorderStroke, 'BorderStroke', classMeta);
  setMetadataFor(HorizontalScrollableClipModifier$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(VerticalScrollableClipModifier$1, VOID, classMeta, VOID, [Shape]);
  setMetadataFor(ExperimentalFoundationApi, 'ExperimentalFoundationApi', classMeta, VOID, [Annotation]);
  setMetadataFor(FocusableInNonTouchMode, 'FocusableInNonTouchMode', classMeta, Node, [Node, CompositionLocalConsumerModifierNode, FocusPropertiesModifierNode]);
  setMetadataFor(FocusableInNonTouchModeElement$1, VOID, classMeta, ModifierNodeElement);
  setMetadataFor(Indication, 'Indication', interfaceMeta);
  setMetadataFor(IndicationInstance, 'IndicationInstance', interfaceMeta);
  setMetadataFor(DefaultDebugIndicationInstance, 'DefaultDebugIndicationInstance', classMeta, VOID, [IndicationInstance]);
  setMetadataFor(DefaultDebugIndication, 'DefaultDebugIndication', objectMeta, VOID, [Indication]);
  setMetadataFor(PointerDirectionConfig, 'PointerDirectionConfig', interfaceMeta);
  setMetadataFor(HorizontalPointerDirectionConfig$1, VOID, classMeta, VOID, [PointerDirectionConfig]);
  setMetadataFor(VerticalPointerDirectionConfig$1, VOID, classMeta, VOID, [PointerDirectionConfig]);
  setMetadataFor(detectDragGesturesAfterLongPress$slambda, 'detectDragGesturesAfterLongPress$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(awaitLongPressOrCancellation$slambda, 'awaitLongPressOrCancellation$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($dragCOROUTINE$0, '$dragCOROUTINE$0', classMeta, CoroutineImpl);
  setMetadataFor($awaitLongPressOrCancellationCOROUTINE$1, '$awaitLongPressOrCancellationCOROUTINE$1', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrCancellationCOROUTINE$2, '$awaitDragOrCancellationCOROUTINE$2', classMeta, CoroutineImpl);
  setMetadataFor($awaitDragOrUpCOROUTINE$3, '$awaitDragOrUpCOROUTINE$3', classMeta, CoroutineImpl);
  setMetadataFor(awaitEachGesture$slambda, 'awaitEachGesture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($awaitAllPointersUpCOROUTINE$4, '$awaitAllPointersUpCOROUTINE$4', classMeta, CoroutineImpl);
  setMetadataFor(Orientation, 'Orientation', classMeta, Enum);
  setMetadataFor(NoOpOnDragStarted$slambda, 'NoOpOnDragStarted$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor(ScrollScope, 'ScrollScope', interfaceMeta);
  setMetadataFor(NoOpScrollScope$1, VOID, classMeta, VOID, [ScrollScope]);
  setMetadataFor(DefaultScrollMotionDurationScale$1, VOID, classMeta, VOID, [MotionDurationScale]);
  setMetadataFor(PressGestureScope, 'PressGestureScope', interfaceMeta, VOID, [Density], VOID, VOID, [0]);
  setMetadataFor(NoPressGesture$slambda, 'NoPressGesture$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [2]);
  setMetadataFor($awaitFirstDownCOROUTINE$5, '$awaitFirstDownCOROUTINE$5', classMeta, CoroutineImpl);
  setMetadataFor(SnapPositionInLayout, 'SnapPositionInLayout', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0, 'sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0', classMeta, VOID, [SnapPositionInLayout]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Interaction, 'Interaction', interfaceMeta);
  setMetadataFor(DragInteraction, 'DragInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Start, 'Start', classMeta, VOID, [DragInteraction]);
  setMetadataFor(Stop, 'Stop', classMeta, VOID, [DragInteraction]);
  setMetadataFor(Cancel, 'Cancel', classMeta, VOID, [DragInteraction]);
  setMetadataFor(FocusInteraction, 'FocusInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Focus, 'Focus', classMeta, VOID, [FocusInteraction]);
  setMetadataFor(Unfocus, 'Unfocus', classMeta, VOID, [FocusInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(collectIsFocusedAsState$composable$slambda$slambda, 'collectIsFocusedAsState$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(collectIsFocusedAsState$composable$slambda, 'collectIsFocusedAsState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(HoverInteraction, 'HoverInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Enter, 'Enter', classMeta, VOID, [HoverInteraction]);
  setMetadataFor(Exit, 'Exit', classMeta, VOID, [HoverInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(collectIsHoveredAsState$composable$slambda$slambda, 'collectIsHoveredAsState$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(collectIsHoveredAsState$composable$slambda, 'collectIsHoveredAsState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(InteractionSource, 'InteractionSource', interfaceMeta);
  setMetadataFor(PressInteraction, 'PressInteraction', interfaceMeta, VOID, [Interaction]);
  setMetadataFor(Press, 'Press', classMeta, VOID, [PressInteraction]);
  setMetadataFor(Release, 'Release', classMeta, VOID, [PressInteraction]);
  setMetadataFor(Cancel_0, 'Cancel', classMeta, VOID, [PressInteraction]);
  setMetadataFor(sam$kotlinx_coroutines_flow_FlowCollector$0_1, 'sam$kotlinx_coroutines_flow_FlowCollector$0', classMeta, VOID, [FlowCollector], VOID, VOID, [1]);
  setMetadataFor(collectIsPressedAsState$composable$slambda$slambda, 'collectIsPressedAsState$composable$slambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(collectIsPressedAsState$composable$slambda, 'collectIsPressedAsState$composable$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(PageInfo, 'PageInfo', interfaceMeta);
  setMetadataFor(ConsumeAllFlingOnDirection, 'ConsumeAllFlingOnDirection', classMeta, VOID, [NestedScrollConnection], VOID, VOID, [2, 1]);
  setMetadataFor(PagerLayoutInfo, 'PagerLayoutInfo', interfaceMeta);
  setMetadataFor(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0, 'sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0', classMeta, VOID, [SnapPositionInLayout]);
  setMetadataFor(EmptyLayoutInfo$1, VOID, classMeta, VOID, [PagerLayoutInfo]);
  setMetadataFor(UnitDensity$1, VOID, classMeta, VOID, [Density]);
  setMetadataFor(BringIntoViewParent, 'BringIntoViewParent', interfaceMeta, VOID, VOID, VOID, VOID, [2]);
  setMetadataFor(CornerBasedShape, 'CornerBasedShape', classMeta, VOID, [Shape]);
  setMetadataFor(CornerSize, 'CornerSize', interfaceMeta);
  setMetadataFor(PercentCornerSize, 'PercentCornerSize', classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(DpCornerSize, 'DpCornerSize', classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(ZeroCornerSize$1, VOID, classMeta, VOID, [CornerSize, InspectableValue]);
  setMetadataFor(RoundedCornerShape, 'RoundedCornerShape', classMeta, CornerBasedShape);
  setMetadataFor(EmptyMeasurePolicy, 'EmptyMeasurePolicy', objectMeta, VOID, [MeasurePolicy]);
  setMetadataFor(Handle, 'Handle', classMeta, Enum);
  setMetadataFor(KeyCommand, 'KeyCommand', classMeta, Enum);
  setMetadataFor(KeyMapping, 'KeyMapping', interfaceMeta);
  setMetadataFor(defaultKeyMapping$2$1, VOID, classMeta, VOID, [KeyMapping]);
  setMetadataFor(commonKeyMapping$1, VOID, classMeta, VOID, [KeyMapping]);
  setMetadataFor(TextDragObserver, 'TextDragObserver', interfaceMeta);
  setMetadataFor(ValidatingOffsetMapping, 'ValidatingOffsetMapping', classMeta, VOID, [OffsetMapping]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(InlineDensity, 'InlineDensity', classMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(MinLinesConstrainer, 'MinLinesConstrainer', classMeta);
  setMetadataFor(MultiParagraphLayoutCache, 'MultiParagraphLayoutCache', classMeta);
  setMetadataFor(ParagraphLayoutCache, 'ParagraphLayoutCache', classMeta);
  setMetadataFor(SelectableTextAnnotatedStringElement, 'SelectableTextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(SelectableTextAnnotatedStringNode, 'SelectableTextAnnotatedStringNode', classMeta, DelegatingNode, [DelegatingNode, LayoutModifierNode, DrawModifierNode, GlobalPositionAwareModifierNode]);
  setMetadataFor(SelectionController, 'SelectionController', classMeta, VOID, [RememberObserver]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(StaticTextSelectionParams, 'StaticTextSelectionParams', classMeta);
  setMetadataFor(makeSelectionModifier$longPressDragObserver$1, VOID, classMeta, VOID, [TextDragObserver]);
  setMetadataFor(makeSelectionModifier$slambda, 'makeSelectionModifier$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(MouseSelectionObserver, 'MouseSelectionObserver', interfaceMeta);
  setMetadataFor(makeSelectionModifier$mouseSelectionObserver$1, VOID, classMeta, VOID, [MouseSelectionObserver]);
  setMetadataFor(makeSelectionModifier$lambda$slambda, 'makeSelectionModifier$lambda$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor(TextAnnotatedStringElement, 'TextAnnotatedStringElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextAnnotatedStringNode, 'TextAnnotatedStringNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  setMetadataFor(TextStringSimpleElement, 'TextStringSimpleElement', classMeta, ModifierNodeElement);
  setMetadataFor(TextStringSimpleNode, 'TextStringSimpleNode', classMeta, Node, [Node, LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  function updateSelection$default(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection, $super) {
    isStartHandle = isStartHandle === VOID ? true : isStartHandle;
    previousSelection = previousSelection === VOID ? null : previousSelection;
    var tmp;
    if ($super === VOID) {
      tmp = this.updateSelection_xe1zkm_k$(startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    } else {
      var tmp_0 = $super.updateSelection_xe1zkm_k$;
      var tmp_1 = new Offset_0(startHandlePosition);
      var tmp_2 = new Offset_0(endHandlePosition);
      var tmp_3 = previousHandlePosition;
      tmp = tmp_0.call(this, tmp_1, tmp_2, tmp_3 == null ? null : new Offset_0(tmp_3), isStartHandle, containerLayoutCoordinates, adjustment, previousSelection);
    }
    return tmp;
  }
  function getLineHeight(offset) {
    return 0.0;
  }
  setMetadataFor(Selectable, 'Selectable', interfaceMeta);
  setMetadataFor(MultiWidgetSelectionDelegate, 'MultiWidgetSelectionDelegate', classMeta, VOID, [Selectable]);
  setMetadataFor(AnchorInfo, 'AnchorInfo', classMeta);
  setMetadataFor(Selection, 'Selection', classMeta);
  setMetadataFor(SelectionAdjustment, 'SelectionAdjustment', interfaceMeta);
  setMetadataFor(SelectionAdjustment$Companion$None$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$Character$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$Word$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$Paragraph$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(SelectionAdjustment$Companion$CharacterWithWordAccelerate$1, VOID, classMeta, VOID, [SelectionAdjustment]);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(SelectionHandleInfo, 'SelectionHandleInfo', classMeta);
  setMetadataFor(SelectionMode, 'SelectionMode', classMeta, Enum);
  setMetadataFor(SelectionMode$Vertical, 'Vertical', classMeta, SelectionMode);
  setMetadataFor(SelectionMode$Horizontal, 'Horizontal', classMeta, SelectionMode);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(SelectionRegistrar, 'SelectionRegistrar', interfaceMeta);
  setMetadataFor(TextSelectionColors, 'TextSelectionColors', classMeta);
  setMetadataFor(ClicksCounter, 'ClicksCounter', classMeta);
  setMetadataFor(mouseSelectionDetector$slambda, 'mouseSelectionDetector$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, [1]);
  setMetadataFor($awaitMouseEventDownCOROUTINE$6, '$awaitMouseEventDownCOROUTINE$6', classMeta, CoroutineImpl);
  setMetadataFor(NoOp, 'NoOp', classMeta, VOID, [Annotation]);
  setMetadataFor(MappedKeys, 'MappedKeys', objectMeta);
  setMetadataFor(ScrollbarStyle, 'ScrollbarStyle', classMeta);
  setMetadataFor(createMacosDefaultKeyMapping$1, VOID, classMeta, VOID, [KeyMapping]);
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
    return _this__u8e3s4.then_5qw5wu_k$(new BackgroundElement(color, VOID, alpha, shape, tmp0_inspectorInfo));
  }
  function _get_color__iw9cfm($this) {
    return $this.color_1;
  }
  function _get_brush__jbhrft($this) {
    return $this.brush_1;
  }
  function _get_alpha__jvxknh($this) {
    return $this.alpha_1;
  }
  function _get_shape__bfkypc($this) {
    return $this.shape_1;
  }
  function _get_inspectorInfo__ojvtbg($this) {
    return $this.inspectorInfo_1;
  }
  function BackgroundElement(color, brush, alpha, shape, inspectorInfo) {
    color = color === VOID ? Companion_getInstance().get_Unspecified_9ntdt9_k$() : color;
    brush = brush === VOID ? null : brush;
    ModifierNodeElement.call(this);
    this.color_1 = color;
    this.brush_1 = brush;
    this.alpha_1 = alpha;
    this.shape_1 = shape;
    this.inspectorInfo_1 = inspectorInfo;
  }
  protoOf(BackgroundElement).create_md4cuc_k$ = function () {
    return new BackgroundNode(this.color_1, this.brush_1, this.alpha_1, this.shape_1);
  };
  protoOf(BackgroundElement).update_rltpe7_k$ = function (node) {
    node.color_1 = this.color_1;
    node.brush_1 = this.brush_1;
    node.alpha_1 = this.alpha_1;
    node.shape_1 = this.shape_1;
  };
  protoOf(BackgroundElement).update_c7m3nr_k$ = function (node) {
    return this.update_rltpe7_k$(node instanceof BackgroundNode ? node : THROW_CCE());
  };
  protoOf(BackgroundElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    this.inspectorInfo_1(_this__u8e3s4);
  };
  protoOf(BackgroundElement).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.color_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.brush_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.alpha_1) | 0;
    result = imul(31, result) + hashCode(this.shape_1) | 0;
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
    return ((equals(this.color_1, otherModifier.color_1) ? equals(this.brush_1, otherModifier.brush_1) : false) ? this.alpha_1 === otherModifier.alpha_1 : false) ? equals(this.shape_1, otherModifier.shape_1) : false;
  };
  function _set_lastSize__m2whs($this, _set____db54di) {
    $this.lastSize_1 = _set____db54di;
  }
  function _get_lastSize__dez7yk($this) {
    return $this.lastSize_1;
  }
  function _set_lastLayoutDirection__cwde6y($this, _set____db54di) {
    $this.lastLayoutDirection_1 = _set____db54di;
  }
  function _get_lastLayoutDirection__ecupe($this) {
    return $this.lastLayoutDirection_1;
  }
  function _set_lastOutline__uahd8n($this, _set____db54di) {
    $this.lastOutline_1 = _set____db54di;
  }
  function _get_lastOutline__36wr($this) {
    return $this.lastOutline_1;
  }
  function _set_lastShape__j1hhfq($this, _set____db54di) {
    $this.lastShape_1 = _set____db54di;
  }
  function _get_lastShape__a9cyyu($this) {
    return $this.lastShape_1;
  }
  function drawRect(_this__u8e3s4, $this) {
    if (!equals($this.color_1, Companion_getInstance().get_Unspecified_9ntdt9_k$())) {
      _this__u8e3s4.drawRect$default_agcbs4_k$($this.color_1);
    }
    var tmp0_safe_receiver = $this.brush_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      _this__u8e3s4.drawRect$default_8oolwl_k$(tmp0_safe_receiver, VOID, VOID, $this.alpha_1);
    }
  }
  function drawOutline_1(_this__u8e3s4, $this) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2 = new Size(_this__u8e3s4.get_size_x9ctfw_k$());
    var tmp_3 = $this.lastSize_1;
    if (equals(tmp_2, tmp_3 == null ? null : new Size(tmp_3))) {
      tmp_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$().equals($this.lastLayoutDirection_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equals($this.lastShape_1, $this.shape_1);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = ensureNotNull($this.lastOutline_1);
    } else {
      tmp = $this.shape_1.createOutline_p92zi6_k$(_this__u8e3s4.get_size_x9ctfw_k$(), _this__u8e3s4.get_layoutDirection_7e37v0_k$(), _this__u8e3s4);
    }
    var outline = tmp;
    if (!equals($this.color_1, Companion_getInstance().get_Unspecified_9ntdt9_k$())) {
      drawOutline(_this__u8e3s4, outline, $this.color_1);
    }
    var tmp0_safe_receiver = $this.brush_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      drawOutline_0(_this__u8e3s4, outline, tmp0_safe_receiver, $this.alpha_1);
    }
    $this.lastOutline_1 = outline;
    $this.lastSize_1 = _this__u8e3s4.get_size_x9ctfw_k$();
    $this.lastLayoutDirection_1 = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    $this.lastShape_1 = $this.shape_1;
  }
  function BackgroundNode(color, brush, alpha, shape) {
    Node.call(this);
    this.color_1 = color;
    this.brush_1 = brush;
    this.alpha_1 = alpha;
    this.shape_1 = shape;
    this.lastSize_1 = null;
    this.lastLayoutDirection_1 = null;
    this.lastOutline_1 = null;
    this.lastShape_1 = null;
  }
  protoOf(BackgroundNode).set_color_b5evhd_k$ = function (_set____db54di) {
    this.color_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_color_v34vrz_k$ = function () {
    return this.color_1;
  };
  protoOf(BackgroundNode).set_brush_ty1r30_k$ = function (_set____db54di) {
    this.brush_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BackgroundNode).set_alpha_k1tx50_k$ = function (_set____db54di) {
    this.alpha_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_alpha_iooth1_k$ = function () {
    return this.alpha_1;
  };
  protoOf(BackgroundNode).set_shape_yze8td_k$ = function (_set____db54di) {
    this.shape_1 = _set____db54di;
  };
  protoOf(BackgroundNode).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(BackgroundNode).draw_j25tpb_k$ = function (_this__u8e3s4) {
    if (this.shape_1 === get_RectangleShape()) {
      drawRect(_this__u8e3s4, this);
    } else {
      drawOutline_1(_this__u8e3s4, this);
    }
    _this__u8e3s4.drawContent_m0d3yc_k$();
  };
  function background$lambda($color, $shape) {
    return function ($this$null) {
      $this$null.set_name_1v3553_k$('background');
      $this$null.set_value_rj6yh0_k$(new Color($color));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('color', new Color($color));
      $this$null.get_properties_zhllqc_k$().set_y753qn_k$('shape', $shape);
      return Unit_getInstance();
    };
  }
  function get_DefaultMarqueeIterations() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeIterations;
  }
  var DefaultMarqueeIterations;
  function get_DefaultMarqueeDelayMillis() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeDelayMillis;
  }
  var DefaultMarqueeDelayMillis;
  function get_DefaultMarqueeSpacing() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeSpacing;
  }
  var DefaultMarqueeSpacing;
  function get_DefaultMarqueeVelocity() {
    _init_properties_BasicMarquee_kt__84kax8();
    return DefaultMarqueeVelocity;
  }
  var DefaultMarqueeVelocity;
  function sam$androidx_compose_foundation_MarqueeSpacing$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_MarqueeSpacing$0).calculateSpacing_kalx79_k$ = function (_this__u8e3s4, contentWidth, containerWidth) {
    return this.function_1(_this__u8e3s4, contentWidth, containerWidth);
  };
  function MarqueeSpacing$Companion$fractionOfContainer$lambda($fraction) {
    return function ($this$MarqueeSpacing, _anonymous_parameter_0__qggqh8, width) {
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = $fraction * width;
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      return tmp$ret$0;
    };
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).fractionOfContainer_x5152e_k$ = function (fraction) {
    var tmp = MarqueeSpacing$Companion$fractionOfContainer$lambda(fraction);
    return new sam$androidx_compose_foundation_MarqueeSpacing$0(tmp);
  };
  var Companion_instance;
  function Companion_getInstance_25() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MarqueeSpacing() {
  }
  var properties_initialized_BasicMarquee_kt_zfhsq2;
  function _init_properties_BasicMarquee_kt__84kax8() {
    if (!properties_initialized_BasicMarquee_kt_zfhsq2) {
      properties_initialized_BasicMarquee_kt_zfhsq2 = true;
      DefaultMarqueeIterations = 3;
      DefaultMarqueeDelayMillis = 1200;
      DefaultMarqueeSpacing = Companion_getInstance_25().fractionOfContainer_x5152e_k$(1.0 / 3.0);
      // Inline function 'androidx.compose.ui.unit.dp' call
      DefaultMarqueeVelocity = _Dp___init__impl__ms3zkb(30);
    }
  }
  function border(_this__u8e3s4, border, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    return border_0(_this__u8e3s4, border.get_width_76ubx4_k$(), border.get_brush_ipcjyp_k$(), shape);
  }
  function border_0(_this__u8e3s4, width, brush, shape) {
    return _this__u8e3s4.then_5qw5wu_k$(new BorderModifierNodeElement(width, brush, shape));
  }
  function BorderModifierNodeElement(width, brush, shape) {
    ModifierNodeElement.call(this);
    this.width_1 = width;
    this.brush_1 = brush;
    this.shape_1 = shape;
  }
  protoOf(BorderModifierNodeElement).get_width_76ubx4_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderModifierNodeElement).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderModifierNodeElement).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(BorderModifierNodeElement).create_md4cuc_k$ = function () {
    return new BorderModifierNode(this.width_1, this.brush_1, this.shape_1);
  };
  protoOf(BorderModifierNodeElement).update_loyrlw_k$ = function (node) {
    node.set_width_rtwjqi_k$(this.width_1);
    node.set_brush_f676nz_k$(this.brush_1);
    node.set_shape_yze8td_k$(this.shape_1);
  };
  protoOf(BorderModifierNodeElement).update_c7m3nr_k$ = function (node) {
    return this.update_loyrlw_k$(node instanceof BorderModifierNode ? node : THROW_CCE());
  };
  protoOf(BorderModifierNodeElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('border');
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('width', new Dp(this.width_1));
    var tmp = this.brush_1;
    if (tmp instanceof SolidColor) {
      _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('color', new Color(this.brush_1.get_value_puk9xv_k$()));
      _this__u8e3s4.set_value_rj6yh0_k$(new Color(this.brush_1.get_value_puk9xv_k$()));
    } else {
      _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('brush', this.brush_1);
    }
    _this__u8e3s4.get_properties_zhllqc_k$().set_y753qn_k$('shape', this.shape_1);
  };
  protoOf(BorderModifierNodeElement).component1_z2a8sv_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderModifierNodeElement).component2_7eebsb_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderModifierNodeElement).component3_7eebsa_k$ = function () {
    return this.shape_1;
  };
  protoOf(BorderModifierNodeElement).copy_2q38xm_k$ = function (width, brush, shape) {
    return new BorderModifierNodeElement(width, brush, shape);
  };
  protoOf(BorderModifierNodeElement).copy$default_rdwc9z_k$ = function (width, brush, shape, $super) {
    width = width === VOID ? this.width_1 : width;
    brush = brush === VOID ? this.brush_1 : brush;
    shape = shape === VOID ? this.shape_1 : shape;
    return $super === VOID ? this.copy_2q38xm_k$(width, brush, shape) : $super.copy_2q38xm_k$.call(this, new Dp(width), brush, shape);
  };
  protoOf(BorderModifierNodeElement).toString = function () {
    return 'BorderModifierNodeElement(width=' + new Dp(this.width_1) + ', brush=' + this.brush_1 + ', shape=' + this.shape_1 + ')';
  };
  protoOf(BorderModifierNodeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.width_1);
    result = imul(result, 31) + hashCode(this.brush_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    return result;
  };
  protoOf(BorderModifierNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderModifierNodeElement))
      return false;
    var tmp0_other_with_cast = other instanceof BorderModifierNodeElement ? other : THROW_CCE();
    if (!equals(this.width_1, tmp0_other_with_cast.width_1))
      return false;
    if (!equals(this.brush_1, tmp0_other_with_cast.brush_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    return true;
  };
  function _set_borderCache__ca1clr($this, _set____db54di) {
    $this.borderCache_1 = _set____db54di;
  }
  function _get_borderCache__sgoj1h($this) {
    return $this.borderCache_1;
  }
  function _get_drawWithCacheModifierNode__ha0wo0($this) {
    return $this.drawWithCacheModifierNode_1;
  }
  function drawGenericBorder(_this__u8e3s4, $this, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(BorderModifierNode$drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance_0().get_Alpha8_zceb6n_k$();
        colorFilter = Companion_getInstance_1().tint$default_or1h4c_k$(brush.get_value_puk9xv_k$());
      } else {
        config = Companion_getInstance_0().get_Argb8888_tpu17z_k$();
        colorFilter = null;
      }
      var pathBounds = outline.get_path_wos8ry_k$().getBounds_568lnv_k$();
      if ($this.borderCache_1 == null) {
        $this.borderCache_1 = new BorderCache();
      }
      // Inline function 'kotlin.apply' call
      var tmp0_apply = ensureNotNull($this.borderCache_1).obtainPath_y7q9hy_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>' call
      tmp0_apply.reset_5tn5dq_k$();
      tmp0_apply.addRect_xu2nic_k$(pathBounds);
      tmp0_apply.op_eh4rey_k$(tmp0_apply, outline.get_path_wos8ry_k$(), Companion_getInstance_2().get_Difference_61syb0_k$());
      var maskPath = tmp0_apply;
      var cacheImageBitmap;
      var tmp$ret$1;
      // Inline function 'kotlin.math.ceil' call
      var tmp1_ceil = pathBounds.get_width_j0q4yl_k$();
      tmp$ret$1 = Math.ceil(tmp1_ceil);
      var tmp_0 = numberToInt(tmp$ret$1);
      var tmp$ret$2;
      // Inline function 'kotlin.math.ceil' call
      var tmp2_ceil = pathBounds.get_height_e7t92o_k$();
      tmp$ret$2 = Math.ceil(tmp2_ceil);
      var pathBoundsSize = IntSize(tmp_0, numberToInt(tmp$ret$2));
      // Inline function 'kotlin.with' call
      var tmp3_with = ensureNotNull($this.borderCache_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var targetImageBitmap = tmp3_with.imageBitmap_1;
      var targetCanvas = tmp3_with.canvas_1;
      var tmp_1;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_df1eav_k$();
      if (equals(tmp_2 == null ? null : new ImageBitmapConfig(tmp_2), new ImageBitmapConfig(Companion_getInstance_0().get_Argb8888_tpu17z_k$()))) {
        tmp_1 = true;
      } else {
        var tmp_3 = new ImageBitmapConfig(config);
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_4 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_df1eav_k$();
        tmp_1 = equals(tmp_3, tmp_4 == null ? null : new ImageBitmapConfig(tmp_4));
      }
      var compatibleConfig = tmp_1;
      if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
        // Inline function 'kotlin.also' call
        var tmp0_also = ImageBitmap(_IntSize___get_width__impl__d9yl4o(pathBoundsSize), _IntSize___get_height__impl__prv63b(pathBoundsSize), config);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        tmp3_with.imageBitmap_1 = tmp0_also;
        targetImageBitmap = tmp0_also;
        // Inline function 'kotlin.also' call
        var tmp1_also = Canvas(targetImageBitmap);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        tmp3_with.canvas_1 = tmp1_also;
        targetCanvas = tmp1_also;
      }
      var tmp2_elvis_lhs = tmp3_with.canvasDrawScope_1;
      var tmp_5;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var tmp2_also = new CanvasDrawScope();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
        tmp3_with.canvasDrawScope_1 = tmp2_also;
        tmp_5 = tmp2_also;
      } else {
        tmp_5 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_5;
      var drawSize = toSize(pathBoundsSize);
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var tmp3_draw = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
      var tmp4_draw = targetCanvas;
      var tmp0_container = targetDrawScope.get_drawParams_ncgfpp_k$();
      var prevDensity = tmp0_container.component1_7eebsc_k$();
      var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
      var prevCanvas = tmp0_container.component3_7eebsa_k$();
      var prevSize = tmp0_container.component4_e3pqs9_k$();
      // Inline function 'kotlin.apply' call
      var tmp0_apply_0 = targetDrawScope.get_drawParams_ncgfpp_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp0_apply_0.set_density_kzqph6_k$(_this__u8e3s4);
      tmp0_apply_0.set_layoutDirection_g6d9ui_k$(tmp3_draw);
      tmp0_apply_0.set_canvas_eyjvr_k$(tmp4_draw);
      tmp0_apply_0.set_size_xj1bzm_k$(drawSize);
      tmp4_draw.save_erlm4_k$();
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      targetDrawScope.drawRect$default_agcbs4_k$(Companion_getInstance().get_Black_wh3yn9_k$(), VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_3().get_Clear_9hhqh4_k$());
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var tmp0_translate = -pathBounds.get_left_woprgw_k$();
      var tmp1_translate = -pathBounds.get_top_18ivbo_k$();
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.drawPath$default_oxe8h4_k$(outline.get_path_wos8ry_k$(), brush, VOID, new Stroke(strokeWidth * 2));
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
      var tmp0_scale = (_Size___get_width__impl__58y75t(targetDrawScope.get_size_x9ctfw_k$()) + 1) / _Size___get_width__impl__58y75t(targetDrawScope.get_size_x9ctfw_k$());
      var tmp1_scale = (_Size___get_height__impl__a04p02(targetDrawScope.get_size_x9ctfw_k$()) + 1) / _Size___get_height__impl__a04p02(targetDrawScope.get_size_x9ctfw_k$());
      var tmp2_scale = targetDrawScope.get_center_568eeq_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var tmp0_with = targetDrawScope.get_drawContext_ffwztu_k$();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.get_size_x9ctfw_k$();
      tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.scale.<anonymous>' call
      tmp0_with.get_transform_px941v_k$().scale_qp5ya8_k$(tmp0_scale, tmp1_scale, tmp2_scale);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
      targetDrawScope.drawPath$default_oxe8h4_k$(maskPath, brush, VOID, VOID, VOID, Companion_getInstance_3().get_Clear_9hhqh4_k$());
      tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
      tmp0_with.set_size_xj1bzm_k$(previousSize);
      targetDrawScope.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-tmp0_translate, -tmp1_translate);
      tmp4_draw.restore_a2id37_k$();
      // Inline function 'kotlin.apply' call
      var tmp1_apply = targetDrawScope.get_drawParams_ncgfpp_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
      tmp1_apply.set_density_kzqph6_k$(prevDensity);
      tmp1_apply.set_layoutDirection_g6d9ui_k$(prevLayoutDirection);
      tmp1_apply.set_canvas_eyjvr_k$(prevCanvas);
      tmp1_apply.set_size_xj1bzm_k$(prevSize);
      targetImageBitmap.prepareToDraw_sbmxaj_k$();
      cacheImageBitmap = targetImageBitmap;
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(BorderModifierNode$drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder(_this__u8e3s4, $this, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.get_roundRect_8fhall_k$())) {
      var cornerRadius = outline.get_roundRect_8fhall_k$().get_topLeftCornerRadius_nzteym_k$();
      var halfStroke = strokeWidth / 2;
      var borderStroke = new Stroke(strokeWidth);
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(BorderModifierNode$drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      if ($this.borderCache_1 == null) {
        $this.borderCache_1 = new BorderCache();
      }
      var path = ensureNotNull($this.borderCache_1).obtainPath_y7q9hy_k$();
      var roundedRectPath = createRoundRectPath(path, outline.get_roundRect_8fhall_k$(), strokeWidth, fillArea);
      tmp = _this__u8e3s4.onDrawWithContent_ido9k5_k$(BorderModifierNode$drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function BorderModifierNode$drawWithCacheModifierNode$lambda(this$0) {
    return function ($this$CacheDrawModifierNode) {
      var hasValidBorderParams = $this$CacheDrawModifierNode.toPx_u0ojv5_k$(this$0.width_1) >= 0.0 ? _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.get_size_x9ctfw_k$()) > 0.0 : false;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$CacheDrawModifierNode);
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.math.min' call
        var tmp_0;
        if (equals(this$0.width_1, Companion_getInstance_4().get_Hairline_1wtat6_k$())) {
          tmp_0 = 1.0;
        } else {
          var tmp$ret$0;
          // Inline function 'kotlin.math.ceil' call
          var tmp0_ceil = $this$CacheDrawModifierNode.toPx_u0ojv5_k$(this$0.width_1);
          tmp$ret$0 = Math.ceil(tmp0_ceil);
          tmp_0 = tmp$ret$0;
        }
        var tmp2_min = tmp_0;
        var tmp$ret$1;
        // Inline function 'kotlin.math.ceil' call
        var tmp1_ceil = _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.get_size_x9ctfw_k$()) / 2;
        tmp$ret$1 = Math.ceil(tmp1_ceil);
        var tmp3_min = tmp$ret$1;
        tmp$ret$2 = Math.min(tmp2_min, tmp3_min);
        var strokeWidthPx = tmp$ret$2;
        var halfStroke = strokeWidthPx / 2;
        var topLeft = Offset(halfStroke, halfStroke);
        var borderSize = Size_0(_Size___get_width__impl__58y75t($this$CacheDrawModifierNode.get_size_x9ctfw_k$()) - strokeWidthPx, _Size___get_height__impl__a04p02($this$CacheDrawModifierNode.get_size_x9ctfw_k$()) - strokeWidthPx);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.get_size_x9ctfw_k$());
        var outline = this$0.shape_1.createOutline_p92zi6_k$($this$CacheDrawModifierNode.get_size_x9ctfw_k$(), $this$CacheDrawModifierNode.get_layoutDirection_7e37v0_k$(), $this$CacheDrawModifierNode);
        var tmp_1;
        if (outline instanceof Generic) {
          tmp_1 = drawGenericBorder($this$CacheDrawModifierNode, this$0, this$0.brush_1, outline, fillArea, strokeWidthPx);
        } else {
          if (outline instanceof Rounded) {
            tmp_1 = drawRoundRectBorder($this$CacheDrawModifierNode, this$0, this$0.brush_1, outline, topLeft, borderSize, fillArea, strokeWidthPx);
          } else {
            if (outline instanceof Rectangle) {
              tmp_1 = drawRectBorder($this$CacheDrawModifierNode, this$0.brush_1, topLeft, borderSize, fillArea, strokeWidthPx);
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
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawPath$default_oxe8h4_k$($outline.get_path_wos8ry_k$(), $brush);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      var tmp0_translate = $pathBounds.get_left_woprgw_k$();
      var tmp1_translate = $pathBounds.get_top_18ivbo_k$();
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(tmp0_translate, tmp1_translate);
      // Inline function 'androidx.compose.foundation.BorderModifierNode.drawGenericBorder.<anonymous>.<anonymous>' call
      $this$onDrawWithContent.drawImage$default_q3yuzr_k$($cacheImageBitmap, VOID, $pathBoundsSize, VOID, VOID, VOID, VOID, $colorFilter);
      $this$onDrawWithContent.get_drawContext_ffwztu_k$().get_transform_px941v_k$().translate_62wf99_k$(-tmp0_translate, -tmp1_translate);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.drawRoundRect$default_mlaxib_k$($brush, VOID, VOID, $cornerRadius);
        tmp = Unit_getInstance();
      } else if (_CornerRadius___get_x__impl__1594cn($cornerRadius) < $halfStroke) {
        var tmp$ret$2;
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        var tmp0_clipRect = _Size___get_width__impl__58y75t($this$onDrawWithContent.get_size_x9ctfw_k$()) - $strokeWidth;
        var tmp1_clipRect = _Size___get_height__impl__a04p02($this$onDrawWithContent.get_size_x9ctfw_k$()) - $strokeWidth;
        var tmp2_clipRect = Companion_getInstance_5().get_Difference_tu92bl_k$();
        var tmp$ret$1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        var tmp$ret$0;
        // Inline function 'kotlin.with' call
        var tmp0_with = $this$onDrawWithContent.get_drawContext_ffwztu_k$();
        // Inline function 'kotlin.contracts.contract' call
        var previousSize = tmp0_with.get_size_x9ctfw_k$();
        tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
        var tmp0_anonymous = tmp0_with.get_transform_px941v_k$();
        tmp0_anonymous.clipRect_si0ig1_k$($strokeWidth, $strokeWidth, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
        // Inline function 'androidx.compose.foundation.BorderModifierNode.drawRoundRectBorder.<anonymous>.<anonymous>' call
        $this$onDrawWithContent.drawRoundRect$default_mlaxib_k$($brush, VOID, VOID, $cornerRadius);
        tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
        tmp0_with.set_size_xj1bzm_k$(previousSize);
        tmp$ret$0 = Unit_getInstance();
        tmp$ret$1 = tmp$ret$0;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      } else {
        $this$onDrawWithContent.drawRoundRect$default_mlaxib_k$($brush, $topLeft, $borderSize, shrink($cornerRadius, $halfStroke), VOID, $borderStroke);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawPath$default_oxe8h4_k$($roundedRectPath, $brush);
      return Unit_getInstance();
    };
  }
  function BorderModifierNode(widthParameter, brushParameter, shapeParameter) {
    DelegatingNode.call(this);
    this.borderCache_1 = null;
    this.width_1 = widthParameter;
    this.brush_1 = brushParameter;
    this.shape_1 = shapeParameter;
    var tmp = this;
    tmp.drawWithCacheModifierNode_1 = this.delegate_l89519_k$(CacheDrawModifierNode(BorderModifierNode$drawWithCacheModifierNode$lambda(this)));
  }
  protoOf(BorderModifierNode).set_width_rtwjqi_k$ = function (value) {
    if (!equals(this.width_1, value)) {
      this.width_1 = value;
      this.drawWithCacheModifierNode_1.invalidateDrawCache_6f828i_k$();
    }
  };
  protoOf(BorderModifierNode).get_width_76ubx4_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderModifierNode).set_brush_f676nz_k$ = function (value) {
    if (!equals(this.brush_1, value)) {
      this.brush_1 = value;
      this.drawWithCacheModifierNode_1.invalidateDrawCache_6f828i_k$();
    }
  };
  protoOf(BorderModifierNode).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderModifierNode).set_shape_yze8td_k$ = function (value) {
    if (!equals(this.shape_1, value)) {
      this.shape_1 = value;
      this.drawWithCacheModifierNode_1.invalidateDrawCache_6f828i_k$();
    }
  };
  protoOf(BorderModifierNode).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  function _set_imageBitmap__59o72z($this, _set____db54di) {
    $this.imageBitmap_1 = _set____db54di;
  }
  function _get_imageBitmap__zh1ok9($this) {
    return $this.imageBitmap_1;
  }
  function _set_canvas__plaszl($this, _set____db54di) {
    $this.canvas_1 = _set____db54di;
  }
  function _get_canvas__o4k8ct($this) {
    return $this.canvas_1;
  }
  function _set_canvasDrawScope__6hen3n($this, _set____db54di) {
    $this.canvasDrawScope_1 = _set____db54di;
  }
  function _get_canvasDrawScope__3mbkex($this) {
    return $this.canvasDrawScope_1;
  }
  function _set_borderPath__3zk3ay($this, _set____db54di) {
    $this.borderPath_1 = _set____db54di;
  }
  function _get_borderPath__j1sog6($this) {
    return $this.borderPath_1;
  }
  function component1($this) {
    return $this.imageBitmap_1;
  }
  function component2($this) {
    return $this.canvas_1;
  }
  function component3($this) {
    return $this.canvasDrawScope_1;
  }
  function component4($this) {
    return $this.borderPath_1;
  }
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    imageBitmap = imageBitmap === VOID ? null : imageBitmap;
    canvas = canvas === VOID ? null : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? null : canvasDrawScope;
    borderPath = borderPath === VOID ? null : borderPath;
    this.imageBitmap_1 = imageBitmap;
    this.canvas_1 = canvas;
    this.canvasDrawScope_1 = canvasDrawScope;
    this.borderPath_1 = borderPath;
  }
  protoOf(BorderCache).drawBorderCache_wsnl8j_k$ = function (_this__u8e3s4, borderSize, config, block) {
    var targetImageBitmap = this.imageBitmap_1;
    var targetCanvas = this.canvas_1;
    var tmp;
    var tmp0_safe_receiver = targetImageBitmap;
    var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_config_df1eav_k$();
    if (equals(tmp_0 == null ? null : new ImageBitmapConfig(tmp_0), new ImageBitmapConfig(Companion_getInstance_0().get_Argb8888_tpu17z_k$()))) {
      tmp = true;
    } else {
      var tmp_1 = new ImageBitmapConfig(config);
      var tmp1_safe_receiver = targetImageBitmap;
      var tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_config_df1eav_k$();
      tmp = equals(tmp_1, tmp_2 == null ? null : new ImageBitmapConfig(tmp_2));
    }
    var compatibleConfig = tmp;
    if ((((targetImageBitmap == null ? true : targetCanvas == null) ? true : _Size___get_width__impl__58y75t(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_width_j0q4yl_k$()) ? true : _Size___get_height__impl__a04p02(_this__u8e3s4.get_size_x9ctfw_k$()) > targetImageBitmap.get_height_e7t92o_k$()) ? true : !compatibleConfig) {
      // Inline function 'kotlin.also' call
      var tmp0_also = ImageBitmap(_IntSize___get_width__impl__d9yl4o(borderSize), _IntSize___get_height__impl__prv63b(borderSize), config);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.imageBitmap_1 = tmp0_also;
      targetImageBitmap = tmp0_also;
      // Inline function 'kotlin.also' call
      var tmp1_also = Canvas(targetImageBitmap);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvas_1 = tmp1_also;
      targetCanvas = tmp1_also;
    }
    var tmp2_elvis_lhs = this.canvasDrawScope_1;
    var tmp_3;
    if (tmp2_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp2_also = new CanvasDrawScope();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
      this.canvasDrawScope_1 = tmp2_also;
      tmp_3 = tmp2_also;
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    var targetDrawScope = tmp_3;
    var drawSize = toSize(borderSize);
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
    var tmp3_draw = _this__u8e3s4.get_layoutDirection_7e37v0_k$();
    var tmp4_draw = targetCanvas;
    var tmp0_container = targetDrawScope.get_drawParams_ncgfpp_k$();
    var prevDensity = tmp0_container.component1_7eebsc_k$();
    var prevLayoutDirection = tmp0_container.component2_7eebsb_k$();
    var prevCanvas = tmp0_container.component3_7eebsa_k$();
    var prevSize = tmp0_container.component4_e3pqs9_k$();
    // Inline function 'kotlin.apply' call
    var tmp0_apply = targetDrawScope.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp0_apply.set_density_kzqph6_k$(_this__u8e3s4);
    tmp0_apply.set_layoutDirection_g6d9ui_k$(tmp3_draw);
    tmp0_apply.set_canvas_eyjvr_k$(tmp4_draw);
    tmp0_apply.set_size_xj1bzm_k$(drawSize);
    tmp4_draw.save_erlm4_k$();
    // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache.<anonymous>' call
    targetDrawScope.drawRect$default_agcbs4_k$(Companion_getInstance().get_Black_wh3yn9_k$(), VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_3().get_Clear_9hhqh4_k$());
    block(targetDrawScope);
    tmp4_draw.restore_a2id37_k$();
    // Inline function 'kotlin.apply' call
    var tmp1_apply = targetDrawScope.get_drawParams_ncgfpp_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw.<anonymous>' call
    tmp1_apply.set_density_kzqph6_k$(prevDensity);
    tmp1_apply.set_layoutDirection_g6d9ui_k$(prevLayoutDirection);
    tmp1_apply.set_canvas_eyjvr_k$(prevCanvas);
    tmp1_apply.set_size_xj1bzm_k$(prevSize);
    targetImageBitmap.prepareToDraw_sbmxaj_k$();
    return targetImageBitmap;
  };
  protoOf(BorderCache).obtainPath_y7q9hy_k$ = function () {
    var tmp0_elvis_lhs = this.borderPath_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var tmp0_also = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.BorderCache.obtainPath.<anonymous>' call
      this.borderPath_1 = tmp0_also;
      tmp = tmp0_also;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(BorderCache).copy_xq3glk_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath) {
    return new BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  protoOf(BorderCache).copy$default_8idv0z_k$ = function (imageBitmap, canvas, canvasDrawScope, borderPath, $super) {
    imageBitmap = imageBitmap === VOID ? this.imageBitmap_1 : imageBitmap;
    canvas = canvas === VOID ? this.canvas_1 : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? this.canvasDrawScope_1 : canvasDrawScope;
    borderPath = borderPath === VOID ? this.borderPath_1 : borderPath;
    return $super === VOID ? this.copy_xq3glk_k$(imageBitmap, canvas, canvasDrawScope, borderPath) : $super.copy_xq3glk_k$.call(this, imageBitmap, canvas, canvasDrawScope, borderPath);
  };
  protoOf(BorderCache).toString = function () {
    return 'BorderCache(imageBitmap=' + this.imageBitmap_1 + ', canvas=' + this.canvas_1 + ', canvasDrawScope=' + this.canvasDrawScope_1 + ', borderPath=' + this.borderPath_1 + ')';
  };
  protoOf(BorderCache).hashCode = function () {
    var result = this.imageBitmap_1 == null ? 0 : hashCode(this.imageBitmap_1);
    result = imul(result, 31) + (this.canvas_1 == null ? 0 : hashCode(this.canvas_1)) | 0;
    result = imul(result, 31) + (this.canvasDrawScope_1 == null ? 0 : hashCode(this.canvasDrawScope_1)) | 0;
    result = imul(result, 31) + (this.borderPath_1 == null ? 0 : hashCode(this.borderPath_1)) | 0;
    return result;
  };
  protoOf(BorderCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    var tmp0_other_with_cast = other instanceof BorderCache ? other : THROW_CCE();
    if (!equals(this.imageBitmap_1, tmp0_other_with_cast.imageBitmap_1))
      return false;
    if (!equals(this.canvas_1, tmp0_other_with_cast.canvas_1))
      return false;
    if (!equals(this.canvasDrawScope_1, tmp0_other_with_cast.canvasDrawScope_1))
      return false;
    if (!equals(this.borderPath_1, tmp0_other_with_cast.borderPath_1))
      return false;
    return true;
  };
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawContentWithoutBorder$lambda);
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_6().get_Zero_sctq3f_k$() : topLeft;
    var size = fillArea ? _this__u8e3s4.get_size_x9ctfw_k$() : borderSize;
    var style = fillArea ? Fill_getInstance() : new Stroke(strokeWidthPx);
    return _this__u8e3s4.onDrawWithContent_ido9k5_k$(drawRectBorder$lambda(brush, rectTopLeft, size, style));
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
    targetPath.reset_5tn5dq_k$();
    targetPath.addRoundRect_kr3fpw_k$(roundedRect);
    if (!fillArea) {
      // Inline function 'kotlin.apply' call
      var tmp0_apply = Path();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.createRoundRectPath.<anonymous>.<anonymous>' call
      tmp0_apply.addRoundRect_kr3fpw_k$(createInsetRoundedRect(strokeWidth, roundedRect));
      var insetPath = tmp0_apply;
      targetPath.op_eh4rey_k$(targetPath, insetPath, Companion_getInstance_2().get_Difference_61syb0_k$());
    }
    return targetPath;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.get_width_j0q4yl_k$() - widthPx;
    var tmp1_bottom = roundedRect.get_height_e7t92o_k$() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.get_topLeftCornerRadius_nzteym_k$(), widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.get_topRightCornerRadius_h21xrz_k$(), widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.get_bottomLeftCornerRadius_na53na_k$(), widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.get_bottomRightCornerRadius_vv4dft_k$(), widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.drawContent_m0d3yc_k$();
    return Unit_getInstance();
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.drawContent_m0d3yc_k$();
      $this$onDrawWithContent.drawRect$default_8oolwl_k$($brush, $rectTopLeft, $size, VOID, $style);
      return Unit_getInstance();
    };
  }
  function get_$stableprop() {
    return 0;
  }
  function BorderStroke(width, brush) {
    this.width_1 = width;
    this.brush_1 = brush;
    this.$stable_1 = 0;
  }
  protoOf(BorderStroke).get_width_76ubx4_k$ = function () {
    return this.width_1;
  };
  protoOf(BorderStroke).get_brush_ipcjyp_k$ = function () {
    return this.brush_1;
  };
  protoOf(BorderStroke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderStroke))
      return false;
    if (!equals(this.width_1, other.width_1))
      return false;
    if (!equals(this.brush_1, other.brush_1))
      return false;
    return true;
  };
  protoOf(BorderStroke).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.width_1);
    result = imul(31, result) + hashCode(this.brush_1) | 0;
    return result;
  };
  protoOf(BorderStroke).toString = function () {
    return 'BorderStroke(width=' + new Dp(this.width_1) + ', brush=' + this.brush_1 + ')';
  };
  protoOf(BorderStroke).copy_5wp6h0_k$ = function (width, brush) {
    return new BorderStroke(width, brush);
  };
  protoOf(BorderStroke).copy$default_c4vzc1_k$ = function (width, brush, $super) {
    width = width === VOID ? this.width_1 : width;
    brush = brush === VOID ? this.brush_1 : brush;
    return $super === VOID ? this.copy_5wp6h0_k$(width, brush) : $super.copy_5wp6h0_k$.call(this, new Dp(width), brush);
  };
  function get_MaxSupportedElevation() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return MaxSupportedElevation;
  }
  var MaxSupportedElevation;
  function get_HorizontalScrollableClipModifier() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return HorizontalScrollableClipModifier;
  }
  var HorizontalScrollableClipModifier;
  function get_VerticalScrollableClipModifier() {
    _init_properties_ClipScrollableContainer_kt__60yb60();
    return VerticalScrollableClipModifier;
  }
  var VerticalScrollableClipModifier;
  function HorizontalScrollableClipModifier$1() {
  }
  protoOf(HorizontalScrollableClipModifier$1).createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    var inflateSize = density.roundToPx_hl1u8z_k$(get_MaxSupportedElevation());
    return new Rectangle(new Rect(0.0, -inflateSize, _Size___get_width__impl__58y75t(size), _Size___get_height__impl__a04p02(size) + inflateSize));
  };
  function VerticalScrollableClipModifier$1() {
  }
  protoOf(VerticalScrollableClipModifier$1).createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.<no name provided>.createOutline.<anonymous>' call
    var inflateSize = density.roundToPx_hl1u8z_k$(get_MaxSupportedElevation());
    return new Rectangle(new Rect(-inflateSize, 0.0, _Size___get_width__impl__58y75t(size) + inflateSize, _Size___get_height__impl__a04p02(size)));
  };
  var properties_initialized_ClipScrollableContainer_kt_l2hne;
  function _init_properties_ClipScrollableContainer_kt__60yb60() {
    if (!properties_initialized_ClipScrollableContainer_kt_l2hne) {
      properties_initialized_ClipScrollableContainer_kt_l2hne = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      MaxSupportedElevation = _Dp___init__impl__ms3zkb(30);
      var tmp = Companion_getInstance_7();
      HorizontalScrollableClipModifier = clip(tmp, new HorizontalScrollableClipModifier$1());
      var tmp_0 = Companion_getInstance_7();
      VerticalScrollableClipModifier = clip(tmp_0, new VerticalScrollableClipModifier$1());
    }
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
  function ExperimentalFoundationApi() {
  }
  protoOf(ExperimentalFoundationApi).equals = function (other) {
    if (!(other instanceof ExperimentalFoundationApi))
      return false;
    other instanceof ExperimentalFoundationApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalFoundationApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalFoundationApi).toString = function () {
    return '@androidx.compose.foundation.ExperimentalFoundationApi()';
  };
  function get_focusGroupInspectorInfo() {
    _init_properties_Focusable_kt__2q5fls();
    return focusGroupInspectorInfo;
  }
  var focusGroupInspectorInfo;
  function get_FocusableInNonTouchModeElement() {
    _init_properties_Focusable_kt__2q5fls();
    return FocusableInNonTouchModeElement;
  }
  var FocusableInNonTouchModeElement;
  function _get_inputModeManager__dmvjvv($this) {
    return currentValueOf($this, get_LocalInputModeManager());
  }
  function FocusableInNonTouchMode() {
    Node.call(this);
  }
  protoOf(FocusableInNonTouchMode).applyFocusProperties_43gr87_k$ = function (focusProperties) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.FocusableInNonTouchMode.applyFocusProperties.<anonymous>' call
    focusProperties.set_canFocus_n88v8k_k$(!(_get_inputModeManager__dmvjvv(this).get_inputMode_ga9bte_k$() === Companion_getInstance_8().get_Touch_waibs4_k$()));
  };
  function focusGroupInspectorInfo$lambda($this$null) {
    _init_properties_Focusable_kt__2q5fls();
    // Inline function 'androidx.compose.foundation.focusGroupInspectorInfo.<anonymous>' call
    $this$null.set_name_1v3553_k$('focusGroup');
    return Unit_getInstance();
  }
  function _get_arbitraryHashCode__1p68u4($this) {
    return $this.arbitraryHashCode_1;
  }
  function FocusableInNonTouchModeElement$1() {
    ModifierNodeElement.call(this);
    this.arbitraryHashCode_1 = identityHashCode(this);
  }
  protoOf(FocusableInNonTouchModeElement$1).create_md4cuc_k$ = function () {
    return new FocusableInNonTouchMode();
  };
  protoOf(FocusableInNonTouchModeElement$1).update_p68g2d_k$ = function (node) {
  };
  protoOf(FocusableInNonTouchModeElement$1).update_c7m3nr_k$ = function (node) {
    return this.update_p68g2d_k$(node instanceof FocusableInNonTouchMode ? node : THROW_CCE());
  };
  protoOf(FocusableInNonTouchModeElement$1).hashCode = function () {
    return this.arbitraryHashCode_1;
  };
  protoOf(FocusableInNonTouchModeElement$1).equals = function (other) {
    return this === other;
  };
  protoOf(FocusableInNonTouchModeElement$1).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.set_name_1v3553_k$('focusableInNonTouchMode');
  };
  var properties_initialized_Focusable_kt_k4lele;
  function _init_properties_Focusable_kt__2q5fls() {
    if (!properties_initialized_Focusable_kt_k4lele) {
      properties_initialized_Focusable_kt_k4lele = true;
      var tmp$ret$0;
      // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
      var tmp;
      if (get_isDebugInspectorInfoEnabled()) {
        tmp = focusGroupInspectorInfo$lambda;
      } else {
        tmp = get_NoInspectorInfo();
      }
      tmp$ret$0 = tmp;
      focusGroupInspectorInfo = new InspectableModifier(tmp$ret$0);
      FocusableInNonTouchModeElement = new FocusableInNonTouchModeElement$1();
    }
  }
  function get_ModifierLocalFocusedBoundsObserver() {
    _init_properties_FocusedBounds_kt__l9iahm();
    return ModifierLocalFocusedBoundsObserver;
  }
  var ModifierLocalFocusedBoundsObserver;
  function ModifierLocalFocusedBoundsObserver$lambda() {
    _init_properties_FocusedBounds_kt__l9iahm();
    return null;
  }
  var properties_initialized_FocusedBounds_kt_k69nss;
  function _init_properties_FocusedBounds_kt__l9iahm() {
    if (!properties_initialized_FocusedBounds_kt_k69nss) {
      properties_initialized_FocusedBounds_kt_k69nss = true;
      ModifierLocalFocusedBoundsObserver = modifierLocalOf(ModifierLocalFocusedBoundsObserver$lambda);
    }
  }
  function get_LocalIndication() {
    _init_properties_Indication_kt__w3ndj0();
    return LocalIndication;
  }
  var LocalIndication;
  function Indication() {
  }
  function _get_isPressed__f6cq7t($this) {
    return $this.isPressed_1;
  }
  function _get_isHovered__wio4dc($this) {
    return $this.isHovered_1;
  }
  function _get_isFocused__xvmarg($this) {
    return $this.isFocused_1;
  }
  function DefaultDebugIndicationInstance(isPressed, isHovered, isFocused) {
    this.isPressed_1 = isPressed;
    this.isHovered_1 = isHovered;
    this.isFocused_1 = isFocused;
  }
  protoOf(DefaultDebugIndicationInstance).drawIndication_4sht7n_k$ = function (_this__u8e3s4) {
    _this__u8e3s4.drawContent_m0d3yc_k$();
    if (this.isPressed_1.get_value_j01efc_k$()) {
      _this__u8e3s4.drawRect$default_agcbs4_k$(Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_wh3yn9_k$(), 0.3), VOID, _this__u8e3s4.get_size_x9ctfw_k$());
    } else if (this.isHovered_1.get_value_j01efc_k$() ? true : this.isFocused_1.get_value_j01efc_k$()) {
      _this__u8e3s4.drawRect$default_agcbs4_k$(Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_wh3yn9_k$(), 0.1), VOID, _this__u8e3s4.get_size_x9ctfw_k$());
    }
  };
  function DefaultDebugIndication() {
    DefaultDebugIndication_instance = this;
  }
  protoOf(DefaultDebugIndication).rememberUpdatedInstance_1mtpmt_k$ = function (interactionSource) {
    illegalDecoyCallException('rememberUpdatedInstance');
  };
  protoOf(DefaultDebugIndication).rememberUpdatedInstance$composable_3l23r4_k$ = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(202464790);
    sourceInformation($composer_0, 'C(rememberUpdatedInstance$composable)183@7542L25,184@7610L25,185@7678L25,186@7719L115:Indication.kt#71ulvw');
    if (isTraceInProgress()) {
      traceEventStart(202464790, $changed, -1, 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance$composable (Indication.kt:182)');
    }
    var isPressed = collectIsPressedAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isHovered = collectIsHoveredAsState$composable(interactionSource, $composer_0, 14 & $changed);
    var isFocused = collectIsFocusedAsState$composable(interactionSource, $composer_0, 14 & $changed);
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
    sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = $composer_1.changed_ga7h3f_k$(interactionSource);
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.DefaultDebugIndication.rememberUpdatedInstance$composable.<anonymous>' call
      var value = new DefaultDebugIndicationInstance(isPressed, isHovered, isFocused);
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return tmp0;
  };
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    if (DefaultDebugIndication_instance == null)
      new DefaultDebugIndication();
    return DefaultDebugIndication_instance;
  }
  function IndicationInstance() {
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
  function get_HorizontalPointerDirectionConfig() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return HorizontalPointerDirectionConfig;
  }
  var HorizontalPointerDirectionConfig;
  function get_VerticalPointerDirectionConfig() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return VerticalPointerDirectionConfig;
  }
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
  function get_mouseToTouchSlopRatio() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  function PointerDirectionConfig() {
  }
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
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      var tmp0_fastFirstOrNull = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastFirstOrNull.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPointerUp.<anonymous>' call
          if (equals(item.get_id_o0558_k$(), pointerId)) {
            tmp$ret$1 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_pressed_3zxk93_k$()) === true);
  }
  function awaitDragOrUp(_this__u8e3s4, pointerId, hasDragged, $completion) {
    var tmp = new $awaitDragOrUpCOROUTINE$3(_this__u8e3s4, pointerId, hasDragged, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function HorizontalPointerDirectionConfig$1() {
  }
  protoOf(HorizontalPointerDirectionConfig$1).mainAxisDelta_r99w23_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  protoOf(HorizontalPointerDirectionConfig$1).crossAxisDelta_uv6j4e_k$ = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  protoOf(HorizontalPointerDirectionConfig$1).offsetFromChanges_ujoh6i_k$ = function (mainChange, crossChange) {
    return Offset(mainChange, crossChange);
  };
  function VerticalPointerDirectionConfig$1() {
  }
  protoOf(VerticalPointerDirectionConfig$1).mainAxisDelta_r99w23_k$ = function (offset) {
    return _Offset___get_y__impl__8bzhra(offset);
  };
  protoOf(VerticalPointerDirectionConfig$1).crossAxisDelta_uv6j4e_k$ = function (offset) {
    return _Offset___get_x__impl__xvi35n(offset);
  };
  protoOf(VerticalPointerDirectionConfig$1).offsetFromChanges_ujoh6i_k$ = function (mainChange, crossChange) {
    return Offset(crossChange, mainChange);
  };
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
      it.consume_spbz2t_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    this.$onDragStart_1 = $onDragStart;
    this.$onDragEnd_1 = $onDragEnd;
    this.$onDragCancel_1 = $onDragCancel;
    this.$onDrag_1 = $onDrag;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(detectDragGesturesAfterLongPress$slambda).invoke_6kuihv_k$ = function ($this$awaitEachGesture, $completion) {
    var tmp = this.create_699gxy_k$($this$awaitEachGesture, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            this.set_exceptionState_s9sevl_k$(6);
            this.set_state_a96kl8_k$(1);
            suspendResult = awaitFirstDown(this.$this$awaitEachGesture_1, false, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.down0__1 = suspendResult;
            this.set_state_a96kl8_k$(2);
            suspendResult = awaitLongPressOrCancellation(this.$this$awaitEachGesture_1, this.down0__1.get_id_o0558_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.drag1__1 = suspendResult;
            if (!(this.drag1__1 == null)) {
              this.$onDragStart_1(new Offset_0(this.drag1__1.get_position_kw508q_k$()));
              this.set_state_a96kl8_k$(3);
              var tmp_0 = this.drag1__1.get_id_o0558_k$();
              suspendResult = drag(this.$this$awaitEachGesture_1, tmp_0, detectDragGesturesAfterLongPress$slambda$lambda(this.$onDrag_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(5);
              continue $sm;
            }

          case 3:
            if (suspendResult) {
              var tmp0_fastForEach = this.$this$awaitEachGesture_1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastForEach.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastForEach.get_fkrdnv_k$(index);
                  if (changedToUp(item)) {
                    item.consume_spbz2t_k$();
                  }
                }
                 while (inductionVariable <= last);
              this.$onDragEnd_1();
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              this.$onDragCancel_1();
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 4:
            this.set_state_a96kl8_k$(5);
            continue $sm;
          case 5:
            this.set_exceptionState_s9sevl_k$(7);
            this.set_state_a96kl8_k$(8);
            continue $sm;
          case 6:
            this.set_exceptionState_s9sevl_k$(7);
            var tmp_1 = this.get_exception_x0n6w6_k$();
            if (tmp_1 instanceof CancellationException) {
              var c = this.get_exception_x0n6w6_k$();
              this.$onDragCancel_1();
              throw c;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            this.set_exceptionState_s9sevl_k$(7);
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).create_699gxy_k$ = function ($this$awaitEachGesture, completion) {
    var i = new detectDragGesturesAfterLongPress$slambda(this.$onDragStart_1, this.$onDragEnd_1, this.$onDragCancel_1, this.$onDrag_1, completion);
    i.$this$awaitEachGesture_1 = $this$awaitEachGesture;
    return i;
  };
  protoOf(detectDragGesturesAfterLongPress$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function detectDragGesturesAfterLongPress$slambda_0($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation) {
    var i = new detectDragGesturesAfterLongPress$slambda($onDragStart, $onDragEnd, $onDragCancel, $onDrag, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.invoke_6kuihv_k$($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation) {
    this.$currentDown_1 = $currentDown;
    this.$longPress_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitLongPressOrCancellation$slambda).invoke_6kuihv_k$ = function ($this$withTimeout, $completion) {
    var tmp = this.create_699gxy_k$($this$withTimeout, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitLongPressOrCancellation$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitLongPressOrCancellation$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            this.finished0__1 = false;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!!this.finished0__1) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event1__1 = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAll = this.event1__1.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAll.get_fkrdnv_k$(index);
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
              this.finished0__1 = true;
            }

            var tmp$ret$2;
            l$ret$3: do {
              var tmp1_fastAny = this.event1__1.get_changes_dhi2my_k$();
              var inductionVariable_0 = 0;
              var last_0 = tmp1_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp1_fastAny.get_fkrdnv_k$(index_0);
                  if (item_0.get_isConsumed_scj5q3_k$() ? true : isOutOfBounds(item_0, this.$this$withTimeout_1.get_size_yscczt_k$(), this.$this$withTimeout_1.get_extendedTouchPadding_uaqi8a_k$())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              this.finished0__1 = true;
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this.$this$withTimeout_1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp$ret$4;
            l$ret$5: do {
              var tmp2_fastAny = consumeCheck.get_changes_dhi2my_k$();
              var inductionVariable_1 = 0;
              var last_1 = tmp2_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp2_fastAny.get_fkrdnv_k$(index_1);
                  if (item_1.get_isConsumed_scj5q3_k$()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.finished0__1 = true;
            }

            if (isPointerUp(this.event1__1, this.$currentDown_1._v.get_id_o0558_k$())) {
              var tmp$ret$6;
              l$ret$7: do {
                var tmp3_fastFirstOrNull = this.event1__1.get_changes_dhi2my_k$();
                var inductionVariable_2 = 0;
                var last_2 = tmp3_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = tmp3_fastFirstOrNull.get_fkrdnv_k$(index_2);
                    if (item_2.get_pressed_3zxk93_k$()) {
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
                this.$currentDown_1._v = newPressed;
                this.$longPress_1._v = this.$currentDown_1._v;
              } else {
                this.finished0__1 = true;
              }
            } else {
              var tmp$ret$8;
              l$ret$9: do {
                var tmp4_fastFirstOrNull = this.event1__1.get_changes_dhi2my_k$();
                var inductionVariable_3 = 0;
                var last_3 = tmp4_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = tmp4_fastFirstOrNull.get_fkrdnv_k$(index_3);
                    if (equals(item_3.get_id_o0558_k$(), this.$currentDown_1._v.get_id_o0558_k$())) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.$longPress_1._v = tmp$ret$8;
            }

            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(awaitLongPressOrCancellation$slambda).create_699gxy_k$ = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.$currentDown_1, this.$longPress_1, completion);
    i.$this$withTimeout_1 = $this$withTimeout;
    return i;
  };
  protoOf(awaitLongPressOrCancellation$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function awaitLongPressOrCancellation$slambda_0($currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($currentDown, $longPress, resultContinuation);
    var l = function ($this$withTimeout, $completion) {
      return i.invoke_6kuihv_k$($this$withTimeout, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $dragCOROUTINE$0(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.onDrag_1 = onDrag;
  }
  protoOf($dragCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = awaitDragOrCancellation(this._this__u8e3s4__1, this.pointer0__1, this);
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

            this.onDrag_1(change);
            this.pointer0__1 = change.get_id_o0558_k$();
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $awaitLongPressOrCancellationCOROUTINE$1(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  protoOf($awaitLongPressOrCancellationCOROUTINE$1).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            if (isPointerUp(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.get_id_o0558_k$(), this.pointerId_1)) {
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

            tmp_0.initialDown0__1 = tmp_1;
            this.longPress1__1 = {_v: null};
            this.currentDown2__1 = {_v: this.initialDown0__1};
            this.longPressTimeout3__1 = this._this__u8e3s4__1.get_viewConfiguration_qgdaco_k$().get_longPressTimeoutMillis_i28jbr_k$();
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = this._this__u8e3s4__1.withTimeout_m08hrs_k$(this.longPressTimeout3__1, awaitLongPressOrCancellation$slambda_0(this.currentDown2__1, this.longPress1__1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.TRY_RESULT4__1 = null;
            this.set_exceptionState_s9sevl_k$(3);
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_s9sevl_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof PointerEventTimeoutCancellationException) {
              var _ = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              var tmp1_elvis_lhs = this.longPress1__1._v;
              tmp_3.TRY_RESULT4__1 = tmp1_elvis_lhs == null ? this.initialDown0__1 : tmp1_elvis_lhs;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_s9sevl_k$(3);
            return this.TRY_RESULT4__1;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $awaitDragOrCancellationCOROUTINE$2(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
  }
  protoOf($awaitDragOrCancellationCOROUTINE$2).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(7);
            if (isPointerUp(this._this__u8e3s4__1.get_currentEvent_sfuq5m_k$(), this.pointerId_1)) {
              return null;
            }

            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.pointer1__1 = this.pointerId_1;
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 2:
            if (false) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_btks8g_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.get_id_o0558_k$(), this.pointer1__1)) {
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
              this.tmp$ret$20__1 = null;
              this.set_state_a96kl8_k$(9);
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 4:
            var dragEvent = WHEN_RESULT;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$4;
              l$ret$5: do {
                var tmp1_fastFirstOrNull = event.get_changes_dhi2my_k$();
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.get_pressed_3zxk93_k$()) {
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
                this.tmp$ret$20__1 = dragEvent;
                this.set_state_a96kl8_k$(9);
                continue $sm;
              } else {
                this.pointer1__1 = otherDown.get_id_o0558_k$();
                this.set_state_a96kl8_k$(5);
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.tmp$ret$20__1 = dragEvent;
                this.set_state_a96kl8_k$(9);
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(6);
                continue $sm;
              }
            }

          case 5:
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(2);
            continue $sm;
          case 7:
            throw this.get_exception_x0n6w6_k$();
          case 8:
            if (false) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(9);
            continue $sm;
          case 9:
            var change = this.tmp$ret$20__1;
            var tmp_0;
            if ((change == null ? null : change.get_isConsumed_scj5q3_k$()) === false) {
              tmp_0 = change;
            } else {
              tmp_0 = null;
            }

            return tmp_0;
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function $awaitDragOrUpCOROUTINE$3(_this__u8e3s4, pointerId, hasDragged, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.pointerId_1 = pointerId;
    this.hasDragged_1 = hasDragged;
  }
  protoOf($awaitDragOrUpCOROUTINE$3).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(3);
            this.pointer0__1 = this.pointerId_1;
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent$default_btks8g_k$(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var event = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastFirstOrNull = event.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastFirstOrNull.get_fkrdnv_k$(index);
                  if (equals(item.get_id_o0558_k$(), this.pointer0__1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var dragEvent = tmp_0;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp$ret$2;
              l$ret$3: do {
                var tmp1_fastFirstOrNull = event.get_changes_dhi2my_k$();
                var inductionVariable_0 = 0;
                var last_0 = tmp1_fastFirstOrNull.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp1_fastFirstOrNull.get_fkrdnv_k$(index_0);
                    if (item_0.get_pressed_3zxk93_k$()) {
                      tmp$ret$2 = item_0;
                      break l$ret$3;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$2 = null;
              }
               while (false);
              var otherDown = tmp$ret$2;
              if (otherDown == null) {
                return dragEvent;
              } else {
                this.pointer0__1 = otherDown.get_id_o0558_k$();
              }
            } else if (this.hasDragged_1(dragEvent)) {
              return dragEvent;
            }

            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
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
    var currentContext = $completion.get_context_h02k06_k$();
    return _this__u8e3s4.awaitPointerEventScope_ldqog2_k$(awaitEachGesture$slambda_0(currentContext, block, null), $completion);
  }
  function awaitAllPointersUp(_this__u8e3s4, $completion) {
    var tmp = new $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      var tmp0_fastAny = _this__u8e3s4.get_currentEvent_sfuq5m_k$().get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAny.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAny.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAny.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.allPointersUp.<anonymous>' call
          if (item.get_pressed_3zxk93_k$()) {
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
    this.$currentContext_1 = $currentContext;
    this.$block_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitEachGesture$slambda).invoke_6kuihv_k$ = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.create_699gxy_k$($this$awaitPointerEventScope, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(awaitEachGesture$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitEachGesture$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (!get_isActive(this.$currentContext_1)) {
              this.set_state_a96kl8_k$(8);
              continue $sm;
            }

            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(2);
            suspendResult = this.$block_1(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_a96kl8_k$(3);
            suspendResult = awaitAllPointersUp(this.$this$awaitPointerEventScope_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 4:
            this.set_exceptionState_s9sevl_k$(9);
            var tmp_0 = this.get_exception_x0n6w6_k$();
            if (tmp_0 instanceof CancellationException) {
              this.e0__1 = this.get_exception_x0n6w6_k$();
              if (get_isActive(this.$currentContext_1)) {
                this.set_state_a96kl8_k$(5);
                suspendResult = awaitAllPointersUp(this.$this$awaitPointerEventScope_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw this.e0__1;
              }
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 5:
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.set_exceptionState_s9sevl_k$(9);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 8:
            return Unit_getInstance();
          case 9:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 9) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(awaitEachGesture$slambda).create_699gxy_k$ = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitEachGesture$slambda(this.$currentContext_1, this.$block_1, completion);
    i.$this$awaitPointerEventScope_1 = $this$awaitPointerEventScope;
    return i;
  };
  protoOf(awaitEachGesture$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function awaitEachGesture$slambda_0($currentContext, $block, resultContinuation) {
    var i = new awaitEachGesture$slambda($currentContext, $block, resultContinuation);
    var l = function ($this$awaitPointerEventScope, $completion) {
      return i.invoke_6kuihv_k$($this$awaitPointerEventScope, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitAllPointersUpCOROUTINE$4(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitAllPointersUpCOROUTINE$4).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(5);
            if (!allPointersUp(this._this__u8e3s4__1)) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            } else {
              this.set_state_a96kl8_k$(4);
              continue $sm;
            }

          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp$ret$0;
            l$ret$1: do {
              var tmp0_fastAny = events.get_changes_dhi2my_k$();
              var inductionVariable = 0;
              var last = tmp0_fastAny.get_size_woubt6_k$() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0_fastAny.get_fkrdnv_k$(index);
                  if (item.get_pressed_3zxk93_k$()) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            return Unit_getInstance();
          case 5:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  var Orientation_Vertical_instance;
  var Orientation_Horizontal_instance;
  function values() {
    return [Orientation_Vertical_getInstance(), Orientation_Horizontal_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Vertical':
        return Orientation_Vertical_getInstance();
      case 'Horizontal':
        return Orientation_Horizontal_getInstance();
      default:
        Orientation_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Orientation_entriesInitialized;
  function Orientation_initEntries() {
    if (Orientation_entriesInitialized)
      return Unit_getInstance();
    Orientation_entriesInitialized = true;
    Orientation_Vertical_instance = new Orientation('Vertical', 0);
    Orientation_Horizontal_instance = new Orientation('Horizontal', 1);
  }
  function Orientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Orientation_Vertical_getInstance() {
    Orientation_initEntries();
    return Orientation_Vertical_instance;
  }
  function Orientation_Horizontal_getInstance() {
    Orientation_initEntries();
    return Orientation_Horizontal_instance;
  }
  function get_NoOpOnDragStarted() {
    _init_properties_Scrollable_kt__k2543d();
    return NoOpOnDragStarted;
  }
  var NoOpOnDragStarted;
  function get_NoOpScrollScope() {
    _init_properties_Scrollable_kt__k2543d();
    return NoOpScrollScope;
  }
  var NoOpScrollScope;
  function get_ModifierLocalScrollableContainer() {
    _init_properties_Scrollable_kt__k2543d();
    return ModifierLocalScrollableContainer;
  }
  var ModifierLocalScrollableContainer;
  function get_DefaultScrollMotionDurationScale() {
    _init_properties_Scrollable_kt__k2543d();
    return DefaultScrollMotionDurationScale;
  }
  var DefaultScrollMotionDurationScale;
  function get_DefaultScrollMotionDurationScaleFactor() {
    return DefaultScrollMotionDurationScaleFactor;
  }
  var DefaultScrollMotionDurationScaleFactor;
  function NoOpOnDragStarted$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoOpOnDragStarted$slambda).invoke_bc859n_k$ = function ($this$null, it, $completion) {
    var tmp = this.create_w2uwqo_k$($this$null, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NoOpOnDragStarted$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.invoke_bc859n_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $completion);
  };
  protoOf(NoOpOnDragStarted$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NoOpOnDragStarted$slambda).create_w2uwqo_k$ = function ($this$null, it, completion) {
    var i = new NoOpOnDragStarted$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  function NoOpOnDragStarted$slambda_0(resultContinuation) {
    var i = new NoOpOnDragStarted$slambda(resultContinuation);
    var l = function ($this$null, it, $completion) {
      return i.invoke_bc859n_k$($this$null, it.packedValue_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function NoOpScrollScope$1() {
  }
  protoOf(NoOpScrollScope$1).scrollBy_p9cup6_k$ = function (pixels) {
    return pixels;
  };
  function ModifierLocalScrollableContainer$lambda() {
    _init_properties_Scrollable_kt__k2543d();
    return false;
  }
  function DefaultScrollMotionDurationScale$1() {
  }
  protoOf(DefaultScrollMotionDurationScale$1).get_scaleFactor_64aucw_k$ = function () {
    return 1.0;
  };
  var properties_initialized_Scrollable_kt_7d5rzr;
  function _init_properties_Scrollable_kt__k2543d() {
    if (!properties_initialized_Scrollable_kt_7d5rzr) {
      properties_initialized_Scrollable_kt_7d5rzr = true;
      NoOpOnDragStarted = NoOpOnDragStarted$slambda_0(null);
      NoOpScrollScope = new NoOpScrollScope$1();
      ModifierLocalScrollableContainer = modifierLocalOf(ModifierLocalScrollableContainer$lambda);
      DefaultScrollMotionDurationScale = new DefaultScrollMotionDurationScale$1();
    }
  }
  function ScrollScope() {
  }
  function get_NoPressGesture() {
    _init_properties_TapGestureDetector_kt__k4yygc();
    return NoPressGesture;
  }
  var NoPressGesture;
  function PressGestureScope() {
  }
  function awaitFirstDown(_this__u8e3s4, requireUnconsumed, pass, $completion) {
    requireUnconsumed = requireUnconsumed === VOID ? true : requireUnconsumed;
    pass = pass === VOID ? PointerEventPass_Main_getInstance() : pass;
    var tmp = new $awaitFirstDownCOROUTINE$5(_this__u8e3s4, requireUnconsumed, pass, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function isPrimaryChangedDown(_this__u8e3s4, requireUnconsumed) {
    _init_properties_TapGestureDetector_kt__k4yygc();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      var tmp0_fastAll = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_fastAll.get_fkrdnv_k$(index);
          // Inline function 'androidx.compose.ui.util.fastAll.<anonymous>' call
          // Inline function 'androidx.compose.foundation.gestures.isPrimaryChangedDown.<anonymous>' call
          if (!(item.get_type_zeflrq_k$() === Companion_getInstance_10().get_Mouse_a0dpcz_k$())) {
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
      var tmp1_fastAll = _this__u8e3s4.get_changes_dhi2my_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable_0 = 0;
      var last_0 = tmp1_fastAll.get_size_woubt6_k$() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp1_fastAll.get_fkrdnv_k$(index_0);
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
    return changedToDown_0 ? get_isPrimaryPressed(_this__u8e3s4.get_buttons_mb0klg_k$()) ? true : !primaryButtonCausesDown : false;
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoPressGesture$slambda).invoke_56pugh_k$ = function ($this$null, it, $completion) {
    var tmp = this.create_rju3ym_k$($this$null, it, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(NoPressGesture$slambda).invoke_f2mof9_k$ = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.invoke_56pugh_k$(tmp, p2 instanceof Offset_0 ? p2.packedValue_1 : THROW_CCE(), $completion);
  };
  protoOf(NoPressGesture$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(NoPressGesture$slambda).create_rju3ym_k$ = function ($this$null, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.$this$null_1 = $this$null;
    i.it_1 = it;
    return i;
  };
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    var l = function ($this$null, it, $completion) {
      return i.invoke_56pugh_k$($this$null, it.packedValue_1, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $awaitFirstDownCOROUTINE$5(_this__u8e3s4, requireUnconsumed, pass, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
    this.requireUnconsumed_1 = requireUnconsumed;
    this.pass_1 = pass;
  }
  protoOf($awaitFirstDownCOROUTINE$5).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(this.pass_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            if (!isPrimaryChangedDown(this.event0__1, this.requireUnconsumed_1)) {
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return this.event0__1.get_changes_dhi2my_k$().get_fkrdnv_k$(0);
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
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
  function get_MinFlingVelocityDp() {
    _init_properties_SnapFlingBehavior_kt__1y2evi();
    return MinFlingVelocityDp;
  }
  var MinFlingVelocityDp;
  var properties_initialized_SnapFlingBehavior_kt_r96zw;
  function _init_properties_SnapFlingBehavior_kt__1y2evi() {
    if (!properties_initialized_SnapFlingBehavior_kt_r96zw) {
      properties_initialized_SnapFlingBehavior_kt_r96zw = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      MinFlingVelocityDp = _Dp___init__impl__ms3zkb(400);
    }
  }
  function sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0).position_pgh2la_k$ = function (_this__u8e3s4, layoutSize, itemSize, itemIndex) {
    return this.function_1(_this__u8e3s4, layoutSize, itemSize, itemIndex);
  };
  function SnapPositionInLayout$Companion$CenterToCenter$lambda($this$SnapPositionInLayout, layoutSize, itemSize, _anonymous_parameter_2__qggqfi) {
    return (layoutSize / 2 | 0) - (itemSize / 2 | 0) | 0;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = SnapPositionInLayout$Companion$CenterToCenter$lambda;
    tmp.CenterToCenter_1 = new sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0(tmp_0);
  }
  protoOf(Companion_0).get_CenterToCenter_p0v1ou_k$ = function () {
    return this.CenterToCenter_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_26() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function SnapPositionInLayout() {
  }
  function get_$stableprop_0() {
    return 0;
  }
  function get_$stableprop_1() {
    return 0;
  }
  function get_$stableprop_2() {
    return 0;
  }
  function Start() {
    this.$stable_1 = 0;
  }
  function Stop(start) {
    this.start_1 = start;
    this.$stable_1 = 0;
  }
  protoOf(Stop).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  function Cancel(start) {
    this.start_1 = start;
    this.$stable_1 = 0;
  }
  protoOf(Cancel).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  function DragInteraction() {
  }
  function collectIsFocusedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1452413326);
    sourceInformation($composer_0, 'C(collectIsFocusedAsState$composable)65@2219L34,66@2279L414,66@2258L435:FocusInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1452413326, $changed, -1, 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable (FocusInteraction.kt:64)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    var isFocused = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isFocused));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsFocusedAsState$composable.<anonymous>' call
      var value_0 = collectIsFocusedAsState$composable$slambda_0(_this__u8e3s4, isFocused, null);
      $composer_2.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.endReplaceableGroup_er37p7_k$();
    LaunchedEffect$composable(_this__u8e3s4, tmp0_0, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return isFocused;
  }
  function get_$stableprop_3() {
    return 0;
  }
  function get_$stableprop_4() {
    return 0;
  }
  function Focus() {
    this.$stable_1 = 0;
  }
  function Unfocus(focus) {
    this.focus_1 = focus;
    this.$stable_1 = 0;
  }
  protoOf(Unfocus).get_focus_irhg33_k$ = function () {
    return this.focus_1;
  };
  function FocusInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation) {
    this.$focusInteractions_1 = $focusInteractions;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).invoke_ry6yte_k$ = function (interaction, $completion) {
    var tmp = this.create_xj5a0d_k$(interaction, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Focus) {
            this.$focusInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Unfocus) {
              this.$focusInteractions_1.remove_8hbkc6_k$(this.interaction_1.focus_1);
            }
          }
          this.$isFocused_1.set_value_rnwamw_k$(!this.$focusInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda(this.$focusInteractions_1, this.$isFocused_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsFocusedAsState$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsFocusedAsState$composable$slambda$slambda_0($focusInteractions, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda$slambda($focusInteractions, $isFocused, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_ry6yte_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    this.$this_collectIsFocusedAsState$composable_1 = $this_collectIsFocusedAsState$composable;
    this.$isFocused_1 = $isFocused;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsFocusedAsState$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsFocusedAsState$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsFocusedAsState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.focusInteractions0__1 = ArrayList_init_$Create$();
            this.set_state_a96kl8_k$(1);
            var tmp_1 = this.$this_collectIsFocusedAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsFocusedAsState$composable$slambda$slambda_0(this.focusInteractions0__1, this.$isFocused_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsFocusedAsState$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsFocusedAsState$composable$slambda(this.$this_collectIsFocusedAsState$composable_1, this.$isFocused_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsFocusedAsState$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsFocusedAsState$composable$slambda_0($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation) {
    var i = new collectIsFocusedAsState$composable$slambda($this_collectIsFocusedAsState$composable, $isFocused, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1621024626);
    sourceInformation($composer_0, 'C(collectIsHoveredAsState$composable)65@2151L34,66@2211L411,66@2190L432:HoverInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1621024626, $changed, -1, 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable (HoverInteraction.kt:64)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    var isHovered = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isHovered));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsHoveredAsState$composable.<anonymous>' call
      var value_0 = collectIsHoveredAsState$composable$slambda_0(_this__u8e3s4, isHovered, null);
      $composer_2.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.endReplaceableGroup_er37p7_k$();
    LaunchedEffect$composable(_this__u8e3s4, tmp0_0, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return isHovered;
  }
  function get_$stableprop_5() {
    return 0;
  }
  function get_$stableprop_6() {
    return 0;
  }
  function Enter() {
    this.$stable_1 = 0;
  }
  function Exit(enter) {
    this.enter_1 = enter;
    this.$stable_1 = 0;
  }
  protoOf(Exit).get_enter_iqxcq7_k$ = function () {
    return this.enter_1;
  };
  function HoverInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation) {
    this.$hoverInteractions_1 = $hoverInteractions;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).invoke_ry6yte_k$ = function (interaction, $completion) {
    var tmp = this.create_xj5a0d_k$(interaction, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Enter) {
            this.$hoverInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.$hoverInteractions_1.remove_8hbkc6_k$(this.interaction_1.enter_1);
            }
          }
          this.$isHovered_1.set_value_rnwamw_k$(!this.$hoverInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda(this.$hoverInteractions_1, this.$isHovered_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsHoveredAsState$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsHoveredAsState$composable$slambda$slambda_0($hoverInteractions, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda$slambda($hoverInteractions, $isHovered, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_ry6yte_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    this.$this_collectIsHoveredAsState$composable_1 = $this_collectIsHoveredAsState$composable;
    this.$isHovered_1 = $isHovered;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsHoveredAsState$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsHoveredAsState$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsHoveredAsState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.hoverInteractions0__1 = ArrayList_init_$Create$();
            this.set_state_a96kl8_k$(1);
            var tmp_1 = this.$this_collectIsHoveredAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsHoveredAsState$composable$slambda$slambda_0(this.hoverInteractions0__1, this.$isHovered_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsHoveredAsState$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsHoveredAsState$composable$slambda(this.$this_collectIsHoveredAsState$composable_1, this.$isHovered_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsHoveredAsState$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsHoveredAsState$composable$slambda_0($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation) {
    var i = new collectIsHoveredAsState$composable$slambda($this_collectIsHoveredAsState$composable, $isHovered, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function Interaction() {
  }
  function InteractionSource() {
  }
  function collectIsPressedAsState$composable(_this__u8e3s4, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.startReplaceableGroup_rp6air_k$(-1873825817);
    sourceInformation($composer_0, 'C(collectIsPressedAsState$composable)84@3016L34,85@3076L504,85@3055L525:PressInteraction.kt#ywyzhk');
    if (isTraceInProgress()) {
      traceEventStart(-1873825817, $changed, -1, 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable (PressInteraction.kt:83)');
    }
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_1 = $composer_0;
    $composer_1.startReplaceableGroup_rp6air_k$(547886695);
    sourceInformation($composer_1, 'CC(remember$composable):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var tmp0_let = $composer_1.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp;
    if (false ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      var value = mutableStateOf(false);
      $composer_1.updateRememberedValue_l1colo_k$(value);
      tmp = value;
    } else {
      tmp = tmp0_let;
    }
    var tmp_0 = tmp;
    var tmp0 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    $composer_1.endReplaceableGroup_er37p7_k$();
    var isPressed = tmp0;
    // Inline function 'androidx.compose.runtime.remember$composable' call
    var $composer_2 = $composer_0;
    $composer_2.startReplaceableGroup_rp6air_k$(-1124426577);
    sourceInformation($composer_2, 'CC(remember$composable)P(1,2):Composables.kt#9igjgp');
    // Inline function 'androidx.compose.runtime.cache' call
    var tmp1_cache = !!($composer_2.changed_ga7h3f_k$(_this__u8e3s4) | $composer_2.changed_ga7h3f_k$(isPressed));
    // Inline function 'kotlin.let' call
    var tmp0_let_0 = $composer_2.rememberedValue_4dg93v_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
    var tmp_1;
    if (tmp1_cache ? true : tmp0_let_0 === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
      // Inline function 'androidx.compose.foundation.interaction.collectIsPressedAsState$composable.<anonymous>' call
      var value_0 = collectIsPressedAsState$composable$slambda_0(_this__u8e3s4, isPressed, null);
      $composer_2.updateRememberedValue_l1colo_k$(value_0);
      tmp_1 = value_0;
    } else {
      tmp_1 = tmp0_let_0;
    }
    var tmp_2 = tmp_1;
    var tmp0_0 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    $composer_2.endReplaceableGroup_er37p7_k$();
    LaunchedEffect$composable(_this__u8e3s4, tmp0_0, $composer_0, 14 & $changed);
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    $composer_0.endReplaceableGroup_er37p7_k$();
    return isPressed;
  }
  function get_$stableprop_7() {
    return 0;
  }
  function get_$stableprop_8() {
    return 0;
  }
  function get_$stableprop_9() {
    return 0;
  }
  function Press(pressPosition) {
    this.pressPosition_1 = pressPosition;
    this.$stable_1 = 0;
  }
  protoOf(Press).get_pressPosition_jdrfg7_k$ = function () {
    return this.pressPosition_1;
  };
  function Release(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  protoOf(Release).get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  function Cancel_0(press) {
    this.press_1 = press;
    this.$stable_1 = 0;
  }
  protoOf(Cancel_0).get_press_ix1cey_k$ = function () {
    return this.press_1;
  };
  function PressInteraction() {
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_1).emit_1fbrsb_k$ = function (value, $completion) {
    return this.function_1(value, $completion);
  };
  function collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation) {
    this.$pressInteractions_1 = $pressInteractions;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsPressedAsState$composable$slambda$slambda).invoke_ry6yte_k$ = function (interaction, $completion) {
    var tmp = this.create_xj5a0d_k$(interaction, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsPressedAsState$composable$slambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_ry6yte_k$((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsPressedAsState$composable$slambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_s9sevl_k$(1);
          var tmp0_subject = this.interaction_1;
          if (tmp0_subject instanceof Press) {
            this.$pressInteractions_1.add_1j60pz_k$(this.interaction_1);
          } else {
            if (tmp0_subject instanceof Release) {
              this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
            } else {
              if (tmp0_subject instanceof Cancel_0) {
                this.$pressInteractions_1.remove_8hbkc6_k$(this.interaction_1.press_1);
              }
            }
          }
          this.$isPressed_1.set_value_rnwamw_k$(!this.$pressInteractions_1.isEmpty_y1axqb_k$());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(collectIsPressedAsState$composable$slambda$slambda).create_xj5a0d_k$ = function (interaction, completion) {
    var i = new collectIsPressedAsState$composable$slambda$slambda(this.$pressInteractions_1, this.$isPressed_1, completion);
    i.interaction_1 = interaction;
    return i;
  };
  protoOf(collectIsPressedAsState$composable$slambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_xj5a0d_k$((!(value == null) ? isInterface(value, Interaction) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsPressedAsState$composable$slambda$slambda_0($pressInteractions, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda$slambda($pressInteractions, $isPressed, resultContinuation);
    var l = function (interaction, $completion) {
      return i.invoke_ry6yte_k$(interaction, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    this.$this_collectIsPressedAsState$composable_1 = $this_collectIsPressedAsState$composable;
    this.$isPressed_1 = $isPressed;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(collectIsPressedAsState$composable$slambda).invoke_d6gbsu_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_b6qu53_k$($this$LaunchedEffect, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(collectIsPressedAsState$composable$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(collectIsPressedAsState$composable$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            var tmp_0 = this;
            tmp_0.pressInteractions0__1 = ArrayList_init_$Create$();
            this.set_state_a96kl8_k$(1);
            var tmp_1 = this.$this_collectIsPressedAsState$composable_1.get_interactions_ql02qy_k$();
            var tmp_2 = collectIsPressedAsState$composable$slambda$slambda_0(this.pressInteractions0__1, this.$isPressed_1, null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0_1(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(collectIsPressedAsState$composable$slambda).create_b6qu53_k$ = function ($this$LaunchedEffect, completion) {
    var i = new collectIsPressedAsState$composable$slambda(this.$this_collectIsPressedAsState$composable_1, this.$isPressed_1, completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(collectIsPressedAsState$composable$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function collectIsPressedAsState$composable$slambda_0($this_collectIsPressedAsState$composable, $isPressed, resultContinuation) {
    var i = new collectIsPressedAsState$composable$slambda($this_collectIsPressedAsState$composable, $isPressed, resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d6gbsu_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_TargetDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return TargetDistance;
  }
  var TargetDistance;
  function get_BoundDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return BoundDistance;
  }
  var BoundDistance;
  function get_MinimumDistance() {
    _init_properties_LazyAnimateScroll_kt__eqop2w();
    return MinimumDistance;
  }
  var MinimumDistance;
  var properties_initialized_LazyAnimateScroll_kt_ru8vti;
  function _init_properties_LazyAnimateScroll_kt__eqop2w() {
    if (!properties_initialized_LazyAnimateScroll_kt_ru8vti) {
      properties_initialized_LazyAnimateScroll_kt_ru8vti = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      TargetDistance = _Dp___init__impl__ms3zkb(2500);
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundDistance = _Dp___init__impl__ms3zkb(1500);
      // Inline function 'androidx.compose.ui.unit.dp' call
      MinimumDistance = _Dp___init__impl__ms3zkb(50);
    }
  }
  function get_InterruptionSpec() {
    _init_properties_LazyLayoutAnimateItemModifierNode_kt__4bieql();
    return InterruptionSpec;
  }
  var InterruptionSpec;
  var properties_initialized_LazyLayoutAnimateItemModifierNode_kt_15yezl;
  function _init_properties_LazyLayoutAnimateItemModifierNode_kt__4bieql() {
    if (!properties_initialized_LazyLayoutAnimateItemModifierNode_kt_15yezl) {
      properties_initialized_LazyLayoutAnimateItemModifierNode_kt_15yezl = true;
      InterruptionSpec = spring(VOID, Spring_getInstance().get_StiffnessMediumLow_62ltjd_k$(), new IntOffset(get_VisibilityThreshold(Companion_getInstance_11())));
    }
  }
  function PageInfo() {
  }
  function get_ConsumeHorizontalFlingNestedScrollConnection() {
    _init_properties_Pager_kt__ocahin();
    return ConsumeHorizontalFlingNestedScrollConnection;
  }
  var ConsumeHorizontalFlingNestedScrollConnection;
  function get_ConsumeVerticalFlingNestedScrollConnection() {
    _init_properties_Pager_kt__ocahin();
    return ConsumeVerticalFlingNestedScrollConnection;
  }
  var ConsumeVerticalFlingNestedScrollConnection;
  function ConsumeAllFlingOnDirection(orientation) {
    this.orientation_1 = orientation;
  }
  protoOf(ConsumeAllFlingOnDirection).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(ConsumeAllFlingOnDirection).consumeOnOrientation_jz3z5t_k$ = function (_this__u8e3s4, orientation) {
    var tmp;
    if (orientation.equals(Orientation_Vertical_getInstance())) {
      tmp = Velocity__copy$default_impl_eql69u(_this__u8e3s4, 0.0);
    } else {
      tmp = Velocity__copy$default_impl_eql69u(_this__u8e3s4, VOID, 0.0);
    }
    return tmp;
  };
  protoOf(ConsumeAllFlingOnDirection).consumeOnOrientation_x0gk5b_k$ = function (_this__u8e3s4, orientation) {
    var tmp;
    if (orientation.equals(Orientation_Vertical_getInstance())) {
      tmp = Offset__copy$default_impl_bmwjg8(_this__u8e3s4, 0.0);
    } else {
      tmp = Offset__copy$default_impl_bmwjg8(_this__u8e3s4, VOID, 0.0);
    }
    return tmp;
  };
  protoOf(ConsumeAllFlingOnDirection).onPostScroll_h2864l_k$ = function (consumed, available, source) {
    return source === Companion_getInstance_12().get_Fling_te9v25_k$() ? this.consumeOnOrientation_x0gk5b_k$(available, this.orientation_1) : Companion_getInstance_6().get_Zero_sctq3f_k$();
  };
  protoOf(ConsumeAllFlingOnDirection).onPostFling_9ubv_k$ = function (consumed, available, $completion) {
    return new Velocity(this.consumeOnOrientation_jz3z5t_k$(available, this.orientation_1));
  };
  var properties_initialized_Pager_kt_z0jphv;
  function _init_properties_Pager_kt__ocahin() {
    if (!properties_initialized_Pager_kt_z0jphv) {
      properties_initialized_Pager_kt_z0jphv = true;
      ConsumeHorizontalFlingNestedScrollConnection = new ConsumeAllFlingOnDirection(Orientation_Horizontal_getInstance());
      ConsumeVerticalFlingNestedScrollConnection = new ConsumeAllFlingOnDirection(Orientation_Vertical_getInstance());
    }
  }
  function PagerLayoutInfo() {
  }
  function get_DefaultPositionThreshold() {
    _init_properties_PagerState_kt__9pfij6();
    return DefaultPositionThreshold;
  }
  var DefaultPositionThreshold;
  function get_EmptyLayoutInfo() {
    _init_properties_PagerState_kt__9pfij6();
    return EmptyLayoutInfo;
  }
  var EmptyLayoutInfo;
  function get_UnitDensity() {
    _init_properties_PagerState_kt__9pfij6();
    return UnitDensity;
  }
  var UnitDensity;
  function get_SnapAlignmentStartToStart() {
    _init_properties_PagerState_kt__9pfij6();
    return SnapAlignmentStartToStart;
  }
  var SnapAlignmentStartToStart;
  function sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0).position_pgh2la_k$ = function (_this__u8e3s4, layoutSize, itemSize, itemIndex) {
    return this.function_1(_this__u8e3s4, layoutSize, itemSize, itemIndex);
  };
  function EmptyLayoutInfo$1() {
    this.visiblePagesInfo_1 = emptyList();
    this.closestPageToSnapPosition_1 = null;
    this.pagesCount_1 = 0;
    this.pageSize_1 = 0;
    this.pageSpacing_1 = 0;
    this.beforeContentPadding_1 = 0;
    this.afterContentPadding_1 = 0;
    this.viewportSize_1 = Companion_getInstance_13().get_Zero_4ip44w_k$();
    this.orientation_1 = Orientation_Horizontal_getInstance();
    this.viewportStartOffset_1 = 0;
    this.viewportEndOffset_1 = 0;
    this.reverseLayout_1 = false;
  }
  protoOf(EmptyLayoutInfo$1).get_visiblePagesInfo_jm4wll_k$ = function () {
    return this.visiblePagesInfo_1;
  };
  protoOf(EmptyLayoutInfo$1).get_closestPageToSnapPosition_pj2nu5_k$ = function () {
    return this.closestPageToSnapPosition_1;
  };
  protoOf(EmptyLayoutInfo$1).get_pagesCount_fij8l0_k$ = function () {
    return this.pagesCount_1;
  };
  protoOf(EmptyLayoutInfo$1).get_pageSize_hl979j_k$ = function () {
    return this.pageSize_1;
  };
  protoOf(EmptyLayoutInfo$1).get_pageSpacing_wcvkuj_k$ = function () {
    return this.pageSpacing_1;
  };
  protoOf(EmptyLayoutInfo$1).get_beforeContentPadding_2dperk_k$ = function () {
    return this.beforeContentPadding_1;
  };
  protoOf(EmptyLayoutInfo$1).get_afterContentPadding_49ooob_k$ = function () {
    return this.afterContentPadding_1;
  };
  protoOf(EmptyLayoutInfo$1).get_viewportSize_38c6y9_k$ = function () {
    return this.viewportSize_1;
  };
  protoOf(EmptyLayoutInfo$1).get_orientation_9wu93t_k$ = function () {
    return this.orientation_1;
  };
  protoOf(EmptyLayoutInfo$1).get_viewportStartOffset_v4b1ay_k$ = function () {
    return this.viewportStartOffset_1;
  };
  protoOf(EmptyLayoutInfo$1).get_viewportEndOffset_gapdi7_k$ = function () {
    return this.viewportEndOffset_1;
  };
  protoOf(EmptyLayoutInfo$1).get_reverseLayout_nclvnn_k$ = function () {
    return this.reverseLayout_1;
  };
  function UnitDensity$1() {
    this.density_1 = 1.0;
    this.fontScale_1 = 1.0;
  }
  protoOf(UnitDensity$1).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(UnitDensity$1).get_fontScale_h56n3i_k$ = function () {
    return this.fontScale_1;
  };
  function SnapAlignmentStartToStart$lambda($this$SnapPositionInLayout, _anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd, _anonymous_parameter_2__qggqfi) {
    _init_properties_PagerState_kt__9pfij6();
    return 0;
  }
  var properties_initialized_PagerState_kt_v93qz4;
  function _init_properties_PagerState_kt__9pfij6() {
    if (!properties_initialized_PagerState_kt_v93qz4) {
      properties_initialized_PagerState_kt_v93qz4 = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      DefaultPositionThreshold = _Dp___init__impl__ms3zkb(56);
      EmptyLayoutInfo = new EmptyLayoutInfo$1();
      UnitDensity = new UnitDensity$1();
      var tmp = SnapAlignmentStartToStart$lambda;
      SnapAlignmentStartToStart = new sam$androidx_compose_foundation_gestures_snapping_SnapPositionInLayout$0_0(tmp);
    }
  }
  function get_ModifierLocalBringIntoViewParent() {
    _init_properties_BringIntoView_kt__yi7ifv();
    return ModifierLocalBringIntoViewParent;
  }
  var ModifierLocalBringIntoViewParent;
  function BringIntoViewParent() {
  }
  function ModifierLocalBringIntoViewParent$lambda() {
    _init_properties_BringIntoView_kt__yi7ifv();
    return null;
  }
  var properties_initialized_BringIntoView_kt_uq6g7t;
  function _init_properties_BringIntoView_kt__yi7ifv() {
    if (!properties_initialized_BringIntoView_kt_uq6g7t) {
      properties_initialized_BringIntoView_kt_uq6g7t = true;
      ModifierLocalBringIntoViewParent = modifierLocalOf(ModifierLocalBringIntoViewParent$lambda);
    }
  }
  function get_$stableprop_10() {
    return 0;
  }
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.topStart_1 = topStart;
    this.topEnd_1 = topEnd;
    this.bottomEnd_1 = bottomEnd;
    this.bottomStart_1 = bottomStart;
    this.$stable_1 = 0;
  }
  protoOf(CornerBasedShape).get_topStart_n2fniu_k$ = function () {
    return this.topStart_1;
  };
  protoOf(CornerBasedShape).get_topEnd_k1yfkf_k$ = function () {
    return this.topEnd_1;
  };
  protoOf(CornerBasedShape).get_bottomEnd_m64yrd_k$ = function () {
    return this.bottomEnd_1;
  };
  protoOf(CornerBasedShape).get_bottomStart_3n1j0u_k$ = function () {
    return this.bottomStart_1;
  };
  protoOf(CornerBasedShape).createOutline_p92zi6_k$ = function (size, layoutDirection, density) {
    var topStart = this.topStart_1.toPx_m7y0r2_k$(size, density);
    var topEnd = this.topEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomEnd = this.bottomEnd_1.toPx_m7y0r2_k$(size, density);
    var bottomStart = this.bottomStart_1.toPx_m7y0r2_k$(size, density);
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
    return this.createOutline_awgnns_k$(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  protoOf(CornerBasedShape).copy$default_rthtx0_k$ = function (topStart, topEnd, bottomEnd, bottomStart, $super) {
    topStart = topStart === VOID ? this.topStart_1 : topStart;
    topEnd = topEnd === VOID ? this.topEnd_1 : topEnd;
    bottomEnd = bottomEnd === VOID ? this.bottomEnd_1 : bottomEnd;
    bottomStart = bottomStart === VOID ? this.bottomStart_1 : bottomStart;
    return $super === VOID ? this.copy_4mzu9h_k$(topStart, topEnd, bottomEnd, bottomStart) : $super.copy_4mzu9h_k$.call(this, topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(CornerBasedShape).copy_ymfmd5_k$ = function (all) {
    return this.copy_4mzu9h_k$(all, all, all, all);
  };
  function get_ZeroCornerSize() {
    _init_properties_CornerSize_kt__adzyne();
    return ZeroCornerSize;
  }
  var ZeroCornerSize;
  function CornerSize() {
  }
  function CornerSize_0(percent) {
    _init_properties_CornerSize_kt__adzyne();
    return new PercentCornerSize(percent);
  }
  function _get_percent__ssgsk4($this) {
    return $this.percent_1;
  }
  function component1_0($this) {
    return $this.percent_1;
  }
  function PercentCornerSize(percent) {
    this.percent_1 = percent;
    if (this.percent_1 < 0 ? true : this.percent_1 > 100) {
      throw IllegalArgumentException_init_$Create$('The percent should be in the range of [0, 100]');
    }
  }
  protoOf(PercentCornerSize).toPx_m7y0r2_k$ = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.percent_1 / 100.0);
  };
  protoOf(PercentCornerSize).toString = function () {
    return 'CornerSize(size = ' + this.percent_1 + '%)';
  };
  protoOf(PercentCornerSize).get_valueOverride_4rn9vw_k$ = function () {
    return '' + this.percent_1 + '%';
  };
  protoOf(PercentCornerSize).copy_i912ft_k$ = function (percent) {
    return new PercentCornerSize(percent);
  };
  protoOf(PercentCornerSize).copy$default_7wgr89_k$ = function (percent, $super) {
    percent = percent === VOID ? this.percent_1 : percent;
    return $super === VOID ? this.copy_i912ft_k$(percent) : $super.copy_i912ft_k$.call(this, percent);
  };
  protoOf(PercentCornerSize).hashCode = function () {
    return getNumberHashCode(this.percent_1);
  };
  protoOf(PercentCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof PercentCornerSize ? other : THROW_CCE();
    if (!equals(this.percent_1, tmp0_other_with_cast.percent_1))
      return false;
    return true;
  };
  function CornerSize_1(size) {
    _init_properties_CornerSize_kt__adzyne();
    return new DpCornerSize(size);
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function component1_1($this) {
    return $this.size_1;
  }
  function DpCornerSize(size) {
    this.size_1 = size;
  }
  protoOf(DpCornerSize).toPx_m7y0r2_k$ = function (shapeSize, density) {
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.shape.DpCornerSize.toPx.<anonymous>' call
    return density.toPx_u0ojv5_k$(this.size_1);
  };
  protoOf(DpCornerSize).toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.size_1) + '.dp)';
  };
  protoOf(DpCornerSize).get_valueOverride_meim4x_k$ = function () {
    return this.size_1;
  };
  protoOf(DpCornerSize).get_valueOverride_4rn9vw_k$ = function () {
    return new Dp(this.get_valueOverride_meim4x_k$());
  };
  protoOf(DpCornerSize).copy_ptxaur_k$ = function (size) {
    return new DpCornerSize(size);
  };
  protoOf(DpCornerSize).copy$default_6x1xei_k$ = function (size, $super) {
    size = size === VOID ? this.size_1 : size;
    return $super === VOID ? this.copy_ptxaur_k$(size) : $super.copy_ptxaur_k$.call(this, new Dp(size));
  };
  protoOf(DpCornerSize).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.size_1);
  };
  protoOf(DpCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    var tmp0_other_with_cast = other instanceof DpCornerSize ? other : THROW_CCE();
    if (!equals(this.size_1, tmp0_other_with_cast.size_1))
      return false;
    return true;
  };
  function ZeroCornerSize$1() {
  }
  protoOf(ZeroCornerSize$1).toPx_m7y0r2_k$ = function (shapeSize, density) {
    return 0.0;
  };
  protoOf(ZeroCornerSize$1).toString = function () {
    return 'ZeroCornerSize';
  };
  protoOf(ZeroCornerSize$1).get_valueOverride_4rn9vw_k$ = function () {
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
  function get_$stableprop_11() {
    return 0;
  }
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
    this.$stable_2 = 0;
  }
  protoOf(RoundedCornerShape).createOutline_awgnns_k$ = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect_0(size));
    } else {
      tmp = new Rounded(RoundRect_0(toRect_0(size), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart), CornerRadius(layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd)));
    }
    return tmp;
  };
  protoOf(RoundedCornerShape).copy_4mzu9h_k$ = function (topStart, topEnd, bottomEnd, bottomStart) {
    return new RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(RoundedCornerShape).toString = function () {
    return 'RoundedCornerShape(topStart = ' + this.get_topStart_n2fniu_k$() + ', topEnd = ' + this.get_topEnd_k1yfkf_k$() + ', bottomEnd = ' + ('' + this.get_bottomEnd_m64yrd_k$() + ', bottomStart = ' + this.get_bottomStart_3n1j0u_k$() + ')');
  };
  protoOf(RoundedCornerShape).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.get_topStart_n2fniu_k$(), other.get_topStart_n2fniu_k$()))
      return false;
    if (!equals(this.get_topEnd_k1yfkf_k$(), other.get_topEnd_k1yfkf_k$()))
      return false;
    if (!equals(this.get_bottomEnd_m64yrd_k$(), other.get_bottomEnd_m64yrd_k$()))
      return false;
    if (!equals(this.get_bottomStart_3n1j0u_k$(), other.get_bottomStart_3n1j0u_k$()))
      return false;
    return true;
  };
  protoOf(RoundedCornerShape).hashCode = function () {
    var result = hashCode(this.get_topStart_n2fniu_k$());
    result = imul(31, result) + hashCode(this.get_topEnd_k1yfkf_k$()) | 0;
    result = imul(31, result) + hashCode(this.get_bottomEnd_m64yrd_k$()) | 0;
    result = imul(31, result) + hashCode(this.get_bottomStart_3n1j0u_k$()) | 0;
    return result;
  };
  function RoundedCornerShape_0(percent) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_0(percent));
  }
  function RoundedCornerShape_1(corner) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_2(size) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_1(CornerSize_1(size));
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
    return new RoundedCornerShape(CornerSize_1(topStart), CornerSize_1(topEnd), CornerSize_1(bottomEnd), CornerSize_1(bottomStart));
  }
  var properties_initialized_RoundedCornerShape_kt_5mose9;
  function _init_properties_RoundedCornerShape_kt__vzposf() {
    if (!properties_initialized_RoundedCornerShape_kt_5mose9) {
      properties_initialized_RoundedCornerShape_kt_5mose9 = true;
      CircleShape = RoundedCornerShape_0(50);
    }
  }
  function get_EmptyInlineContent() {
    _init_properties_AnnotatedStringResolveInlineContent_kt__h20qbv();
    return EmptyInlineContent;
  }
  var EmptyInlineContent;
  var properties_initialized_AnnotatedStringResolveInlineContent_kt_ljtk0d;
  function _init_properties_AnnotatedStringResolveInlineContent_kt__h20qbv() {
    if (!properties_initialized_AnnotatedStringResolveInlineContent_kt_ljtk0d) {
      properties_initialized_AnnotatedStringResolveInlineContent_kt_ljtk0d = true;
      EmptyInlineContent = new Pair(emptyList(), emptyList());
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
    $composer_0 = $composer_0.startRestartGroup_147kpb_k$(136909683);
    sourceInformation($composer_0, 'C(BasicText$composable)P(8,3,7,4,5:c#ui.text.style.TextOverflow,6,1,2)95@4657L7,143@6403L41:BasicText.kt#423gt5');
    var $dirty = $changed;
    if (!(($default & 1) === 0))
      $dirty = $dirty | 6;
    else if (($changed & 14) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 112) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 896) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 7168) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(onTextLayout_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 57344) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.value_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 458752) === 0)
      $dirty = $dirty | ($composer_0.changed_i0nym2_k$(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 3670016) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(maxLines_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 29360128) === 0)
      $dirty = $dirty | ($composer_0.changed_s0r703_k$(minLines_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 234881024) === 0)
      $dirty = $dirty | ($composer_0.changed_ga7h3f_k$(color_0._v) ? 67108864 : 33554432);
    if (!(($dirty & 191739611) === 38347922) ? true : !$composer_0.get_skipping_3owdve_k$()) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_getInstance_7();
      }
      if (!(($default & 4) === 0)) {
        style_0._v = Companion_getInstance_14().get_Default_goqax4_k$();
      }
      if (!(($default & 8) === 0)) {
        onTextLayout_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        overflow_0._v = new TextOverflow(Companion_getInstance_15().get_Clip_a6y3d7_k$());
      }
      if (!(($default & 32) === 0)) {
        softWrap_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        maxLines_0._v = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
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
      var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
      sourceInformationMarkerEnd($composer_1);
      var selectionRegistrar = tmp0;
      $composer_0.startReplaceableGroup_rp6air_k$(1388300698);
      sourceInformation($composer_0, '97@4793L7,98@4844L98,101@4951L234');
      var tmp;
      if (!(selectionRegistrar == null)) {
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp2_$get_current$$composable_g4n2vl = get_LocalTextSelectionColors();
        var $composer_2 = $composer_0;
        sourceInformationMarkerStart($composer_2, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_0 = $composer_2.consume_11nid3_k$(tmp2_$get_current$$composable_g4n2vl);
        sourceInformationMarkerEnd($composer_2);
        var backgroundSelectionColor = tmp0_0.get_backgroundColor_5dhxap_k$();
        var selectableId = rememberSaveable$composable([selectionRegistrar], null, null, BasicText$composable$lambda(selectionRegistrar), $composer_0, 0, 6);
        // Inline function 'androidx.compose.runtime.remember$composable' call
        var $composer_3 = $composer_0;
        $composer_3.startReplaceableGroup_rp6air_k$(-1058148781);
        sourceInformation($composer_3, 'CC(remember$composable)P(1,2,3):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var tmp1_cache = !!(!!($composer_3.changed_ga7h3f_k$(selectableId) | $composer_3.changed_ga7h3f_k$(selectionRegistrar)) | $composer_3.changed_ga7h3f_k$(new Color(backgroundSelectionColor)));
        // Inline function 'kotlin.let' call
        var tmp0_let = $composer_3.rememberedValue_4dg93v_k$();
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var tmp_0;
        if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
          // Inline function 'androidx.compose.foundation.text.BasicText$composable.<anonymous>' call
          var value = new SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor);
          $composer_3.updateRememberedValue_l1colo_k$(value);
          tmp_0 = value;
        } else {
          tmp_0 = tmp0_let;
        }
        var tmp_1 = tmp_0;
        var tmp0_1 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
        $composer_3.endReplaceableGroup_er37p7_k$();
        tmp = tmp0_1;
      } else {
        tmp = null;
      }
      var tmp0_group = tmp;
      $composer_0.endReplaceableGroup_er37p7_k$();
      var selectionController = tmp0_group;
      var tmp_2;
      if (!(selectionController == null) ? true : !(onTextLayout_0._v == null)) {
        $composer_0.startReplaceableGroup_rp6air_k$(1388301302);
        sourceInformation($composer_0, '123@5765L7');
        var tmp_3 = graphicsLayer(modifier_0._v);
        var tmp_4 = AnnotatedString_init_$Create$(text);
        var tmp_5 = style_0._v;
        var tmp_6 = onTextLayout_0._v;
        var tmp_7 = overflow_0._v.value_1;
        var tmp_8 = softWrap_0._v;
        var tmp_9 = maxLines_0._v;
        var tmp_10 = minLines_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp5_$get_current$$composable_el8hro = get_LocalFontFamilyResolver();
        var $composer_4 = $composer_0;
        sourceInformationMarkerStart($composer_4, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_2 = $composer_4.consume_11nid3_k$(tmp5_$get_current$$composable_el8hro);
        sourceInformationMarkerEnd($composer_4);
        var tmp1_group = textModifier(tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp0_2, null, null, selectionController, color_0._v);
        $composer_0.endReplaceableGroup_er37p7_k$();
        tmp_2 = tmp1_group;
      } else {
        $composer_0.startReplaceableGroup_rp6air_k$(1388301972);
        sourceInformation($composer_0, '135@6216L7');
        var tmp_11 = graphicsLayer(modifier_0._v);
        var tmp_12 = style_0._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.$get-current$$composable' call
        var tmp7_$get_current$$composable_dkarp2 = get_LocalFontFamilyResolver();
        var $composer_5 = $composer_0;
        sourceInformationMarkerStart($composer_5, 858843746, 'CC($get-current$$composable):CompositionLocal.kt#9igjgp');
        var tmp0_3 = $composer_5.consume_11nid3_k$(tmp7_$get_current$$composable_dkarp2);
        sourceInformationMarkerEnd($composer_5);
        var tmp2_group = tmp_11.then_5qw5wu_k$(new TextStringSimpleElement(text, tmp_12, tmp0_3, overflow_0._v.value_1, softWrap_0._v, maxLines_0._v, minLines_0._v, color_0._v));
        $composer_0.endReplaceableGroup_er37p7_k$();
        tmp_2 = tmp2_group;
      }
      var finalModifier = tmp_2;
      // Inline function 'androidx.compose.ui.layout.Layout$composable' call
      var tmp9_Layout$composable = EmptyMeasurePolicy_getInstance();
      var modifier_1 = finalModifier;
      var $composer_6 = $composer_0;
      $composer_6.startReplaceableGroup_rp6air_k$(310513410);
      sourceInformation($composer_6, 'CC(Layout$composable)P(1)123@4760L23,126@4911L385:Layout.kt#80mrfh');
      if (!(0 === 0))
        modifier_1 = Companion_getInstance_7();
      var compositeKeyHash = $get_currentCompositeKeyHash$$composable_u3vbzj($composer_6, 0);
      var materialized = materialize($composer_6, modifier_1);
      var localMap = $composer_6.get_currentCompositionLocalMap_fmcf79_k$();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode$composable' call
      var tmp0_ReusableComposeNode$composable = Companion_getInstance_16().get_Constructor_f7ieep_k$();
      var $composer_7 = $composer_6;
      $composer_7.startReplaceableGroup_rp6air_k$(-1096955905);
      sourceInformation($composer_7, 'CC(ReusableComposeNode$composable):Composables.kt#9igjgp');
      var tmp_13 = $composer_7.get_applier_bupu8u_k$();
      if (!isInterface(tmp_13, Applier)) {
        invalidApplier();
      }
      $composer_7.startReusableNode_jk07k2_k$();
      if ($composer_7.get_inserting_25mlsw_k$()) {
        var tmp_14 = $composer_7;
        tmp_14.createNode_p4ouwd_k$(BasicText$composable$lambda_0(tmp0_ReusableComposeNode$composable));
      } else {
        $composer_7.useNode_inlzo8_k$();
      }
      // Inline function 'androidx.compose.ui.layout.Layout$composable.<anonymous>' call
      var tmp2_anonymous = _Updater___init__impl__rbfxm8($composer_7);
      Updater__set_impl_v7kwss(tmp2_anonymous, tmp9_Layout$composable, Companion_getInstance_16().get_SetMeasurePolicy_on6ujt_k$());
      Updater__set_impl_v7kwss(tmp2_anonymous, localMap, Companion_getInstance_16().get_SetResolvedCompositionLocals_rc2u9t_k$());
      Updater__set_impl_v7kwss(tmp2_anonymous, materialized, Companion_getInstance_16().get_SetModifier_6tz580_k$());
      // Inline function 'androidx.compose.runtime.Updater.set' call
      var tmp0_set = Companion_getInstance_16().get_SetCompositeKeyHash_n8lgg1_k$();
      // Inline function 'kotlin.with' call
      var tmp0_with = _Updater___get_composer__impl__9ty7av(tmp2_anonymous);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_15;
      if (tmp0_with.get_inserting_25mlsw_k$() ? true : !equals(tmp0_with.rememberedValue_4dg93v_k$(), compositeKeyHash)) {
        tmp0_with.updateRememberedValue_l1colo_k$(compositeKeyHash);
        _Updater___get_composer__impl__9ty7av(tmp2_anonymous).apply_ar56ei_k$(compositeKeyHash, tmp0_set);
        tmp_15 = Unit_getInstance();
      }
      $composer_7.endNode_3mkr10_k$();
      $composer_7.endReplaceableGroup_er37p7_k$();
      $composer_6.endReplaceableGroup_er37p7_k$();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.skipToGroupEnd_lhns3f_k$();
    }
    var tmp3_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp3_safe_receiver === null)
      null;
    else {
      tmp3_safe_receiver.updateScope_xhrf9y_k$(BasicText$composable$lambda_1(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, minLines_0, color_0, $changed, $default));
    }
  }
  function textModifier(_this__u8e3s4, text, style, onTextLayout, overflow, softWrap, maxLines, minLines, fontFamilyResolver, placeholders, onPlaceholderLayout, selectionController, color) {
    if (selectionController == null) {
      var staticTextModifier = new TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, null, color);
      return _this__u8e3s4.then_5qw5wu_k$(Companion_getInstance_7()).then_5qw5wu_k$(staticTextModifier);
    } else {
      var selectableTextModifier = new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
      return _this__u8e3s4.then_5qw5wu_k$(selectionController.get_modifier_t1pq5c_k$()).then_5qw5wu_k$(selectableTextModifier);
    }
  }
  function _get_placementBlock__4evcdf($this) {
    return $this.placementBlock_1;
  }
  function EmptyMeasurePolicy$placementBlock$lambda($this$null) {
    return Unit_getInstance();
  }
  function EmptyMeasurePolicy() {
    EmptyMeasurePolicy_instance = this;
    var tmp = this;
    tmp.placementBlock_1 = EmptyMeasurePolicy$placementBlock$lambda;
  }
  protoOf(EmptyMeasurePolicy).measure_i7pm3b_k$ = function (_this__u8e3s4, measurables, constraints) {
    return _this__u8e3s4.layout$default_8ylrvs_k$(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints), VOID, this.placementBlock_1);
  };
  var EmptyMeasurePolicy_instance;
  function EmptyMeasurePolicy_getInstance() {
    if (EmptyMeasurePolicy_instance == null)
      new EmptyMeasurePolicy();
    return EmptyMeasurePolicy_instance;
  }
  function BasicText$composable$lambda($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.nextSelectableId_50rfx8_k$();
    };
  }
  function BasicText$composable$lambda_0($tmp0_ReusableComposeNode$composable) {
    return function () {
      return $tmp0_ReusableComposeNode$composable();
    };
  }
  function BasicText$composable$lambda_1($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $minLines, $color, $$changed, $$default) {
    return function ($composer, $force) {
      BasicText$composable($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.value_1, $softWrap._v, $maxLines._v, $minLines._v, $color._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_getInstance();
    };
  }
  var Handle_Cursor_instance;
  var Handle_SelectionStart_instance;
  var Handle_SelectionEnd_instance;
  function values_0() {
    return [Handle_Cursor_getInstance(), Handle_SelectionStart_getInstance(), Handle_SelectionEnd_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'Cursor':
        return Handle_Cursor_getInstance();
      case 'SelectionStart':
        return Handle_SelectionStart_getInstance();
      case 'SelectionEnd':
        return Handle_SelectionEnd_getInstance();
      default:
        Handle_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Handle_entriesInitialized;
  function Handle_initEntries() {
    if (Handle_entriesInitialized)
      return Unit_getInstance();
    Handle_entriesInitialized = true;
    Handle_Cursor_instance = new Handle('Cursor', 0);
    Handle_SelectionStart_instance = new Handle('SelectionStart', 1);
    Handle_SelectionEnd_instance = new Handle('SelectionEnd', 2);
  }
  function Handle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Handle_Cursor_getInstance() {
    Handle_initEntries();
    return Handle_Cursor_instance;
  }
  function Handle_SelectionStart_getInstance() {
    Handle_initEntries();
    return Handle_SelectionStart_instance;
  }
  function Handle_SelectionEnd_getInstance() {
    Handle_initEntries();
    return Handle_SelectionEnd_instance;
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
  var KeyCommand_LEFT_CHAR_instance;
  var KeyCommand_RIGHT_CHAR_instance;
  var KeyCommand_RIGHT_WORD_instance;
  var KeyCommand_LEFT_WORD_instance;
  var KeyCommand_NEXT_PARAGRAPH_instance;
  var KeyCommand_PREV_PARAGRAPH_instance;
  var KeyCommand_LINE_START_instance;
  var KeyCommand_LINE_END_instance;
  var KeyCommand_LINE_LEFT_instance;
  var KeyCommand_LINE_RIGHT_instance;
  var KeyCommand_UP_instance;
  var KeyCommand_DOWN_instance;
  var KeyCommand_PAGE_UP_instance;
  var KeyCommand_PAGE_DOWN_instance;
  var KeyCommand_HOME_instance;
  var KeyCommand_END_instance;
  var KeyCommand_COPY_instance;
  var KeyCommand_PASTE_instance;
  var KeyCommand_CUT_instance;
  var KeyCommand_DELETE_PREV_CHAR_instance;
  var KeyCommand_DELETE_NEXT_CHAR_instance;
  var KeyCommand_DELETE_PREV_WORD_instance;
  var KeyCommand_DELETE_NEXT_WORD_instance;
  var KeyCommand_DELETE_FROM_LINE_START_instance;
  var KeyCommand_DELETE_TO_LINE_END_instance;
  var KeyCommand_SELECT_ALL_instance;
  var KeyCommand_SELECT_LEFT_CHAR_instance;
  var KeyCommand_SELECT_RIGHT_CHAR_instance;
  var KeyCommand_SELECT_UP_instance;
  var KeyCommand_SELECT_DOWN_instance;
  var KeyCommand_SELECT_PAGE_UP_instance;
  var KeyCommand_SELECT_PAGE_DOWN_instance;
  var KeyCommand_SELECT_HOME_instance;
  var KeyCommand_SELECT_END_instance;
  var KeyCommand_SELECT_LEFT_WORD_instance;
  var KeyCommand_SELECT_RIGHT_WORD_instance;
  var KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  var KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  var KeyCommand_SELECT_LINE_START_instance;
  var KeyCommand_SELECT_LINE_END_instance;
  var KeyCommand_SELECT_LINE_LEFT_instance;
  var KeyCommand_SELECT_LINE_RIGHT_instance;
  var KeyCommand_DESELECT_instance;
  var KeyCommand_NEW_LINE_instance;
  var KeyCommand_TAB_instance;
  var KeyCommand_UNDO_instance;
  var KeyCommand_REDO_instance;
  var KeyCommand_CHARACTER_PALETTE_instance;
  function values_1() {
    return [KeyCommand_LEFT_CHAR_getInstance(), KeyCommand_RIGHT_CHAR_getInstance(), KeyCommand_RIGHT_WORD_getInstance(), KeyCommand_LEFT_WORD_getInstance(), KeyCommand_NEXT_PARAGRAPH_getInstance(), KeyCommand_PREV_PARAGRAPH_getInstance(), KeyCommand_LINE_START_getInstance(), KeyCommand_LINE_END_getInstance(), KeyCommand_LINE_LEFT_getInstance(), KeyCommand_LINE_RIGHT_getInstance(), KeyCommand_UP_getInstance(), KeyCommand_DOWN_getInstance(), KeyCommand_PAGE_UP_getInstance(), KeyCommand_PAGE_DOWN_getInstance(), KeyCommand_HOME_getInstance(), KeyCommand_END_getInstance(), KeyCommand_COPY_getInstance(), KeyCommand_PASTE_getInstance(), KeyCommand_CUT_getInstance(), KeyCommand_DELETE_PREV_CHAR_getInstance(), KeyCommand_DELETE_NEXT_CHAR_getInstance(), KeyCommand_DELETE_PREV_WORD_getInstance(), KeyCommand_DELETE_NEXT_WORD_getInstance(), KeyCommand_DELETE_FROM_LINE_START_getInstance(), KeyCommand_DELETE_TO_LINE_END_getInstance(), KeyCommand_SELECT_ALL_getInstance(), KeyCommand_SELECT_LEFT_CHAR_getInstance(), KeyCommand_SELECT_RIGHT_CHAR_getInstance(), KeyCommand_SELECT_UP_getInstance(), KeyCommand_SELECT_DOWN_getInstance(), KeyCommand_SELECT_PAGE_UP_getInstance(), KeyCommand_SELECT_PAGE_DOWN_getInstance(), KeyCommand_SELECT_HOME_getInstance(), KeyCommand_SELECT_END_getInstance(), KeyCommand_SELECT_LEFT_WORD_getInstance(), KeyCommand_SELECT_RIGHT_WORD_getInstance(), KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance(), KeyCommand_SELECT_PREV_PARAGRAPH_getInstance(), KeyCommand_SELECT_LINE_START_getInstance(), KeyCommand_SELECT_LINE_END_getInstance(), KeyCommand_SELECT_LINE_LEFT_getInstance(), KeyCommand_SELECT_LINE_RIGHT_getInstance(), KeyCommand_DESELECT_getInstance(), KeyCommand_NEW_LINE_getInstance(), KeyCommand_TAB_getInstance(), KeyCommand_UNDO_getInstance(), KeyCommand_REDO_getInstance(), KeyCommand_CHARACTER_PALETTE_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'LEFT_CHAR':
        return KeyCommand_LEFT_CHAR_getInstance();
      case 'RIGHT_CHAR':
        return KeyCommand_RIGHT_CHAR_getInstance();
      case 'RIGHT_WORD':
        return KeyCommand_RIGHT_WORD_getInstance();
      case 'LEFT_WORD':
        return KeyCommand_LEFT_WORD_getInstance();
      case 'NEXT_PARAGRAPH':
        return KeyCommand_NEXT_PARAGRAPH_getInstance();
      case 'PREV_PARAGRAPH':
        return KeyCommand_PREV_PARAGRAPH_getInstance();
      case 'LINE_START':
        return KeyCommand_LINE_START_getInstance();
      case 'LINE_END':
        return KeyCommand_LINE_END_getInstance();
      case 'LINE_LEFT':
        return KeyCommand_LINE_LEFT_getInstance();
      case 'LINE_RIGHT':
        return KeyCommand_LINE_RIGHT_getInstance();
      case 'UP':
        return KeyCommand_UP_getInstance();
      case 'DOWN':
        return KeyCommand_DOWN_getInstance();
      case 'PAGE_UP':
        return KeyCommand_PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return KeyCommand_PAGE_DOWN_getInstance();
      case 'HOME':
        return KeyCommand_HOME_getInstance();
      case 'END':
        return KeyCommand_END_getInstance();
      case 'COPY':
        return KeyCommand_COPY_getInstance();
      case 'PASTE':
        return KeyCommand_PASTE_getInstance();
      case 'CUT':
        return KeyCommand_CUT_getInstance();
      case 'DELETE_PREV_CHAR':
        return KeyCommand_DELETE_PREV_CHAR_getInstance();
      case 'DELETE_NEXT_CHAR':
        return KeyCommand_DELETE_NEXT_CHAR_getInstance();
      case 'DELETE_PREV_WORD':
        return KeyCommand_DELETE_PREV_WORD_getInstance();
      case 'DELETE_NEXT_WORD':
        return KeyCommand_DELETE_NEXT_WORD_getInstance();
      case 'DELETE_FROM_LINE_START':
        return KeyCommand_DELETE_FROM_LINE_START_getInstance();
      case 'DELETE_TO_LINE_END':
        return KeyCommand_DELETE_TO_LINE_END_getInstance();
      case 'SELECT_ALL':
        return KeyCommand_SELECT_ALL_getInstance();
      case 'SELECT_LEFT_CHAR':
        return KeyCommand_SELECT_LEFT_CHAR_getInstance();
      case 'SELECT_RIGHT_CHAR':
        return KeyCommand_SELECT_RIGHT_CHAR_getInstance();
      case 'SELECT_UP':
        return KeyCommand_SELECT_UP_getInstance();
      case 'SELECT_DOWN':
        return KeyCommand_SELECT_DOWN_getInstance();
      case 'SELECT_PAGE_UP':
        return KeyCommand_SELECT_PAGE_UP_getInstance();
      case 'SELECT_PAGE_DOWN':
        return KeyCommand_SELECT_PAGE_DOWN_getInstance();
      case 'SELECT_HOME':
        return KeyCommand_SELECT_HOME_getInstance();
      case 'SELECT_END':
        return KeyCommand_SELECT_END_getInstance();
      case 'SELECT_LEFT_WORD':
        return KeyCommand_SELECT_LEFT_WORD_getInstance();
      case 'SELECT_RIGHT_WORD':
        return KeyCommand_SELECT_RIGHT_WORD_getInstance();
      case 'SELECT_NEXT_PARAGRAPH':
        return KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance();
      case 'SELECT_PREV_PARAGRAPH':
        return KeyCommand_SELECT_PREV_PARAGRAPH_getInstance();
      case 'SELECT_LINE_START':
        return KeyCommand_SELECT_LINE_START_getInstance();
      case 'SELECT_LINE_END':
        return KeyCommand_SELECT_LINE_END_getInstance();
      case 'SELECT_LINE_LEFT':
        return KeyCommand_SELECT_LINE_LEFT_getInstance();
      case 'SELECT_LINE_RIGHT':
        return KeyCommand_SELECT_LINE_RIGHT_getInstance();
      case 'DESELECT':
        return KeyCommand_DESELECT_getInstance();
      case 'NEW_LINE':
        return KeyCommand_NEW_LINE_getInstance();
      case 'TAB':
        return KeyCommand_TAB_getInstance();
      case 'UNDO':
        return KeyCommand_UNDO_getInstance();
      case 'REDO':
        return KeyCommand_REDO_getInstance();
      case 'CHARACTER_PALETTE':
        return KeyCommand_CHARACTER_PALETTE_getInstance();
      default:
        KeyCommand_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KeyCommand_entriesInitialized;
  function KeyCommand_initEntries() {
    if (KeyCommand_entriesInitialized)
      return Unit_getInstance();
    KeyCommand_entriesInitialized = true;
    KeyCommand_LEFT_CHAR_instance = new KeyCommand('LEFT_CHAR', 0, false);
    KeyCommand_RIGHT_CHAR_instance = new KeyCommand('RIGHT_CHAR', 1, false);
    KeyCommand_RIGHT_WORD_instance = new KeyCommand('RIGHT_WORD', 2, false);
    KeyCommand_LEFT_WORD_instance = new KeyCommand('LEFT_WORD', 3, false);
    KeyCommand_NEXT_PARAGRAPH_instance = new KeyCommand('NEXT_PARAGRAPH', 4, false);
    KeyCommand_PREV_PARAGRAPH_instance = new KeyCommand('PREV_PARAGRAPH', 5, false);
    KeyCommand_LINE_START_instance = new KeyCommand('LINE_START', 6, false);
    KeyCommand_LINE_END_instance = new KeyCommand('LINE_END', 7, false);
    KeyCommand_LINE_LEFT_instance = new KeyCommand('LINE_LEFT', 8, false);
    KeyCommand_LINE_RIGHT_instance = new KeyCommand('LINE_RIGHT', 9, false);
    KeyCommand_UP_instance = new KeyCommand('UP', 10, false);
    KeyCommand_DOWN_instance = new KeyCommand('DOWN', 11, false);
    KeyCommand_PAGE_UP_instance = new KeyCommand('PAGE_UP', 12, false);
    KeyCommand_PAGE_DOWN_instance = new KeyCommand('PAGE_DOWN', 13, false);
    KeyCommand_HOME_instance = new KeyCommand('HOME', 14, false);
    KeyCommand_END_instance = new KeyCommand('END', 15, false);
    KeyCommand_COPY_instance = new KeyCommand('COPY', 16, false);
    KeyCommand_PASTE_instance = new KeyCommand('PASTE', 17, true);
    KeyCommand_CUT_instance = new KeyCommand('CUT', 18, true);
    KeyCommand_DELETE_PREV_CHAR_instance = new KeyCommand('DELETE_PREV_CHAR', 19, true);
    KeyCommand_DELETE_NEXT_CHAR_instance = new KeyCommand('DELETE_NEXT_CHAR', 20, true);
    KeyCommand_DELETE_PREV_WORD_instance = new KeyCommand('DELETE_PREV_WORD', 21, true);
    KeyCommand_DELETE_NEXT_WORD_instance = new KeyCommand('DELETE_NEXT_WORD', 22, true);
    KeyCommand_DELETE_FROM_LINE_START_instance = new KeyCommand('DELETE_FROM_LINE_START', 23, true);
    KeyCommand_DELETE_TO_LINE_END_instance = new KeyCommand('DELETE_TO_LINE_END', 24, true);
    KeyCommand_SELECT_ALL_instance = new KeyCommand('SELECT_ALL', 25, false);
    KeyCommand_SELECT_LEFT_CHAR_instance = new KeyCommand('SELECT_LEFT_CHAR', 26, false);
    KeyCommand_SELECT_RIGHT_CHAR_instance = new KeyCommand('SELECT_RIGHT_CHAR', 27, false);
    KeyCommand_SELECT_UP_instance = new KeyCommand('SELECT_UP', 28, false);
    KeyCommand_SELECT_DOWN_instance = new KeyCommand('SELECT_DOWN', 29, false);
    KeyCommand_SELECT_PAGE_UP_instance = new KeyCommand('SELECT_PAGE_UP', 30, false);
    KeyCommand_SELECT_PAGE_DOWN_instance = new KeyCommand('SELECT_PAGE_DOWN', 31, false);
    KeyCommand_SELECT_HOME_instance = new KeyCommand('SELECT_HOME', 32, false);
    KeyCommand_SELECT_END_instance = new KeyCommand('SELECT_END', 33, false);
    KeyCommand_SELECT_LEFT_WORD_instance = new KeyCommand('SELECT_LEFT_WORD', 34, false);
    KeyCommand_SELECT_RIGHT_WORD_instance = new KeyCommand('SELECT_RIGHT_WORD', 35, false);
    KeyCommand_SELECT_NEXT_PARAGRAPH_instance = new KeyCommand('SELECT_NEXT_PARAGRAPH', 36, false);
    KeyCommand_SELECT_PREV_PARAGRAPH_instance = new KeyCommand('SELECT_PREV_PARAGRAPH', 37, false);
    KeyCommand_SELECT_LINE_START_instance = new KeyCommand('SELECT_LINE_START', 38, false);
    KeyCommand_SELECT_LINE_END_instance = new KeyCommand('SELECT_LINE_END', 39, false);
    KeyCommand_SELECT_LINE_LEFT_instance = new KeyCommand('SELECT_LINE_LEFT', 40, false);
    KeyCommand_SELECT_LINE_RIGHT_instance = new KeyCommand('SELECT_LINE_RIGHT', 41, false);
    KeyCommand_DESELECT_instance = new KeyCommand('DESELECT', 42, false);
    KeyCommand_NEW_LINE_instance = new KeyCommand('NEW_LINE', 43, true);
    KeyCommand_TAB_instance = new KeyCommand('TAB', 44, true);
    KeyCommand_UNDO_instance = new KeyCommand('UNDO', 45, true);
    KeyCommand_REDO_instance = new KeyCommand('REDO', 46, true);
    KeyCommand_CHARACTER_PALETTE_instance = new KeyCommand('CHARACTER_PALETTE', 47, true);
  }
  function KeyCommand(name, ordinal, editsText) {
    Enum.call(this, name, ordinal);
    this.editsText_1 = editsText;
  }
  protoOf(KeyCommand).get_editsText_m211rn_k$ = function () {
    return this.editsText_1;
  };
  function KeyCommand_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_CHAR_instance;
  }
  function KeyCommand_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_CHAR_instance;
  }
  function KeyCommand_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_RIGHT_WORD_instance;
  }
  function KeyCommand_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LEFT_WORD_instance;
  }
  function KeyCommand_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_START_instance;
  }
  function KeyCommand_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_END_instance;
  }
  function KeyCommand_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_LEFT_instance;
  }
  function KeyCommand_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_LINE_RIGHT_instance;
  }
  function KeyCommand_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UP_instance;
  }
  function KeyCommand_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DOWN_instance;
  }
  function KeyCommand_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_UP_instance;
  }
  function KeyCommand_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PAGE_DOWN_instance;
  }
  function KeyCommand_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_HOME_instance;
  }
  function KeyCommand_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_END_instance;
  }
  function KeyCommand_COPY_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_COPY_instance;
  }
  function KeyCommand_PASTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_PASTE_instance;
  }
  function KeyCommand_CUT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CUT_instance;
  }
  function KeyCommand_DELETE_PREV_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_CHAR_instance;
  }
  function KeyCommand_DELETE_NEXT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_CHAR_instance;
  }
  function KeyCommand_DELETE_PREV_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_PREV_WORD_instance;
  }
  function KeyCommand_DELETE_NEXT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_NEXT_WORD_instance;
  }
  function KeyCommand_DELETE_FROM_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_FROM_LINE_START_instance;
  }
  function KeyCommand_DELETE_TO_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DELETE_TO_LINE_END_instance;
  }
  function KeyCommand_SELECT_ALL_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_ALL_instance;
  }
  function KeyCommand_SELECT_LEFT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_CHAR_instance;
  }
  function KeyCommand_SELECT_RIGHT_CHAR_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_CHAR_instance;
  }
  function KeyCommand_SELECT_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_UP_instance;
  }
  function KeyCommand_SELECT_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_DOWN_instance;
  }
  function KeyCommand_SELECT_PAGE_UP_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_UP_instance;
  }
  function KeyCommand_SELECT_PAGE_DOWN_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PAGE_DOWN_instance;
  }
  function KeyCommand_SELECT_HOME_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_HOME_instance;
  }
  function KeyCommand_SELECT_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_END_instance;
  }
  function KeyCommand_SELECT_LEFT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LEFT_WORD_instance;
  }
  function KeyCommand_SELECT_RIGHT_WORD_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_RIGHT_WORD_instance;
  }
  function KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_NEXT_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_PREV_PARAGRAPH_instance;
  }
  function KeyCommand_SELECT_LINE_START_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_START_instance;
  }
  function KeyCommand_SELECT_LINE_END_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_END_instance;
  }
  function KeyCommand_SELECT_LINE_LEFT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_LEFT_instance;
  }
  function KeyCommand_SELECT_LINE_RIGHT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_SELECT_LINE_RIGHT_instance;
  }
  function KeyCommand_DESELECT_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_DESELECT_instance;
  }
  function KeyCommand_NEW_LINE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_NEW_LINE_instance;
  }
  function KeyCommand_TAB_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_TAB_instance;
  }
  function KeyCommand_UNDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_UNDO_instance;
  }
  function KeyCommand_REDO_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_REDO_instance;
  }
  function KeyCommand_CHARACTER_PALETTE_getInstance() {
    KeyCommand_initEntries();
    return KeyCommand_CHARACTER_PALETTE_instance;
  }
  function get_defaultKeyMapping() {
    _init_properties_KeyMapping_kt__n34hqn();
    return defaultKeyMapping;
  }
  var defaultKeyMapping;
  function KeyMapping() {
  }
  function commonKeyMapping(shortcutModifier) {
    _init_properties_KeyMapping_kt__n34hqn();
    return new commonKeyMapping$1(shortcutModifier);
  }
  function defaultKeyMapping$2$1($common) {
    this.$common_1 = $common;
  }
  protoOf(defaultKeyMapping$2$1).map_qbm95i_k$ = function (event) {
    var tmp;
    if (get_isShiftPressed(event) ? get_isCtrlPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() : equals(tmp0_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      var tmp1_subject = get_key_0(event);
      tmp = equals(tmp1_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_LEFT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_PREV_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_NEXT_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_H_uhjlao_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Delete_mdp9fp_k$()) ? KeyCommand_DELETE_NEXT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_PREV_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Backslash_wlrcta_k$()) ? KeyCommand_DESELECT_getInstance() : null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_MoveHome_6w70dm_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveEnd_bx0ymm_k$()) ? KeyCommand_SELECT_LINE_END_getInstance() : null;
    } else if (get_isAltPressed(event)) {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_FROM_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Delete_mdp9fp_k$()) ? KeyCommand_DELETE_TO_LINE_END_getInstance() : null;
    } else {
      tmp = null;
    }
    var tmp4_elvis_lhs = tmp;
    return tmp4_elvis_lhs == null ? this.$common_1.map_qbm95i_k$(event) : tmp4_elvis_lhs;
  };
  function commonKeyMapping$1($shortcutModifier) {
    this.$shortcutModifier_1 = $shortcutModifier;
  }
  protoOf(commonKeyMapping$1).map_qbm95i_k$ = function (event) {
    var tmp;
    if (this.$shortcutModifier_1(new KeyEvent(event)) ? get_isShiftPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, MappedKeys_getInstance().get_Z_v39uji_k$()) ? KeyCommand_REDO_getInstance() : null;
    } else if (this.$shortcutModifier_1(new KeyEvent(event))) {
      var tmp1_subject = get_key_0(event);
      tmp = (equals(tmp1_subject, MappedKeys_getInstance().get_C_z9yylx_k$()) ? true : equals(tmp1_subject, MappedKeys_getInstance().get_Insert_y6atub_k$())) ? KeyCommand_COPY_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_V_ty3eam_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_X_kl84g_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_A_4rac6v_k$()) ? KeyCommand_SELECT_ALL_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Y_ftxjbz_k$()) ? KeyCommand_REDO_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_Z_v39uji_k$()) ? KeyCommand_UNDO_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      tmp = null;
    } else if (get_isShiftPressed(event)) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_SELECT_LEFT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_SELECT_RIGHT_CHAR_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_SELECT_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_SELECT_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_PageUp_d9v330_k$()) ? KeyCommand_SELECT_PAGE_UP_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_PageDown_hz00wl_k$()) ? KeyCommand_SELECT_PAGE_DOWN_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveHome_6w70dm_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_MoveEnd_bx0ymm_k$()) ? KeyCommand_SELECT_LINE_END_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_Insert_y6atub_k$()) ? KeyCommand_PASTE_getInstance() : null;
    } else {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_LEFT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_RIGHT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_PageUp_d9v330_k$()) ? KeyCommand_PAGE_UP_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_PageDown_hz00wl_k$()) ? KeyCommand_PAGE_DOWN_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_MoveHome_6w70dm_k$()) ? KeyCommand_LINE_START_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_MoveEnd_bx0ymm_k$()) ? KeyCommand_LINE_END_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Enter_72nuyo_k$()) ? KeyCommand_NEW_LINE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Delete_mdp9fp_k$()) ? KeyCommand_DELETE_NEXT_CHAR_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Paste_5hb4sl_k$()) ? KeyCommand_PASTE_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Cut_9e92qy_k$()) ? KeyCommand_CUT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Copy_i0eaup_k$()) ? KeyCommand_COPY_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Tab_x9q08z_k$()) ? KeyCommand_TAB_getInstance() : null;
    }
    return tmp;
  };
  function isCtrlPressed$factory() {
    return getPropertyCallableRef('isCtrlPressed', 1, KProperty1, function (receiver) {
      return get_isCtrlPressed(receiver.nativeKeyEvent_1);
    }, null);
  }
  var properties_initialized_KeyMapping_kt_iql13l;
  function _init_properties_KeyMapping_kt__n34hqn() {
    if (!properties_initialized_KeyMapping_kt_iql13l) {
      properties_initialized_KeyMapping_kt_iql13l = true;
      // Inline function 'kotlin.let' call
      var tmp0_let = commonKeyMapping(isCtrlPressed$factory());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.defaultKeyMapping.<anonymous>' call
      defaultKeyMapping = new defaultKeyMapping$2$1(tmp0_let);
    }
  }
  function TextDragObserver() {
  }
  function detectDragGesturesAfterLongPressWithObserver(_this__u8e3s4, observer, $completion) {
    var tmp = detectDragGesturesAfterLongPressWithObserver$lambda(observer);
    var tmp_0 = detectDragGesturesAfterLongPressWithObserver$lambda_0(observer);
    var tmp_1 = detectDragGesturesAfterLongPressWithObserver$lambda_1(observer);
    return detectDragGesturesAfterLongPress(_this__u8e3s4, tmp, tmp_0, tmp_1, detectDragGesturesAfterLongPressWithObserver$lambda_2(observer), $completion);
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda($observer) {
    return function (it) {
      $observer.onStart_b65n5j_k$(it.packedValue_1);
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_0($observer) {
    return function () {
      $observer.onStop_aip7ow_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_1($observer) {
    return function () {
      $observer.onCancel_q8fje0_k$();
      return Unit_getInstance();
    };
  }
  function detectDragGesturesAfterLongPressWithObserver$lambda_2($observer) {
    return function (_anonymous_parameter_0__qggqh8, offset) {
      $observer.onDrag_jolxfr_k$(offset.packedValue_1);
      return Unit_getInstance();
    };
  }
  function getParagraphBoundary(_this__u8e3s4, index) {
    return TextRange(findParagraphStart(_this__u8e3s4, index), findParagraphEnd(_this__u8e3s4, index));
  }
  function findParagraphStart(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex - 1 | 0;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (charSequenceGet(_this__u8e3s4, index - 1 | 0) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex + 1 | 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__u8e3s4);
  }
  function ceilToIntPx(_this__u8e3s4) {
    // Inline function 'kotlin.math.roundToInt' call
    // Inline function 'kotlin.math.ceil' call
    var tmp0_roundToInt = Math.ceil(_this__u8e3s4);
    return roundToInt(tmp0_roundToInt);
  }
  function get_cursorAnimationSpec() {
    _init_properties_TextFieldCursor_kt__1co4rz();
    return cursorAnimationSpec;
  }
  var cursorAnimationSpec;
  function cursorAnimationSpec$lambda($this$keyframes) {
    _init_properties_TextFieldCursor_kt__1co4rz();
    $this$keyframes.set_durationMillis_cr89wn_k$(1000);
    $this$keyframes.at_xtu82d_k$(1.0, 0);
    $this$keyframes.at_xtu82d_k$(1.0, 499);
    $this$keyframes.at_xtu82d_k$(0.0, 500);
    $this$keyframes.at_xtu82d_k$(0.0, 999);
    return Unit_getInstance();
  }
  var properties_initialized_TextFieldCursor_kt_tldnf7;
  function _init_properties_TextFieldCursor_kt__1co4rz() {
    if (!properties_initialized_TextFieldCursor_kt_tldnf7) {
      properties_initialized_TextFieldCursor_kt_tldnf7 = true;
      cursorAnimationSpec = infiniteRepeatable(keyframes(cursorAnimationSpec$lambda));
    }
  }
  function get_EmptyTextReplacement() {
    _init_properties_TextFieldDelegate_kt__lo6v7k();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_DefaultWidthCharCount() {
    return DefaultWidthCharCount;
  }
  var DefaultWidthCharCount;
  var properties_initialized_TextFieldDelegate_kt_1iol9a;
  function _init_properties_TextFieldDelegate_kt__lo6v7k() {
    if (!properties_initialized_TextFieldDelegate_kt_1iol9a) {
      properties_initialized_TextFieldDelegate_kt_1iol9a = true;
      EmptyTextReplacement = repeat('H', 10);
    }
  }
  function get_SNAPSHOTS_INTERVAL_MILLIS() {
    return SNAPSHOTS_INTERVAL_MILLIS;
  }
  var SNAPSHOTS_INTERVAL_MILLIS;
  function get_ValidatingEmptyOffsetMappingIdentity() {
    _init_properties_ValidatingOffsetMapping_kt__fcd8ty();
    return ValidatingEmptyOffsetMappingIdentity;
  }
  var ValidatingEmptyOffsetMappingIdentity;
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function _get_originalLength__ld60x8($this) {
    return $this.originalLength_1;
  }
  function _get_transformedLength__kli3z4($this) {
    return $this.transformedLength_1;
  }
  function ValidatingOffsetMapping(delegate, originalLength, transformedLength) {
    this.delegate_1 = delegate;
    this.originalLength_1 = originalLength;
    this.transformedLength_1 = transformedLength;
  }
  protoOf(ValidatingOffsetMapping).originalToTransformed_c5d2si_k$ = function (offset) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.delegate_1.originalToTransformed_c5d2si_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= tmp0_also ? tmp0_also <= this.transformedLength_1 : false)) {
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.originalToTransformed.<anonymous>.<anonymous>' call
      var message = 'OffsetMapping.originalToTransformed returned invalid mapping: ' + ('' + offset + ' -> ' + tmp0_also + ' is not in range of transformed text ') + ('[0, ' + this.transformedLength_1 + ']');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp0_also;
  };
  protoOf(ValidatingOffsetMapping).transformedToOriginal_xp4com_k$ = function (offset) {
    // Inline function 'kotlin.also' call
    var tmp0_also = this.delegate_1.transformedToOriginal_xp4com_k$(offset);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= tmp0_also ? tmp0_also <= this.originalLength_1 : false)) {
      // Inline function 'androidx.compose.foundation.text.ValidatingOffsetMapping.transformedToOriginal.<anonymous>.<anonymous>' call
      var message = 'OffsetMapping.transformedToOriginal returned invalid mapping: ' + ('' + offset + ' -> ' + tmp0_also + ' is not in range of original text ') + ('[0, ' + this.originalLength_1 + ']');
      throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp0_also;
  };
  var properties_initialized_ValidatingOffsetMapping_kt_rllilk;
  function _init_properties_ValidatingOffsetMapping_kt__fcd8ty() {
    if (!properties_initialized_ValidatingOffsetMapping_kt_rllilk) {
      properties_initialized_ValidatingOffsetMapping_kt_rllilk = true;
      ValidatingEmptyOffsetMappingIdentity = new ValidatingOffsetMapping(Companion_getInstance_17().get_Identity_wza1cp_k$(), 0, 0);
    }
  }
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
    tmp$ret$0 = v1.shl_po5ip6_k$(32).or_s401rn_k$(v2.and_jhajnj_k$(new Long(-1, 0)));
    return _InlineDensity___init__impl__1m7u8m(tmp$ret$0);
  }
  function _InlineDensity___init__impl__1m7u8m_1(density) {
    return _InlineDensity___init__impl__1m7u8m_0(density.get_density_qy0267_k$(), density.get_fontScale_h56n3i_k$());
  }
  function _InlineDensity___get_density__impl__uz12rr($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var tmp0_unpackFloat1 = _get_packedValue__aj623s($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat1.shr_wjue3g_k$(32).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function _InlineDensity___get_fontScale__impl__ao594c($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var tmp0_unpackFloat2 = _get_packedValue__aj623s($this);
    // Inline function 'kotlin.fromBits' call
    FloatCompanionObject_getInstance();
    var tmp1_fromBits = tmp0_unpackFloat2.and_jhajnj_k$(new Long(-1, 0)).toInt_1tsl84_k$();
    return floatFromBits(tmp1_fromBits);
  }
  function InlineDensity__toString_impl_9jhvwu($this) {
    return 'InlineDensity(density=' + _InlineDensity___get_density__impl__uz12rr($this) + ', fontScale=' + _InlineDensity___get_fontScale__impl__ao594c($this) + ')';
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.Unspecified_1 = _InlineDensity___init__impl__1m7u8m_0(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
  }
  protoOf(Companion_1).get_Unspecified_d3ty2y_k$ = function () {
    return this.Unspecified_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_27() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function InlineDensity__hashCode_impl_vanspp($this) {
    return $this.hashCode();
  }
  function InlineDensity__equals_impl_ppdv5r($this, other) {
    if (!(other instanceof InlineDensity))
      return false;
    var tmp0_other_with_cast = other instanceof InlineDensity ? other.packedValue_1 : THROW_CCE();
    if (!$this.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineDensity(packedValue) {
    Companion_getInstance_27();
    this.packedValue_1 = packedValue;
  }
  protoOf(InlineDensity).toString = function () {
    return InlineDensity__toString_impl_9jhvwu(this.packedValue_1);
  };
  protoOf(InlineDensity).hashCode = function () {
    return InlineDensity__hashCode_impl_vanspp(this.packedValue_1);
  };
  protoOf(InlineDensity).equals = function (other) {
    return InlineDensity__equals_impl_ppdv5r(this.packedValue_1, other);
  };
  function finalConstraints(constraints, softWrap, overflow, maxIntrinsicWidth) {
    return Constraints(VOID, finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth), VOID, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
  }
  function finalMaxLines(softWrap, overflow, maxLinesIn) {
    var overwriteMaxLines = !softWrap ? overflow === Companion_getInstance_15().get_Ellipsis_xgxit0_k$() : false;
    return overwriteMaxLines ? 1 : coerceAtLeast(maxLinesIn, 1);
  }
  function finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth) {
    var widthMatters = softWrap ? true : overflow === Companion_getInstance_15().get_Ellipsis_xgxit0_k$();
    var tmp;
    if (widthMatters ? _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) : false) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = Companion_getInstance_18().get_Infinity_rvchkf_k$();
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
  function get_EmptyTextReplacement_0() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return EmptyTextReplacement_0;
  }
  var EmptyTextReplacement_0;
  function get_TwoLineTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return TwoLineTextReplacement;
  }
  var TwoLineTextReplacement;
  function get_DefaultWidthCharCount_0() {
    return DefaultWidthCharCount_0;
  }
  var DefaultWidthCharCount_0;
  function _set_last__9pwosh($this, _set____db54di) {
    $this.last_1 = _set____db54di;
  }
  function _get_last__d9oodx($this) {
    return $this.last_1;
  }
  function _get_resolvedStyle__vpg5zs($this) {
    return $this.resolvedStyle_1;
  }
  function _set_lineHeightCache__2kak6a($this, _set____db54di) {
    $this.lineHeightCache_1 = _set____db54di;
  }
  function _get_lineHeightCache__7jfnca($this) {
    return $this.lineHeightCache_1;
  }
  function _set_oneLineHeightCache__jjupl6($this, _set____db54di) {
    $this.oneLineHeightCache_1 = _set____db54di;
  }
  function _get_oneLineHeightCache__hje19m($this) {
    return $this.oneLineHeightCache_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.last_1 = null;
  }
  protoOf(Companion_2).from_5sdud2_k$ = function (minMaxUtil, layoutDirection, paramStyle, density, fontFamilyResolver) {
    if (minMaxUtil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (((layoutDirection.equals(minMaxUtil.layoutDirection_1) ? paramStyle.equals(minMaxUtil.inputTextStyle_1) : false) ? density.get_density_qy0267_k$() === minMaxUtil.density_1.get_density_qy0267_k$() : false) ? fontFamilyResolver === minMaxUtil.fontFamilyResolver_1 : false) {
        return minMaxUtil;
      }
    }
    var tmp1_safe_receiver = this.last_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      if (((layoutDirection.equals(tmp1_safe_receiver.layoutDirection_1) ? paramStyle.equals(tmp1_safe_receiver.inputTextStyle_1) : false) ? density.get_density_qy0267_k$() === tmp1_safe_receiver.density_1.get_density_qy0267_k$() : false) ? fontFamilyResolver === tmp1_safe_receiver.fontFamilyResolver_1 : false) {
        return tmp1_safe_receiver;
      }
    }
    // Inline function 'kotlin.also' call
    var tmp0_also = new MinLinesConstrainer(layoutDirection, resolveDefaults(paramStyle, layoutDirection), density, fontFamilyResolver);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.Companion.from.<anonymous>' call
    Companion_getInstance_28().last_1 = tmp0_also;
    return tmp0_also;
  };
  var Companion_instance_2;
  function Companion_getInstance_28() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function MinLinesConstrainer(layoutDirection, inputTextStyle, density, fontFamilyResolver) {
    Companion_getInstance_28();
    this.layoutDirection_1 = layoutDirection;
    this.inputTextStyle_1 = inputTextStyle;
    this.density_1 = density;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.resolvedStyle_1 = resolveDefaults(this.inputTextStyle_1, this.layoutDirection_1);
    this.lineHeightCache_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
    this.oneLineHeightCache_1 = FloatCompanionObject_getInstance().get_NaN_18jnv2_k$();
  }
  protoOf(MinLinesConstrainer).get_layoutDirection_7e37v0_k$ = function () {
    return this.layoutDirection_1;
  };
  protoOf(MinLinesConstrainer).get_inputTextStyle_5a5jj1_k$ = function () {
    return this.inputTextStyle_1;
  };
  protoOf(MinLinesConstrainer).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(MinLinesConstrainer).get_fontFamilyResolver_9o0fjy_k$ = function () {
    return this.fontFamilyResolver_1;
  };
  protoOf(MinLinesConstrainer).coerceMinLines_sme6se_k$ = function (inConstraints, minLines) {
    var oneLineHeight = this.oneLineHeightCache_1;
    var lineHeight = this.lineHeightCache_1;
    if (isNaN_0(oneLineHeight) ? true : isNaN_0(lineHeight)) {
      oneLineHeight = Paragraph(get_EmptyTextReplacement_0(), this.resolvedStyle_1, Constraints(), this.density_1, this.fontFamilyResolver_1, VOID, VOID, 1, false).get_height_e7t92o_k$();
      var twoLineHeight = Paragraph(get_TwoLineTextReplacement(), this.resolvedStyle_1, Constraints(), this.density_1, this.fontFamilyResolver_1, VOID, VOID, 2, false).get_height_e7t92o_k$();
      lineHeight = twoLineHeight - oneLineHeight;
      this.oneLineHeightCache_1 = oneLineHeight;
      this.lineHeightCache_1 = lineHeight;
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
      EmptyTextReplacement_0 = repeat('H', 10);
      TwoLineTextReplacement = get_EmptyTextReplacement_0() + '\n' + get_EmptyTextReplacement_0();
    }
  }
  function _set_text__9udp6y($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_overflow__oq3c45($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm($this) {
    return $this.minLines_1;
  }
  function _set_placeholders__ty3289($this, _set____db54di) {
    $this.placeholders_1 = _set____db54di;
  }
  function _get_placeholders__eecbo5($this) {
    return $this.placeholders_1;
  }
  function _set_mMinLinesConstrainer__9asbu5($this, _set____db54di) {
    $this.mMinLinesConstrainer_1 = _set____db54di;
  }
  function _get_mMinLinesConstrainer__4nac67($this) {
    return $this.mMinLinesConstrainer_1;
  }
  function _set_lastDensity__go7pyl($this, _set____db54di) {
    $this.lastDensity_1 = _set____db54di;
  }
  function _get_lastDensity__dm6gdb($this) {
    return $this.lastDensity_1;
  }
  function _set_paragraphIntrinsics__adlsh5($this, _set____db54di) {
    $this.paragraphIntrinsics_1 = _set____db54di;
  }
  function _get_paragraphIntrinsics__noc1dh($this) {
    return $this.paragraphIntrinsics_1;
  }
  function _set_intrinsicsLayoutDirection__u1jmse($this, _set____db54di) {
    $this.intrinsicsLayoutDirection_1 = _set____db54di;
  }
  function _get_intrinsicsLayoutDirection__rsp3u2($this) {
    return $this.intrinsicsLayoutDirection_1;
  }
  function _set_layoutCache__ke8m8d($this, _set____db54di) {
    $this.layoutCache_1 = _set____db54di;
  }
  function _get_layoutCache__kch9ev($this) {
    return $this.layoutCache_1;
  }
  function _set_cachedIntrinsicHeightInputWidth__2wjptt($this, _set____db54di) {
    $this.cachedIntrinsicHeightInputWidth_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeightInputWidth__ysvvn9($this) {
    return $this.cachedIntrinsicHeightInputWidth_1;
  }
  function _set_cachedIntrinsicHeight__vh6lqd($this, _set____db54di) {
    $this.cachedIntrinsicHeight_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeight__xeb3t3($this) {
    return $this.cachedIntrinsicHeight_1;
  }
  function textLayoutResult($this, layoutDirection, finalConstraints, multiParagraph) {
    var tmp = $this.text_1;
    var tmp_0 = $this.style_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = $this.placeholders_1;
    tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    return new TextLayoutResult(TextLayoutInput_init_$Create$(tmp, tmp_0, tmp$ret$0, $this.maxLines_1, $this.softWrap_1, $this.overflow_1, ensureNotNull($this.density_1), layoutDirection, $this.fontFamilyResolver_1, finalConstraints), multiParagraph, constrain(finalConstraints, IntSize(ceilToIntPx(multiParagraph.get_width_j0q4yl_k$()), ceilToIntPx(multiParagraph.get_height_e7t92o_k$()))));
  }
  function setLayoutDirection($this, layoutDirection) {
    var localIntrinsics = $this.paragraphIntrinsics_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.intrinsicsLayoutDirection_1)) ? true : localIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$()) {
      $this.intrinsicsLayoutDirection_1 = layoutDirection;
      var tmp0_annotatedString = $this.text_1;
      var tmp1_style = resolveDefaults($this.style_1, layoutDirection);
      var tmp2_density = ensureNotNull($this.density_1);
      var tmp3_fontFamilyResolver = $this.fontFamilyResolver_1;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = $this.placeholders_1;
      var tmp4_placeholders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.paragraphIntrinsics_1 = intrinsics;
    return intrinsics;
  }
  function layoutText($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection($this, layoutDirection);
    return new MultiParagraph(localParagraphIntrinsics, finalConstraints(constraints, $this.softWrap_1, $this.overflow_1, localParagraphIntrinsics.get_maxIntrinsicWidth_b4gk2k_k$()), finalMaxLines($this.softWrap_1, $this.overflow_1, $this.maxLines_1), $this.overflow_1 === Companion_getInstance_15().get_Ellipsis_xgxit0_k$());
  }
  function newLayoutWillBeDifferent(_this__u8e3s4, $this, constraints, layoutDirection) {
    if (_this__u8e3s4 == null)
      return true;
    if (_this__u8e3s4.get_multiParagraph_xte3we_k$().get_intrinsics_1zqd0p_k$().get_hasStaleResolvedFonts_tun9ic_k$())
      return true;
    if (!layoutDirection.equals(_this__u8e3s4.get_layoutInput_o7gjah_k$().get_layoutDirection_7e37v0_k$()))
      return true;
    if (equals(constraints, _this__u8e3s4.get_layoutInput_o7gjah_k$().get_constraints_khg0u2_k$()))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc(_this__u8e3s4.get_layoutInput_o7gjah_k$().get_constraints_khg0u2_k$())))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < _this__u8e3s4.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$() ? true : _this__u8e3s4.get_multiParagraph_xte3we_k$().get_didExceedMaxLines_xyxo57_k$()) {
      return true;
    }
    return false;
  }
  function maxWidth($this, constraints) {
    return finalMaxWidth(constraints, $this.softWrap_1, $this.overflow_1, ensureNotNull($this.paragraphIntrinsics_1).get_maxIntrinsicWidth_b4gk2k_k$());
  }
  function markDirty($this) {
    $this.paragraphIntrinsics_1 = null;
    $this.layoutCache_1 = null;
  }
  function MultiParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.mMinLinesConstrainer_1 = null;
    this.lastDensity_1 = Companion_getInstance_27().get_Unspecified_d3ty2y_k$();
    this.density_1 = null;
    this.paragraphIntrinsics_1 = null;
    this.intrinsicsLayoutDirection_1 = null;
    this.layoutCache_1 = null;
    this.cachedIntrinsicHeightInputWidth_1 = -1;
    this.cachedIntrinsicHeight_1 = -1;
  }
  protoOf(MultiParagraphLayoutCache).set_density_ekfjwj_k$ = function (value) {
    var localField = this.density_1;
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
      tmp_0 = Companion_getInstance_27().get_Unspecified_d3ty2y_k$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      return Unit_getInstance();
    }
    if (value == null ? true : !equals(this.lastDensity_1, newDensity)) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      markDirty(this);
    }
  };
  protoOf(MultiParagraphLayoutCache).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(MultiParagraphLayoutCache).get_textLayoutResult_u0m931_k$ = function () {
    var tmp0_elvis_lhs = this.layoutCache_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('You must call layoutWithConstraints first');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MultiParagraphLayoutCache).get_layoutOrNull_xsv6sd_k$ = function () {
    return this.layoutCache_1;
  };
  protoOf(MultiParagraphLayoutCache).layoutWithConstraints_u5y8xn_k$ = function (constraints, layoutDirection) {
    var tmp;
    if (this.minLines_1 > 1) {
      // Inline function 'kotlin.also' call
      var tmp0_also = Companion_getInstance_28().from_5sdud2_k$(this.mMinLinesConstrainer_1, layoutDirection, this.style_1, ensureNotNull(this.density_1), this.fontFamilyResolver_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.MultiParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.mMinLinesConstrainer_1 = tmp0_also;
      var localMin = tmp0_also;
      tmp = localMin.coerceMinLines_sme6se_k$(constraints, this.minLines_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent(this.layoutCache_1, this, finalConstraints, layoutDirection)) {
      if (equals(finalConstraints, ensureNotNull(this.layoutCache_1).get_layoutInput_o7gjah_k$().get_constraints_khg0u2_k$()))
        return false;
      this.layoutCache_1 = textLayoutResult(this, layoutDirection, finalConstraints, ensureNotNull(this.layoutCache_1).get_multiParagraph_xte3we_k$());
      return true;
    }
    var multiParagraph = layoutText(this, finalConstraints, layoutDirection);
    this.layoutCache_1 = textLayoutResult(this, layoutDirection, finalConstraints, multiParagraph);
    return true;
  };
  protoOf(MultiParagraphLayoutCache).intrinsicHeight_orjovi_k$ = function (width, layoutDirection) {
    var localWidth = this.cachedIntrinsicHeightInputWidth_1;
    var localHeght = this.cachedIntrinsicHeight_1;
    if (width === localWidth ? !(localWidth === -1) : false)
      return localHeght;
    var result = ceilToIntPx(layoutText(this, Constraints(0, width, 0, Companion_getInstance_18().get_Infinity_rvchkf_k$()), layoutDirection).get_height_e7t92o_k$());
    this.cachedIntrinsicHeightInputWidth_1 = width;
    this.cachedIntrinsicHeight_1 = result;
    return result;
  };
  protoOf(MultiParagraphLayoutCache).update_7uvcj2_k$ = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders) {
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    markDirty(this);
  };
  protoOf(MultiParagraphLayoutCache).maxIntrinsicWidth_xqmpge_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection(this, layoutDirection).get_maxIntrinsicWidth_b4gk2k_k$());
  };
  protoOf(MultiParagraphLayoutCache).minIntrinsicWidth_s9t2s0_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection(this, layoutDirection).get_minIntrinsicWidth_lmc1rq_k$());
  };
  function _set_text__9udp6y_0($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose_0($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc_0($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4_0($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q_0($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m_0($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_overflow__oq3c45_0($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd_0($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz_0($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt_0($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8_0($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg_0($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq_0($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm_0($this) {
    return $this.minLines_1;
  }
  function _set_lastDensity__go7pyl_0($this, _set____db54di) {
    $this.lastDensity_1 = _set____db54di;
  }
  function _get_lastDensity__dm6gdb_0($this) {
    return $this.lastDensity_1;
  }
  function _set_mMinLinesConstrainer__9asbu5_0($this, _set____db54di) {
    $this.mMinLinesConstrainer_1 = _set____db54di;
  }
  function _get_mMinLinesConstrainer__4nac67_0($this) {
    return $this.mMinLinesConstrainer_1;
  }
  function _set_paragraphIntrinsics__adlsh5_0($this, _set____db54di) {
    $this.paragraphIntrinsics_1 = _set____db54di;
  }
  function _get_paragraphIntrinsics__noc1dh_0($this) {
    return $this.paragraphIntrinsics_1;
  }
  function _set_intrinsicsLayoutDirection__u1jmse_0($this, _set____db54di) {
    $this.intrinsicsLayoutDirection_1 = _set____db54di;
  }
  function _get_intrinsicsLayoutDirection__rsp3u2_0($this) {
    return $this.intrinsicsLayoutDirection_1;
  }
  function _set_prevConstraints__t33672($this, _set____db54di) {
    $this.prevConstraints_1 = _set____db54di;
  }
  function _get_prevConstraints__izcyoi($this) {
    return $this.prevConstraints_1;
  }
  function _set_cachedIntrinsicHeightInputWidth__2wjptt_0($this, _set____db54di) {
    $this.cachedIntrinsicHeightInputWidth_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeightInputWidth__ysvvn9_0($this) {
    return $this.cachedIntrinsicHeightInputWidth_1;
  }
  function _set_cachedIntrinsicHeight__vh6lqd_0($this, _set____db54di) {
    $this.cachedIntrinsicHeight_1 = _set____db54di;
  }
  function _get_cachedIntrinsicHeight__xeb3t3_0($this) {
    return $this.cachedIntrinsicHeight_1;
  }
  function setLayoutDirection_0($this, layoutDirection) {
    var localIntrinsics = $this.paragraphIntrinsics_1;
    var tmp;
    if ((localIntrinsics == null ? true : !layoutDirection.equals($this.intrinsicsLayoutDirection_1)) ? true : localIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$()) {
      $this.intrinsicsLayoutDirection_1 = layoutDirection;
      tmp = ParagraphIntrinsics($this.text_1, resolveDefaults($this.style_1, layoutDirection), VOID, VOID, ensureNotNull($this.density_1), $this.fontFamilyResolver_1);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.paragraphIntrinsics_1 = intrinsics;
    return intrinsics;
  }
  function layoutText_0($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection_0($this, layoutDirection);
    return Paragraph_0(localParagraphIntrinsics, finalConstraints(constraints, $this.softWrap_1, $this.overflow_1, localParagraphIntrinsics.get_maxIntrinsicWidth_b4gk2k_k$()), finalMaxLines($this.softWrap_1, $this.overflow_1, $this.maxLines_1), $this.overflow_1 === Companion_getInstance_15().get_Ellipsis_xgxit0_k$());
  }
  function newLayoutWillBeDifferent_0($this, constraints, layoutDirection) {
    var tmp0_elvis_lhs = $this.paragraph_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localParagraph = tmp;
    var tmp1_elvis_lhs = $this.paragraphIntrinsics_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return true;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localParagraphIntrinsics = tmp_0;
    if (localParagraphIntrinsics.get_hasStaleResolvedFonts_tun9ic_k$())
      return true;
    if (!layoutDirection.equals($this.intrinsicsLayoutDirection_1))
      return true;
    if (equals(constraints, $this.prevConstraints_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc($this.prevConstraints_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < localParagraph.get_height_e7t92o_k$() ? true : localParagraph.get_didExceedMaxLines_xyxo57_k$()) {
      return true;
    }
    return false;
  }
  function markDirty_0($this) {
    $this.paragraph_1 = null;
    $this.paragraphIntrinsics_1 = null;
    $this.intrinsicsLayoutDirection_1 = null;
    $this.cachedIntrinsicHeightInputWidth_1 = -1;
    $this.cachedIntrinsicHeight_1 = -1;
    $this.prevConstraints_1 = Companion_getInstance_18().fixed_bmujv7_k$(0, 0);
    $this.layoutSize_1 = IntSize(0, 0);
    $this.didOverflow_1 = false;
  }
  function ParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.lastDensity_1 = Companion_getInstance_27().get_Unspecified_d3ty2y_k$();
    this.density_1 = null;
    this.paragraph_1 = null;
    this.didOverflow_1 = false;
    this.layoutSize_1 = IntSize(0, 0);
    this.mMinLinesConstrainer_1 = null;
    this.paragraphIntrinsics_1 = null;
    this.intrinsicsLayoutDirection_1 = null;
    this.prevConstraints_1 = Companion_getInstance_18().fixed_bmujv7_k$(0, 0);
    this.cachedIntrinsicHeightInputWidth_1 = -1;
    this.cachedIntrinsicHeight_1 = -1;
  }
  protoOf(ParagraphLayoutCache).set_density_ekfjwj_k$ = function (value) {
    var localField = this.density_1;
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
      tmp_0 = Companion_getInstance_27().get_Unspecified_d3ty2y_k$();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      return Unit_getInstance();
    }
    if (value == null ? true : !equals(this.lastDensity_1, newDensity)) {
      this.density_1 = value;
      this.lastDensity_1 = newDensity;
      markDirty_0(this);
    }
  };
  protoOf(ParagraphLayoutCache).get_density_qy0267_k$ = function () {
    return this.density_1;
  };
  protoOf(ParagraphLayoutCache).get_observeFontChanges_cdrqb4_k$ = function () {
    var tmp0_safe_receiver = this.paragraphIntrinsics_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.get_hasStaleResolvedFonts_tun9ic_k$();
  };
  protoOf(ParagraphLayoutCache).set_paragraph_ytrt3a_k$ = function (_set____db54di) {
    this.paragraph_1 = _set____db54di;
  };
  protoOf(ParagraphLayoutCache).get_paragraph_ua17wb_k$ = function () {
    return this.paragraph_1;
  };
  protoOf(ParagraphLayoutCache).set_didOverflow_1xmbx7_k$ = function (_set____db54di) {
    this.didOverflow_1 = _set____db54di;
  };
  protoOf(ParagraphLayoutCache).get_didOverflow_rtzd1k_k$ = function () {
    return this.didOverflow_1;
  };
  protoOf(ParagraphLayoutCache).set_layoutSize_am96kl_k$ = function (_set____db54di) {
    this.layoutSize_1 = _set____db54di;
  };
  protoOf(ParagraphLayoutCache).get_layoutSize_yos0lv_k$ = function () {
    return this.layoutSize_1;
  };
  protoOf(ParagraphLayoutCache).layoutWithConstraints_u5y8xn_k$ = function (constraints, layoutDirection) {
    var tmp;
    if (this.minLines_1 > 1) {
      // Inline function 'kotlin.also' call
      var tmp0_also = Companion_getInstance_28().from_5sdud2_k$(this.mMinLinesConstrainer_1, layoutDirection, this.style_1, ensureNotNull(this.density_1), this.fontFamilyResolver_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
      this.mMinLinesConstrainer_1 = tmp0_also;
      var localMin = tmp0_also;
      tmp = localMin.coerceMinLines_sme6se_k$(constraints, this.minLines_1);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent_0(this, finalConstraints, layoutDirection)) {
      if (!equals(finalConstraints, this.prevConstraints_1)) {
        var localParagraph = ensureNotNull(this.paragraph_1);
        var localSize = constrain(finalConstraints, IntSize(ceilToIntPx(localParagraph.get_width_j0q4yl_k$()), ceilToIntPx(localParagraph.get_height_e7t92o_k$())));
        this.layoutSize_1 = localSize;
        this.didOverflow_1 = !(this.overflow_1 === Companion_getInstance_15().get_Visible_2hbc1x_k$()) ? _IntSize___get_width__impl__d9yl4o(localSize) < localParagraph.get_width_j0q4yl_k$() ? true : _IntSize___get_height__impl__prv63b(localSize) < localParagraph.get_height_e7t92o_k$() : false;
      }
      return false;
    }
    var tmp_0 = this;
    // Inline function 'kotlin.also' call
    var tmp1_also = layoutText_0(this, finalConstraints, layoutDirection);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.ParagraphLayoutCache.layoutWithConstraints.<anonymous>' call
    this.prevConstraints_1 = finalConstraints;
    var localSize_0 = constrain(finalConstraints, IntSize(ceilToIntPx(tmp1_also.get_width_j0q4yl_k$()), ceilToIntPx(tmp1_also.get_height_e7t92o_k$())));
    this.layoutSize_1 = localSize_0;
    this.didOverflow_1 = !(this.overflow_1 === Companion_getInstance_15().get_Visible_2hbc1x_k$()) ? _IntSize___get_width__impl__d9yl4o(localSize_0) < tmp1_also.get_width_j0q4yl_k$() ? true : _IntSize___get_height__impl__prv63b(localSize_0) < tmp1_also.get_height_e7t92o_k$() : false;
    tmp_0.paragraph_1 = tmp1_also;
    return true;
  };
  protoOf(ParagraphLayoutCache).intrinsicHeight_orjovi_k$ = function (width, layoutDirection) {
    var localWidth = this.cachedIntrinsicHeightInputWidth_1;
    var localHeght = this.cachedIntrinsicHeight_1;
    if (width === localWidth ? !(localWidth === -1) : false)
      return localHeght;
    var result = ceilToIntPx(layoutText_0(this, Constraints(0, width, 0, Companion_getInstance_18().get_Infinity_rvchkf_k$()), layoutDirection).get_height_e7t92o_k$());
    this.cachedIntrinsicHeightInputWidth_1 = width;
    this.cachedIntrinsicHeight_1 = result;
    return result;
  };
  protoOf(ParagraphLayoutCache).update_3oell7_k$ = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    markDirty_0(this);
  };
  protoOf(ParagraphLayoutCache).slowCreateTextLayoutResultOrNull_4d78gr_k$ = function () {
    var tmp0_elvis_lhs = this.intrinsicsLayoutDirection_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localLayoutDirection = tmp;
    var tmp1_elvis_lhs = this.density_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localDensity = tmp_0;
    var annotatedString = AnnotatedString_init_$Create$(this.text_1);
    if (this.paragraph_1 == null)
      return null;
    if (this.paragraphIntrinsics_1 == null)
      return null;
    var finalConstraints = Constraints__copy$default_impl_f452rp(this.prevConstraints_1, 0, VOID, 0);
    return new TextLayoutResult(TextLayoutInput_init_$Create$(annotatedString, this.style_1, emptyList(), this.maxLines_1, this.softWrap_1, this.overflow_1, localDensity, localLayoutDirection, this.fontFamilyResolver_1, finalConstraints), new MultiParagraph(new MultiParagraphIntrinsics(annotatedString, this.style_1, emptyList(), localDensity, this.fontFamilyResolver_1), finalConstraints, this.maxLines_1, this.overflow_1 === Companion_getInstance_15().get_Ellipsis_xgxit0_k$()), this.layoutSize_1);
  };
  protoOf(ParagraphLayoutCache).minIntrinsicWidth_s9t2s0_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection_0(this, layoutDirection).get_minIntrinsicWidth_lmc1rq_k$());
  };
  protoOf(ParagraphLayoutCache).maxIntrinsicWidth_xqmpge_k$ = function (layoutDirection) {
    return ceilToIntPx(setLayoutDirection_0(this, layoutDirection).get_maxIntrinsicWidth_b4gk2k_k$());
  };
  function _get_text__de5ose_1($this) {
    return $this.text_1;
  }
  function _get_style__b8k6v4_1($this) {
    return $this.style_1;
  }
  function _get_fontFamilyResolver__s3uj2m_1($this) {
    return $this.fontFamilyResolver_1;
  }
  function _get_onTextLayout__ayil7v($this) {
    return $this.onTextLayout_1;
  }
  function _get_overflow__bx70nd_1($this) {
    return $this.overflow_1;
  }
  function _get_softWrap__9vu0jt_1($this) {
    return $this.softWrap_1;
  }
  function _get_maxLines__bh9jcg_1($this) {
    return $this.maxLines_1;
  }
  function _get_minLines__o96fmm_1($this) {
    return $this.minLines_1;
  }
  function _get_placeholders__eecbo5_0($this) {
    return $this.placeholders_1;
  }
  function _get_onPlaceholderLayout__10vzzn($this) {
    return $this.onPlaceholderLayout_1;
  }
  function _get_selectionController__4m8zt5($this) {
    return $this.selectionController_1;
  }
  function _get_color__iw9cfm_0($this) {
    return $this.color_1;
  }
  function component1_2($this) {
    return $this.text_1;
  }
  function component2_0($this) {
    return $this.style_1;
  }
  function component3_0($this) {
    return $this.fontFamilyResolver_1;
  }
  function component4_0($this) {
    return $this.onTextLayout_1;
  }
  function component5($this) {
    return $this.overflow_1;
  }
  function component6($this) {
    return $this.softWrap_1;
  }
  function component7($this) {
    return $this.maxLines_1;
  }
  function component8($this) {
    return $this.minLines_1;
  }
  function component9($this) {
    return $this.placeholders_1;
  }
  function component10($this) {
    return $this.onPlaceholderLayout_1;
  }
  function component11($this) {
    return $this.selectionController_1;
  }
  function component12($this) {
    return $this.color_1;
  }
  function SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.onTextLayout_1 = onTextLayout;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.onPlaceholderLayout_1 = onPlaceholderLayout;
    this.selectionController_1 = selectionController;
    this.color_1 = color;
  }
  protoOf(SelectableTextAnnotatedStringElement).create_md4cuc_k$ = function () {
    return new SelectableTextAnnotatedStringNode(this.text_1, this.style_1, this.fontFamilyResolver_1, this.onTextLayout_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.placeholders_1, this.onPlaceholderLayout_1, this.selectionController_1, this.color_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).update_rg6t3o_k$ = function (node) {
    node.update_xc5g3q_k$(this.text_1, this.style_1, this.placeholders_1, this.minLines_1, this.maxLines_1, this.softWrap_1, this.fontFamilyResolver_1, this.overflow_1, this.onTextLayout_1, this.onPlaceholderLayout_1, this.selectionController_1, this.color_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).update_c7m3nr_k$ = function (node) {
    return this.update_rg6t3o_k$(node instanceof SelectableTextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(SelectableTextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectableTextAnnotatedStringElement))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.onTextLayout_1, other.onTextLayout_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.minLines_1 === other.minLines_1))
      return false;
    if (!equals(this.onPlaceholderLayout_1, other.onPlaceholderLayout_1))
      return false;
    if (!equals(this.selectionController_1, other.selectionController_1))
      return false;
    return true;
  };
  protoOf(SelectableTextAnnotatedStringElement).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.onTextLayout_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + (this.softWrap_1 | 0) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + this.minLines_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.placeholders_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.onPlaceholderLayout_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.selectionController_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.color_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  protoOf(SelectableTextAnnotatedStringElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
  };
  protoOf(SelectableTextAnnotatedStringElement).copy_tl3unp_k$ = function (text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    return new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
  };
  protoOf(SelectableTextAnnotatedStringElement).copy$default_kci3rz_k$ = function (text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color, $super) {
    text = text === VOID ? this.text_1 : text;
    style = style === VOID ? this.style_1 : style;
    fontFamilyResolver = fontFamilyResolver === VOID ? this.fontFamilyResolver_1 : fontFamilyResolver;
    onTextLayout = onTextLayout === VOID ? this.onTextLayout_1 : onTextLayout;
    overflow = overflow === VOID ? this.overflow_1 : overflow;
    softWrap = softWrap === VOID ? this.softWrap_1 : softWrap;
    maxLines = maxLines === VOID ? this.maxLines_1 : maxLines;
    minLines = minLines === VOID ? this.minLines_1 : minLines;
    placeholders = placeholders === VOID ? this.placeholders_1 : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? this.onPlaceholderLayout_1 : onPlaceholderLayout;
    selectionController = selectionController === VOID ? this.selectionController_1 : selectionController;
    color = color === VOID ? this.color_1 : color;
    return $super === VOID ? this.copy_tl3unp_k$(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) : $super.copy_tl3unp_k$.call(this, text, style, fontFamilyResolver, onTextLayout, new TextOverflow(overflow), softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color);
  };
  protoOf(SelectableTextAnnotatedStringElement).toString = function () {
    return 'SelectableTextAnnotatedStringElement(text=' + this.text_1 + ', style=' + this.style_1 + ', fontFamilyResolver=' + this.fontFamilyResolver_1 + ', onTextLayout=' + this.onTextLayout_1 + ', overflow=' + new TextOverflow(this.overflow_1) + ', softWrap=' + this.softWrap_1 + ', maxLines=' + this.maxLines_1 + ', minLines=' + this.minLines_1 + ', placeholders=' + this.placeholders_1 + ', onPlaceholderLayout=' + this.onPlaceholderLayout_1 + ', selectionController=' + this.selectionController_1 + ', color=' + this.color_1 + ')';
  };
  function _set_selectionController__8oh937($this, _set____db54di) {
    $this.selectionController_1 = _set____db54di;
  }
  function _get_selectionController__4m8zt5_0($this) {
    return $this.selectionController_1;
  }
  function _get_delegate__idh0py_0($this) {
    return $this.delegate_2;
  }
  function SelectableTextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    DelegatingNode.call(this);
    this.selectionController_1 = selectionController;
    this.delegate_2 = this.delegate_l89519_k$(new TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, this.selectionController_1, overrideColor));
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      // Inline function 'kotlin.contracts.contract' call
      if (this.selectionController_1 == null) {
        // Inline function 'androidx.compose.foundation.text.modifiers.SelectableTextAnnotatedStringNode.<anonymous>' call
        var message = 'Do not use SelectionCapableStaticTextModifier unless selectionController != null';
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        break $l$block;
      }
    }
  }
  protoOf(SelectableTextAnnotatedStringNode).onGloballyPositioned_14gzvn_k$ = function (coordinates) {
    var tmp0_safe_receiver = this.selectionController_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateGlobalPosition_xm3333_k$(coordinates);
    }
  };
  protoOf(SelectableTextAnnotatedStringNode).draw_j25tpb_k$ = function (_this__u8e3s4) {
    return this.delegate_2.drawNonExtension_9gemzp_k$(_this__u8e3s4);
  };
  protoOf(SelectableTextAnnotatedStringNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    return this.delegate_2.measureNonExtension_s5svnp_k$(_this__u8e3s4, measurable, constraints);
  };
  protoOf(SelectableTextAnnotatedStringNode).minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    return this.delegate_2.minIntrinsicWidthNonExtension_ijyipd_k$(_this__u8e3s4, measurable, height);
  };
  protoOf(SelectableTextAnnotatedStringNode).minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    return this.delegate_2.minIntrinsicHeightNonExtension_c8nay2_k$(_this__u8e3s4, measurable, width);
  };
  protoOf(SelectableTextAnnotatedStringNode).maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    return this.delegate_2.maxIntrinsicWidthNonExtension_5cs5en_k$(_this__u8e3s4, measurable, height);
  };
  protoOf(SelectableTextAnnotatedStringNode).maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    return this.delegate_2.maxIntrinsicHeightNonExtension_t8u6kc_k$(_this__u8e3s4, measurable, width);
  };
  protoOf(SelectableTextAnnotatedStringNode).update_xc5g3q_k$ = function (text, style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, onTextLayout, onPlaceholderLayout, selectionController, color) {
    this.delegate_2.doInvalidations_e3l5mv_k$(this.delegate_2.updateDraw_3gczqx_k$(color, style), this.delegate_2.updateText_n5y5sm_k$(text), this.delegate_2.updateLayoutRelatedArgs_3o6bvj_k$(style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow), this.delegate_2.updateCallbacks_g2lw7w_k$(onTextLayout, onPlaceholderLayout, selectionController));
    this.selectionController_1 = selectionController;
    invalidateMeasurement(this);
  };
  function _get_selectableId__vcm89m($this) {
    return $this.selectableId_1;
  }
  function _get_selectionRegistrar__p9tjiu($this) {
    return $this.selectionRegistrar_1;
  }
  function _get_backgroundSelectionColor__ne0606($this) {
    return $this.backgroundSelectionColor_1;
  }
  function _set_params__n7gsi9($this, _set____db54di) {
    $this.params_1 = _set____db54di;
  }
  function _get_params__oo7d51($this) {
    return $this.params_1;
  }
  function _set_selectable__cjrbi7($this, _set____db54di) {
    $this.selectable_1 = _set____db54di;
  }
  function _get_selectable__rlzwnf($this) {
    return $this.selectable_1;
  }
  function SelectionController$modifier$lambda(this$0) {
    return function () {
      return this$0.params_1.layoutCoordinates_1;
    };
  }
  function SelectionController$modifier$lambda_0(this$0) {
    return function () {
      return this$0.params_1.textLayoutResult_1;
    };
  }
  function SelectionController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.params_1.layoutCoordinates_1;
    };
  }
  function SelectionController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.params_1.textLayoutResult_1;
    };
  }
  function SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor, params) {
    params = params === VOID ? Companion_getInstance_29().Empty_1 : params;
    this.selectableId_1 = selectableId;
    this.selectionRegistrar_1 = selectionRegistrar;
    this.backgroundSelectionColor_1 = backgroundSelectionColor;
    this.params_1 = params;
    this.selectable_1 = null;
    var tmp = this;
    var tmp_0 = SelectionController$modifier$lambda(this);
    tmp.modifier_1 = textPointerHoverIcon(makeSelectionModifier(this.selectionRegistrar_1, this.selectableId_1, tmp_0, SelectionController$modifier$lambda_0(this), get_isInTouchMode()), this.selectionRegistrar_1);
  }
  protoOf(SelectionController).get_modifier_t1pq5c_k$ = function () {
    return this.modifier_1;
  };
  protoOf(SelectionController).onRemembered_6899sq_k$ = function () {
    var tmp = this;
    var tmp_0 = SelectionController$onRemembered$lambda(this);
    tmp.selectable_1 = this.selectionRegistrar_1.subscribe_dtjpsa_k$(new MultiWidgetSelectionDelegate(this.selectableId_1, tmp_0, SelectionController$onRemembered$lambda_0(this)));
  };
  protoOf(SelectionController).onForgotten_pcab12_k$ = function () {
    var localSelectable = this.selectable_1;
    if (!(localSelectable == null)) {
      this.selectionRegistrar_1.unsubscribe_h2q9j4_k$(localSelectable);
      this.selectable_1 = null;
    }
  };
  protoOf(SelectionController).onAbandoned_1hgzvg_k$ = function () {
    var localSelectable = this.selectable_1;
    if (!(localSelectable == null)) {
      this.selectionRegistrar_1.unsubscribe_h2q9j4_k$(localSelectable);
      this.selectable_1 = null;
    }
  };
  protoOf(SelectionController).updateTextLayout_ra17ro_k$ = function (textLayoutResult) {
    this.params_1 = this.params_1.copy$default_duzs4u_k$(VOID, textLayoutResult);
  };
  protoOf(SelectionController).updateGlobalPosition_xm3333_k$ = function (coordinates) {
    this.params_1 = this.params_1.copy$default_duzs4u_k$(coordinates);
  };
  protoOf(SelectionController).draw_c2w0oe_k$ = function (drawScope) {
    var tmp0_elvis_lhs = this.selectionRegistrar_1.get_subselections_i6sdj2_k$().get_1mhr4y_k$(this.selectableId_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var selection = tmp;
    var tmp_0;
    if (!selection.get_handlesCrossed_5utwpv_k$()) {
      tmp_0 = selection.get_start_iypx6h_k$().get_offset_hjmqak_k$();
    } else {
      tmp_0 = selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    }
    var start = tmp_0;
    var tmp_1;
    if (!selection.get_handlesCrossed_5utwpv_k$()) {
      tmp_1 = selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    } else {
      tmp_1 = selection.get_start_iypx6h_k$().get_offset_hjmqak_k$();
    }
    var end = tmp_1;
    if (start === end)
      return Unit_getInstance();
    var tmp1_safe_receiver = this.selectable_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.getLastVisibleOffset_71yps7_k$();
    var lastOffset = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var clippedStart = coerceAtMost(start, lastOffset);
    var clippedEnd = coerceAtMost(end, lastOffset);
    var tmp3_elvis_lhs = this.params_1.getPathForRange_i163f3_k$(clippedStart, clippedEnd);
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
    if (this.params_1.get_shouldClip_p0b4k4_k$()) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      var tmp0_clipRect = _Size___get_width__impl__58y75t(drawScope.get_size_x9ctfw_k$());
      var tmp1_clipRect = _Size___get_height__impl__a04p02(drawScope.get_size_x9ctfw_k$());
      var tmp2_clipRect = Companion_getInstance_5().get_Intersect_ow3v69_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var tmp0_with = drawScope.get_drawContext_ffwztu_k$();
      // Inline function 'kotlin.contracts.contract' call
      var previousSize = tmp0_with.get_size_x9ctfw_k$();
      tmp0_with.get_canvas_bshgm9_k$().save_erlm4_k$();
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect.<anonymous>' call
      tmp0_with.get_transform_px941v_k$().clipRect_si0ig1_k$(0.0, 0.0, tmp0_clipRect, tmp1_clipRect, tmp2_clipRect);
      // Inline function 'androidx.compose.foundation.text.modifiers.SelectionController.draw.<anonymous>.<anonymous>' call
      drawScope.drawPath$default_2kcp9b_k$(selectionPath, this.backgroundSelectionColor_1);
      tmp0_with.get_canvas_bshgm9_k$().restore_a2id37_k$();
      tmp0_with.set_size_xj1bzm_k$(previousSize);
      tmp_3 = Unit_getInstance();
    } else {
      drawScope.drawPath$default_2kcp9b_k$(selectionPath, this.backgroundSelectionColor_1);
      tmp_3 = Unit_getInstance();
    }
  };
  function Companion_3() {
    Companion_instance_3 = this;
    this.Empty_1 = new StaticTextSelectionParams(null, null);
  }
  protoOf(Companion_3).get_Empty_i9b85g_k$ = function () {
    return this.Empty_1;
  };
  var Companion_instance_3;
  function Companion_getInstance_29() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function StaticTextSelectionParams(layoutCoordinates, textLayoutResult) {
    Companion_getInstance_29();
    this.layoutCoordinates_1 = layoutCoordinates;
    this.textLayoutResult_1 = textLayoutResult;
  }
  protoOf(StaticTextSelectionParams).get_layoutCoordinates_d2f0vs_k$ = function () {
    return this.layoutCoordinates_1;
  };
  protoOf(StaticTextSelectionParams).get_textLayoutResult_u0m931_k$ = function () {
    return this.textLayoutResult_1;
  };
  protoOf(StaticTextSelectionParams).getPathForRange_i163f3_k$ = function (start, end) {
    var tmp0_safe_receiver = this.textLayoutResult_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getPathForRange_i163f3_k$(start, end);
  };
  protoOf(StaticTextSelectionParams).get_shouldClip_p0b4k4_k$ = function () {
    var tmp0_safe_receiver = this.textLayoutResult_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_layoutInput_o7gjah_k$();
    var tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_overflow_rjdkkj_k$();
    return equals(tmp == null ? null : new TextOverflow(tmp), new TextOverflow(Companion_getInstance_15().get_Visible_2hbc1x_k$()));
  };
  protoOf(StaticTextSelectionParams).copy_7kbbqr_k$ = function (layoutCoordinates, textLayoutResult) {
    return new StaticTextSelectionParams(layoutCoordinates, textLayoutResult);
  };
  protoOf(StaticTextSelectionParams).copy$default_duzs4u_k$ = function (layoutCoordinates, textLayoutResult, $super) {
    layoutCoordinates = layoutCoordinates === VOID ? this.layoutCoordinates_1 : layoutCoordinates;
    textLayoutResult = textLayoutResult === VOID ? this.textLayoutResult_1 : textLayoutResult;
    return $super === VOID ? this.copy_7kbbqr_k$(layoutCoordinates, textLayoutResult) : $super.copy_7kbbqr_k$.call(this, layoutCoordinates, textLayoutResult);
  };
  function makeSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates, textLayoutResult, isInTouchMode) {
    var tmp;
    if (isInTouchMode) {
      var longPressDragObserver = new makeSelectionModifier$longPressDragObserver$1(layoutCoordinates, textLayoutResult, _this__u8e3s4, selectableId);
      var tmp_0 = Companion_getInstance_7();
      tmp = pointerInput(tmp_0, longPressDragObserver, makeSelectionModifier$slambda_0(longPressDragObserver, null));
    } else {
      var mouseSelectionObserver = new makeSelectionModifier$mouseSelectionObserver$1(layoutCoordinates, _this__u8e3s4, selectableId);
      var tmp_1 = Companion_getInstance_7();
      tmp = pointerHoverIcon(composed$composable(tmp_1, VOID, makeSelectionModifier$lambda(mouseSelectionObserver)), get_textPointerIcon());
    }
    return tmp;
  }
  function outOfBoundary(_this__u8e3s4, start, end) {
    if (_this__u8e3s4 == null)
      return false;
    var lastOffset = _this__u8e3s4.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_text_wouvsm_k$().length;
    var rawStartOffset = _this__u8e3s4.getOffsetForPosition_f04xcw_k$(start);
    var rawEndOffset = _this__u8e3s4.getOffsetForPosition_f04xcw_k$(end);
    return (rawStartOffset >= (lastOffset - 1 | 0) ? rawEndOffset >= (lastOffset - 1 | 0) : false) ? true : rawStartOffset < 0 ? rawEndOffset < 0 : false;
  }
  function makeSelectionModifier$longPressDragObserver$1($layoutCoordinates, $textLayoutResult, $this_makeSelectionModifier, $selectableId) {
    this.$layoutCoordinates_1 = $layoutCoordinates;
    this.$textLayoutResult_1 = $textLayoutResult;
    this.$this_makeSelectionModifier_1 = $this_makeSelectionModifier;
    this.$selectableId_1 = $selectableId;
    this.lastPosition_1 = Companion_getInstance_6().get_Zero_sctq3f_k$();
    this.dragTotalDistance_1 = Companion_getInstance_6().get_Zero_sctq3f_k$();
  }
  protoOf(makeSelectionModifier$longPressDragObserver$1).set_lastPosition_c0m3m_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).get_lastPosition_qh55to_k$ = function () {
    return this.lastPosition_1;
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).set_dragTotalDistance_9d9fe6_k$ = function (_set____db54di) {
    this.dragTotalDistance_1 = _set____db54di;
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).get_dragTotalDistance_e4qjdc_k$ = function () {
    return this.dragTotalDistance_1;
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).onDown_ofe487_k$ = function (point) {
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).onUp_30x6d3_k$ = function () {
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).onStart_b65n5j_k$ = function (startPoint) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      if (outOfBoundary(this.$textLayoutResult_1(), startPoint, startPoint)) {
        this.$this_makeSelectionModifier_1.notifySelectionUpdateSelectAll_uyvpea_k$(this.$selectableId_1);
      } else {
        this.$this_makeSelectionModifier_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, startPoint, Companion_getInstance_30().get_Word_wockfn_k$());
      }
      this.lastPosition_1 = startPoint;
    }
    if (!hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1))
      return Unit_getInstance();
    this.dragTotalDistance_1 = Companion_getInstance_6().get_Zero_sctq3f_k$();
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).onDrag_jolxfr_k$ = function (delta) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return Unit_getInstance();
      if (!hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1))
        return Unit_getInstance();
      this.dragTotalDistance_1 = Offset__plus_impl_c78cg0(this.dragTotalDistance_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.lastPosition_1, this.dragTotalDistance_1);
      var tmp;
      if (!outOfBoundary(this.$textLayoutResult_1(), this.lastPosition_1, newPosition)) {
        var tmp1_previousPosition = this.lastPosition_1;
        var tmp2_adjustment = Companion_getInstance_30().get_CharacterWithWordAccelerate_b1h3l9_k$();
        var consumed = this.$this_makeSelectionModifier_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, newPosition, tmp1_previousPosition, false, tmp2_adjustment);
        var tmp_0;
        if (consumed) {
          this.lastPosition_1 = newPosition;
          this.dragTotalDistance_1 = Companion_getInstance_6().get_Zero_sctq3f_k$();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
    }
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).onStop_aip7ow_k$ = function () {
    if (hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1)) {
      this.$this_makeSelectionModifier_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  protoOf(makeSelectionModifier$longPressDragObserver$1).onCancel_q8fje0_k$ = function () {
    if (hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1)) {
      this.$this_makeSelectionModifier_1.notifySelectionUpdateEnd_v1kl4u_k$();
    }
  };
  function makeSelectionModifier$slambda($longPressDragObserver, resultContinuation) {
    this.$longPressDragObserver_1 = $longPressDragObserver;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(makeSelectionModifier$slambda).invoke_dycxzz_k$ = function ($this$pointerInput, $completion) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(makeSelectionModifier$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(makeSelectionModifier$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = detectDragGesturesAfterLongPressWithObserver(this.$this$pointerInput_1, this.$longPressDragObserver_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(makeSelectionModifier$slambda).create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new makeSelectionModifier$slambda(this.$longPressDragObserver_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  protoOf(makeSelectionModifier$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  function makeSelectionModifier$slambda_0($longPressDragObserver, resultContinuation) {
    var i = new makeSelectionModifier$slambda($longPressDragObserver, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.invoke_dycxzz_k$($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function makeSelectionModifier$mouseSelectionObserver$1($layoutCoordinates, $this_makeSelectionModifier, $selectableId) {
    this.$layoutCoordinates_1 = $layoutCoordinates;
    this.$this_makeSelectionModifier_1 = $this_makeSelectionModifier;
    this.$selectableId_1 = $selectableId;
    this.lastPosition_1 = Companion_getInstance_6().get_Zero_sctq3f_k$();
  }
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).set_lastPosition_c0m3m_k$ = function (_set____db54di) {
    this.lastPosition_1 = _set____db54di;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).get_lastPosition_qh55to_k$ = function () {
    return this.lastPosition_1;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).onExtend_dx8a28_k$ = function (downPosition) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      var consumed = this.$this_makeSelectionModifier_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, downPosition, this.lastPosition_1, false, Companion_getInstance_30().get_None_wo6tgh_k$());
      if (consumed) {
        this.lastPosition_1 = downPosition;
      }
      return hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1);
    }
    return false;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).onExtendDrag_m0cr7o_k$ = function (dragPosition) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1))
        return false;
      var consumed = this.$this_makeSelectionModifier_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, this.lastPosition_1, false, Companion_getInstance_30().get_None_wo6tgh_k$());
      var tmp;
      if (consumed) {
        this.lastPosition_1 = dragPosition;
        tmp = Unit_getInstance();
      }
    }
    return true;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).onStart_i02yuj_k$ = function (downPosition, adjustment) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      this.$this_makeSelectionModifier_1.notifySelectionUpdateStart_2s99iw_k$(tmp0_safe_receiver, downPosition, adjustment);
      this.lastPosition_1 = downPosition;
      return hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1);
    }
    return false;
  };
  protoOf(makeSelectionModifier$mouseSelectionObserver$1).onDrag_4lf411_k$ = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.$layoutCoordinates_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_safe_receiver.get_isAttached_odsl1l_k$())
        return false;
      if (!hasSelection(this.$this_makeSelectionModifier_1, this.$selectableId_1))
        return false;
      var tmp0_previousPosition = this.lastPosition_1;
      var consumed = this.$this_makeSelectionModifier_1.notifySelectionUpdate_xy1nj0_k$(tmp0_safe_receiver, dragPosition, tmp0_previousPosition, false, adjustment);
      var tmp;
      if (consumed) {
        this.lastPosition_1 = dragPosition;
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
    return $currentMouseSelectionObserver$delegate.get_value_j01efc_k$();
  }
  function makeSelectionModifier$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation) {
    this.$currentMouseSelectionObserver$delegate_1 = $currentMouseSelectionObserver$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(makeSelectionModifier$lambda$slambda).invoke_dycxzz_k$ = function ($this$pointerInput, $completion) {
    var tmp = this.create_9k90ga_k$($this$pointerInput, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(makeSelectionModifier$lambda$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_dycxzz_k$((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(makeSelectionModifier$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(2);
            this.set_state_a96kl8_k$(1);
            suspendResult = mouseSelectionDetector(this.$this$pointerInput_1, invoke$lambda(this.$currentMouseSelectionObserver$delegate_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 2) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(makeSelectionModifier$lambda$slambda).create_9k90ga_k$ = function ($this$pointerInput, completion) {
    var i = new makeSelectionModifier$lambda$slambda(this.$currentMouseSelectionObserver$delegate_1, completion);
    i.$this$pointerInput_1 = $this$pointerInput;
    return i;
  };
  protoOf(makeSelectionModifier$lambda$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_9k90ga_k$((!(value == null) ? isInterface(value, PointerInputScope) : false) ? value : THROW_CCE(), completion);
  };
  function makeSelectionModifier$lambda$slambda_0($currentMouseSelectionObserver$delegate, resultContinuation) {
    var i = new makeSelectionModifier$lambda$slambda($currentMouseSelectionObserver$delegate, resultContinuation);
    var l = function ($this$pointerInput, $completion) {
      return i.invoke_dycxzz_k$($this$pointerInput, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function makeSelectionModifier$lambda($mouseSelectionObserver) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.startReplaceableGroup_rp6air_k$(1772367819);
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
      $composer_1.startReplaceableGroup_rp6air_k$(-838505973);
      sourceInformation($composer_1, 'CC(remember$composable)P(1):Composables.kt#9igjgp');
      var tmp$ret$3;
      // Inline function 'androidx.compose.runtime.cache' call
      var tmp0_cache = $composer_1;
      var tmp1_cache = $composer_1.changed_ga7h3f_k$(currentMouseSelectionObserver$delegate);
      var tmp$ret$2;
      // Inline function 'kotlin.let' call
      var tmp0_let = tmp0_cache.rememberedValue_4dg93v_k$();
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$1;
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var tmp_0;
      if (tmp1_cache ? true : tmp0_let === Companion_getInstance_9().get_Empty_i9b85g_k$()) {
        var tmp$ret$0;
        // Inline function 'androidx.compose.foundation.text.modifiers.makeSelectionModifier.<anonymous>.<anonymous>' call
        tmp$ret$0 = makeSelectionModifier$lambda$slambda_0(currentMouseSelectionObserver$delegate, null);
        var value = tmp$ret$0;
        tmp0_cache.updateRememberedValue_l1colo_k$(value);
        tmp_0 = value;
      } else {
        tmp_0 = tmp0_let;
      }
      tmp$ret$1 = tmp_0;
      tmp$ret$2 = tmp$ret$1;
      var tmp_1 = tmp$ret$2;
      tmp$ret$3 = (tmp_1 == null ? true : isObject(tmp_1)) ? tmp_1 : THROW_CCE();
      var tmp0 = tmp$ret$3;
      $composer_1.endReplaceableGroup_er37p7_k$();
      tmp$ret$4 = tmp0;
      var tmp0_0 = pointerInput($this$composed, Unit_getInstance(), tmp$ret$4);
      var tmp_2;
      if (isTraceInProgress()) {
        traceEventEnd();
        tmp_2 = Unit_getInstance();
      }
      $composer_0.endReplaceableGroup_er37p7_k$();
      return tmp0_0;
    };
  }
  function _get_text__de5ose_2($this) {
    return $this.text_1;
  }
  function _get_style__b8k6v4_2($this) {
    return $this.style_1;
  }
  function _get_fontFamilyResolver__s3uj2m_2($this) {
    return $this.fontFamilyResolver_1;
  }
  function _get_onTextLayout__ayil7v_0($this) {
    return $this.onTextLayout_1;
  }
  function _get_overflow__bx70nd_2($this) {
    return $this.overflow_1;
  }
  function _get_softWrap__9vu0jt_2($this) {
    return $this.softWrap_1;
  }
  function _get_maxLines__bh9jcg_2($this) {
    return $this.maxLines_1;
  }
  function _get_minLines__o96fmm_2($this) {
    return $this.minLines_1;
  }
  function _get_placeholders__eecbo5_1($this) {
    return $this.placeholders_1;
  }
  function _get_onPlaceholderLayout__10vzzn_0($this) {
    return $this.onPlaceholderLayout_1;
  }
  function _get_selectionController__4m8zt5_1($this) {
    return $this.selectionController_1;
  }
  function _get_color__iw9cfm_1($this) {
    return $this.color_1;
  }
  function TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.onTextLayout_1 = onTextLayout;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.onPlaceholderLayout_1 = onPlaceholderLayout;
    this.selectionController_1 = selectionController;
    this.color_1 = color;
  }
  protoOf(TextAnnotatedStringElement).create_md4cuc_k$ = function () {
    return new TextAnnotatedStringNode(this.text_1, this.style_1, this.fontFamilyResolver_1, this.onTextLayout_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.placeholders_1, this.onPlaceholderLayout_1, this.selectionController_1, this.color_1);
  };
  protoOf(TextAnnotatedStringElement).update_aqlrqu_k$ = function (node) {
    node.doInvalidations_e3l5mv_k$(node.updateDraw_3gczqx_k$(this.color_1, this.style_1), node.updateText_n5y5sm_k$(this.text_1), node.updateLayoutRelatedArgs_3o6bvj_k$(this.style_1, this.placeholders_1, this.minLines_1, this.maxLines_1, this.softWrap_1, this.fontFamilyResolver_1, this.overflow_1), node.updateCallbacks_g2lw7w_k$(this.onTextLayout_1, this.onPlaceholderLayout_1, this.selectionController_1));
  };
  protoOf(TextAnnotatedStringElement).update_c7m3nr_k$ = function (node) {
    return this.update_aqlrqu_k$(node instanceof TextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(TextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextAnnotatedStringElement))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!this.text_1.equals(other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.placeholders_1, other.placeholders_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!equals(this.onTextLayout_1, other.onTextLayout_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.minLines_1 === other.minLines_1))
      return false;
    if (!equals(this.onPlaceholderLayout_1, other.onPlaceholderLayout_1))
      return false;
    if (!equals(this.selectionController_1, other.selectionController_1))
      return false;
    return true;
  };
  protoOf(TextAnnotatedStringElement).hashCode = function () {
    var result = this.text_1.hashCode();
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.onTextLayout_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + (this.softWrap_1 | 0) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + this.minLines_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.placeholders_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.onPlaceholderLayout_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.selectionController_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.color_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextAnnotatedStringElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
  };
  function _set_text__9udp6y_1($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose_3($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc_1($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4_3($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q_1($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m_3($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_onTextLayout__qi9brz($this, _set____db54di) {
    $this.onTextLayout_1 = _set____db54di;
  }
  function _get_onTextLayout__ayil7v_1($this) {
    return $this.onTextLayout_1;
  }
  function _set_overflow__oq3c45_1($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd_3($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz_1($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt_3($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8_1($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg_3($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq_1($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm_3($this) {
    return $this.minLines_1;
  }
  function _set_placeholders__ty3289_0($this, _set____db54di) {
    $this.placeholders_1 = _set____db54di;
  }
  function _get_placeholders__eecbo5_2($this) {
    return $this.placeholders_1;
  }
  function _set_onPlaceholderLayout__c9u8wp($this, _set____db54di) {
    $this.onPlaceholderLayout_1 = _set____db54di;
  }
  function _get_onPlaceholderLayout__10vzzn_1($this) {
    return $this.onPlaceholderLayout_1;
  }
  function _set_selectionController__8oh937_0($this, _set____db54di) {
    $this.selectionController_1 = _set____db54di;
  }
  function _get_selectionController__4m8zt5_2($this) {
    return $this.selectionController_1;
  }
  function _set_overrideColor__4o8y0e($this, _set____db54di) {
    $this.overrideColor_1 = _set____db54di;
  }
  function _get_overrideColor__ajikhy($this) {
    return $this.overrideColor_1;
  }
  function _set_baselineCache__fll3fs($this, _set____db54di) {
    $this.baselineCache_1 = _set____db54di;
  }
  function _get_baselineCache__dtkxg($this) {
    return $this.baselineCache_1;
  }
  function _set__layoutCache__vb7hoi($this, _set____db54di) {
    $this._layoutCache_1 = _set____db54di;
  }
  function _get__layoutCache__frgr4e($this) {
    return $this._layoutCache_1;
  }
  function _get_layoutCache__kch9ev_0($this) {
    if ($this._layoutCache_1 == null) {
      $this._layoutCache_1 = new MultiParagraphLayoutCache($this.text_1, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1, $this.placeholders_1);
    }
    return ensureNotNull($this._layoutCache_1);
  }
  function getLayoutCache($this, density) {
    // Inline function 'kotlin.also' call
    var tmp0_also = _get_layoutCache__kch9ev_0($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.getLayoutCache.<anonymous>' call
    tmp0_also.set_density_ekfjwj_k$(density);
    return tmp0_also;
  }
  function _set_semanticsTextLayoutResult__952dss($this, _set____db54di) {
    $this.semanticsTextLayoutResult_1 = _set____db54di;
  }
  function _get_semanticsTextLayoutResult__bdwwr4($this) {
    return $this.semanticsTextLayoutResult_1;
  }
  function TextAnnotatedStringNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp0_safe_receiver = _get_layoutCache__kch9ev_0(this$0).get_layoutOrNull_xsv6sd_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextAnnotatedStringNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.add_1j60pz_k$(tmp0_safe_receiver);
        tmp$ret$0 = tmp0_safe_receiver;
        tmp = tmp$ret$0;
      }
      var layout = tmp;
      return !(layout == null);
    };
  }
  function TextAnnotatedStringNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.place$default_eachz5_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.onTextLayout_1 = onTextLayout;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.placeholders_1 = placeholders;
    this.onPlaceholderLayout_1 = onPlaceholderLayout;
    this.selectionController_1 = selectionController;
    this.overrideColor_1 = overrideColor;
    this.baselineCache_1 = null;
    this._layoutCache_1 = null;
    this.semanticsTextLayoutResult_1 = null;
  }
  protoOf(TextAnnotatedStringNode).updateDraw_3gczqx_k$ = function (color, style) {
    var changed = false;
    if (!equals(color, this.overrideColor_1)) {
      changed = true;
    }
    this.overrideColor_1 = color;
    changed = changed ? true : !style.hasSameDrawAffectingAttributes_u9e6rp_k$(this.style_1);
    return changed;
  };
  protoOf(TextAnnotatedStringNode).updateText_n5y5sm_k$ = function (text) {
    if (this.text_1.equals(text))
      return false;
    this.text_1 = text;
    return true;
  };
  protoOf(TextAnnotatedStringNode).updateLayoutRelatedArgs_3o6bvj_k$ = function (style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.style_1.hasSameLayoutAffectingAttributes_nmoc4f_k$(style);
    this.style_1 = style;
    if (!equals(this.placeholders_1, placeholders)) {
      this.placeholders_1 = placeholders;
      changed = true;
    }
    if (!(this.minLines_1 === minLines)) {
      this.minLines_1 = minLines;
      changed = true;
    }
    if (!(this.maxLines_1 === maxLines)) {
      this.maxLines_1 = maxLines;
      changed = true;
    }
    if (!(this.softWrap_1 === softWrap)) {
      this.softWrap_1 = softWrap;
      changed = true;
    }
    if (!equals(this.fontFamilyResolver_1, fontFamilyResolver)) {
      this.fontFamilyResolver_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.overflow_1 === overflow)) {
      this.overflow_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).updateCallbacks_g2lw7w_k$ = function (onTextLayout, onPlaceholderLayout, selectionController) {
    var changed = false;
    if (!equals(this.onTextLayout_1, onTextLayout)) {
      this.onTextLayout_1 = onTextLayout;
      changed = true;
    }
    if (!equals(this.onPlaceholderLayout_1, onPlaceholderLayout)) {
      this.onPlaceholderLayout_1 = onPlaceholderLayout;
      changed = true;
    }
    if (!equals(this.selectionController_1, selectionController)) {
      this.selectionController_1 = selectionController;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).doInvalidations_e3l5mv_k$ = function (drawChanged, textChanged, layoutChanged, callbacksChanged) {
    if (textChanged) {
      invalidateSemantics(this);
    }
    if ((textChanged ? true : layoutChanged) ? true : callbacksChanged) {
      _get_layoutCache__kch9ev_0(this).update_7uvcj2_k$(this.text_1, this.style_1, this.fontFamilyResolver_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.placeholders_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextAnnotatedStringNode).applySemantics_4844q4_k$ = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.semanticsTextLayoutResult_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextAnnotatedStringNode$applySemantics$lambda(this);
      this.semanticsTextLayoutResult_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, this.text_1);
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextAnnotatedStringNode).measureNonExtension_s5svnp_k$ = function (measureScope, measurable, constraints) {
    return this.measure_i9wrw7_k$(measureScope, measurable, constraints);
  };
  protoOf(TextAnnotatedStringNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.layoutWithConstraints_u5y8xn_k$(constraints, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    var textLayoutResult = layoutCache.get_textLayoutResult_u0m931_k$();
    textLayoutResult.get_multiParagraph_xte3we_k$().get_intrinsics_1zqd0p_k$().get_hasStaleResolvedFonts_tun9ic_k$();
    if (didChangeLayout) {
      invalidateLayer(this);
      var tmp0_safe_receiver = this.onTextLayout_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(textLayoutResult);
      var tmp1_safe_receiver = this.selectionController_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.updateTextLayout_ra17ro_k$(textLayoutResult);
      }
      var tmp = this;
      var tmp_0 = get_FirstBaseline();
      var tmp$ret$0;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = textLayoutResult.get_firstBaseline_s5430_k$();
      tmp$ret$0 = roundToInt(tmp0_roundToInt);
      var tmp_1 = to(tmp_0, tmp$ret$0);
      var tmp_2 = get_LastBaseline();
      var tmp$ret$1;
      // Inline function 'kotlin.math.roundToInt' call
      var tmp1_roundToInt = textLayoutResult.get_lastBaseline_inuptw_k$();
      tmp$ret$1 = roundToInt(tmp1_roundToInt);
      tmp.baselineCache_1 = mapOf([tmp_1, to(tmp_2, tmp$ret$1)]);
    }
    var tmp2_safe_receiver = this.onPlaceholderLayout_1;
    if (tmp2_safe_receiver == null)
      null;
    else
      tmp2_safe_receiver(textLayoutResult.get_placeholderRects_1ky2fv_k$());
    var placeable = measurable.measure_ikak0q_k$(Companion_getInstance_18().fixed_bmujv7_k$(_IntSize___get_width__impl__d9yl4o(textLayoutResult.get_size_yscczt_k$()), _IntSize___get_height__impl__prv63b(textLayoutResult.get_size_yscczt_k$())));
    var tmp_3 = _IntSize___get_width__impl__d9yl4o(textLayoutResult.get_size_yscczt_k$());
    var tmp_4 = _IntSize___get_height__impl__prv63b(textLayoutResult.get_size_yscczt_k$());
    var tmp_5 = ensureNotNull(this.baselineCache_1);
    return _this__u8e3s4.layout_na8ejh_k$(tmp_3, tmp_4, tmp_5, TextAnnotatedStringNode$measure$lambda(placeable));
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicWidthNonExtension_ijyipd_k$ = function (intrinsicMeasureScope, measurable, height) {
    return this.minIntrinsicWidth_72od57_k$(intrinsicMeasureScope, measurable, height);
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache(this, _this__u8e3s4).minIntrinsicWidth_s9t2s0_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicHeightNonExtension_c8nay2_k$ = function (intrinsicMeasureScope, measurable, width) {
    return this.minIntrinsicHeight_zr6pa_k$(intrinsicMeasureScope, measurable, width);
  };
  protoOf(TextAnnotatedStringNode).minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache(this, _this__u8e3s4).intrinsicHeight_orjovi_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicWidthNonExtension_5cs5en_k$ = function (intrinsicMeasureScope, measurable, height) {
    return this.maxIntrinsicWidth_o2xntp_k$(intrinsicMeasureScope, measurable, height);
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache(this, _this__u8e3s4).maxIntrinsicWidth_xqmpge_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicHeightNonExtension_t8u6kc_k$ = function (intrinsicMeasureScope, measurable, width) {
    return this.maxIntrinsicHeight_t0gmkg_k$(intrinsicMeasureScope, measurable, width);
  };
  protoOf(TextAnnotatedStringNode).maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache(this, _this__u8e3s4).intrinsicHeight_orjovi_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextAnnotatedStringNode).drawNonExtension_9gemzp_k$ = function (contentDrawScope) {
    return this.draw_j25tpb_k$(contentDrawScope);
  };
  protoOf(TextAnnotatedStringNode).draw_j25tpb_k$ = function (_this__u8e3s4) {
    var tmp0_safe_receiver = this.selectionController_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.draw_c2w0oe_k$(_this__u8e3s4);
    }
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var tmp0_anonymous = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var textLayoutResult = _get_layoutCache__kch9ev_0(this).get_textLayoutResult_u0m931_k$();
    var localParagraph = textLayoutResult.get_multiParagraph_xte3we_k$();
    var willClip = textLayoutResult.get_hasVisualOverflow_ocbqq5_k$() ? !(this.overflow_1 === Companion_getInstance_15().get_Visible_2hbc1x_k$()) : false;
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(textLayoutResult.get_size_yscczt_k$());
      var height = _IntSize___get_height__impl__prv63b(textLayoutResult.get_size_yscczt_k$());
      var bounds = Rect_0(Companion_getInstance_6().get_Zero_sctq3f_k$(), Size_0(width, height));
      tmp0_anonymous.save_erlm4_k$();
      tmp0_anonymous.clipRect$default_7dppdt_k$(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.style_1.get_textDecoration_itgjwm_k$();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_19().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.style_1.get_shadow_jgtb8p_k$();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_20().get_None_wo6tgh_k$() : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.style_1.get_drawStyle_arbehw_k$();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.style_1.get_brush_ipcjyp_k$();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.style_1.get_alpha_iooth1_k$();
        localParagraph.paint$default_z9vili_k$(tmp0_anonymous, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp3_safe_receiver = this.overrideColor_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.invoke_54deeb_k$();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().get_Unspecified_9ntdt9_k$();
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_9ntdt9_k$()))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var tmp0_get_isSpecified_4wup3r = this.style_1.get_color_v34vrz_k$();
          if (!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_9ntdt9_k$()))) {
            tmp_3 = this.style_1.get_color_v34vrz_k$();
          } else {
            tmp_3 = Companion_getInstance().get_Black_wh3yn9_k$();
          }
        }
        var color = tmp_3;
        localParagraph.paint$default_pichjd_k$(tmp0_anonymous, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        tmp0_anonymous.restore_a2id37_k$();
      }
    }
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp1_isNullOrEmpty = this.placeholders_1;
    // Inline function 'kotlin.contracts.contract' call
    if (!(tmp1_isNullOrEmpty == null ? true : tmp1_isNullOrEmpty.isEmpty_y1axqb_k$())) {
      _this__u8e3s4.drawContent_m0d3yc_k$();
    }
  };
  function _get_text__de5ose_4($this) {
    return $this.text_1;
  }
  function _get_style__b8k6v4_4($this) {
    return $this.style_1;
  }
  function _get_fontFamilyResolver__s3uj2m_4($this) {
    return $this.fontFamilyResolver_1;
  }
  function _get_overflow__bx70nd_4($this) {
    return $this.overflow_1;
  }
  function _get_softWrap__9vu0jt_4($this) {
    return $this.softWrap_1;
  }
  function _get_maxLines__bh9jcg_4($this) {
    return $this.maxLines_1;
  }
  function _get_minLines__o96fmm_4($this) {
    return $this.minLines_1;
  }
  function _get_color__iw9cfm_2($this) {
    return $this.color_1;
  }
  function TextStringSimpleElement(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, color) {
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.color_1 = color;
  }
  protoOf(TextStringSimpleElement).create_md4cuc_k$ = function () {
    return new TextStringSimpleNode(this.text_1, this.style_1, this.fontFamilyResolver_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1, this.color_1);
  };
  protoOf(TextStringSimpleElement).update_4pcgqk_k$ = function (node) {
    node.doInvalidations_m54k2p_k$(node.updateDraw_3gczqx_k$(this.color_1, this.style_1), node.updateText_ivir6z_k$(this.text_1), node.updateLayoutRelatedArgs_jybvwd_k$(this.style_1, this.minLines_1, this.maxLines_1, this.softWrap_1, this.fontFamilyResolver_1, this.overflow_1));
  };
  protoOf(TextStringSimpleElement).update_c7m3nr_k$ = function (node) {
    return this.update_4pcgqk_k$(node instanceof TextStringSimpleNode ? node : THROW_CCE());
  };
  protoOf(TextStringSimpleElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStringSimpleElement))
      return false;
    if (!equals(this.color_1, other.color_1))
      return false;
    if (!(this.text_1 === other.text_1))
      return false;
    if (!this.style_1.equals(other.style_1))
      return false;
    if (!equals(this.fontFamilyResolver_1, other.fontFamilyResolver_1))
      return false;
    if (!(this.overflow_1 === other.overflow_1))
      return false;
    if (!(this.softWrap_1 === other.softWrap_1))
      return false;
    if (!(this.maxLines_1 === other.maxLines_1))
      return false;
    if (!(this.minLines_1 === other.minLines_1))
      return false;
    return true;
  };
  protoOf(TextStringSimpleElement).hashCode = function () {
    var result = getStringHashCode(this.text_1);
    result = imul(31, result) + this.style_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.fontFamilyResolver_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.overflow_1) | 0;
    result = imul(31, result) + (this.softWrap_1 | 0) | 0;
    result = imul(31, result) + this.maxLines_1 | 0;
    result = imul(31, result) + this.minLines_1 | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.color_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStringSimpleElement).inspectableProperties_ryaptq_k$ = function (_this__u8e3s4) {
  };
  function _set_text__9udp6y_2($this, _set____db54di) {
    $this.text_1 = _set____db54di;
  }
  function _get_text__de5ose_5($this) {
    return $this.text_1;
  }
  function _set_style__ksk9mc_2($this, _set____db54di) {
    $this.style_1 = _set____db54di;
  }
  function _get_style__b8k6v4_5($this) {
    return $this.style_1;
  }
  function _set_fontFamilyResolver__5u0s1q_2($this, _set____db54di) {
    $this.fontFamilyResolver_1 = _set____db54di;
  }
  function _get_fontFamilyResolver__s3uj2m_5($this) {
    return $this.fontFamilyResolver_1;
  }
  function _set_overflow__oq3c45_2($this, _set____db54di) {
    $this.overflow_1 = _set____db54di;
  }
  function _get_overflow__bx70nd_5($this) {
    return $this.overflow_1;
  }
  function _set_softWrap__2x2awz_2($this, _set____db54di) {
    $this.softWrap_1 = _set____db54di;
  }
  function _get_softWrap__9vu0jt_5($this) {
    return $this.softWrap_1;
  }
  function _set_maxLines__oa5ut8_2($this, _set____db54di) {
    $this.maxLines_1 = _set____db54di;
  }
  function _get_maxLines__bh9jcg_5($this) {
    return $this.maxLines_1;
  }
  function _set_minLines__xz1avq_2($this, _set____db54di) {
    $this.minLines_1 = _set____db54di;
  }
  function _get_minLines__o96fmm_5($this) {
    return $this.minLines_1;
  }
  function _set_overrideColor__4o8y0e_0($this, _set____db54di) {
    $this.overrideColor_1 = _set____db54di;
  }
  function _get_overrideColor__ajikhy_0($this) {
    return $this.overrideColor_1;
  }
  function _set_baselineCache__fll3fs_0($this, _set____db54di) {
    $this.baselineCache_1 = _set____db54di;
  }
  function _get_baselineCache__dtkxg_0($this) {
    return $this.baselineCache_1;
  }
  function _set__layoutCache__vb7hoi_0($this, _set____db54di) {
    $this._layoutCache_1 = _set____db54di;
  }
  function _get__layoutCache__frgr4e_0($this) {
    return $this._layoutCache_1;
  }
  function _get_layoutCache__kch9ev_1($this) {
    if ($this._layoutCache_1 == null) {
      $this._layoutCache_1 = new ParagraphLayoutCache($this.text_1, $this.style_1, $this.fontFamilyResolver_1, $this.overflow_1, $this.softWrap_1, $this.maxLines_1, $this.minLines_1);
    }
    return ensureNotNull($this._layoutCache_1);
  }
  function getLayoutCache_0($this, density) {
    // Inline function 'kotlin.also' call
    var tmp0_also = _get_layoutCache__kch9ev_1($this);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.getLayoutCache.<anonymous>' call
    tmp0_also.set_density_ekfjwj_k$(density);
    return tmp0_also;
  }
  function _set_semanticsTextLayoutResult__952dss_0($this, _set____db54di) {
    $this.semanticsTextLayoutResult_1 = _set____db54di;
  }
  function _get_semanticsTextLayoutResult__bdwwr4_0($this) {
    return $this.semanticsTextLayoutResult_1;
  }
  function TextStringSimpleNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp0_safe_receiver = _get_layoutCache__kch9ev_1(this$0).slowCreateTextLayoutResultOrNull_4d78gr_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'androidx.compose.foundation.text.modifiers.TextStringSimpleNode.applySemantics.<anonymous>.<anonymous>' call
        textLayoutResult.add_1j60pz_k$(tmp0_safe_receiver);
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
      $this$layout.place$default_eachz5_k$($placeable, 0, 0);
      return Unit_getInstance();
    };
  }
  function TextStringSimpleNode(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, overrideColor) {
    overflow = overflow === VOID ? Companion_getInstance_15().get_Clip_a6y3d7_k$() : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$() : maxLines;
    minLines = minLines === VOID ? get_DefaultMinLines() : minLines;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.text_1 = text;
    this.style_1 = style;
    this.fontFamilyResolver_1 = fontFamilyResolver;
    this.overflow_1 = overflow;
    this.softWrap_1 = softWrap;
    this.maxLines_1 = maxLines;
    this.minLines_1 = minLines;
    this.overrideColor_1 = overrideColor;
    this.baselineCache_1 = null;
    this._layoutCache_1 = null;
    this.semanticsTextLayoutResult_1 = null;
  }
  protoOf(TextStringSimpleNode).updateDraw_3gczqx_k$ = function (color, style) {
    var changed = false;
    if (!equals(color, this.overrideColor_1)) {
      changed = true;
    }
    this.overrideColor_1 = color;
    changed = changed ? true : !style.hasSameDrawAffectingAttributes_u9e6rp_k$(this.style_1);
    return changed;
  };
  protoOf(TextStringSimpleNode).updateText_ivir6z_k$ = function (text) {
    if (this.text_1 === text)
      return false;
    this.text_1 = text;
    return true;
  };
  protoOf(TextStringSimpleNode).updateLayoutRelatedArgs_jybvwd_k$ = function (style, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.style_1.hasSameLayoutAffectingAttributes_nmoc4f_k$(style);
    this.style_1 = style;
    if (!(this.minLines_1 === minLines)) {
      this.minLines_1 = minLines;
      changed = true;
    }
    if (!(this.maxLines_1 === maxLines)) {
      this.maxLines_1 = maxLines;
      changed = true;
    }
    if (!(this.softWrap_1 === softWrap)) {
      this.softWrap_1 = softWrap;
      changed = true;
    }
    if (!equals(this.fontFamilyResolver_1, fontFamilyResolver)) {
      this.fontFamilyResolver_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.overflow_1 === overflow)) {
      this.overflow_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextStringSimpleNode).doInvalidations_m54k2p_k$ = function (drawChanged, textChanged, layoutChanged) {
    if (textChanged) {
      invalidateSemantics(this);
    }
    if (textChanged ? true : layoutChanged) {
      _get_layoutCache__kch9ev_1(this).update_3oell7_k$(this.text_1, this.style_1, this.fontFamilyResolver_1, this.overflow_1, this.softWrap_1, this.maxLines_1, this.minLines_1);
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextStringSimpleNode).applySemantics_4844q4_k$ = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.semanticsTextLayoutResult_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextStringSimpleNode$applySemantics$lambda(this);
      this.semanticsTextLayoutResult_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, AnnotatedString_init_$Create$(this.text_1));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextStringSimpleNode).measure_i9wrw7_k$ = function (_this__u8e3s4, measurable, constraints) {
    var layoutCache = getLayoutCache_0(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.layoutWithConstraints_u5y8xn_k$(constraints, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
    layoutCache.get_observeFontChanges_cdrqb4_k$();
    var paragraph = ensureNotNull(layoutCache.get_paragraph_ua17wb_k$());
    var layoutSize = layoutCache.get_layoutSize_yos0lv_k$();
    if (didChangeLayout) {
      invalidateLayer(this);
      var cache = this.baselineCache_1;
      if (cache == null) {
        cache = LinkedHashMap_init_$Create$(2);
      }
      // Inline function 'kotlin.collections.set' call
      var tmp1_set = cache;
      var tmp2_set = get_FirstBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var tmp0_roundToInt = paragraph.get_firstBaseline_s5430_k$();
      var tmp3_set = roundToInt(tmp0_roundToInt);
      tmp1_set.put_3mhbri_k$(tmp2_set, tmp3_set);
      // Inline function 'kotlin.collections.set' call
      var tmp5_set = cache;
      var tmp6_set = get_LastBaseline();
      // Inline function 'kotlin.math.roundToInt' call
      var tmp4_roundToInt = paragraph.get_lastBaseline_inuptw_k$();
      var tmp7_set = roundToInt(tmp4_roundToInt);
      tmp5_set.put_3mhbri_k$(tmp6_set, tmp7_set);
      this.baselineCache_1 = cache;
    }
    var placeable = measurable.measure_ikak0q_k$(Companion_getInstance_18().fixed_bmujv7_k$(_IntSize___get_width__impl__d9yl4o(layoutSize), _IntSize___get_height__impl__prv63b(layoutSize)));
    var tmp = _IntSize___get_width__impl__d9yl4o(layoutSize);
    var tmp_0 = _IntSize___get_height__impl__prv63b(layoutSize);
    var tmp_1 = ensureNotNull(this.baselineCache_1);
    return _this__u8e3s4.layout_na8ejh_k$(tmp, tmp_0, tmp_1, TextStringSimpleNode$measure$lambda(placeable));
  };
  protoOf(TextStringSimpleNode).minIntrinsicWidth_72od57_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache_0(this, _this__u8e3s4).minIntrinsicWidth_s9t2s0_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).minIntrinsicHeight_zr6pa_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache_0(this, _this__u8e3s4).intrinsicHeight_orjovi_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).maxIntrinsicWidth_o2xntp_k$ = function (_this__u8e3s4, measurable, height) {
    return getLayoutCache_0(this, _this__u8e3s4).maxIntrinsicWidth_xqmpge_k$(_this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).maxIntrinsicHeight_t0gmkg_k$ = function (_this__u8e3s4, measurable, width) {
    return getLayoutCache_0(this, _this__u8e3s4).intrinsicHeight_orjovi_k$(width, _this__u8e3s4.get_layoutDirection_7e37v0_k$());
  };
  protoOf(TextStringSimpleNode).draw_j25tpb_k$ = function (_this__u8e3s4) {
    // Inline function 'kotlin.requireNotNull' call
    var tmp0_requireNotNull = _get_layoutCache__kch9ev_1(this).get_paragraph_ua17wb_k$();
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
    var tmp1_anonymous = _this__u8e3s4.get_drawContext_ffwztu_k$().get_canvas_bshgm9_k$();
    var willClip = _get_layoutCache__kch9ev_1(this).get_didOverflow_rtzd1k_k$();
    if (willClip) {
      var width = _IntSize___get_width__impl__d9yl4o(_get_layoutCache__kch9ev_1(this).get_layoutSize_yos0lv_k$());
      var height = _IntSize___get_height__impl__prv63b(_get_layoutCache__kch9ev_1(this).get_layoutSize_yos0lv_k$());
      var bounds = Rect_0(Companion_getInstance_6().get_Zero_sctq3f_k$(), Size_0(width, height));
      tmp1_anonymous.save_erlm4_k$();
      tmp1_anonymous.clipRect$default_7dppdt_k$(bounds);
    }
    var tmp;
    try {
      var tmp0_elvis_lhs = this.style_1.get_textDecoration_itgjwm_k$();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_19().get_None_wo6tgh_k$() : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.style_1.get_shadow_jgtb8p_k$();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_20().get_None_wo6tgh_k$() : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.style_1.get_drawStyle_arbehw_k$();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.style_1.get_brush_ipcjyp_k$();
      var tmp_0;
      if (!(brush == null)) {
        var alpha = this.style_1.get_alpha_iooth1_k$();
        localParagraph.paint$default_e5q6qb_k$(tmp1_anonymous, brush, alpha, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      } else {
        var tmp3_safe_receiver = this.overrideColor_1;
        var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.invoke_54deeb_k$();
        var tmp_1;
        var tmp_2 = tmp4_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().get_Unspecified_9ntdt9_k$();
        } else {
          tmp_1 = tmp4_elvis_lhs;
        }
        var overrideColorVal = tmp_1;
        var tmp_3;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_9ntdt9_k$()))) {
          tmp_3 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var tmp0_get_isSpecified_4wup3r = this.style_1.get_color_v34vrz_k$();
          if (!equals(_Color___get_value__impl__1pls5m(tmp0_get_isSpecified_4wup3r), _Color___get_value__impl__1pls5m(Companion_getInstance().get_Unspecified_9ntdt9_k$()))) {
            tmp_3 = this.style_1.get_color_v34vrz_k$();
          } else {
            tmp_3 = Companion_getInstance().get_Black_wh3yn9_k$();
          }
        }
        var color = tmp_3;
        localParagraph.paint$default_dbe40g_k$(tmp1_anonymous, color, shadow, textDecoration, drawStyle);
        tmp_0 = Unit_getInstance();
      }
      tmp = tmp_0;
    }finally {
      if (willClip) {
        tmp1_anonymous.restore_a2id37_k$();
      }
    }
  };
  function _get_coordinatesCallback__lpbrxt($this) {
    return $this.coordinatesCallback_1;
  }
  function _get_layoutResultCallback__dmyr9b($this) {
    return $this.layoutResultCallback_1;
  }
  function _set__previousTextLayoutResult__2v9job($this, _set____db54di) {
    $this._previousTextLayoutResult_1 = _set____db54di;
  }
  function _get__previousTextLayoutResult__mf0pz($this) {
    return $this._previousTextLayoutResult_1;
  }
  function _set__previousLastVisibleOffset__pix48u($this, _set____db54di) {
    $this._previousLastVisibleOffset_1 = _set____db54di;
  }
  function _get__previousLastVisibleOffset__qxqunm($this) {
    return $this._previousLastVisibleOffset_1;
  }
  function _get_lastVisibleOffset__v7xite(_this__u8e3s4, $this) {
    if (!($this._previousTextLayoutResult_1 === _this__u8e3s4)) {
      var tmp;
      if (!_this__u8e3s4.get_didOverflowHeight_k18vi9_k$() ? true : _this__u8e3s4.get_multiParagraph_xte3we_k$().get_didExceedMaxLines_xyxo57_k$()) {
        tmp = _this__u8e3s4.get_lineCount_lmaazy_k$() - 1 | 0;
      } else {
        var finalVisibleLine = coerceAtMost(_this__u8e3s4.getLineForVerticalPosition_c1p2r4_k$(_IntSize___get_height__impl__prv63b(_this__u8e3s4.get_size_yscczt_k$())), _this__u8e3s4.get_lineCount_lmaazy_k$() - 1 | 0);
        while (_this__u8e3s4.getLineTop_8a2w7q_k$(finalVisibleLine) >= _IntSize___get_height__impl__prv63b(_this__u8e3s4.get_size_yscczt_k$())) {
          finalVisibleLine = finalVisibleLine - 1 | 0;
        }
        tmp = finalVisibleLine;
      }
      var lastVisibleLine = tmp;
      $this._previousLastVisibleOffset_1 = _this__u8e3s4.getLineEnd_7kqxuy_k$(lastVisibleLine, true);
      $this._previousTextLayoutResult_1 = _this__u8e3s4;
    }
    return $this._previousLastVisibleOffset_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.selectableId_1 = selectableId;
    this.coordinatesCallback_1 = coordinatesCallback;
    this.layoutResultCallback_1 = layoutResultCallback;
    this._previousTextLayoutResult_1 = null;
    this._previousLastVisibleOffset_1 = -1;
  }
  protoOf(MultiWidgetSelectionDelegate).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(MultiWidgetSelectionDelegate).updateSelection_xe1zkm_k$ = function (startHandlePosition, endHandlePosition, previousHandlePosition, isStartHandle, containerLayoutCoordinates, adjustment, previousSelection) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(previousSelection == null ? true : this.selectableId_1.equals(previousSelection.get_start_iypx6h_k$().get_selectableId_qduvty_k$()) ? this.selectableId_1.equals(previousSelection.get_end_18j6ha_k$().get_selectableId_qduvty_k$()) : false)) {
      // Inline function 'androidx.compose.foundation.text.selection.MultiWidgetSelectionDelegate.updateSelection.<anonymous>' call
      var message = "The given previousSelection doesn't belong to this selectable.";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.getLayoutCoordinates_w2x35x_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var layoutCoordinates = tmp;
    var tmp1_elvis_lhs = this.layoutResultCallback_1();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return new Pair(null, false);
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var textLayoutResult = tmp_0;
    var relativePosition = containerLayoutCoordinates.localPositionOf_l2k1s5_k$(layoutCoordinates, Companion_getInstance_6().get_Zero_sctq3f_k$());
    var localStartPosition = Offset__minus_impl_hoj2c0(startHandlePosition, relativePosition);
    var localEndPosition = Offset__minus_impl_hoj2c0(endHandlePosition, relativePosition);
    var tmp_1;
    var tmp_2 = previousHandlePosition;
    if ((tmp_2 == null ? null : new Offset_0(tmp_2)) == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.MultiWidgetSelectionDelegate.updateSelection.<anonymous>' call
      tmp_1 = Offset__minus_impl_hoj2c0(previousHandlePosition, relativePosition);
    }
    var localPreviousHandlePosition = tmp_1;
    return getTextSelectionInfo(textLayoutResult, localStartPosition, localEndPosition, localPreviousHandlePosition, this.selectableId_1, adjustment, previousSelection, isStartHandle);
  };
  protoOf(MultiWidgetSelectionDelegate).getSelectAllSelection_9ejth9_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var newSelectionRange = TextRange(0, textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$());
    return getAssembledSelectionInfo(newSelectionRange, false, this.selectableId_1, textLayoutResult);
  };
  protoOf(MultiWidgetSelectionDelegate).getHandlePosition_nbszf7_k$ = function (selection, isStartHandle) {
    if ((isStartHandle ? !selection.get_start_iypx6h_k$().get_selectableId_qduvty_k$().equals(this.selectableId_1) : false) ? true : !isStartHandle ? !selection.get_end_18j6ha_k$().get_selectableId_qduvty_k$().equals(this.selectableId_1) : false) {
      return Companion_getInstance_6().get_Zero_sctq3f_k$();
    }
    if (this.getLayoutCoordinates_w2x35x_k$() == null)
      return Companion_getInstance_6().get_Zero_sctq3f_k$();
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_6().get_Zero_sctq3f_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var offset = isStartHandle ? selection.get_start_iypx6h_k$().get_offset_hjmqak_k$() : selection.get_end_18j6ha_k$().get_offset_hjmqak_k$();
    var coercedOffset = coerceIn(offset, 0, _get_lastVisibleOffset__v7xite(textLayoutResult, this));
    return getSelectionHandleCoordinates(textLayoutResult, coercedOffset, isStartHandle, selection.get_handlesCrossed_5utwpv_k$());
  };
  protoOf(MultiWidgetSelectionDelegate).getLayoutCoordinates_w2x35x_k$ = function () {
    var layoutCoordinates = this.coordinatesCallback_1();
    if (layoutCoordinates == null ? true : !layoutCoordinates.get_isAttached_odsl1l_k$())
      return null;
    return layoutCoordinates;
  };
  protoOf(MultiWidgetSelectionDelegate).getText_18q731_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return AnnotatedString_init_$Create$('');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$();
  };
  protoOf(MultiWidgetSelectionDelegate).getBoundingBox_urudbk_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_21().get_Zero_woe9zl_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    if (textLength < 1)
      return Companion_getInstance_21().get_Zero_woe9zl_k$();
    return textLayoutResult.getBoundingBox_urudbk_k$(coerceIn(offset, 0, textLength - 1 | 0));
  };
  protoOf(MultiWidgetSelectionDelegate).getRangeOfLineContaining_v74j7b_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_22().get_Zero_e8si87_k$();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var visibleTextLength = _get_lastVisibleOffset__v7xite(textLayoutResult, this);
    if (visibleTextLength < 1)
      return Companion_getInstance_22().get_Zero_e8si87_k$();
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(coerceIn(offset, 0, visibleTextLength - 1 | 0));
    return TextRange(textLayoutResult.getLineStart_504snr_k$(line), textLayoutResult.getLineEnd_7kqxuy_k$(line, true));
  };
  protoOf(MultiWidgetSelectionDelegate).getLastVisibleOffset_71yps7_k$ = function () {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return _get_lastVisibleOffset__v7xite(textLayoutResult, this);
  };
  protoOf(MultiWidgetSelectionDelegate).getLineHeight_ba5d5c_k$ = function (offset) {
    var tmp0_elvis_lhs = this.layoutResultCallback_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0.0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    var textLength = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    if (textLength < 1)
      return 0.0;
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(coerceIn(offset, 0, textLength - 1 | 0));
    return textLayoutResult.get_multiParagraph_xte3we_k$().getLineHeight_ba5d5c_k$(line);
  };
  function getTextSelectionInfo(textLayoutResult, startHandlePosition, endHandlePosition, previousHandlePosition, selectableId, adjustment, previousSelection, isStartHandle) {
    previousSelection = previousSelection === VOID ? null : previousSelection;
    isStartHandle = isStartHandle === VOID ? true : isStartHandle;
    var bounds = new Rect(0.0, 0.0, textLayoutResult.get_multiParagraph_xte3we_k$().get_width_j0q4yl_k$(), textLayoutResult.get_multiParagraph_xte3we_k$().get_height_e7t92o_k$());
    var isSelected = SelectionMode_Vertical_getInstance().isSelected_edatdn_k$(bounds, startHandlePosition, endHandlePosition);
    if (!isSelected) {
      return new Pair(null, false);
    }
    var rawStartHandleOffset = getOffsetForPosition(textLayoutResult, bounds, startHandlePosition);
    var rawEndHandleOffset = getOffsetForPosition(textLayoutResult, bounds, endHandlePosition);
    var tmp;
    var tmp_0 = previousHandlePosition;
    if ((tmp_0 == null ? null : new Offset_0(tmp_0)) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.compose.foundation.text.selection.getTextSelectionInfo.<anonymous>' call
      tmp = getOffsetForPosition(textLayoutResult, bounds, previousHandlePosition);
    }
    var tmp1_elvis_lhs = tmp;
    var rawPreviousHandleOffset = tmp1_elvis_lhs == null ? -1 : tmp1_elvis_lhs;
    var tmp_1 = TextRange(rawStartHandleOffset, rawEndHandleOffset);
    var adjustedTextRange = adjustment.adjust_xh53z6_k$(textLayoutResult, tmp_1, rawPreviousHandleOffset, isStartHandle, previousSelection == null ? null : previousSelection.toTextRange_6wofw5_k$());
    var newSelection = getAssembledSelectionInfo(adjustedTextRange, _TextRange___get_reversed__impl__emhnbm(adjustedTextRange), selectableId, textLayoutResult);
    var selectionUpdated = !newSelection.equals(previousSelection);
    var tmp_2;
    if (isStartHandle) {
      tmp_2 = !(rawStartHandleOffset === rawPreviousHandleOffset);
    } else {
      tmp_2 = !(rawEndHandleOffset === rawPreviousHandleOffset);
    }
    var handleUpdated = tmp_2;
    var consumed = handleUpdated ? true : selectionUpdated;
    return new Pair(newSelection, consumed);
  }
  function getAssembledSelectionInfo(newSelectionRange, handlesCrossed, selectableId, textLayoutResult) {
    var tmp = new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(_TextRange___get_start__impl__ww4t90(newSelectionRange)), _TextRange___get_start__impl__ww4t90(newSelectionRange), selectableId);
    var tmp$ret$0;
    // Inline function 'kotlin.math.max' call
    var tmp0_max = _TextRange___get_end__impl__gcdxpp(newSelectionRange) - 1 | 0;
    tmp$ret$0 = Math.max(tmp0_max, 0);
    return new Selection(tmp, new AnchorInfo(textLayoutResult.getBidiRunDirection_dqdnqj_k$(tmp$ret$0), _TextRange___get_end__impl__gcdxpp(newSelectionRange), selectableId), handlesCrossed);
  }
  function getOffsetForPosition(textLayoutResult, bounds, position) {
    var length = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_length_g42xv3_k$();
    var tmp;
    if (bounds.contains_ggguyy_k$(position)) {
      tmp = coerceIn(textLayoutResult.getOffsetForPosition_f04xcw_k$(position), 0, length);
    } else {
      var value = SelectionMode_Vertical_getInstance().compare_blje1w_k$(position, bounds);
      tmp = value < 0 ? 0 : length;
    }
    return tmp;
  }
  function Selectable() {
  }
  function AnchorInfo(direction, offset, selectableId) {
    this.direction_1 = direction;
    this.offset_1 = offset;
    this.selectableId_1 = selectableId;
  }
  protoOf(AnchorInfo).get_direction_7ekune_k$ = function () {
    return this.direction_1;
  };
  protoOf(AnchorInfo).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(AnchorInfo).get_selectableId_qduvty_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(AnchorInfo).component1_7eebsc_k$ = function () {
    return this.direction_1;
  };
  protoOf(AnchorInfo).component2_7eebsb_k$ = function () {
    return this.offset_1;
  };
  protoOf(AnchorInfo).component3_7eebsa_k$ = function () {
    return this.selectableId_1;
  };
  protoOf(AnchorInfo).copy_b5d964_k$ = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  protoOf(AnchorInfo).copy$default_j716ns_k$ = function (direction, offset, selectableId, $super) {
    direction = direction === VOID ? this.direction_1 : direction;
    offset = offset === VOID ? this.offset_1 : offset;
    selectableId = selectableId === VOID ? this.selectableId_1 : selectableId;
    return $super === VOID ? this.copy_b5d964_k$(direction, offset, selectableId) : $super.copy_b5d964_k$.call(this, direction, offset, selectableId);
  };
  protoOf(AnchorInfo).toString = function () {
    return 'AnchorInfo(direction=' + this.direction_1 + ', offset=' + this.offset_1 + ', selectableId=' + toString(this.selectableId_1) + ')';
  };
  protoOf(AnchorInfo).hashCode = function () {
    var result = this.direction_1.hashCode();
    result = imul(result, 31) + this.offset_1 | 0;
    result = imul(result, 31) + this.selectableId_1.hashCode() | 0;
    return result;
  };
  protoOf(AnchorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    var tmp0_other_with_cast = other instanceof AnchorInfo ? other : THROW_CCE();
    if (!this.direction_1.equals(tmp0_other_with_cast.direction_1))
      return false;
    if (!(this.offset_1 === tmp0_other_with_cast.offset_1))
      return false;
    if (!this.selectableId_1.equals(tmp0_other_with_cast.selectableId_1))
      return false;
    return true;
  };
  function Selection(start, end, handlesCrossed) {
    handlesCrossed = handlesCrossed === VOID ? false : handlesCrossed;
    this.start_1 = start;
    this.end_1 = end;
    this.handlesCrossed_1 = handlesCrossed;
  }
  protoOf(Selection).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(Selection).get_end_18j6ha_k$ = function () {
    return this.end_1;
  };
  protoOf(Selection).get_handlesCrossed_5utwpv_k$ = function () {
    return this.handlesCrossed_1;
  };
  protoOf(Selection).merge_ev98bv_k$ = function (other) {
    if (other == null)
      return this;
    if (!this.handlesCrossed_1 ? other.handlesCrossed_1 : false)
      return other.copy$default_qascp8_k$(VOID, this.start_1);
    var handlesCrossed = this.start_1.equals(this.end_1) ? other.handlesCrossed_1 : this.handlesCrossed_1;
    var selection = this;
    var tmp;
    if (handlesCrossed) {
      tmp = selection.copy$default_qascp8_k$(other.start_1);
    } else {
      tmp = selection.copy$default_qascp8_k$(VOID, other.end_1);
    }
    selection = tmp;
    return selection;
  };
  protoOf(Selection).toTextRange_6wofw5_k$ = function () {
    return TextRange(this.start_1.offset_1, this.end_1.offset_1);
  };
  protoOf(Selection).component1_7eebsc_k$ = function () {
    return this.start_1;
  };
  protoOf(Selection).component2_7eebsb_k$ = function () {
    return this.end_1;
  };
  protoOf(Selection).component3_7eebsa_k$ = function () {
    return this.handlesCrossed_1;
  };
  protoOf(Selection).copy_fksu9h_k$ = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  protoOf(Selection).copy$default_qascp8_k$ = function (start, end, handlesCrossed, $super) {
    start = start === VOID ? this.start_1 : start;
    end = end === VOID ? this.end_1 : end;
    handlesCrossed = handlesCrossed === VOID ? this.handlesCrossed_1 : handlesCrossed;
    return $super === VOID ? this.copy_fksu9h_k$(start, end, handlesCrossed) : $super.copy_fksu9h_k$.call(this, start, end, handlesCrossed);
  };
  protoOf(Selection).toString = function () {
    return 'Selection(start=' + this.start_1 + ', end=' + this.end_1 + ', handlesCrossed=' + this.handlesCrossed_1 + ')';
  };
  protoOf(Selection).hashCode = function () {
    var result = this.start_1.hashCode();
    result = imul(result, 31) + this.end_1.hashCode() | 0;
    result = imul(result, 31) + (this.handlesCrossed_1 | 0) | 0;
    return result;
  };
  protoOf(Selection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    var tmp0_other_with_cast = other instanceof Selection ? other : THROW_CCE();
    if (!this.start_1.equals(tmp0_other_with_cast.start_1))
      return false;
    if (!this.end_1.equals(tmp0_other_with_cast.end_1))
      return false;
    if (!(this.handlesCrossed_1 === tmp0_other_with_cast.handlesCrossed_1))
      return false;
    return true;
  };
  function TextLayoutResult$getWordBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0($boundThis.getWordBoundary_qx0177_k$(p0));
    };
    l.callableName = 'getWordBoundary';
    return l;
  }
  function getParagraphBoundary$ref($boundThis) {
    var l = function (p0) {
      return new TextRange_0(getParagraphBoundary($boundThis, p0));
    };
    l.callableName = 'getParagraphBoundary';
    return l;
  }
  function updateSelectionBoundary($this, textLayoutResult, newRawOffset, previousRawOffset, previousAdjustedOffset, otherBoundaryOffset, isStart, isReversed) {
    if (newRawOffset === previousRawOffset) {
      return previousAdjustedOffset;
    }
    var currentLine = textLayoutResult.getLineForOffset_9a3vwv_k$(newRawOffset);
    var previousLine = textLayoutResult.getLineForOffset_9a3vwv_k$(previousAdjustedOffset);
    if (!(currentLine === previousLine)) {
      return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
    }
    var isExpanding_0 = isExpanding($this, newRawOffset, previousRawOffset, isStart, isReversed);
    if (!isExpanding_0) {
      return newRawOffset;
    }
    if (!isAtWordBoundary(textLayoutResult, $this, previousAdjustedOffset)) {
      return newRawOffset;
    }
    return snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed);
  }
  function snapToWordBoundary($this, textLayoutResult, newRawOffset, currentLine, otherBoundaryOffset, isStart, isReversed) {
    var wordBoundary = textLayoutResult.getWordBoundary_qx0177_k$(newRawOffset);
    var wordStartLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_start__impl__ww4t90(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__ww4t90(wordBoundary);
    } else {
      tmp = textLayoutResult.getLineStart_504snr_k$(currentLine);
    }
    var start = tmp;
    var wordEndLine = textLayoutResult.getLineForOffset_9a3vwv_k$(_TextRange___get_end__impl__gcdxpp(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__gcdxpp(wordBoundary);
    } else {
      tmp_0 = textLayoutResult.getLineEnd$default_d4a36y_k$(currentLine);
    }
    var end = tmp_0;
    if (start === otherBoundaryOffset) {
      return end;
    }
    if (end === otherBoundaryOffset) {
      return start;
    }
    var threshold = (start + end | 0) / 2 | 0;
    var tmp_1;
    if (!!(isStart ^ isReversed)) {
      var tmp_2;
      if (newRawOffset <= threshold) {
        tmp_2 = start;
      } else {
        tmp_2 = end;
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (newRawOffset >= threshold) {
        tmp_3 = end;
      } else {
        tmp_3 = start;
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function isAtWordBoundary(_this__u8e3s4, $this, offset) {
    var wordBoundary = _this__u8e3s4.getWordBoundary_qx0177_k$(offset);
    return offset === _TextRange___get_start__impl__ww4t90(wordBoundary) ? true : offset === _TextRange___get_end__impl__gcdxpp(wordBoundary);
  }
  function isExpanding($this, newRawOffset, previousRawOffset, isStart, previousReversed) {
    if (previousRawOffset === -1) {
      return true;
    }
    if (newRawOffset === previousRawOffset) {
      return false;
    }
    var tmp;
    if (!!(isStart ^ previousReversed)) {
      tmp = newRawOffset < previousRawOffset;
    } else {
      tmp = newRawOffset > previousRawOffset;
    }
    return tmp;
  }
  function adjustByBoundary($this, textLayoutResult, newRawSelection, boundaryFun) {
    // Inline function 'kotlin.text.isEmpty' call
    var tmp0_isEmpty = textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$();
    if (charSequenceLength(tmp0_isEmpty) === 0) {
      return Companion_getInstance_22().get_Zero_e8si87_k$();
    }
    var maxOffset = get_lastIndex(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$());
    var startBoundary = boundaryFun(coerceIn(_TextRange___get_start__impl__ww4t90(newRawSelection), 0, maxOffset)).packedValue_1;
    var endBoundary = boundaryFun(coerceIn(_TextRange___get_end__impl__gcdxpp(newRawSelection), 0, maxOffset)).packedValue_1;
    var start = _TextRange___get_reversed__impl__emhnbm(newRawSelection) ? _TextRange___get_end__impl__gcdxpp(startBoundary) : _TextRange___get_start__impl__ww4t90(startBoundary);
    var end = _TextRange___get_reversed__impl__emhnbm(newRawSelection) ? _TextRange___get_start__impl__ww4t90(endBoundary) : _TextRange___get_end__impl__gcdxpp(endBoundary);
    return TextRange(start, end);
  }
  function SelectionAdjustment$Companion$None$1() {
  }
  protoOf(SelectionAdjustment$Companion$None$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    return newRawSelectionRange;
  };
  function SelectionAdjustment$Companion$Character$1() {
  }
  protoOf(SelectionAdjustment$Companion$Character$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp;
    if (_TextRange___get_collapsed__impl__cilesp(newRawSelectionRange)) {
      var tmp_0;
      var tmp_1 = previousSelectionRange;
      if ((tmp_1 == null ? null : new TextRange_0(tmp_1)) == null) {
        tmp_0 = null;
      } else {
        tmp_0 = _TextRange___get_reversed__impl__emhnbm(previousSelectionRange);
      }
      var tmp1_elvis_lhs = tmp_0;
      var previousHandlesCrossed = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
      tmp = ensureAtLeastOneChar(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_text_wouvsm_k$(), _TextRange___get_start__impl__ww4t90(newRawSelectionRange), get_lastIndex(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$()), isStartHandle, previousHandlesCrossed);
    } else {
      tmp = newRawSelectionRange;
    }
    return tmp;
  };
  function SelectionAdjustment$Companion$Word$1() {
  }
  protoOf(SelectionAdjustment$Companion$Word$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = Companion_getInstance_30();
    return adjustByBoundary(tmp, textLayoutResult, newRawSelectionRange, TextLayoutResult$getWordBoundary$ref(textLayoutResult));
  };
  function SelectionAdjustment$Companion$Paragraph$1() {
  }
  protoOf(SelectionAdjustment$Companion$Paragraph$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var boundaryFun = getParagraphBoundary$ref(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$());
    return adjustByBoundary(Companion_getInstance_30(), textLayoutResult, newRawSelectionRange, boundaryFun);
  };
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$1() {
  }
  protoOf(SelectionAdjustment$Companion$CharacterWithWordAccelerate$1).adjust_xh53z6_k$ = function (textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange) {
    var tmp = previousSelectionRange;
    if ((tmp == null ? null : new TextRange_0(tmp)) == null) {
      return Companion_getInstance_30().Word_1.adjust_xh53z6_k$(textLayoutResult, newRawSelectionRange, previousHandleOffset, isStartHandle, previousSelectionRange);
    }
    if (_TextRange___get_collapsed__impl__cilesp(newRawSelectionRange)) {
      return ensureAtLeastOneChar(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$().get_text_wouvsm_k$(), _TextRange___get_start__impl__ww4t90(newRawSelectionRange), get_lastIndex(textLayoutResult.get_layoutInput_o7gjah_k$().get_text_wouvsm_k$()), isStartHandle, _TextRange___get_reversed__impl__emhnbm(previousSelectionRange));
    }
    var start;
    var end;
    if (isStartHandle) {
      start = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_start__impl__ww4t90(newRawSelectionRange), previousHandleOffset, _TextRange___get_start__impl__ww4t90(previousSelectionRange), _TextRange___get_end__impl__gcdxpp(newRawSelectionRange), true, _TextRange___get_reversed__impl__emhnbm(newRawSelectionRange));
      end = _TextRange___get_end__impl__gcdxpp(newRawSelectionRange);
    } else {
      start = _TextRange___get_start__impl__ww4t90(newRawSelectionRange);
      end = updateSelectionBoundary(this, textLayoutResult, _TextRange___get_end__impl__gcdxpp(newRawSelectionRange), previousHandleOffset, _TextRange___get_end__impl__gcdxpp(previousSelectionRange), _TextRange___get_start__impl__ww4t90(newRawSelectionRange), false, _TextRange___get_reversed__impl__emhnbm(newRawSelectionRange));
    }
    return TextRange(start, end);
  };
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    tmp.None_1 = new SelectionAdjustment$Companion$None$1();
    var tmp_0 = this;
    tmp_0.Character_1 = new SelectionAdjustment$Companion$Character$1();
    var tmp_1 = this;
    tmp_1.Word_1 = new SelectionAdjustment$Companion$Word$1();
    var tmp_2 = this;
    tmp_2.Paragraph_1 = new SelectionAdjustment$Companion$Paragraph$1();
    var tmp_3 = this;
    tmp_3.CharacterWithWordAccelerate_1 = new SelectionAdjustment$Companion$CharacterWithWordAccelerate$1();
  }
  protoOf(Companion_4).get_None_wo6tgh_k$ = function () {
    return this.None_1;
  };
  protoOf(Companion_4).get_Character_3i744g_k$ = function () {
    return this.Character_1;
  };
  protoOf(Companion_4).get_Word_wockfn_k$ = function () {
    return this.Word_1;
  };
  protoOf(Companion_4).get_Paragraph_2v2rol_k$ = function () {
    return this.Paragraph_1;
  };
  protoOf(Companion_4).get_CharacterWithWordAccelerate_b1h3l9_k$ = function () {
    return this.CharacterWithWordAccelerate_1;
  };
  var Companion_instance_4;
  function Companion_getInstance_30() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function SelectionAdjustment() {
  }
  function ensureAtLeastOneChar(text, offset, lastOffset, isStartHandle, previousHandlesCrossed) {
    if (lastOffset === 0)
      return TextRange(offset, offset);
    if (offset === 0) {
      var tmp;
      if (isStartHandle) {
        tmp = TextRange(findFollowingBreak(text, 0), 0);
      } else {
        tmp = TextRange(0, findFollowingBreak(text, 0));
      }
      return tmp;
    }
    if (offset === lastOffset) {
      var tmp_0;
      if (isStartHandle) {
        tmp_0 = TextRange(findPrecedingBreak(text, lastOffset), lastOffset);
      } else {
        tmp_0 = TextRange(lastOffset, findPrecedingBreak(text, lastOffset));
      }
      return tmp_0;
    }
    var tmp_1;
    if (isStartHandle) {
      var tmp_2;
      if (!previousHandlesCrossed) {
        tmp_2 = TextRange(findPrecedingBreak(text, offset), offset);
      } else {
        tmp_2 = TextRange(findFollowingBreak(text, offset), offset);
      }
      tmp_1 = tmp_2;
    } else {
      var tmp_3;
      if (!previousHandlesCrossed) {
        tmp_3 = TextRange(offset, findFollowingBreak(text, offset));
      } else {
        tmp_3 = TextRange(offset, findPrecedingBreak(text, offset));
      }
      tmp_1 = tmp_3;
    }
    return tmp_1;
  }
  function get_HandleWidth() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return HandleWidth;
  }
  var HandleWidth;
  function get_HandleHeight() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return HandleHeight;
  }
  var HandleHeight;
  function get_SelectionHandleInfoKey() {
    _init_properties_SelectionHandles_kt__nhzem7();
    return SelectionHandleInfoKey;
  }
  var SelectionHandleInfoKey;
  function SelectionHandleInfo(handle, position) {
    this.handle_1 = handle;
    this.position_1 = position;
  }
  protoOf(SelectionHandleInfo).get_handle_e5p7ht_k$ = function () {
    return this.handle_1;
  };
  protoOf(SelectionHandleInfo).get_position_kw508q_k$ = function () {
    return this.position_1;
  };
  protoOf(SelectionHandleInfo).component1_7eebsc_k$ = function () {
    return this.handle_1;
  };
  protoOf(SelectionHandleInfo).component2_mooz9z_k$ = function () {
    return this.position_1;
  };
  protoOf(SelectionHandleInfo).copy_s35jy4_k$ = function (handle, position) {
    return new SelectionHandleInfo(handle, position);
  };
  protoOf(SelectionHandleInfo).copy$default_gjgy6_k$ = function (handle, position, $super) {
    handle = handle === VOID ? this.handle_1 : handle;
    position = position === VOID ? this.position_1 : position;
    return $super === VOID ? this.copy_s35jy4_k$(handle, position) : $super.copy_s35jy4_k$.call(this, handle, new Offset_0(position));
  };
  protoOf(SelectionHandleInfo).toString = function () {
    return 'SelectionHandleInfo(handle=' + this.handle_1 + ', position=' + new Offset_0(this.position_1) + ')';
  };
  protoOf(SelectionHandleInfo).hashCode = function () {
    var result = this.handle_1.hashCode();
    result = imul(result, 31) + Offset__hashCode_impl_hbql41(this.position_1) | 0;
    return result;
  };
  protoOf(SelectionHandleInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectionHandleInfo))
      return false;
    var tmp0_other_with_cast = other instanceof SelectionHandleInfo ? other : THROW_CCE();
    if (!this.handle_1.equals(tmp0_other_with_cast.handle_1))
      return false;
    if (!equals(this.position_1, tmp0_other_with_cast.position_1))
      return false;
    return true;
  };
  var properties_initialized_SelectionHandles_kt_h9mb7j;
  function _init_properties_SelectionHandles_kt__nhzem7() {
    if (!properties_initialized_SelectionHandles_kt_h9mb7j) {
      properties_initialized_SelectionHandles_kt_h9mb7j = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      HandleWidth = _Dp___init__impl__ms3zkb(25);
      // Inline function 'androidx.compose.ui.unit.dp' call
      HandleHeight = _Dp___init__impl__ms3zkb(25);
      SelectionHandleInfoKey = new SemanticsPropertyKey('SelectionHandleInfo');
    }
  }
  function get_UnspecifiedAnimationVector2D() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return UnspecifiedAnimationVector2D;
  }
  var UnspecifiedAnimationVector2D;
  function get_UnspecifiedSafeOffsetVectorConverter() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return UnspecifiedSafeOffsetVectorConverter;
  }
  var UnspecifiedSafeOffsetVectorConverter;
  function get_OffsetDisplacementThreshold() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return OffsetDisplacementThreshold;
  }
  var OffsetDisplacementThreshold;
  function get_MagnifierSpringSpec() {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return MagnifierSpringSpec;
  }
  var MagnifierSpringSpec;
  function UnspecifiedSafeOffsetVectorConverter$lambda(it) {
    _init_properties_SelectionMagnifier_kt__29sucy();
    var tmp;
    if (get_isSpecified(it.packedValue_1)) {
      tmp = new AnimationVector2D(_Offset___get_x__impl__xvi35n(it.packedValue_1), _Offset___get_y__impl__8bzhra(it.packedValue_1));
    } else {
      tmp = get_UnspecifiedAnimationVector2D();
    }
    return tmp;
  }
  function UnspecifiedSafeOffsetVectorConverter$lambda_0(it) {
    _init_properties_SelectionMagnifier_kt__29sucy();
    return new Offset_0(Offset(it.get_v1_kntnng_k$(), it.get_v2_kntnnf_k$()));
  }
  var properties_initialized_SelectionMagnifier_kt_dgnx1w;
  function _init_properties_SelectionMagnifier_kt__29sucy() {
    if (!properties_initialized_SelectionMagnifier_kt_dgnx1w) {
      properties_initialized_SelectionMagnifier_kt_dgnx1w = true;
      UnspecifiedAnimationVector2D = new AnimationVector2D(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
      var tmp = UnspecifiedSafeOffsetVectorConverter$lambda;
      UnspecifiedSafeOffsetVectorConverter = TwoWayConverter(tmp, UnspecifiedSafeOffsetVectorConverter$lambda_0);
      OffsetDisplacementThreshold = Offset(Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$(), Spring_getInstance().get_DefaultDisplacementThreshold_1c58p0_k$());
      MagnifierSpringSpec = new SpringSpec(VOID, VOID, new Offset_0(get_OffsetDisplacementThreshold()));
    }
  }
  function SelectionMode$Vertical() {
    SelectionMode.call(this, 'Vertical', 0);
    SelectionMode_Vertical_instance = this;
  }
  protoOf(SelectionMode$Vertical).compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_y__impl__8bzhra(position) < bounds.get_top_18ivbo_k$())
      return -1;
    if (_Offset___get_x__impl__xvi35n(position) < bounds.get_left_woprgw_k$() ? _Offset___get_y__impl__8bzhra(position) < bounds.get_bottom_bj8ras_k$() : false)
      return -1;
    return 1;
  };
  var SelectionMode_Vertical_instance;
  function SelectionMode$Horizontal() {
    SelectionMode.call(this, 'Horizontal', 1);
    SelectionMode_Horizontal_instance = this;
  }
  protoOf(SelectionMode$Horizontal).compare_blje1w_k$ = function (position, bounds) {
    if (bounds.contains_ggguyy_k$(position))
      return 0;
    if (_Offset___get_x__impl__xvi35n(position) < bounds.get_left_woprgw_k$())
      return -1;
    if (_Offset___get_y__impl__8bzhra(position) < bounds.get_top_18ivbo_k$() ? _Offset___get_x__impl__xvi35n(position) < bounds.get_right_ixz7xv_k$() : false)
      return -1;
    return 1;
  };
  var SelectionMode_Horizontal_instance;
  function values_2() {
    return [SelectionMode_Vertical_getInstance(), SelectionMode_Horizontal_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'Vertical':
        return SelectionMode_Vertical_getInstance();
      case 'Horizontal':
        return SelectionMode_Horizontal_getInstance();
      default:
        SelectionMode_initEntries();
        THROW_ISE();
        break;
    }
  }
  var SelectionMode_entriesInitialized;
  function SelectionMode_initEntries() {
    if (SelectionMode_entriesInitialized)
      return Unit_getInstance();
    SelectionMode_entriesInitialized = true;
    SelectionMode_Vertical_instance = new SelectionMode$Vertical();
    SelectionMode_Horizontal_instance = new SelectionMode$Horizontal();
  }
  function SelectionMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(SelectionMode).isSelected_edatdn_k$ = function (bounds, start, end) {
    if (bounds.contains_ggguyy_k$(start) ? true : bounds.contains_ggguyy_k$(end)) {
      return true;
    }
    var compareStart = this.compare_blje1w_k$(start, bounds);
    var compareEnd = this.compare_blje1w_k$(end, bounds);
    return !!(compareStart > 0 ^ compareEnd > 0);
  };
  function SelectionMode_Vertical_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Vertical_instance;
  }
  function SelectionMode_Horizontal_getInstance() {
    SelectionMode_initEntries();
    return SelectionMode_Horizontal_instance;
  }
  function get_LocalSelectionRegistrar() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function Companion_5() {
    Companion_instance_5 = this;
    this.InvalidSelectableId_1 = new Long(0, 0);
  }
  protoOf(Companion_5).get_InvalidSelectableId_nbfra9_k$ = function () {
    return this.InvalidSelectableId_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_31() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function SelectionRegistrar() {
  }
  function hasSelection(_this__u8e3s4, selectableId) {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    var tmp1_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.get_subselections_i6sdj2_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.containsKey_wgk31w_k$(selectableId);
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
  function get_$stableprop_12() {
    return 0;
  }
  function TextSelectionColors(handleColor, backgroundColor) {
    this.handleColor_1 = handleColor;
    this.backgroundColor_1 = backgroundColor;
    this.$stable_1 = 0;
  }
  protoOf(TextSelectionColors).get_handleColor_euxoyx_k$ = function () {
    return this.handleColor_1;
  };
  protoOf(TextSelectionColors).get_backgroundColor_5dhxap_k$ = function () {
    return this.backgroundColor_1;
  };
  protoOf(TextSelectionColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.handleColor_1, other.handleColor_1))
      return false;
    if (!equals(this.backgroundColor_1, other.backgroundColor_1))
      return false;
    return true;
  };
  protoOf(TextSelectionColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.handleColor_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.backgroundColor_1) | 0;
    return result;
  };
  protoOf(TextSelectionColors).toString = function () {
    return 'SelectionColors(selectionHandleColor=' + new Color(this.handleColor_1) + ', ' + ('selectionBackgroundColor=' + new Color(this.backgroundColor_1) + ')');
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
  function getSelectionHandleCoordinates(textLayoutResult, offset, isStart, areHandlesCrossed) {
    var line = textLayoutResult.getLineForOffset_9a3vwv_k$(offset);
    var x = getHorizontalPosition(textLayoutResult, offset, isStart, areHandlesCrossed);
    var y = textLayoutResult.getLineBottom_spjtf0_k$(line);
    return Offset(x, y);
  }
  function getHorizontalPosition(_this__u8e3s4, offset, isStart, areHandlesCrossed) {
    var tmp;
    if ((isStart ? !areHandlesCrossed : false) ? true : !isStart ? areHandlesCrossed : false) {
      tmp = offset;
    } else {
      // Inline function 'kotlin.math.max' call
      var tmp0_max = offset - 1 | 0;
      tmp = Math.max(tmp0_max, 0);
    }
    var offsetToCheck = tmp;
    var bidiRunDirection = _this__u8e3s4.getBidiRunDirection_dqdnqj_k$(offsetToCheck);
    var paragraphDirection = _this__u8e3s4.getParagraphDirection_x8sft2_k$(offset);
    return _this__u8e3s4.getHorizontalPosition_b8vvic_k$(offset, bidiRunDirection.equals(paragraphDirection));
  }
  function MouseSelectionObserver() {
  }
  function mouseSelectionDetector(_this__u8e3s4, observer, $completion) {
    return awaitEachGesture(_this__u8e3s4, mouseSelectionDetector$slambda_0(observer, null), $completion);
  }
  function _get_viewConfiguration__gn2pk0($this) {
    return $this.viewConfiguration_1;
  }
  function _get_clicksSlop__5njgdi($this) {
    return $this.clicksSlop_1;
  }
  function ClicksCounter(viewConfiguration, clicksSlop) {
    this.viewConfiguration_1 = viewConfiguration;
    this.clicksSlop_1 = clicksSlop;
    this.clicks_1 = 0;
    this.prevClick_1 = null;
  }
  protoOf(ClicksCounter).set_clicks_ln1cqg_k$ = function (_set____db54di) {
    this.clicks_1 = _set____db54di;
  };
  protoOf(ClicksCounter).get_clicks_byfmd0_k$ = function () {
    return this.clicks_1;
  };
  protoOf(ClicksCounter).set_prevClick_hntiho_k$ = function (_set____db54di) {
    this.prevClick_1 = _set____db54di;
  };
  protoOf(ClicksCounter).get_prevClick_5tza1g_k$ = function () {
    return this.prevClick_1;
  };
  protoOf(ClicksCounter).update_icrz5c_k$ = function (event) {
    var currentPrevEvent = this.prevClick_1;
    if ((!(currentPrevEvent == null) ? this.timeIsTolerable_kkfmyn_k$(currentPrevEvent, event) : false) ? this.positionIsTolerable_1cydwb_k$(currentPrevEvent, event) : false) {
      this.clicks_1 = this.clicks_1 + 1 | 0;
    } else {
      this.clicks_1 = 1;
    }
    this.prevClick_1 = event;
  };
  protoOf(ClicksCounter).timeIsTolerable_kkfmyn_k$ = function (prevClick, newClick) {
    var diff = newClick.get_uptimeMillis_9p467d_k$().minus_llf5ei_k$(prevClick.get_uptimeMillis_9p467d_k$());
    return diff.compareTo_n4fqi2_k$(this.viewConfiguration_1.get_doubleTapTimeoutMillis_mlgmxq_k$()) < 0;
  };
  protoOf(ClicksCounter).positionIsTolerable_1cydwb_k$ = function (prevClick, newClick) {
    var diff = Offset__minus_impl_hoj2c0(newClick.get_position_kw508q_k$(), prevClick.get_position_kw508q_k$());
    return Offset__getDistance_impl_pclvxn(diff) < this.clicksSlop_1;
  };
  function awaitMouseEventDown(_this__u8e3s4, $completion) {
    var tmp = new $awaitMouseEventDownCOROUTINE$6(_this__u8e3s4, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function mouseSelectionDetector$slambda$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.onExtendDrag_m0cr7o_k$(it.get_position_kw508q_k$())) {
        it.consume_spbz2t_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda$lambda_0($observer, $selectionMode) {
    return function (it) {
      var tmp;
      if ($observer.onDrag_4lf411_k$(it.get_position_kw508q_k$(), $selectionMode)) {
        it.consume_spbz2t_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function mouseSelectionDetector$slambda($observer, resultContinuation) {
    this.$observer_1 = $observer;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(mouseSelectionDetector$slambda).invoke_6kuihv_k$ = function ($this$awaitEachGesture, $completion) {
    var tmp = this.create_699gxy_k$($this$awaitEachGesture, $completion);
    tmp.set_result_ximc09_k$(Unit_getInstance());
    tmp.set_exception_pwgeox_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(mouseSelectionDetector$slambda).invoke_5zdxxo_k$ = function (p1, $completion) {
    return this.invoke_6kuihv_k$((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(mouseSelectionDetector$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(8);
            var tmp_0 = this;
            var tmp_1 = this.$this$awaitEachGesture_1.get_viewConfiguration_qgdaco_k$();
            tmp_0.clicksCounter0__1 = new ClicksCounter(tmp_1, this.$this$awaitEachGesture_1.toPx_u0ojv5_k$(_Dp___init__impl__ms3zkb(50)));
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            if (false) {
              this.set_state_a96kl8_k$(9);
              continue $sm;
            }

            this.set_state_a96kl8_k$(2);
            suspendResult = awaitMouseEventDown(this.$this$awaitEachGesture_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.down1__1 = suspendResult;
            this.downChange2__1 = this.down1__1.get_changes_dhi2my_k$().get_fkrdnv_k$(0);
            this.clicksCounter0__1.update_icrz5c_k$(this.downChange2__1);
            if (get_isShiftPressed_0(this.down1__1.get_keyboardModifiers_d2h458_k$())) {
              this.started3__1 = this.$observer_1.onExtend_dx8a28_k$(this.downChange2__1.get_position_kw508q_k$());
              if (this.started3__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this.set_state_a96kl8_k$(5);
                var tmp_2 = this.downChange2__1.get_id_o0558_k$();
                suspendResult = drag(this.$this$awaitEachGesture_1, tmp_2, mouseSelectionDetector$slambda$lambda(this.$observer_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(6);
                continue $sm;
              }
            } else {
              var tmp_3 = this;
              switch (this.clicksCounter0__1.clicks_1) {
                case 1:
                  tmp_3.selectionMode4__1 = Companion_getInstance_30().get_None_wo6tgh_k$();
                  break;
                case 2:
                  tmp_3.selectionMode4__1 = Companion_getInstance_30().get_Word_wockfn_k$();
                  break;
                default:
                  tmp_3.selectionMode4__1 = Companion_getInstance_30().get_Paragraph_2v2rol_k$();
                  break;
              }
              this.started5__1 = this.$observer_1.onStart_i02yuj_k$(this.downChange2__1.get_position_kw508q_k$(), this.selectionMode4__1);
              if (this.started5__1) {
                this.downChange2__1.consume_spbz2t_k$();
                this.set_state_a96kl8_k$(3);
                var tmp_4 = this.downChange2__1.get_id_o0558_k$();
                suspendResult = drag(this.$this$awaitEachGesture_1, tmp_4, mouseSelectionDetector$slambda$lambda_0(this.$observer_1, this.selectionMode4__1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.set_state_a96kl8_k$(4);
                continue $sm;
              }
            }

          case 3:
            this.set_state_a96kl8_k$(4);
            continue $sm;
          case 4:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 5:
            this.set_state_a96kl8_k$(6);
            continue $sm;
          case 6:
            this.set_state_a96kl8_k$(7);
            continue $sm;
          case 7:
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 8:
            throw this.get_exception_x0n6w6_k$();
          case 9:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 8) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  protoOf(mouseSelectionDetector$slambda).create_699gxy_k$ = function ($this$awaitEachGesture, completion) {
    var i = new mouseSelectionDetector$slambda(this.$observer_1, completion);
    i.$this$awaitEachGesture_1 = $this$awaitEachGesture;
    return i;
  };
  protoOf(mouseSelectionDetector$slambda).create_xubfvz_k$ = function (value, completion) {
    return this.create_699gxy_k$((!(value == null) ? isInterface(value, AwaitPointerEventScope) : false) ? value : THROW_CCE(), completion);
  };
  function mouseSelectionDetector$slambda_0($observer, resultContinuation) {
    var i = new mouseSelectionDetector$slambda($observer, resultContinuation);
    var l = function ($this$awaitEachGesture, $completion) {
      return i.invoke_6kuihv_k$($this$awaitEachGesture, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function $awaitMouseEventDownCOROUTINE$6(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  protoOf($awaitMouseEventDownCOROUTINE$6).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_s9sevl_k$(4);
            this.set_state_a96kl8_k$(1);
            continue $sm;
          case 1:
            this.set_state_a96kl8_k$(2);
            suspendResult = this._this__u8e3s4__1.awaitPointerEvent_sg5aej_k$(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.event0__1 = suspendResult;
            var tmp_0;
            if (get_isPrimaryPressed(this.event0__1.get_buttons_mb0klg_k$())) {
              var tmp$ret$0;
              l$ret$1: do {
                var tmp0_fastAll = this.event0__1.get_changes_dhi2my_k$();
                var inductionVariable = 0;
                var last = tmp0_fastAll.get_size_woubt6_k$() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = tmp0_fastAll.get_fkrdnv_k$(index);
                    if (!(item.get_type_zeflrq_k$() === Companion_getInstance_10().get_Mouse_a0dpcz_k$() ? changedToDown(item) : false)) {
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
              this.set_state_a96kl8_k$(1);
              continue $sm;
            }

            this.set_state_a96kl8_k$(3);
            continue $sm;
          case 3:
            return this.event0__1;
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_a96kl8_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_pwgeox_k$(e);
        }
      }
     while (true);
  };
  function get_TapIndicationDelay() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
  function NoOp() {
  }
  protoOf(NoOp).equals = function (other) {
    if (!(other instanceof NoOp))
      return false;
    other instanceof NoOp || THROW_CCE();
    return true;
  };
  protoOf(NoOp).hashCode = function () {
    return 0;
  };
  protoOf(NoOp).toString = function () {
    return '@androidx.compose.foundation.internal.NoOp()';
  };
  function get_SPACE_KEY_CODE() {
    _init_properties_Toggleable_jsNative_kt__wo698u();
    return SPACE_KEY_CODE;
  }
  var SPACE_KEY_CODE;
  var properties_initialized_Toggleable_jsNative_kt_qr95c;
  function _init_properties_Toggleable_jsNative_kt__wo698u() {
    if (!properties_initialized_Toggleable_jsNative_kt_qr95c) {
      properties_initialized_Toggleable_jsNative_kt_qr95c = true;
      SPACE_KEY_CODE = toLong(SkikoKey_KEY_SPACE_getInstance().get_platformKeyCode_k11s6o_k$());
    }
  }
  function textPointerHoverIcon(_this__u8e3s4, selectionRegistrar) {
    return _this__u8e3s4;
  }
  function MappedKeys() {
    MappedKeys_instance = this;
    this.A_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_A_4rac6v_k$()));
    this.C_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_C_z9yylx_k$()));
    this.H_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_H_uhjlao_k$()));
    this.V_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_V_ty3eam_k$()));
    this.X_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_X_kl84g_k$()));
    this.Y_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Y_ftxjbz_k$()));
    this.Z_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Z_v39uji_k$()));
    this.Backslash_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Backslash_wlrcta_k$()));
    this.DirectionLeft_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionLeft_nnkkvm_k$()));
    this.DirectionRight_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionRight_k294n_k$()));
    this.DirectionUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionUp_s9cb6m_k$()));
    this.DirectionDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_DirectionDown_81vop_k$()));
    this.PageUp_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_PageUp_d9v330_k$()));
    this.PageDown_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_PageDown_hz00wl_k$()));
    this.MoveHome_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_MoveHome_6w70dm_k$()));
    this.MoveEnd_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_MoveEnd_bx0ymm_k$()));
    this.Insert_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Insert_y6atub_k$()));
    this.Enter_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Enter_72nuyo_k$()));
    this.Backspace_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Backspace_g19x21_k$()));
    this.Delete_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Delete_mdp9fp_k$()));
    this.Paste_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Paste_5hb4sl_k$()));
    this.Cut_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Cut_9e92qy_k$()));
    this.Tab_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Tab_x9q08z_k$()));
    this.Copy_1 = _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Copy_i0eaup_k$()));
  }
  protoOf(MappedKeys).get_A_4rac6v_k$ = function () {
    return this.A_1;
  };
  protoOf(MappedKeys).get_C_z9yylx_k$ = function () {
    return this.C_1;
  };
  protoOf(MappedKeys).get_H_uhjlao_k$ = function () {
    return this.H_1;
  };
  protoOf(MappedKeys).get_V_ty3eam_k$ = function () {
    return this.V_1;
  };
  protoOf(MappedKeys).get_X_kl84g_k$ = function () {
    return this.X_1;
  };
  protoOf(MappedKeys).get_Y_ftxjbz_k$ = function () {
    return this.Y_1;
  };
  protoOf(MappedKeys).get_Z_v39uji_k$ = function () {
    return this.Z_1;
  };
  protoOf(MappedKeys).get_Backslash_wlrcta_k$ = function () {
    return this.Backslash_1;
  };
  protoOf(MappedKeys).get_DirectionLeft_nnkkvm_k$ = function () {
    return this.DirectionLeft_1;
  };
  protoOf(MappedKeys).get_DirectionRight_k294n_k$ = function () {
    return this.DirectionRight_1;
  };
  protoOf(MappedKeys).get_DirectionUp_s9cb6m_k$ = function () {
    return this.DirectionUp_1;
  };
  protoOf(MappedKeys).get_DirectionDown_81vop_k$ = function () {
    return this.DirectionDown_1;
  };
  protoOf(MappedKeys).get_PageUp_d9v330_k$ = function () {
    return this.PageUp_1;
  };
  protoOf(MappedKeys).get_PageDown_hz00wl_k$ = function () {
    return this.PageDown_1;
  };
  protoOf(MappedKeys).get_MoveHome_6w70dm_k$ = function () {
    return this.MoveHome_1;
  };
  protoOf(MappedKeys).get_MoveEnd_bx0ymm_k$ = function () {
    return this.MoveEnd_1;
  };
  protoOf(MappedKeys).get_Insert_y6atub_k$ = function () {
    return this.Insert_1;
  };
  protoOf(MappedKeys).get_Enter_72nuyo_k$ = function () {
    return this.Enter_1;
  };
  protoOf(MappedKeys).get_Backspace_g19x21_k$ = function () {
    return this.Backspace_1;
  };
  protoOf(MappedKeys).get_Delete_mdp9fp_k$ = function () {
    return this.Delete_1;
  };
  protoOf(MappedKeys).get_Paste_5hb4sl_k$ = function () {
    return this.Paste_1;
  };
  protoOf(MappedKeys).get_Cut_9e92qy_k$ = function () {
    return this.Cut_1;
  };
  protoOf(MappedKeys).get_Tab_x9q08z_k$ = function () {
    return this.Tab_1;
  };
  protoOf(MappedKeys).get_Copy_i0eaup_k$ = function () {
    return this.Copy_1;
  };
  var MappedKeys_instance;
  function MappedKeys_getInstance() {
    if (MappedKeys_instance == null)
      new MappedKeys();
    return MappedKeys_instance;
  }
  function get_Space(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_Spacebar_678yqv_k$()));
  }
  function get_F(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_F_a0vu9e_k$()));
  }
  function get_B(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_B_k0mnee_k$()));
  }
  function get_P(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_P_kk2ueg_k$()));
  }
  function get_N(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_N_9yls0m_k$()));
  }
  function get_E(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_E_58ggy5_k$()));
  }
  function get_D(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_D_khss5o_k$()));
  }
  function get_K(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_K_fahcbx_k$()));
  }
  function get_O(_this__u8e3s4) {
    return _Key___init__impl__p6mluu(_Key___get_keyCode__impl__ymzu5v(Companion_getInstance_23().get_O_5aqj6x_k$()));
  }
  function get_platformDefaultKeyMapping() {
    _init_properties_KeyMapping_jsMain_kt__uqr90x();
    return platformDefaultKeyMapping;
  }
  var platformDefaultKeyMapping;
  function createPlatformDefaultKeyMapping(platform) {
    _init_properties_KeyMapping_jsMain_kt__uqr90x();
    return platform.get_ordinal_ip24qg_k$() === 3 ? createMacosDefaultKeyMapping() : get_defaultKeyMapping();
  }
  var properties_initialized_KeyMapping_jsMain_kt_bmmgcx;
  function _init_properties_KeyMapping_jsMain_kt__uqr90x() {
    if (!properties_initialized_KeyMapping_jsMain_kt_bmmgcx) {
      properties_initialized_KeyMapping_jsMain_kt_bmmgcx = true;
      platformDefaultKeyMapping = createPlatformDefaultKeyMapping(get_hostOs());
    }
  }
  function get_DefaultCursorThickness() {
    _init_properties_TextFieldCursor_js_kt__21fcek();
    return DefaultCursorThickness;
  }
  var DefaultCursorThickness;
  var properties_initialized_TextFieldCursor_js_kt_4q87vu;
  function _init_properties_TextFieldCursor_js_kt__21fcek() {
    if (!properties_initialized_TextFieldCursor_js_kt_4q87vu) {
      properties_initialized_TextFieldCursor_js_kt_4q87vu = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      DefaultCursorThickness = _Dp___init__impl__ms3zkb(1);
    }
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
  function get_mainScope() {
    _init_properties_Actuals_jsWasm_kt__g9jr6e();
    return mainScope;
  }
  var mainScope;
  var properties_initialized_Actuals_jsWasm_kt_rhb8zc;
  function _init_properties_Actuals_jsWasm_kt__g9jr6e() {
    if (!properties_initialized_Actuals_jsWasm_kt_rhb8zc) {
      properties_initialized_Actuals_jsWasm_kt_rhb8zc = true;
      mainScope = MainScope();
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
    var tmp0 = $composer_1.consume_11nid3_k$(tmp0_$get_current$$composable_h5ksy7);
    sourceInformationMarkerEnd($composer_1);
    var tmp0_0 = tmp0.equals(SystemTheme_Dark_getInstance());
    if (isTraceInProgress()) {
      traceEventEnd();
    }
    sourceInformationMarkerEnd($composer_0);
    return tmp0_0;
  }
  function get_LocalScrollbarStyle() {
    _init_properties_Scrollbar_skiko_kt__fccvqz();
    return LocalScrollbarStyle;
  }
  var LocalScrollbarStyle;
  function get_$stableprop_13() {
    return 0;
  }
  function ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    this.minimalHeight_1 = minimalHeight;
    this.thickness_1 = thickness;
    this.shape_1 = shape;
    this.hoverDurationMillis_1 = hoverDurationMillis;
    this.unhoverColor_1 = unhoverColor;
    this.hoverColor_1 = hoverColor;
    this.$stable_1 = 0;
  }
  protoOf(ScrollbarStyle).get_minimalHeight_9dvsue_k$ = function () {
    return this.minimalHeight_1;
  };
  protoOf(ScrollbarStyle).get_thickness_djs6pm_k$ = function () {
    return this.thickness_1;
  };
  protoOf(ScrollbarStyle).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(ScrollbarStyle).get_hoverDurationMillis_fsut4d_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  protoOf(ScrollbarStyle).get_unhoverColor_96j3qm_k$ = function () {
    return this.unhoverColor_1;
  };
  protoOf(ScrollbarStyle).get_hoverColor_tw7xxn_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ScrollbarStyle).component1_z2a8sv_k$ = function () {
    return this.minimalHeight_1;
  };
  protoOf(ScrollbarStyle).component2_11tj3k_k$ = function () {
    return this.thickness_1;
  };
  protoOf(ScrollbarStyle).component3_7eebsa_k$ = function () {
    return this.shape_1;
  };
  protoOf(ScrollbarStyle).component4_7eebs9_k$ = function () {
    return this.hoverDurationMillis_1;
  };
  protoOf(ScrollbarStyle).component5_6mmcoz_k$ = function () {
    return this.unhoverColor_1;
  };
  protoOf(ScrollbarStyle).component6_ust31e_k$ = function () {
    return this.hoverColor_1;
  };
  protoOf(ScrollbarStyle).copy_n0gxs4_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) {
    return new ScrollbarStyle(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor);
  };
  protoOf(ScrollbarStyle).copy$default_52qtxe_k$ = function (minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor, $super) {
    minimalHeight = minimalHeight === VOID ? this.minimalHeight_1 : minimalHeight;
    thickness = thickness === VOID ? this.thickness_1 : thickness;
    shape = shape === VOID ? this.shape_1 : shape;
    hoverDurationMillis = hoverDurationMillis === VOID ? this.hoverDurationMillis_1 : hoverDurationMillis;
    unhoverColor = unhoverColor === VOID ? this.unhoverColor_1 : unhoverColor;
    hoverColor = hoverColor === VOID ? this.hoverColor_1 : hoverColor;
    return $super === VOID ? this.copy_n0gxs4_k$(minimalHeight, thickness, shape, hoverDurationMillis, unhoverColor, hoverColor) : $super.copy_n0gxs4_k$.call(this, new Dp(minimalHeight), new Dp(thickness), shape, hoverDurationMillis, new Color(unhoverColor), new Color(hoverColor));
  };
  protoOf(ScrollbarStyle).toString = function () {
    return 'ScrollbarStyle(minimalHeight=' + new Dp(this.minimalHeight_1) + ', thickness=' + new Dp(this.thickness_1) + ', shape=' + this.shape_1 + ', hoverDurationMillis=' + this.hoverDurationMillis_1 + ', unhoverColor=' + new Color(this.unhoverColor_1) + ', hoverColor=' + new Color(this.hoverColor_1) + ')';
  };
  protoOf(ScrollbarStyle).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.minimalHeight_1);
    result = imul(result, 31) + Dp__hashCode_impl_sxkrra(this.thickness_1) | 0;
    result = imul(result, 31) + hashCode(this.shape_1) | 0;
    result = imul(result, 31) + this.hoverDurationMillis_1 | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.unhoverColor_1) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.hoverColor_1) | 0;
    return result;
  };
  protoOf(ScrollbarStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ScrollbarStyle))
      return false;
    var tmp0_other_with_cast = other instanceof ScrollbarStyle ? other : THROW_CCE();
    if (!equals(this.minimalHeight_1, tmp0_other_with_cast.minimalHeight_1))
      return false;
    if (!equals(this.thickness_1, tmp0_other_with_cast.thickness_1))
      return false;
    if (!equals(this.shape_1, tmp0_other_with_cast.shape_1))
      return false;
    if (!(this.hoverDurationMillis_1 === tmp0_other_with_cast.hoverDurationMillis_1))
      return false;
    if (!equals(this.unhoverColor_1, tmp0_other_with_cast.unhoverColor_1))
      return false;
    if (!equals(this.hoverColor_1, tmp0_other_with_cast.hoverColor_1))
      return false;
    return true;
  };
  function defaultScrollbarStyle() {
    _init_properties_Scrollbar_skiko_kt__fccvqz();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp = _Dp___init__impl__ms3zkb(16);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_0 = _Dp___init__impl__ms3zkb(8);
    var tmp$ret$2;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp$ret$2 = _Dp___init__impl__ms3zkb(4);
    return new ScrollbarStyle(tmp, tmp_0, RoundedCornerShape_2(tmp$ret$2), 300, Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_wh3yn9_k$(), 0.12), Color__copy$default_impl_ectz3s(Companion_getInstance().get_Black_wh3yn9_k$(), 0.5));
  }
  function LocalScrollbarStyle$lambda() {
    _init_properties_Scrollbar_skiko_kt__fccvqz();
    return defaultScrollbarStyle();
  }
  var properties_initialized_Scrollbar_skiko_kt_aq3a4d;
  function _init_properties_Scrollbar_skiko_kt__fccvqz() {
    if (!properties_initialized_Scrollbar_skiko_kt_aq3a4d) {
      properties_initialized_Scrollbar_skiko_kt_aq3a4d = true;
      LocalScrollbarStyle = staticCompositionLocalOf(LocalScrollbarStyle$lambda);
    }
  }
  function createMacosDefaultKeyMapping() {
    var common = commonKeyMapping(isMetaPressed$factory());
    return new createMacosDefaultKeyMapping$1(common);
  }
  function createMacosDefaultKeyMapping$1($common) {
    this.$common_1 = $common;
  }
  protoOf(createMacosDefaultKeyMapping$1).map_qbm95i_k$ = function (event) {
    var tmp;
    if (get_isMetaPressed(event) ? get_isCtrlPressed(event) : false) {
      var tmp0_subject = get_key_0(event);
      tmp = equals(tmp0_subject, get_Space(MappedKeys_getInstance())) ? KeyCommand_CHARACTER_PALETTE_getInstance() : null;
    } else if (get_isShiftPressed(event) ? get_isAltPressed(event) : false) {
      var tmp1_subject = get_key_0(event);
      tmp = equals(tmp1_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_SELECT_PREV_PARAGRAPH_getInstance() : equals(tmp1_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_SELECT_NEXT_PARAGRAPH_getInstance() : null;
    } else if (get_isShiftPressed(event) ? get_isMetaPressed(event) : false) {
      var tmp2_subject = get_key_0(event);
      tmp = equals(tmp2_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_SELECT_LINE_LEFT_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_SELECT_LINE_RIGHT_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_SELECT_HOME_getInstance() : equals(tmp2_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_SELECT_END_getInstance() : null;
    } else if (get_isMetaPressed(event)) {
      var tmp3_subject = get_key_0(event);
      tmp = equals(tmp3_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_LINE_LEFT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_LINE_RIGHT_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_HOME_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_END_getInstance() : equals(tmp3_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_FROM_LINE_START_getInstance() : null;
    } else if ((get_isCtrlPressed(event) ? get_isShiftPressed(event) : false) ? get_isAltPressed(event) : false) {
      var tmp4_subject = get_key_0(event);
      tmp = equals(tmp4_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_SELECT_RIGHT_WORD_getInstance() : equals(tmp4_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_SELECT_LEFT_WORD_getInstance() : null;
    } else if (get_isCtrlPressed(event) ? get_isAltPressed(event) : false) {
      var tmp5_subject = get_key_0(event);
      tmp = equals(tmp5_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp5_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_LEFT_WORD_getInstance() : null;
    } else if (get_isCtrlPressed(event) ? get_isShiftPressed(event) : false) {
      var tmp6_subject = get_key_0(event);
      tmp = equals(tmp6_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_SELECT_RIGHT_CHAR_getInstance() : equals(tmp6_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_SELECT_LEFT_CHAR_getInstance() : equals(tmp6_subject, get_P(MappedKeys_getInstance())) ? KeyCommand_SELECT_UP_getInstance() : equals(tmp6_subject, get_N(MappedKeys_getInstance())) ? KeyCommand_SELECT_DOWN_getInstance() : equals(tmp6_subject, MappedKeys_getInstance().get_A_4rac6v_k$()) ? KeyCommand_SELECT_LINE_START_getInstance() : equals(tmp6_subject, get_E(MappedKeys_getInstance())) ? KeyCommand_SELECT_LINE_END_getInstance() : null;
    } else if (get_isCtrlPressed(event)) {
      var tmp7_subject = get_key_0(event);
      tmp = equals(tmp7_subject, get_F(MappedKeys_getInstance())) ? KeyCommand_LEFT_CHAR_getInstance() : equals(tmp7_subject, get_B(MappedKeys_getInstance())) ? KeyCommand_RIGHT_CHAR_getInstance() : equals(tmp7_subject, get_P(MappedKeys_getInstance())) ? KeyCommand_UP_getInstance() : equals(tmp7_subject, get_N(MappedKeys_getInstance())) ? KeyCommand_DOWN_getInstance() : equals(tmp7_subject, MappedKeys_getInstance().get_A_4rac6v_k$()) ? KeyCommand_LINE_START_getInstance() : equals(tmp7_subject, get_E(MappedKeys_getInstance())) ? KeyCommand_LINE_END_getInstance() : equals(tmp7_subject, MappedKeys_getInstance().get_H_uhjlao_k$()) ? KeyCommand_DELETE_PREV_CHAR_getInstance() : equals(tmp7_subject, get_D(MappedKeys_getInstance())) ? KeyCommand_DELETE_NEXT_CHAR_getInstance() : equals(tmp7_subject, get_K(MappedKeys_getInstance())) ? KeyCommand_DELETE_TO_LINE_END_getInstance() : equals(tmp7_subject, get_O(MappedKeys_getInstance())) ? KeyCommand_NEW_LINE_getInstance() : null;
    } else if (get_isShiftPressed(event)) {
      var tmp8_subject = get_key_0(event);
      tmp = equals(tmp8_subject, MappedKeys_getInstance().get_MoveHome_6w70dm_k$()) ? KeyCommand_SELECT_HOME_getInstance() : equals(tmp8_subject, MappedKeys_getInstance().get_MoveEnd_bx0ymm_k$()) ? KeyCommand_SELECT_END_getInstance() : null;
    } else if (get_isAltPressed(event)) {
      var tmp9_subject = get_key_0(event);
      tmp = equals(tmp9_subject, MappedKeys_getInstance().get_DirectionLeft_nnkkvm_k$()) ? KeyCommand_LEFT_WORD_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_DirectionRight_k294n_k$()) ? KeyCommand_RIGHT_WORD_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_DirectionUp_s9cb6m_k$()) ? KeyCommand_PREV_PARAGRAPH_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_DirectionDown_81vop_k$()) ? KeyCommand_NEXT_PARAGRAPH_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_Delete_mdp9fp_k$()) ? KeyCommand_DELETE_NEXT_WORD_getInstance() : equals(tmp9_subject, MappedKeys_getInstance().get_Backspace_g19x21_k$()) ? KeyCommand_DELETE_PREV_WORD_getInstance() : null;
    } else {
      tmp = null;
    }
    var tmp10_elvis_lhs = tmp;
    return tmp10_elvis_lhs == null ? this.$common_1.map_qbm95i_k$(event) : tmp10_elvis_lhs;
  };
  function isMetaPressed$factory() {
    return getPropertyCallableRef('isMetaPressed', 1, KProperty1, function (receiver) {
      return get_isMetaPressed(receiver.nativeKeyEvent_1);
    }, null);
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_24().makeCharacterInstance$default_lxnpdw_k$();
    it.setText_nscvi8_k$(_this__u8e3s4);
    return it.following_1lapf4_k$(index);
  }
  function findPrecedingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_24().makeCharacterInstance$default_lxnpdw_k$();
    it.setText_nscvi8_k$(_this__u8e3s4);
    return it.preceding_i4vixu_k$(index);
  }
  //region block: post-declaration
  protoOf(BackgroundElement).foldIn_u08fre_k$ = foldIn;
  protoOf(BackgroundElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(BackgroundElement).any_hrontp_k$ = any;
  protoOf(BackgroundElement).all_ctzlrs_k$ = all;
  protoOf(BackgroundElement).then_5qw5wu_k$ = then;
  protoOf(BackgroundNode).onMeasureResultChanged_ios7d3_k$ = onMeasureResultChanged;
  protoOf(BorderModifierNodeElement).foldIn_u08fre_k$ = foldIn;
  protoOf(BorderModifierNodeElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(BorderModifierNodeElement).any_hrontp_k$ = any;
  protoOf(BorderModifierNodeElement).all_ctzlrs_k$ = all;
  protoOf(BorderModifierNodeElement).then_5qw5wu_k$ = then;
  protoOf(FocusableInNonTouchModeElement$1).foldIn_u08fre_k$ = foldIn;
  protoOf(FocusableInNonTouchModeElement$1).foldOut_4ty55p_k$ = foldOut;
  protoOf(FocusableInNonTouchModeElement$1).any_hrontp_k$ = any;
  protoOf(FocusableInNonTouchModeElement$1).all_ctzlrs_k$ = all;
  protoOf(FocusableInNonTouchModeElement$1).then_5qw5wu_k$ = then;
  protoOf(DefaultScrollMotionDurationScale$1).get_key_18j28a_k$ = get_key;
  protoOf(DefaultScrollMotionDurationScale$1).get_j1ktw6_k$ = get;
  protoOf(DefaultScrollMotionDurationScale$1).fold_iindx8_k$ = fold;
  protoOf(DefaultScrollMotionDurationScale$1).minusKey_y21q55_k$ = minusKey;
  protoOf(DefaultScrollMotionDurationScale$1).plus_rgw9wi_k$ = plus;
  protoOf(ConsumeAllFlingOnDirection).onPreScroll_lxl9op_k$ = onPreScroll;
  protoOf(ConsumeAllFlingOnDirection).onPreFling_xhlpmx_k$ = onPreFling;
  protoOf(UnitDensity$1).toPx_u0ojv5_k$ = toPx;
  protoOf(UnitDensity$1).toPx_x7oik4_k$ = toPx_0;
  protoOf(UnitDensity$1).roundToPx_hl1u8z_k$ = roundToPx;
  protoOf(UnitDensity$1).roundToPx_bdej4u_k$ = roundToPx_0;
  protoOf(UnitDensity$1).toSp_ul0xj8_k$ = toSp;
  protoOf(UnitDensity$1).toSp_8a8emd_k$ = toSp_0;
  protoOf(UnitDensity$1).toSp_j4kre0_k$ = toSp_1;
  protoOf(UnitDensity$1).toDp_amhzyl_k$ = toDp;
  protoOf(UnitDensity$1).toDp_2eugbd_k$ = toDp_0;
  protoOf(UnitDensity$1).toDp_2y47ho_k$ = toDp_1;
  protoOf(UnitDensity$1).toRect_l767f3_k$ = toRect;
  protoOf(UnitDensity$1).toSize_z60fpn_k$ = toSize_0;
  protoOf(UnitDensity$1).toDpSize_ncjzav_k$ = toDpSize;
  protoOf(PercentCornerSize).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(PercentCornerSize).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(DpCornerSize).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(DpCornerSize).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(ZeroCornerSize$1).get_inspectableElements_mab2zo_k$ = get_inspectableElements;
  protoOf(ZeroCornerSize$1).get_nameFallback_yn6bx2_k$ = get_nameFallback;
  protoOf(EmptyMeasurePolicy).minIntrinsicWidth_h4fdo9_k$ = minIntrinsicWidth;
  protoOf(EmptyMeasurePolicy).minIntrinsicHeight_n7gxym_k$ = minIntrinsicHeight;
  protoOf(EmptyMeasurePolicy).maxIntrinsicWidth_4tn57d_k$ = maxIntrinsicWidth;
  protoOf(EmptyMeasurePolicy).maxIntrinsicHeight_6rhckk_k$ = maxIntrinsicHeight;
  protoOf(SelectableTextAnnotatedStringElement).foldIn_u08fre_k$ = foldIn;
  protoOf(SelectableTextAnnotatedStringElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(SelectableTextAnnotatedStringElement).any_hrontp_k$ = any;
  protoOf(SelectableTextAnnotatedStringElement).all_ctzlrs_k$ = all;
  protoOf(SelectableTextAnnotatedStringElement).then_5qw5wu_k$ = then;
  protoOf(SelectableTextAnnotatedStringNode).onMeasureResultChanged_ios7d3_k$ = onMeasureResultChanged;
  protoOf(TextAnnotatedStringElement).foldIn_u08fre_k$ = foldIn;
  protoOf(TextAnnotatedStringElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(TextAnnotatedStringElement).any_hrontp_k$ = any;
  protoOf(TextAnnotatedStringElement).all_ctzlrs_k$ = all;
  protoOf(TextAnnotatedStringElement).then_5qw5wu_k$ = then;
  protoOf(TextAnnotatedStringNode).onMeasureResultChanged_ios7d3_k$ = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).get_shouldClearDescendantSemantics_glb41r_k$ = get_shouldClearDescendantSemantics;
  protoOf(TextAnnotatedStringNode).get_shouldMergeDescendantSemantics_tbewdw_k$ = get_shouldMergeDescendantSemantics;
  protoOf(TextStringSimpleElement).foldIn_u08fre_k$ = foldIn;
  protoOf(TextStringSimpleElement).foldOut_4ty55p_k$ = foldOut;
  protoOf(TextStringSimpleElement).any_hrontp_k$ = any;
  protoOf(TextStringSimpleElement).all_ctzlrs_k$ = all;
  protoOf(TextStringSimpleElement).then_5qw5wu_k$ = then;
  protoOf(TextStringSimpleNode).onMeasureResultChanged_ios7d3_k$ = onMeasureResultChanged;
  protoOf(TextStringSimpleNode).get_shouldClearDescendantSemantics_glb41r_k$ = get_shouldClearDescendantSemantics;
  protoOf(TextStringSimpleNode).get_shouldMergeDescendantSemantics_tbewdw_k$ = get_shouldMergeDescendantSemantics;
  protoOf(MultiWidgetSelectionDelegate).updateSelection$default_rv37dy_k$ = updateSelection$default;
  //endregion
  //region block: init
  DefaultScrollMotionDurationScaleFactor = 1.0;
  DefaultMinLines = 1;
  DefaultWidthCharCount = 10;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  DefaultWidthCharCount_0 = 10;
  TapIndicationDelay = new Long(0, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Cancel;
  _.$_$.b = Start;
  _.$_$.c = Stop;
  _.$_$.d = Focus;
  _.$_$.e = Unfocus;
  _.$_$.f = Enter;
  _.$_$.g = Exit;
  _.$_$.h = Interaction;
  _.$_$.i = Cancel_0;
  _.$_$.j = Press;
  _.$_$.k = Release;
  _.$_$.l = collectIsFocusedAsState$composable;
  _.$_$.m = get_CircleShape;
  _.$_$.n = CornerSize_1;
  _.$_$.o = RoundedCornerShape_2;
  _.$_$.p = RoundedCornerShape_3;
  _.$_$.q = get_LocalTextSelectionColors;
  _.$_$.r = TextSelectionColors;
  _.$_$.s = BasicText$composable;
  _.$_$.t = BorderStroke;
  _.$_$.u = IndicationInstance;
  _.$_$.v = Indication;
  _.$_$.w = get_LocalIndication;
  _.$_$.x = background;
  _.$_$.y = border;
  _.$_$.z = isSystemInDarkTheme$composable;
  //endregion
  return _;
}));
