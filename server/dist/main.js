/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={71:(e,t)=>{"use strict";var n,s,o,i,a,r;t.HarmCategory=void 0,(n=t.HarmCategory||(t.HarmCategory={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HarmBlockThreshold=void 0,(s=t.HarmBlockThreshold||(t.HarmBlockThreshold={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",s.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",s.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",s.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",s.BLOCK_NONE="BLOCK_NONE",t.HarmProbability=void 0,(o=t.HarmProbability||(t.HarmProbability={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",o.NEGLIGIBLE="NEGLIGIBLE",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH",t.BlockReason=void 0,(i=t.BlockReason||(t.BlockReason={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",i.SAFETY="SAFETY",i.OTHER="OTHER",t.FinishReason=void 0,(a=t.FinishReason||(t.FinishReason={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",a.STOP="STOP",a.MAX_TOKENS="MAX_TOKENS",a.SAFETY="SAFETY",a.RECITATION="RECITATION",a.OTHER="OTHER",t.TaskType=void 0,(r=t.TaskType||(t.TaskType={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",r.RETRIEVAL_QUERY="RETRIEVAL_QUERY",r.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",r.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",r.CLASSIFICATION="CLASSIFICATION",r.CLUSTERING="CLUSTERING";class c extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class d extends c{constructor(e,t){super(e),this.response=t}}const h="0.2.1",l="genai-js";var u;!function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"}(u||(u={}));class m{constructor(e,t,n,s){this.model=e,this.task=t,this.apiKey=n,this.stream=s}toString(){let e=`https://generativelanguage.googleapis.com/v1/${this.model}:${this.task}`;return this.stream&&(e+="?alt=sse"),e}}async function g(e,t,n){let s;try{if(s=await fetch(e.toString(),Object.assign(Object.assign({},function(e){const t={};if((null==e?void 0:e.timeout)>=0){const n=new AbortController,s=n.signal;setTimeout((()=>n.abort()),e.timeout),t.signal=s}return t}(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":`${l}/${h}`,"x-goog-api-key":e.apiKey},body:t})),!s.ok){let e="";try{const t=await s.json();e=t.error.message,t.error.details&&(e+=` ${JSON.stringify(t.error.details)}`)}catch(e){}throw new Error(`[${s.status} ${s.statusText}] ${e}`)}}catch(t){const n=new c(`Error fetching from ${e.toString()}: ${t.message}`);throw n.stack=t.stack,n}return s}function y(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),f(e.candidates[0]))throw new d(`${E(e)}`,e);return function(e){var t,n,s,o;return(null===(o=null===(s=null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)||void 0===s?void 0:s[0])||void 0===o?void 0:o.text)?e.candidates[0].content.parts[0].text:""}(e)}if(e.promptFeedback)throw new d(`Text not available. ${E(e)}`,e);return""},e}const p=[t.FinishReason.RECITATION,t.FinishReason.SAFETY];function f(e){return!!e.finishReason&&p.includes(e.finishReason)}function E(e){var t,n,s;let o="";if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(null===(s=e.candidates)||void 0===s?void 0:s[0]){const t=e.candidates[0];f(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}}else o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);return o}function T(e){return this instanceof T?(this.v=e,this):new T(e)}"function"==typeof SuppressedError&&SuppressedError;const O=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function _(e){const t=[],n=e.getReader();for(;;){const{done:e,value:s}=await n.read();if(e)return y(S(t));t.push(s)}}function N(e){return function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(e){o[e]&&(s[e]=function(t){return new Promise((function(n,s){i.push([e,t,n,s])>1||r(e,t)}))})}function r(e,t){try{(n=o[e](t)).value instanceof T?Promise.resolve(n.value.v).then(c,d):h(i[0][2],n)}catch(e){h(i[0][3],e)}var n}function c(e){r("next",e)}function d(e){r("throw",e)}function h(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,(function*(){const t=e.getReader();for(;;){const{value:e,done:n}=yield T(t.read());if(n)break;yield yield T(y(e))}}))}function S(e){const t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(const t of e)if(t.candidates)for(const e of t.candidates){const t=e.index;if(n.candidates||(n.candidates=[]),n.candidates[t]||(n.candidates[t]={index:e.index}),n.candidates[t].citationMetadata=e.citationMetadata,n.candidates[t].finishReason=e.finishReason,n.candidates[t].finishMessage=e.finishMessage,n.candidates[t].safetyRatings=e.safetyRatings,e.content&&e.content.parts){n.candidates[t].content||(n.candidates[t].content={role:e.content.role||"user",parts:[{text:""}]});for(const s of e.content.parts)s.text&&(n.candidates[t].content.parts[0].text+=s.text)}}return n}async function b(e,t,n,s){const o=new m(t,u.STREAM_GENERATE_CONTENT,e,!0);return function(e){const t=function(e){const t=e.getReader();return new ReadableStream({start(e){let n="";return function s(){return t.read().then((({value:t,done:o})=>{if(o)return n.trim()?void e.error(new c("Failed to parse stream")):void e.close();n+=t;let i,a=n.match(O);for(;a;){try{i=JSON.parse(a[1])}catch(t){return void e.error(new c(`Error parsing JSON response: "${a[1]}"`))}e.enqueue(i),n=n.substring(a[0].length),a=n.match(O)}return s()}))}()}})}(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,s]=t.tee();return{stream:N(n),response:_(s)}}(await g(o,JSON.stringify(n),s))}async function v(e,t,n,s){const o=new m(t,u.GENERATE_CONTENT,e,!1),i=await g(o,JSON.stringify(n),s);return{response:y(await i.json())}}function C(e,t){let n=[];if("string"==typeof e)n=[{text:e}];else for(const t of e)"string"==typeof t?n.push({text:t}):n.push(t);return{role:t,parts:n}}function I(e){return e.contents?e:{contents:[C(e,"user")]}}const R="SILENT_ERROR";class w{constructor(e,t,n,s){this.model=t,this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(this._history=n.history.map((e=>{if(!e.role)throw new Error("Missing role for history item: "+JSON.stringify(e));return C(e.parts,e.role)})))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e){var t,n;await this._sendPromise;const s=C(e,"user"),o={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,s]};let i;return this._sendPromise=this._sendPromise.then((()=>v(this._apiKey,this.model,o,this.requestOptions))).then((e=>{var t;if(e.response.candidates&&e.response.candidates.length>0){this._history.push(s);const n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{const t=E(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}i=e})),await this._sendPromise,i}async sendMessageStream(e){var t,n;await this._sendPromise;const s=C(e,"user"),o={safetySettings:null===(t=this.params)||void 0===t?void 0:t.safetySettings,generationConfig:null===(n=this.params)||void 0===n?void 0:n.generationConfig,contents:[...this._history,s]},i=b(this._apiKey,this.model,o,this.requestOptions);return this._sendPromise=this._sendPromise.then((()=>i)).catch((e=>{throw new Error(R)})).then((e=>e.response)).then((e=>{if(e.candidates&&e.candidates.length>0){this._history.push(s);const t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{const t=E(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}})).catch((e=>{e.message!==R&&console.error(e)})),i}}class A{constructor(e,t,n){this.apiKey=e,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.requestOptions=n||{}}async generateContent(e){const t=I(e);return v(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}async generateContentStream(e){const t=I(e);return b(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t),this.requestOptions)}startChat(e){return new w(this.apiKey,this.model,e,this.requestOptions)}async countTokens(e){const t=I(e);return async function(e,t,n,s){const o=new m(t,u.COUNT_TOKENS,e,!1);return(await g(o,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),void 0)).json()}(this.apiKey,this.model,t)}async embedContent(e){const t="string"==typeof(n=e)||Array.isArray(n)?{content:C(n,"user")}:n;var n;return async function(e,t,n,s){const o=new m(t,u.EMBED_CONTENT,e,!1);return(await g(o,JSON.stringify(n),void 0)).json()}(this.apiKey,this.model,t)}async batchEmbedContents(e){return async function(e,t,n,s){const o=new m(t,u.BATCH_EMBED_CONTENTS,e,!1),i=n.requests.map((e=>Object.assign(Object.assign({},e),{model:t})));return(await g(o,JSON.stringify({requests:i}),s)).json()}(this.apiKey,this.model,e,this.requestOptions)}}t.ChatSession=w,t.GenerativeModel=A,t.GoogleGenerativeAI=class{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new c("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new A(this.apiKey,e,t)}}}},t={};function n(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,n),i.exports}(()=>{const{GoogleGenerativeAI:e}=n(71);console.log("content script loaded");const t=new e("AIzaSyCMS3X6icUDfyqCs5Je4s-i4EDxXGNHGQY");async function s(e){const n=t.getGenerativeModel({model:"gemini-pro"}),s=await n.generateContentStream([e]);let o="";for await(const e of s.stream)o+=e.text(),chrome.runtime.sendMessage({message:"processed_chunk"});return o}let o="(not generated yet)",i="(not generated yet)";async function a(e){try{const t=`\n            I will provide the content of a webpage and you will summarize it. Here are some guidelines for you to follow:\n\n            - Since this is a webpage, make sure to filter out any irrelevant details and include only the main content.\n            - Do not include any information that is not relevant to the main content of the webpage.\n            - Include emojis to make it more engaging. Only include the emojis in the headings; they should NOT be in the body points. They should be relavant to the content of the heading.\n            - Only have headings and body points. Make sure to have multiple headings and body points.\n            - Utilize bulleted lists. Use "-" bullet instead of "*". Only incude the bullet icon for the body points, not the heading. Make headings bold. Only use ** for bold.\n            - Only write in English.\n\n            Here are some things that I told you not to do but you did them anyway. If you do them now, I will be very disappointed:\n            - Do NOT make a multi-level outline.\n            - Do NOT include subheadings.\n            - Do NOT use <h2>, <h3>, etc. tags.\n            - Do NOT use ##, ###, etc. in the text.\n            - Do NOT use indentation of any kind.\n            - Do NOT put two or more spaces in succession.\n            - Do NOT use the same emoji more than once.\n            - Do NOT use the same emoji twice in the same heading (before and after the heading text). Again, Do NOT use the same emoji twice in the same heading.\n            - Do NOT add lines between headings and body points as well as between body points and other body points.\n            - Do NOT put the emoji (in the heading) in parenthesis. Just put the actual emoji icon after the heading text (followed by a space).\n            \n            Here is the general format that you should follow in your response. For the things that are in <> you should replace them with the actual content. For example, <emoji> should be replaced with the actual emoji icon. The same goes for the headings and body points. Here is the format: {\n\n            **Heading 1<space><1 emoji>**\n            - Body point 1\n            - Body point 2\n            - <use as many body points as you want>\n            <empty line>\n            <empty line>\n            **Heading 2<space><1 emoji>**\n            - Body point 1\n            - Body point 2\n            - <use as many body points as you want>\n            <empty line>\n            <empty line>\n            <use as many headings as you want>\n\n            }\n            \n            Here is the content of the webpage. Be thorough:\n            ${e}\n        `,n=await s(t),a=n.replace(/(?:\r\n|\r|\n)/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/  /g,"&nbsp; ").replace(/<br><br><br>-/g,"<br>-").replace(/<br><br>-/g,"<br>-").replace(/<space>/g," ");return o=e,i=n,a}catch(t){return t.message.includes("internal")?(chrome.runtime.sendMessage({message:"rerunning_summary"}),a(e)):t.message.includes("SAFETY")?"This content may violate our content policy.":t.message.includes("overloaded")?"The model is overloaded. Please try again later.":"Error: "+t.message}}chrome.runtime.onMessage.addListener((async(e,t)=>{if("get_summary"===e.message){const n=await a(e.pageContents);chrome.runtime.sendMessage(t.id,{message:"take_summary",summary:n}).catch((e=>console.error(e)))}if("take_chat_client_message"===e.message){const n=await async function(e,t){try{const o=function(e){let t="";for(let n=0;n<e.length;n++)t+=`${e[n].id}: ${e[n].message}\n`;return t}(e),a=`\n            Earlier, I asked you to summarize the contents of a webpage. I then might have had a conversation with you. I then have sent you a message.\n            \n            Here is your summary of the webpage. Remember: if I ask you about the summary or something along the lines of that, I am talking about this:\n            ${i}\n            Here is our conversation:\n            ${o}\n            Here is my latest message:\n            ${t}\n\n            Respond to my message relevant and make it seem like you are continuing the conversation. Do NOT refer to this prompt (don't say something like "sure here is a concise response to your response" or "sure, here's how I would respond" or "sure here's a concise response" or "Alright, here it is:" or "Sure, here is what I would say:" - you get the idea). Talk in English and use real words, don't use weird symbols. Keep it concise.\n        `;let r=(await s(a)).replace(/(?:\r\n|\r|\n)/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>");return formmatedData=(n=r).startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'")?n.slice(1,-1):n,r}catch(e){return e.message.includes("SAFETY")?"This content may violate our content policy.":e.message.includes("overloaded")?"The model is overloaded. Please try again later.":"Error: "+e.message}var n}(e.conversation,e.clientMessage);chrome.runtime.sendMessage(t.id,{message:"take_chat_server_message",serverMessage:n}).catch((e=>console.error(e)))}})),chrome.runtime.onConnect.addListener((function(e){"popup"===e.name&&e.onDisconnect.addListener((function(){chrome.runtime.reload()}))}))})()})();