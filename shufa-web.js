let R=0,N=null,O=`undefined`,Y=4294967297,L=128,W=`string`,a0=200,S=1,X=`Object`,P=`utf-8`,T=4,U=`function`,K=Array,Q=Error,V=FinalizationRegistry,_=Object,a1=Object.getPrototypeOf,Z=Reflect,$=globalThis,M=undefined;var y=((b,c)=>{a._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h87447ce5e1366923(b,c)});var x=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==N){return `${a}`};if(b==W){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==W&&b.length>R){return `Function(${b})`}else{return `Function`}};if(K.isArray(a)){const b=a.length;let c=`[`;if(b>R){c+=x(a[R])};for(let d=S;d<b;d++){c+=`, `+ x(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c&&c.length>S){d=c[S]}else{return toString.call(a)};if(d==X){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return X}};if(a instanceof Q){return `${a.name}: ${a.message}\n${a.stack}`};return d});var C=((c,d,e)=>{try{a._dyn_core__ops__function__Fn___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h2e809bff20d86889(c,d,A(e))}finally{b[z++]=M}});var G=((a,b)=>{});var B=((c,d,e)=>{try{a._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h66f729400090fbe8(c,d,A(e))}finally{b[z++]=M}});var p=((a,b)=>{a=a>>>R;const c=m();const d=[];for(let e=a;e<a+ T*b;e+=T){d.push(o(c.getUint32(e,!0)))};return d});var o=(a=>{const b=c(a);n(a);return b});var i=(a=>{if(h===b.length)b.push(b.length+ S);const c=h;h=b[c];b[c]=a;return c});var m=(()=>{if(l===N||l.buffer.detached===!0||l.buffer.detached===M&&l.buffer!==a.memory.buffer){l=new DataView(a.memory.buffer)};return l});function j(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(i(b))}}var J=(async(b)=>{if(a!==M)return a;if(typeof b!==O){if(a1(b)===_.prototype){({module_or_path:b}=b)}else{console.warn(`using deprecated parameters for the initialization function; pass a single object instead`)}};if(typeof b===O){b=new URL(`shufa-web_bg.wasm`,import.meta.url)};const c=F();if(typeof b===W||typeof Request===U&&b instanceof Request||typeof URL===U&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var f=(()=>{if(e===N||e.byteLength===R){e=new Uint8Array(a.memory.buffer)};return e});var k=(a=>a===M||a===N);var c=(a=>b[a]);var I=(b=>{if(a!==M)return a;if(typeof b!==O){if(a1(b)===_.prototype){({module:b}=b)}else{console.warn(`using deprecated parameters for \`initSync()\`; pass a single object instead`)}};const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var H=((b,c)=>{a=b.exports;J.__wbindgen_wasm_module=c;l=N;e=N;a.__wbindgen_start();return a});var F=(()=>{const b={};b.wbg={};b.wbg.__wbg_addEventListener_37872d53aeb4c65a=function(){return j(((a,b,d,e,f)=>{c(a).addEventListener(g(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_addEventListener_b9481c2c2cab6047=function(){return j(((a,b,d,e)=>{c(a).addEventListener(g(b,d),c(e))}),arguments)};b.wbg.__wbg_body_8d7d8c4aa91dcad8=(a=>{const b=c(a).body;return k(b)?R:i(b)});b.wbg.__wbg_bubbles_48182817f8ec169f=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cachekey_57601dac16343711=(a=>{const b=c(a).__yew_subtree_cache_key;return k(b)?Y:b>>>R});b.wbg.__wbg_call_b0d8e36992d9900d=function(){return j(((a,b)=>{const d=c(a).call(c(b));return i(d)}),arguments)};b.wbg.__wbg_cancelBubble_4f3b0a3179912b26=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_checked_fc3b0aba823c9a35=(a=>{const b=c(a).checked;return b});b.wbg.__wbg_childNodes_609b812b2d01cb84=(a=>{const b=c(a).childNodes;return i(b)});b.wbg.__wbg_clientHeight_ee299647f82a654c=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_clientWidth_b7fb680348cb88d4=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientX_18c5fbacc6398ad8=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientX_f73b86b8aba3591d=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_0974153484cf0d09=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_clientY_af033356579f2b9c=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_cloneNode_d247de63446fb130=function(){return j((a=>{const b=c(a).cloneNode();return i(b)}),arguments)};b.wbg.__wbg_composedPath_3a3f292fe1666e00=(a=>{const b=c(a).composedPath();return i(b)});b.wbg.__wbg_createElementNS_494cc14f5fdee138=function(){return j(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===R?M:g(b,d),g(e,f));return i(h)}),arguments)};b.wbg.__wbg_createElement_89923fcb809656b7=function(){return j(((a,b,d)=>{const e=c(a).createElement(g(b,d));return i(e)}),arguments)};b.wbg.__wbg_createTextNode_457c122eb9cb5753=((a,b,d)=>{const e=c(a).createTextNode(g(b,d));return i(e)});b.wbg.__wbg_debug_19114f11037e4658=((a,b,d,e)=>{console.debug(c(a),c(b),c(d),c(e))});b.wbg.__wbg_document_f11bc4f7c03e1745=(a=>{const b=c(a).document;return k(b)?R:i(b)});b.wbg.__wbg_error_3c7d958458bf649b=((b,c)=>{var d=p(b,c).slice();a.__wbindgen_free(b,c*T,T);console.error(...d)});b.wbg.__wbg_error_483d659117b6f3f6=((a,b,d,e)=>{console.error(c(a),c(b),c(d),c(e))});b.wbg.__wbg_error_7534b8e9a36f1ab4=((b,c)=>{let d;let e;try{d=b;e=c;console.error(g(b,c))}finally{a.__wbindgen_free(d,e,S)}});b.wbg.__wbg_error_fab41a42d22bf2bc=(a=>{console.error(c(a))});b.wbg.__wbg_fetch_229368eecee9d217=((a,b)=>{const d=c(a).fetch(c(b));return i(d)});b.wbg.__wbg_fetch_e26fdd92ea39f634=((a,b)=>{const d=c(a).fetch(c(b));return i(d)});b.wbg.__wbg_from_d68eaa96dba25449=(a=>{const b=K.from(c(a));return i(b)});b.wbg.__wbg_getItem_badd23d1a06e7b19=function(){return j(((b,d,e,f)=>{const h=c(d).getItem(g(e,f));var i=k(h)?R:t(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=q;m().setInt32(b+ T*S,j,!0);m().setInt32(b+ T*R,i,!0)}),arguments)};b.wbg.__wbg_get_9aa3dff3f0266054=((a,b)=>{const d=c(a)[b>>>R];return i(d)});b.wbg.__wbg_get_bbccf8970793c087=function(){return j(((a,b)=>{const d=Z.get(c(a),c(b));return i(d)}),arguments)};b.wbg.__wbg_get_dfac72a5ffb577cc=((a,b)=>{const d=c(a)[b>>>R];return k(d)?R:i(d)});b.wbg.__wbg_host_428e6a6189a92c91=(a=>{const b=c(a).host;return i(b)});b.wbg.__wbg_info_18e75e6ce8a36a90=((a,b,d,e)=>{console.info(c(a),c(b),c(d),c(e))});b.wbg.__wbg_insertBefore_4b32ede81cf15b43=function(){return j(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return i(e)}),arguments)};b.wbg.__wbg_instanceof_Element_0f1680908791f190=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Error_2b29c5b4afac4e22=(a=>{let b;try{b=c(a) instanceof Q}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_MouseEvent_787ad126d660293f=(a=>{let b;try{b=c(a) instanceof MouseEvent}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Response_d3453657e10c4300=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_ShadowRoot_184d5b63318b09e5=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Window_d2514c6a7ee7ba60=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_WorkerGlobalScope_b32c94246142a6a7=(a=>{let b;try{b=c(a) instanceof WorkerGlobalScope}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_is_e442492d1fb7967b=((a,b)=>{const d=_.is(c(a),c(b));return d});b.wbg.__wbg_lastChild_a1995c15767ea782=(a=>{const b=c(a).lastChild;return k(b)?R:i(b)});b.wbg.__wbg_length_d65cf0786bfc5739=(a=>{const b=c(a).length;return b});b.wbg.__wbg_listenerid_ed1678830a5b97ec=(a=>{const b=c(a).__yew_listener_id;return k(b)?Y:b>>>R});b.wbg.__wbg_localStorage_9ca2da984fd56239=function(){return j((a=>{const b=c(a).localStorage;return k(b)?R:i(b)}),arguments)};b.wbg.__wbg_log_bc77772961bf21bb=((a,b,d,e)=>{console.log(c(a),c(b),c(d),c(e))});b.wbg.__wbg_message_7bde112094278773=(a=>{const b=c(a).message;return i(b)});b.wbg.__wbg_name_ae6b09babb81aa7d=(a=>{const b=c(a).name;return i(b)});b.wbg.__wbg_namespaceURI_85b8a45764ae1d6e=((b,d)=>{const e=c(d).namespaceURI;var f=k(e)?R:t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_naturalHeight_fef97d59bd5d92df=(a=>{const b=c(a).naturalHeight;return b});b.wbg.__wbg_naturalWidth_e180d08f8e767c7a=(a=>{const b=c(a).naturalWidth;return b});b.wbg.__wbg_new_17f755666e48d1d8=function(){return j(((a,b)=>{const c=new URL(g(a,b));return i(c)}),arguments)};b.wbg.__wbg_new_35d748855c4620b9=function(){return j((()=>{const a=new Headers();return i(a)}),arguments)};b.wbg.__wbg_new_688846f374351c92=(()=>{const a=new _();return i(a)});b.wbg.__wbg_new_8a6f238a6ece86ea=(()=>{const a=new Q();return i(a)});b.wbg.__wbg_new_a3eaec3587e1fb84=function(){return j((()=>{const a=new URLSearchParams();return i(a)}),arguments)};b.wbg.__wbg_newnoargs_fd9e4bf8be2bc16d=((a,b)=>{const c=new Function(g(a,b));return i(c)});b.wbg.__wbg_newwithstr_6dc08c9fc8762dbd=function(){return j(((a,b)=>{const c=new Request(g(a,b));return i(c)}),arguments)};b.wbg.__wbg_newwithstrandinit_a1f6583f20e4faff=function(){return j(((a,b,d)=>{const e=new Request(g(a,b),c(d));return i(e)}),arguments)};b.wbg.__wbg_nextSibling_f1b7916c306c9a9f=(a=>{const b=c(a).nextSibling;return k(b)?R:i(b)});b.wbg.__wbg_now_64d0bb151e5d3889=(()=>{const a=Date.now();return a});b.wbg.__wbg_outerHTML_23b92e7039b77dad=((b,d)=>{const e=c(d).outerHTML;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_parentElement_41c6f5f746ea74cf=(a=>{const b=c(a).parentElement;return k(b)?R:i(b)});b.wbg.__wbg_parentNode_dfffcfb63c8a6cac=(a=>{const b=c(a).parentNode;return k(b)?R:i(b)});b.wbg.__wbg_preventDefault_3c86e59772d015e6=(a=>{c(a).preventDefault()});b.wbg.__wbg_queueMicrotask_2181040e064c0dc8=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_ef9ac43769cbcc4f=(a=>{const b=c(a).queueMicrotask;return i(b)});b.wbg.__wbg_removeAttribute_013475d9f18db70a=function(){return j(((a,b,d)=>{c(a).removeAttribute(g(b,d))}),arguments)};b.wbg.__wbg_removeChild_c6861558b785880c=function(){return j(((a,b)=>{const d=c(a).removeChild(c(b));return i(d)}),arguments)};b.wbg.__wbg_removeEventListener_6f4cfa6f356575bb=function(){return j(((a,b,d,e,f)=>{c(a).removeEventListener(g(b,d),c(e),f!==R)}),arguments)};b.wbg.__wbg_requestAnimationFrame_169cbbda5861d9ca=function(){return j(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_resolve_0bf7c44d641804f9=(a=>{const b=Promise.resolve(c(a));return i(b)});b.wbg.__wbg_search_a8f6890ada3d686f=((b,d)=>{const e=c(d).search;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_setAttribute_148e0e65e20e5f27=function(){return j(((a,b,d,e,f)=>{c(a).setAttribute(g(b,d),g(e,f))}),arguments)};b.wbg.__wbg_setItem_37bd15ddee3594af=function(){return j(((a,b,d,e,f)=>{c(a).setItem(g(b,d),g(e,f))}),arguments)};b.wbg.__wbg_set_4e647025551483bd=function(){return j(((a,b,d)=>{const e=Z.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbg_setcachekey_bb5f908a0e3ee714=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>R});b.wbg.__wbg_setcapture_b1387485d0f7947c=((a,b)=>{c(a).capture=b!==R});b.wbg.__wbg_setchecked_cc9be394960a6551=((a,b)=>{c(a).checked=b!==R});b.wbg.__wbg_setheaders_4c921e8e226bdfa7=((a,b)=>{c(a).headers=c(b)});b.wbg.__wbg_setinnerHTML_2d75307ba8832258=((a,b,d)=>{c(a).innerHTML=g(b,d)});b.wbg.__wbg_setlistenerid_3d14d37a42484593=((a,b)=>{c(a).__yew_listener_id=b>>>R});b.wbg.__wbg_setmethod_cfc7f688ba46a6be=((a,b,d)=>{c(a).method=g(b,d)});b.wbg.__wbg_setnodeValue_2bdce51097cd14f6=((a,b,d)=>{c(a).nodeValue=b===R?M:g(b,d)});b.wbg.__wbg_setonce_87cf501e67ee47f7=((a,b)=>{c(a).once=b!==R});b.wbg.__wbg_setpassive_4e263ba5bfca97c5=((a,b)=>{c(a).passive=b!==R});b.wbg.__wbg_setsearch_420bbd8d2dbd92aa=((a,b,d)=>{c(a).search=g(b,d)});b.wbg.__wbg_setsubtreeid_32b8ceff55862e29=((a,b)=>{c(a).__yew_subtree_id=b>>>R});b.wbg.__wbg_setvalue_44c59c360ad57cf0=((a,b,d)=>{c(a).value=g(b,d)});b.wbg.__wbg_setvalue_88aa1f99f6500a1e=((a,b,d)=>{c(a).value=g(b,d)});b.wbg.__wbg_stack_0ed75d68575b0f3c=((b,d)=>{const e=c(d).stack;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_static_accessor_GLOBAL_0be7472e492ad3e3=(()=>{const a=typeof global===O?N:global;return k(a)?R:i(a)});b.wbg.__wbg_static_accessor_GLOBAL_THIS_1a6eb482d12c9bfb=(()=>{const a=typeof $===O?N:$;return k(a)?R:i(a)});b.wbg.__wbg_static_accessor_SELF_1dc398a895c82351=(()=>{const a=typeof self===O?N:self;return k(a)?R:i(a)});b.wbg.__wbg_static_accessor_WINDOW_ae1c80c7eea8d64a=(()=>{const a=typeof window===O?N:window;return k(a)?R:i(a)});b.wbg.__wbg_stopPropagation_da43a41fec77962c=(a=>{c(a).stopPropagation()});b.wbg.__wbg_subtreeid_e65dfcc52d403fd9=(a=>{const b=c(a).__yew_subtree_id;return k(b)?Y:b>>>R});b.wbg.__wbg_target_a8fe593e7ee79c21=(a=>{const b=c(a).target;return k(b)?R:i(b)});b.wbg.__wbg_textContent_593cb1d610df6a86=((b,d)=>{const e=c(d).textContent;var f=k(e)?R:t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_text_dfc4cb7631d2eb34=function(){return j((a=>{const b=c(a).text();return i(b)}),arguments)};b.wbg.__wbg_then_0438fad860fe38e1=((a,b)=>{const d=c(a).then(c(b));return i(d)});b.wbg.__wbg_then_0ffafeddf0e182a4=((a,b,d)=>{const e=c(a).then(c(b),c(d));return i(e)});b.wbg.__wbg_toString_a491ccf7be1ca5c9=(a=>{const b=c(a).toString();return i(b)});b.wbg.__wbg_toString_cbcf95f260c441ae=(a=>{const b=c(a).toString();return i(b)});b.wbg.__wbg_touches_464d67ccc79e7632=(a=>{const b=c(a).touches;return i(b)});b.wbg.__wbg_url_0287fc8f8dd185b7=((b,d)=>{const e=c(d).url;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_value_2adb5f0602e19ca9=((b,d)=>{const e=c(d).value;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_value_47fde8ea2d9fdcd5=((b,d)=>{const e=c(d).value;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_value_a8b8b65bc31190d6=((b,d)=>{const e=c(d).value;const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbg_warn_cb8be8bbf790a5d6=((a,b,d,e)=>{console.warn(c(a),c(b),c(d),c(e))});b.wbg.__wbindgen_cb_drop=(a=>{const b=o(a).original;if(b.cnt--==S){b.a=R;return !0};const c=!1;return c});b.wbg.__wbindgen_closure_wrapper1272=((a,b,c)=>{const d=v(a,b,512,C);return i(d)});b.wbg.__wbindgen_closure_wrapper1345=((a,b,c)=>{const d=w(a,b,543,D);return i(d)});b.wbg.__wbindgen_closure_wrapper448=((a,b,c)=>{const d=w(a,b,a0,y);return i(d)});b.wbg.__wbindgen_closure_wrapper450=((a,b,c)=>{const d=w(a,b,a0,B);return i(d)});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=x(c(d));const f=t(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=q;m().setInt32(b+ T*S,g,!0);m().setInt32(b+ T*R,f,!0)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return i(b)});b.wbg.__wbindgen_object_drop_ref=(a=>{o(a)});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===W?e:M;var g=k(f)?R:t(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=q;m().setInt32(b+ T*S,h,!0);m().setInt32(b+ T*R,g,!0)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=g(a,b);return i(c)});b.wbg.__wbindgen_throw=((a,b)=>{throw new Q(g(a,b))});return b});var D=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h68b4c4b0791de2ed(b,c,i(d))});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_4.get(f.dtor)(f.a,f.b);f.a=R;u.unregister(f)}}};g.original=f;u.register(g,f,f);return g});var n=(a=>{if(a<132)return;b[a]=h;h=a});var E=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve Wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:S,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=R;try{return e(c,f.b,...b)}finally{if(--f.cnt===R){a.__wbindgen_export_4.get(f.dtor)(c,f.b);u.unregister(f)}else{f.a=c}}};g.original=f;u.register(g,f,f);return g});var t=((a,b,c)=>{if(c===M){const c=r.encode(a);const d=b(c.length,S)>>>R;f().subarray(d,d+ c.length).set(c);q=c.length;return d};let d=a.length;let e=b(d,S)>>>R;const g=f();let h=R;for(;h<d;h++){const b=a.charCodeAt(h);if(b>127)break;g[e+ h]=b};if(h!==d){if(h!==R){a=a.slice(h)};e=c(e,d,d=h+ a.length*3,S)>>>R;const b=f().subarray(e+ h,e+ d);const g=s(a,b);h+=g.written;e=c(e,d,h,S)>>>R};q=h;return e});var g=((a,b)=>{a=a>>>R;return d.decode(f().subarray(a,a+ b))});var A=(a=>{if(z==S)throw new Q(`out of js stack`);b[--z]=a;return z});let a;const b=new K(L).fill(M);b.push(M,N,!0,!1);const d=typeof TextDecoder!==O?new TextDecoder(P,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Q(`TextDecoder not available`)}};if(typeof TextDecoder!==O){d.decode()};let e=N;let h=b.length;let l=N;let q=R;const r=typeof TextEncoder!==O?new TextEncoder(P):{encode:()=>{throw Q(`TextEncoder not available`)}};const s=typeof r.encodeInto===U?((a,b)=>r.encodeInto(a,b)):((a,b)=>{const c=r.encode(a);b.set(c);return {read:a.length,written:c.length}});const u=typeof V===O?{register:()=>{},unregister:()=>{}}:new V(b=>{a.__wbindgen_export_4.get(b.dtor)(b.a,b.b)});let z=L;export default J;export{I as initSync}