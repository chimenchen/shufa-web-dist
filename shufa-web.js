let U=`utf-8`,_=`function`,a8=400,S=null,T=`undefined`,Z=4,a2=4294967297,Q=128,a0=`string`,Y=1,a1=`Object`,W=0,P=Array,a6=Date,V=Error,$=FinalizationRegistry,a5=Object,a9=Object.getPrototypeOf,a4=Promise,a3=Reflect,X=Uint8Array,a7=globalThis,R=undefined;var B=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==S){return `${a}`};if(b==a0){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==S){return `Symbol`}else{return `Symbol(${b})`}};if(b==_){const b=a.name;if(typeof b==a0&&b.length>W){return `Function(${b})`}else{return `Function`}};if(P.isArray(a)){const b=a.length;let c=`[`;if(b>W){c+=B(a[W])};for(let d=Y;d<b;d++){c+=`, `+ B(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c&&c.length>Y){d=c[Y]}else{return toString.call(a)};if(d==a1){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a1}};if(a instanceof V){return `${a.name}: ${a.message}\n${a.stack}`};return d});var x=((a,b)=>{a=a>>>W;return w().subarray(a/Y,a/Y+ b)});var L=((a,b)=>{});var E=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1952c031cf97babb(c,d,D(e))}finally{b[C++]=R}});var H=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0bd8d7adfc10b67c(c,d,D(e))}finally{b[C++]=R}});function j(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(i(b))}}var w=(()=>{if(v===S||v.byteLength===W){v=new Uint8ClampedArray(a.memory.buffer)};return v});var k=(a=>a===R||a===S);var c=(a=>b[a]);var m=((a,b)=>{const c=b(a.length*Y,Y)>>>W;f().set(a,c/Y);l=a.length;return c});var F=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hf1a47ab81f338216(b,c)});var K=(()=>{const b={};b.wbg={};b.wbg.__wbg_addEventListener_37872d53aeb4c65a=function(){return j(((a,b,d,e,f)=>{c(a).addEventListener(g(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_addEventListener_b9481c2c2cab6047=function(){return j(((a,b,d,e)=>{c(a).addEventListener(g(b,d),c(e))}),arguments)};b.wbg.__wbg_body_8d7d8c4aa91dcad8=(a=>{const b=c(a).body;return k(b)?W:i(b)});b.wbg.__wbg_bubbles_48182817f8ec169f=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_buffer_61b7ce01341d7f88=(a=>{const b=c(a).buffer;return i(b)});b.wbg.__wbg_cachekey_57601dac16343711=(a=>{const b=c(a).__yew_subtree_cache_key;return k(b)?a2:b>>>W});b.wbg.__wbg_call_500db948e69c7330=function(){return j(((a,b,d)=>{const e=c(a).call(c(b),c(d));return i(e)}),arguments)};b.wbg.__wbg_call_b0d8e36992d9900d=function(){return j(((a,b)=>{const d=c(a).call(c(b));return i(d)}),arguments)};b.wbg.__wbg_cancelBubble_4f3b0a3179912b26=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_captureToCanvas_49c091cb051cab43=((a,b)=>{const c=window.captureToCanvas(g(a,b));return i(c)});b.wbg.__wbg_checked_fc3b0aba823c9a35=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_childNodes_609b812b2d01cb84=(a=>{const b=c(a).childNodes;return i(b)});b.wbg.__wbg_clearRect_2f56fc6c57073abe=((a,b,d,e,f)=>{c(a).clearRect(b,d,e,f)});b.wbg.__wbg_click_075a28967f9a936c=(a=>{c(a).click()});b.wbg.__wbg_clientHeight_ee299647f82a654c=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_clientWidth_b7fb680348cb88d4=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientX_18c5fbacc6398ad8=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientX_f73b86b8aba3591d=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_0974153484cf0d09=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_clientY_af033356579f2b9c=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_cloneNode_d247de63446fb130=function(){return j((a=>{const b=c(a).cloneNode();return i(b)}),arguments)};b.wbg.__wbg_composedPath_3a3f292fe1666e00=(a=>{const b=c(a).composedPath();return i(b)});b.wbg.__wbg_confirm_58b6bfacd04fa800=function(){return j(((a,b,d)=>{const e=c(a).confirm(g(b,d));return e}),arguments)};b.wbg.__wbg_createElementNS_494cc14f5fdee138=function(){return j(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===W?R:g(b,d),g(e,f));return i(h)}),arguments)};b.wbg.__wbg_createElement_89923fcb809656b7=function(){return j(((a,b,d)=>{const e=c(a).createElement(g(b,d));return i(e)}),arguments)};b.wbg.__wbg_createTextNode_457c122eb9cb5753=((a,b,d)=>{const e=c(a).createTextNode(g(b,d));return i(e)});b.wbg.__wbg_crypto_ed58b8e10a292839=(a=>{const b=c(a).crypto;return i(b)});b.wbg.__wbg_data_3ba00521691343fc=((b,d)=>{const e=c(d).data;const f=m(e,a.__wbindgen_malloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_debug_19114f11037e4658=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_document_f11bc4f7c03e1745=(a=>{const b=c(a).document;return k(b)?W:i(b)});b.wbg.__wbg_drawImage_93dc15f8b94cd4b6=function(){return j(((a,b,d,e)=>{c(a).drawImage(c(b),d,e)}),arguments)};b.wbg.__wbg_error_3c7d958458bf649b=((b,c)=>{var d=r(b,c).slice();a.__wbindgen_free(b,c*Z,Z);console.error(...d)});b.wbg.__wbg_error_483d659117b6f3f6=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_error_7534b8e9a36f1ab4=((b,c)=>{let d;let e;try{d=b;e=c;console.error(g(b,c))}finally{a.__wbindgen_free(d,e,Y)}});b.wbg.__wbg_error_fab41a42d22bf2bc=(a=>{console.error(c(a))});b.wbg.__wbg_fetch_229368eecee9d217=((a,b)=>{const d=c(a).fetch(c(b));return i(d)});b.wbg.__wbg_fetch_e26fdd92ea39f634=((a,b)=>{const d=c(a).fetch(c(b));return i(d)});b.wbg.__wbg_from_d68eaa96dba25449=(a=>{const b=P.from(c(a));return i(b)});b.wbg.__wbg_getContext_5eaf5645cd6acb46=function(){return j(((a,b,d)=>{const e=c(a).getContext(g(b,d));return k(e)?W:i(e)}),arguments)};b.wbg.__wbg_getImageData_eb8a47512c21d5f8=function(){return j(((a,b,d,e,f)=>{const g=c(a).getImageData(b,d,e,f);return i(g)}),arguments)};b.wbg.__wbg_getItem_badd23d1a06e7b19=function(){return j(((b,d,e,f)=>{const h=c(d).getItem(g(e,f));var i=k(h)?W:u(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;o().setInt32(b+ Z*Y,j,!0);o().setInt32(b+ Z*W,i,!0)}),arguments)};b.wbg.__wbg_getRandomValues_bcb4912f16000dc4=function(){return j(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbg_getTime_ab8b72009983c537=(a=>{const b=c(a).getTime();return b});b.wbg.__wbg_getTimezoneOffset_ec375e661c590c7a=(a=>{const b=c(a).getTimezoneOffset();return b});b.wbg.__wbg_get_9aa3dff3f0266054=((a,b)=>{const d=c(a)[b>>>W];return i(d)});b.wbg.__wbg_get_bbccf8970793c087=function(){return j(((a,b)=>{const d=a3.get(c(a),c(b));return i(d)}),arguments)};b.wbg.__wbg_get_dfac72a5ffb577cc=((a,b)=>{const d=c(a)[b>>>W];return k(d)?W:i(d)});b.wbg.__wbg_host_428e6a6189a92c91=(a=>{const b=c(a).host;return i(b)});b.wbg.__wbg_info_18e75e6ce8a36a90=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_insertBefore_4b32ede81cf15b43=function(){return j(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return i(e)}),arguments)};b.wbg.__wbg_instanceof_CanvasRenderingContext2d_23b21317d73228be=(a=>{let b;try{b=c(a) instanceof CanvasRenderingContext2D}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Element_0f1680908791f190=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Error_2b29c5b4afac4e22=(a=>{let b;try{b=c(a) instanceof V}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_HtmlCanvasElement_f764441ef5ddb63f=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_HtmlElement_d94ed69c6883a691=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_MouseEvent_787ad126d660293f=(a=>{let b;try{b=c(a) instanceof MouseEvent}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Promise_0aa3a90cfe6672c9=(a=>{let b;try{b=c(a) instanceof a4}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Response_d3453657e10c4300=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_ShadowRoot_184d5b63318b09e5=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Window_d2514c6a7ee7ba60=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_WorkerGlobalScope_b32c94246142a6a7=(a=>{let b;try{b=c(a) instanceof WorkerGlobalScope}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_is_e442492d1fb7967b=((a,b)=>{const d=a5.is(c(a),c(b));return d});b.wbg.__wbg_lastChild_a1995c15767ea782=(a=>{const b=c(a).lastChild;return k(b)?W:i(b)});b.wbg.__wbg_length_d65cf0786bfc5739=(a=>{const b=c(a).length;return b});b.wbg.__wbg_listenerid_ed1678830a5b97ec=(a=>{const b=c(a).__yew_listener_id;return k(b)?a2:b>>>W});b.wbg.__wbg_localStorage_9ca2da984fd56239=function(){return j((a=>{const b=c(a).localStorage;return k(b)?W:i(b)}),arguments)};b.wbg.__wbg_log_bc77772961bf21bb=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_message_7bde112094278773=(a=>{const b=c(a).message;return i(b)});b.wbg.__wbg_msCrypto_0a36e2ec3a343d26=(a=>{const b=c(a).msCrypto;return i(b)});b.wbg.__wbg_name_ae6b09babb81aa7d=(a=>{const b=c(a).name;return i(b)});b.wbg.__wbg_namespaceURI_85b8a45764ae1d6e=((b,d)=>{const e=c(d).namespaceURI;var f=k(e)?W:u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_naturalHeight_fef97d59bd5d92df=(a=>{const b=c(a).naturalHeight;return b});b.wbg.__wbg_naturalWidth_e180d08f8e767c7a=(a=>{const b=c(a).naturalWidth;return b});b.wbg.__wbg_new0_55477545727914d9=(()=>{const a=new a6();return i(a)});b.wbg.__wbg_new_17f755666e48d1d8=function(){return j(((a,b)=>{const c=new URL(g(a,b));return i(c)}),arguments)};b.wbg.__wbg_new_35d748855c4620b9=function(){return j((()=>{const a=new Headers();return i(a)}),arguments)};b.wbg.__wbg_new_3ff5b33b1ce712df=(a=>{const b=new X(c(a));return i(b)});b.wbg.__wbg_new_41257536af60ed14=(a=>{const b=new a6(c(a));return i(b)});b.wbg.__wbg_new_688846f374351c92=(()=>{const a=new a5();return i(a)});b.wbg.__wbg_new_8a6f238a6ece86ea=(()=>{const a=new V();return i(a)});b.wbg.__wbg_new_a3eaec3587e1fb84=function(){return j((()=>{const a=new URLSearchParams();return i(a)}),arguments)};b.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d=((a,b)=>{const c=new Function(g(a,b));return i(c)});b.wbg.__wbg_newwithbyteoffsetandlength_ba35896968751d91=((a,b,d)=>{const e=new X(c(a),b>>>W,d>>>W);return i(e)});b.wbg.__wbg_newwithlength_34ce8f1051e74449=(a=>{const b=new X(a>>>W);return i(b)});b.wbg.__wbg_newwithstr_6dc08c9fc8762dbd=function(){return j(((a,b)=>{const c=new Request(g(a,b));return i(c)}),arguments)};b.wbg.__wbg_newwithstrandinit_a1f6583f20e4faff=function(){return j(((a,b,d)=>{const e=new Request(g(a,b),c(d));return i(e)}),arguments)};b.wbg.__wbg_newwithu8clampedarrayandsh_9792f5d240418183=function(){return j(((a,b,c,d)=>{const e=new ImageData(x(a,b),c>>>W,d>>>W);return i(e)}),arguments)};b.wbg.__wbg_nextSibling_f1b7916c306c9a9f=(a=>{const b=c(a).nextSibling;return k(b)?W:i(b)});b.wbg.__wbg_node_02999533c4ea02e3=(a=>{const b=c(a).node;return i(b)});b.wbg.__wbg_now_64d0bb151e5d3889=(()=>{const a=a6.now();return a});b.wbg.__wbg_outerHTML_23b92e7039b77dad=((b,d)=>{const e=c(d).outerHTML;const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_parentElement_41c6f5f746ea74cf=(a=>{const b=c(a).parentElement;return k(b)?W:i(b)});b.wbg.__wbg_parentNode_dfffcfb63c8a6cac=(a=>{const b=c(a).parentNode;return k(b)?W:i(b)});b.wbg.__wbg_preventDefault_3c86e59772d015e6=(a=>{c(a).preventDefault()});b.wbg.__wbg_process_5c1d670bc53614b8=(a=>{const b=c(a).process;return i(b)});b.wbg.__wbg_putImageData_32b5cf733605df83=function(){return j(((a,b,d,e)=>{c(a).putImageData(c(b),d,e)}),arguments)};b.wbg.__wbg_queueMicrotask_2181040e064c0dc8=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_ef9ac43769cbcc4f=(a=>{const b=c(a).queueMicrotask;return i(b)});b.wbg.__wbg_randomFillSync_ab2cfe79ebbf2740=function(){return j(((a,b)=>{c(a).randomFillSync(q(b))}),arguments)};b.wbg.__wbg_removeAttribute_013475d9f18db70a=function(){return j(((a,b,d)=>{c(a).removeAttribute(g(b,d))}),arguments)};b.wbg.__wbg_removeChild_c6861558b785880c=function(){return j(((a,b)=>{const d=c(a).removeChild(c(b));return i(d)}),arguments)};b.wbg.__wbg_removeEventListener_6f4cfa6f356575bb=function(){return j(((a,b,d,e,f)=>{c(a).removeEventListener(g(b,d),c(e),f!==W)}),arguments)};b.wbg.__wbg_requestAnimationFrame_169cbbda5861d9ca=function(){return j(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_require_79b1e9274cde3c87=function(){return j((()=>{const a=module.require;return i(a)}),arguments)};b.wbg.__wbg_resolve_0bf7c44d641804f9=(a=>{const b=a4.resolve(c(a));return i(b)});b.wbg.__wbg_search_a8f6890ada3d686f=((b,d)=>{const e=c(d).search;const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_setAttribute_148e0e65e20e5f27=function(){return j(((a,b,d,e,f)=>{c(a).setAttribute(g(b,d),g(e,f))}),arguments)};b.wbg.__wbg_setItem_37bd15ddee3594af=function(){return j(((a,b,d,e,f)=>{c(a).setItem(g(b,d),g(e,f))}),arguments)};b.wbg.__wbg_set_23d69db4e5c66a6e=((a,b,d)=>{c(a).set(c(b),d>>>W)});b.wbg.__wbg_set_4e647025551483bd=function(){return j(((a,b,d)=>{const e=a3.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbg_setcachekey_bb5f908a0e3ee714=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>W});b.wbg.__wbg_setcapture_b1387485d0f7947c=((a,b)=>{c(a).capture=b!==W});b.wbg.__wbg_setchecked_cc9be394960a6551=((a,b)=>{c(a).checked=b!==W});b.wbg.__wbg_setheaders_4c921e8e226bdfa7=((a,b)=>{c(a).headers=c(b)});b.wbg.__wbg_setheight_16d76e7fa9d506ea=((a,b)=>{c(a).height=b>>>W});b.wbg.__wbg_setimageSmoothingEnabled_0ffac6c4bfcc147a=((a,b)=>{c(a).imageSmoothingEnabled=b!==W});b.wbg.__wbg_setinnerHTML_2d75307ba8832258=((a,b,d)=>{c(a).innerHTML=g(b,d)});b.wbg.__wbg_setlistenerid_3d14d37a42484593=((a,b)=>{c(a).__yew_listener_id=b>>>W});b.wbg.__wbg_setmethod_cfc7f688ba46a6be=((a,b,d)=>{c(a).method=g(b,d)});b.wbg.__wbg_setnodeValue_2bdce51097cd14f6=((a,b,d)=>{c(a).nodeValue=b===W?R:g(b,d)});b.wbg.__wbg_setonce_87cf501e67ee47f7=((a,b)=>{c(a).once=b!==W});b.wbg.__wbg_setpassive_4e263ba5bfca97c5=((a,b)=>{c(a).passive=b!==W});b.wbg.__wbg_setsearch_420bbd8d2dbd92aa=((a,b,d)=>{c(a).search=g(b,d)});b.wbg.__wbg_setsubtreeid_32b8ceff55862e29=((a,b)=>{c(a).__yew_subtree_id=b>>>W});b.wbg.__wbg_setvalue_44c59c360ad57cf0=((a,b,d)=>{c(a).value=g(b,d)});b.wbg.__wbg_setvalue_88aa1f99f6500a1e=((a,b,d)=>{c(a).value=g(b,d)});b.wbg.__wbg_setwidth_c588fe07a7982aca=((a,b)=>{c(a).width=b>>>W});b.wbg.__wbg_stack_0ed75d68575b0f3c=((b,d)=>{const e=c(d).stack;const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3=(()=>{const a=typeof global===T?S:global;return k(a)?W:i(a)});b.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb=(()=>{const a=typeof a7===T?S:a7;return k(a)?W:i(a)});b.wbg.__wbg_static_accessor_SELF_1dc398a895c82351=(()=>{const a=typeof self===T?S:self;return k(a)?W:i(a)});b.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a=(()=>{const a=typeof window===T?S:window;return k(a)?W:i(a)});b.wbg.__wbg_stopPropagation_da43a41fec77962c=(a=>{c(a).stopPropagation()});b.wbg.__wbg_subarray_46adeb9b86949d12=((a,b,d)=>{const e=c(a).subarray(b>>>W,d>>>W);return i(e)});b.wbg.__wbg_subtreeid_e65dfcc52d403fd9=(a=>{const b=c(a).__yew_subtree_id;return k(b)?a2:b>>>W});b.wbg.__wbg_target_a8fe593e7ee79c21=(a=>{const b=c(a).target;return k(b)?W:i(b)});b.wbg.__wbg_textContent_593cb1d610df6a86=((b,d)=>{const e=c(d).textContent;var f=k(e)?W:u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_text_dfc4cb7631d2eb34=function(){return j((a=>{const b=c(a).text();return i(b)}),arguments)};b.wbg.__wbg_then_0438fad860fe38e1=((a,b)=>{const d=c(a).then(c(b));return i(d)});b.wbg.__wbg_then_0ffafeddf0e182a4=((a,b,d)=>{const e=c(a).then(c(b),c(d));return i(e)});b.wbg.__wbg_toDataURL_0751202f9af594ec=function(){return j(((b,d)=>{const e=c(d).toDataURL();const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)}),arguments)};b.wbg.__wbg_toString_a491ccf7be1ca5c9=(a=>{const b=c(a).toString();return i(b)});b.wbg.__wbg_toString_cbcf95f260c441ae=(a=>{const b=c(a).toString();return i(b)});b.wbg.__wbg_touches_464d67ccc79e7632=(a=>{const b=c(a).touches;return i(b)});b.wbg.__wbg_url_0287fc8f8dd185b7=((b,d)=>{const e=c(d).url;const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_value_2adb5f0602e19ca9=((b,d)=>{const e=c(d).value;const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_value_47fde8ea2d9fdcd5=((b,d)=>{const e=c(d).value;const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_value_a8b8b65bc31190d6=((b,d)=>{const e=c(d).value;const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbg_versions_c71aa1626a93e0a1=(a=>{const b=c(a).versions;return i(b)});b.wbg.__wbg_warn_cb8be8bbf790a5d6=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbindgen_cb_drop=(a=>{const b=q(a).original;if(b.cnt--==Y){b.a=W;return !0};const c=!1;return c});b.wbg.__wbindgen_closure_wrapper2760=((a,b,c)=>{const d=z(a,b,1218,H);return i(d)});b.wbg.__wbindgen_closure_wrapper2905=((a,b,c)=>{const d=A(a,b,1266,I);return i(d)});b.wbg.__wbindgen_closure_wrapper782=((a,b,c)=>{const d=A(a,b,a8,E);return i(d)});b.wbg.__wbindgen_closure_wrapper784=((a,b,c)=>{const d=A(a,b,a8,F);return i(d)});b.wbg.__wbindgen_closure_wrapper786=((a,b,c)=>{const d=A(a,b,a8,G);return i(d)});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=B(c(d));const f=u(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;o().setInt32(b+ Z*Y,g,!0);o().setInt32(b+ Z*W,f,!0)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===_;return b});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==S;return d});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===a0;return b});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===R;return b});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return i(b)});b.wbg.__wbindgen_number_new=(a=>{const b=a;return i(b)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return i(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{q(a)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===a0?e:R;var g=k(f)?W:u(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;o().setInt32(b+ Z*Y,h,!0);o().setInt32(b+ Z*W,g,!0)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=g(a,b);return i(c)});b.wbg.__wbindgen_throw=((a,b)=>{throw new V(g(a,b))});return b});var u=((a,b,c)=>{if(c===R){const c=s.encode(a);const d=b(c.length,Y)>>>W;f().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,Y)>>>W;const g=f();let h=W;for(;h<d;h++){const b=a.charCodeAt(h);if(b>127)break;g[e+ h]=b};if(h!==d){if(h!==W){a=a.slice(h)};e=c(e,d,d=h+ a.length*3,Y)>>>W;const b=f().subarray(e+ h,e+ d);const g=t(a,b);h+=g.written;e=c(e,d,h,Y)>>>W};l=h;return e});var J=(async(a,b)=>{if(typeof Response===_&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===_){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var I=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h68b4c4b0791de2ed(b,c,i(d))});var r=((a,b)=>{a=a>>>W;const c=o();const d=[];for(let e=a;e<a+ Z*b;e+=Z){d.push(q(c.getUint32(e,!0)))};return d});var q=(a=>{const b=c(a);p(a);return b});var i=(a=>{if(h===b.length)b.push(b.length+ Y);const c=h;h=b[c];b[c]=a;return c});var o=(()=>{if(n===S||n.buffer.detached===!0||n.buffer.detached===R&&n.buffer!==a.memory.buffer){n=new DataView(a.memory.buffer)};return n});var f=(()=>{if(e===S||e.byteLength===W){e=new X(a.memory.buffer)};return e});var O=(async(b)=>{if(a!==R)return a;if(typeof b!==T){if(a9(b)===a5.prototype){({module_or_path:b}=b)}else{console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)}};if(typeof b===T){b=new URL(`shufa-web_bg.wasm`,import.meta.url)};const c=K();if(typeof b===a0||typeof Request===_&&b instanceof Request||typeof URL===_&&b instanceof URL){b=fetch(b)};L(c);const {instance:d,module:e}=await J(await b,c);return M(d,e)});var N=(b=>{if(a!==R)return a;if(typeof b!==T){if(a9(b)===a5.prototype){({module:b}=b)}else{console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`)}};const c=K();L(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return M(d,b)});var z=((b,c,d,e)=>{const f={a:b,b:c,cnt:Y,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===W){a.__wbindgen_export_4.get(f.dtor)(f.a,f.b);f.a=W;y.unregister(f)}}};g.original=f;y.register(g,f,f);return g});var p=(a=>{if(a<132)return;b[a]=h;h=a});var M=((b,c)=>{a=b.exports;O.__wbindgen_wasm_module=c;n=S;e=S;v=S;a.__wbindgen_start();return a});var G=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h573b3e9ba04d1401(b,c,i(d))});var A=((b,c,d,e)=>{const f={a:b,b:c,cnt:Y,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=W;try{return e(c,f.b,...b)}finally{if(--f.cnt===W){a.__wbindgen_export_4.get(f.dtor)(c,f.b);y.unregister(f)}else{f.a=c}}};g.original=f;y.register(g,f,f);return g});var g=((a,b)=>{a=a>>>W;return d.decode(f().subarray(a,a+ b))});var D=(a=>{if(C==Y)throw new V(`out of js stack`);b[--C]=a;return C});let a;const b=new P(Q).fill(R);b.push(R,S,!0,!1);const d=typeof TextDecoder!==T?new TextDecoder(U,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw V(`TextDecoder not available`)}};if(typeof TextDecoder!==T){d.decode()};let e=S;let h=b.length;let l=W;let n=S;const s=typeof TextEncoder!==T?new TextEncoder(U):{encode:()=>{throw V(`TextEncoder not available`)}};const t=typeof s.encodeInto===_?((a,b)=>s.encodeInto(a,b)):((a,b)=>{const c=s.encode(a);b.set(c);return {read:a.length,written:c.length}});let v=S;const y=typeof $===T?{register:()=>{},unregister:()=>{}}:new $(b=>{a.__wbindgen_export_4.get(b.dtor)(b.a,b.b)});let C=Q;export default O;export{N as initSync}