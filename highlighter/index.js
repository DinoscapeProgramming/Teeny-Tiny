(() => {
  const highlight = (code) => {
    const patterns = [
      { type: "comment", regex: /\/\/[^\n]*|\/\*[\s\S]*?\*\//y },
      { type: "string", regex: /(["'`])(?:\\.|(?!\1).)*\1/y },
      { type: "number", regex: /\b\d+(\.\d+)?\b/y },
      { type: "keyword", regex: /\b(?:function|return|if|else|for|while|let|const|var|await|async|try|catch|throw|new|typeof|instanceof|switch|case|break|continue|class|extends|super|this|import|export|default)\b/y },
      { type: "function", regex: /\b([a-zA-Z_]\w*)(?=\s*\()/y },
      { type: "operator", regex: /[+\-*/=<>!&|%^~]+/y },
      { type: "whitespace", regex: /\s+/y },
      { type: "plain", regex: /[^\s]/y }
    ];

    let result = "";
    let position = 0;

    while (position < code.length) {
      let matched = false;

      for (const { type, regex } of patterns) {
        regex.lastIndex = position;
        const match = regex.exec(code);
        if (match) {
          const text = match[0]
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

          result += ((type === "whitespace") || (type === "plain")) ? text : `<span class="token ${type}">${text}</span>`;

          position += text.length;
          matched = true;

          break;
        };
      };

      if (!matched) {
        result += code[position++];
      };
    };

    return result;
  };

  if ((typeof module === "object") && (typeof module.exports === "object")) {
    module.exports = highlight;
  } else {
    ((typeof self !== "undefined") ? self : this).highlight = highlight;
  };
})();