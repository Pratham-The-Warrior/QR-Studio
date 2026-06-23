/* ============================================
   QR Studio — Designer QR Code Generator
   ============================================ */

// ---- DOM References ----
const dataInput = document.getElementById("qr-data-input");
const qrCanvas = document.getElementById("qr-canvas");
const previewHint = document.getElementById("preview-hint");
const btnGenerate = document.getElementById("btn-generate");
const btnDownloadPng = document.getElementById("btn-download-png");
const btnDownloadSvg = document.getElementById("btn-download-svg");
const btnShare = document.getElementById("btn-share");
const dotStylePicker = document.getElementById("dot-style-picker");
const cornerStylePicker = document.getElementById("corner-style-picker");
const dotColorInput = document.getElementById("dot-color");
const cornerColorInput = document.getElementById("corner-color");
const bgColorInput = document.getElementById("bg-color");
const useGradientCheckbox = document.getElementById("use-gradient");
const gradientControls = document.getElementById("gradient-controls");
const gradientColor1 = document.getElementById("gradient-color-1");
const gradientColor2 = document.getElementById("gradient-color-2");
const logoUploadArea = document.getElementById("logo-upload-area");
const logoUploadInput = document.getElementById("logo-upload");
const uploadPlaceholder = document.getElementById("upload-placeholder");
const uploadPreview = document.getElementById("upload-preview");
const logoPreviewImg = document.getElementById("logo-preview-img");
const removeLogoBtn = document.getElementById("remove-logo");
const qrSizeSlider = document.getElementById("qr-size");
const sizeValue = document.getElementById("size-value-label");

// ---- State ----
let currentOptions = {
  width: 300,
  height: 300,
  data: "",
  image: "",
  margin: 10,
  qrOptions: {
    errorCorrectionLevel: "H",
  },
  dotsOptions: {
    color: "#000000",
    type: "rounded",
  },
  cornersSquareOptions: {
    color: "#000000",
    type: "square",
  },
  cornersDotOptions: {
    color: "#000000",
    type: "square",
  },
  backgroundOptions: {
    color: "#ffffff",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 8,
    imageSize: 0.4,
  },
};

let qrCode = null;
let logoDataURL = "";

// ---- Preset Themes ----
// ---- Preset Themes ----
// ---- Preset Themes ----
const presets = {
  instagram: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJpbnN0YUdyYWQiIHgxPSIwJSIgeTE9IjEwMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmMDk0MzMiLz48c3RvcCBvZmZzZXQ9IjI1JSIgc3RvcC1jb2xvcj0iI2U2NjgzYyIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjZGMyNzQzIi8+PHN0b3Agb2Zmc2V0PSI3NSUiIHN0b3AtY29sb3I9IiNjYzIzNjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNiYzE4ODgiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjI0IiBmaWxsPSJ1cmwoI2luc3RhR3JhZCkiLz48cmVjdCB4PSIyMiIgeT0iMjIiIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgcng9IjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNS41Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMTQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI1LjUiLz48Y2lyY2xlIGN4PSI2NyIgY3k9IjMzIiByPSI0LjUiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=',
    dotsOptions: {
      type: "extra-rounded",
      gradient: {
        type: "linear",
        rotation: 0.8,
        colorStops: [
          { offset: 0, color: "#f09433" },
          { offset: 0.25, color: "#e6683c" },
          { offset: 0.5, color: "#dc2743" },
          { offset: 0.75, color: "#cc2366" },
          { offset: 1, color: "#bc1888" },
        ],
      },
    },
    cornersSquareOptions: { type: "extra-rounded", color: "#cc2366" },
    cornersDotOptions: { type: "dot", color: "#bc1888" },
    backgroundOptions: { color: "#ffffff" },
    frame: {
      style: "classic",
      text: "INSTAGRAM",
      topText: "FOLLOW US!",
      color: "#cc2366",
      textColor: "#ffffff"
    }
  },
  whatsapp: {
    logo: 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="120" height="120">
      <rect width="24" height="24" rx="5.5" fill="#25D366"/>
      <g transform="translate(4, 4)" fill="#ffffff">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </g>
    </svg>`),
    dotsOptions: { type: "classy-rounded", color: "#25D366" },
    cornersSquareOptions: { type: "extra-rounded", color: "#128C7E" },
    cornersDotOptions: { type: "dot", color: "#075E54" },
    backgroundOptions: { color: "#ffffff" },
    frame: {
      style: "classic",
      text: "WHATSAPP",
      topText: "MESSAGE US",
      color: "#128C7E",
      textColor: "#ffffff"
    }
  },
  snapchat: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyNCIgZmlsbD0iI0ZGRkMwMCIvPjxwYXRoIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNTAgMjVjLTguOCAwLTE0LjggNS43LTE0LjggMTMuOCAwIDMuMy45IDYuMiAyLjcgOC4zLS43LjUtMS40IDEuMy0xLjQgMi4yIDAgLjkuOSAxLjUgMi4xIDEuNy0xLjEgMS0xLjkgMi41LTEuOSA0IDAgMi4yIDIgMy4yIDQuNCAzLjcuMyAxLjMuOCAzIDMuNSAzLjMgMS4xLjEgMi4yLjEgMy4xIDAgMS4yIDEuOCA0IDMgNy4zIDNzNi4xLTEuMiA3LjMtM2MuOS4xIDIgMCAzLjEgMCAyLjctLjMgMy4yLTIgMy41LTMuMyAyLjQtLjUgNC40LTEuNSA0LjQtMy43IDAtMS41LS44LTMtMS45LTQgMS4yLS4yIDIuMS0uOCAyLjEtMS43IDAtLjktLjctMS43LTEuNC0yLjIgMS44LTIuMSAyLjctNSAyLjctOC4zQzY0LjggMzAuNyA1OC44IDI1IDUwIDI1eiIvPjwvc3ZnPg==',
    dotsOptions: { type: "rounded", color: "#333333" },
    cornersSquareOptions: { type: "extra-rounded", color: "#333333" },
    cornersDotOptions: { type: "dot", color: "#333333" },
    backgroundOptions: { color: "#FFFC00" },
    frame: {
      style: "classic",
      text: "SCAN ME!",
      topText: "",
      color: "#333333",
      textColor: "#ffffff"
    }
  },
  facebook: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyNCIgZmlsbD0iIzE4NzdGMiIvPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik02MiA1MGgtOVY4MEg0MVY1MGgtNnYtOWg2di02YzAtOCA1LTEyLjUgMTIuNS0xMi41IDMuNSAwIDcuNS41IDcuNS41djguNWgtNC41Yy00IDAtNSAyLjUtNSA1djQuNWg5LjVsLTEgOXoiLz48L3N2Zz4=',
    dotsOptions: {
      type: "extra-rounded",
      gradient: {
        type: "linear",
        rotation: 2.35,
        colorStops: [
          { offset: 0, color: "#1877F2" },
          { offset: 1, color: "#0053b4" },
        ],
      },
    },
    cornersSquareOptions: { type: "extra-rounded", color: "#1877F2" },
    cornersDotOptions: { type: "dot", color: "#0053b4" },
    backgroundOptions: { color: "#ffffff" },
    frame: {
      style: "classic",
      text: "FACEBOOK",
      topText: "CONNECT WITH US",
      color: "#1877F2",
      textColor: "#ffffff"
    }
  },
  youtube: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyNCIgZmlsbD0iI2ZmZmZmZiIvPjxwYXRoIGZpbGw9IiNGRjAwMDAiIGQ9Ik0gODUgMzUgYyAtLjktMy40LTMuNi02LTctNy02LjItMS43LTI4LTEuNy0yOC0xLjdzLTIxLjggMC0yOCAxLjdjLTMuNCAxLTYuMSAzLjYtNyA3QzEzIDQxLjIgMTMgNTAgMTMgNTBzMCA4LjggMiAxNWMuOSAzLjQgMy42IDYgNyA3IDYuMiAxLjcgMjggMS43IDI4IDEuN3MyMS44IDAgMjgtMS43YzMuNC0xIDYuMS0zLjYgNy03IDItNi4yIDItMTUgMi0xNXMwLTguOC0yLTE1eiIvPjxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik00MyAzOC41djIzbDIwLTExLjV6Ii8+PC9zdmc+',
    dotsOptions: { type: "rounded", color: "#282828" },
    cornersSquareOptions: { type: "extra-rounded", color: "#FF0000" },
    cornersDotOptions: { type: "dot", color: "#FF0000" },
    backgroundOptions: { color: "#ffffff" },
    frame: {
      style: "classic",
      text: "YOUTUBE",
      topText: "WATCH NOW",
      color: "#FF0000",
      textColor: "#ffffff"
    }
  },
  midnight: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyNCIgZmlsbD0iIzBmMGMyOSIvPjxwYXRoIGZpbGw9IiMyMmQzZWUiIGQ9Ik00OCAyNUEyNSAyNSAwIDAwNzMgNTBhMjUgMjUgMCAxMS0yNS0yNXoiLz48cGF0aCBmaWxsPSIjYTc4YmZhIiBkPSJNNjggMzVsMS41IDMgMyAxLjUtMyAxLjUtMS41IDMtMS41LTMtMy0xLjUgMy0xLjUgMS41LTN6Ii8+PC9zdmc+',
    dotsOptions: {
      type: "dots",
      gradient: {
        type: "linear",
        rotation: 1,
        colorStops: [
          { offset: 0, color: "#06b6d4" },
          { offset: 1, color: "#8b5cf6" },
        ],
      },
    },
    cornersSquareOptions: { type: "dot", color: "#06b6d4" },
    cornersDotOptions: { type: "dot", color: "#8b5cf6" },
    backgroundOptions: { color: "#0f0c29" },
    frame: {
      style: "badge",
      text: "MIDNIGHT",
      topText: "DISCOVER",
      color: "#0f0c29",
      textColor: "#ffffff"
    }
  },
  sunset: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyNCIgZmlsbD0iI3NmZmJlYiIvPjxwYXRoIGZpbGw9IiNmOTczMTYiIGQ9Ik0yNSA2MGg1MHY0SDI1em01LTJjMC0xMSA5LTIwIDIwLTIwczIwIDkgMjAgMjBIMzB6Ii8+PHBhdGggZmlsbD0iI2VjNDg5OSIgZD0iTTUwIDE4bDEuNSAzIDMgMS41LTMgMS41LTEuNSAzLTEuNS0zLTMtMS41IDMtMS41LTMtM3oiLz48L3N2Zz4=',
    dotsOptions: {
      type: "classy-rounded",
      gradient: {
        type: "linear",
        rotation: 0.8,
        colorStops: [
          { offset: 0, color: "#f97316" },
          { offset: 1, color: "#ec4899" },
        ],
      },
    },
    cornersSquareOptions: { type: "extra-rounded", color: "#f97316" },
    cornersDotOptions: { type: "dot", color: "#ec4899" },
    backgroundOptions: { color: "#fffbeb" },
    frame: {
      style: "classic",
      text: "SUNSET",
      topText: "EXPLORE",
      color: "#ec4899",
      textColor: "#ffffff"
    }
  },
  ocean: {
    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSIyNCIgZmlsbD0iI2YwZjlmZiIvPjxwYXRoIGZpbGw9IiMzYjgyZjYiIG9wYWNpdHk9IjAuNSIgZD0iTTIwIDUzYzcuNS0zIDEyLjUgMyAyMCAzczEyLjUtNiAyMC02IDEyLjUgNiAyMCA2IDEyLjUtMyAyMC0zdjIySDIwVjUzeiIvPjxwYXRoIGZpbGw9IiMwNmI2ZDRiIGQ9Ik0yMCA2MGM3LjUtMyAxMi41IDMgMjAgM3MxMi41LTYgMjAtNiAxMi41IDYgMjAgNiAxMi41LTMgMjAtM3YxNUgyMFY2MHoiLz48L3N2Zz4=',
    dotsOptions: {
      type: "rounded",
      gradient: {
        type: "linear",
        rotation: 2.35,
        colorStops: [
          { offset: 0, color: "#06b6d4" },
          { offset: 1, color: "#3b82f6" },
        ],
      },
    },
    cornersSquareOptions: { type: "extra-rounded", color: "#06b6d4" },
    cornersDotOptions: { type: "dot", color: "#3b82f6" },
    backgroundOptions: { color: "#f0f9ff" },
    frame: {
      style: "minimal",
      text: "OCEAN BLUE",
      topText: "",
      color: "#06b6d4",
      textColor: "#06b6d4"
    }
  },
};

// ---- Helper: build options from current UI state ----
function buildOptions() {
  const size = parseInt(qrSizeSlider.value);
  const opts = {
    width: size,
    height: size,
    data: dataInput.value.trim() || "https://example.com",
    image: logoDataURL || undefined,
    margin: 10,
    qrOptions: { errorCorrectionLevel: "H" },
    dotsOptions: { type: getActiveDotStyle() },
    cornersSquareOptions: { type: getActiveCornerStyle() },
    cornersDotOptions: { type: getActiveCornerStyle() === "extra-rounded" ? "dot" : getActiveCornerStyle() },
    backgroundOptions: { color: bgColorInput.value },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 8,
      imageSize: 0.4,
    },
  };

  // Dot color or gradient
  if (useGradientCheckbox.checked) {
    opts.dotsOptions.gradient = {
      type: "linear",
      rotation: 0.8,
      colorStops: [
        { offset: 0, color: gradientColor1.value },
        { offset: 1, color: gradientColor2.value },
      ],
    };
  } else {
    opts.dotsOptions.color = dotColorInput.value;
  }

  // Corner colors
  opts.cornersSquareOptions.color = cornerColorInput.value;
  opts.cornersDotOptions.color = cornerColorInput.value;

  return opts;
}

function getActiveDotStyle() {
  const active = dotStylePicker.querySelector(".pill.active");
  return active ? active.dataset.value : "rounded";
}

function getActiveCornerStyle() {
  const active = cornerStylePicker.querySelector(".pill.active");
  return active ? active.dataset.value : "square";
}

function getActiveFrameStyle() {
  const picker = document.getElementById("frame-style-picker");
  const active = picker ? picker.querySelector(".pill.active") : null;
  return active ? active.dataset.value : "none";
}

// ---- Draw Frame on Canvas ----
function drawFrame(qrImg, size) {
  const frameStyle = getActiveFrameStyle();
  if (frameStyle === "none") return;

  const scale = size / 300;

  const frameTextVal = document.getElementById("frame-text").value.trim();
  const frameTopTextVal = document.getElementById("frame-top-text").value.trim();
  const frameColorVal = document.getElementById("frame-color").value;
  const frameTextColorVal = document.getElementById("frame-text-color").value;
  const bgColorVal = bgColorInput.value;

  // Calculate layout sizes
  let paddingTop = 20 * scale;
  let paddingBottom = 20 * scale;
  let paddingSide = 20 * scale;

  if (frameStyle === "classic") {
    paddingTop = (frameTopTextVal ? 50 : 20) * scale;
    paddingBottom = (frameTextVal ? 60 : 20) * scale;
  } else if (frameStyle === "minimal") {
    paddingTop = 15 * scale;
    paddingBottom = (frameTextVal ? 45 : 15) * scale;
    paddingSide = 15 * scale;
  } else if (frameStyle === "badge") {
    paddingTop = (frameTopTextVal ? 45 : 25) * scale;
    paddingBottom = (frameTextVal ? 70 : 25) * scale;
    paddingSide = 25 * scale;
  }

  const finalWidth = size + 2 * paddingSide;
  const finalHeight = size + paddingTop + paddingBottom;

  const canvas = document.createElement("canvas");
  canvas.width = finalWidth;
  canvas.height = finalHeight;
  const ctx = canvas.getContext("2d");

  // Helper rounded rect functions
  function fillRoundRect(x, y, w, h, r, color) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function strokeRoundRect(x, y, w, h, r, color, lineWidth) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  if (frameStyle === "classic") {
    // Rounded frame background
    fillRoundRect(0, 0, finalWidth, finalHeight, 24 * scale, bgColorVal);
    strokeRoundRect(4 * scale, 4 * scale, finalWidth - 8 * scale, finalHeight - 8 * scale, 20 * scale, frameColorVal, 8 * scale);

    // Top banner (if text exists)
    if (frameTopTextVal) {
      ctx.save();
      // Clip to frame boundary
      ctx.beginPath();
      ctx.moveTo((4 + 20) * scale, 4 * scale);
      ctx.lineTo(finalWidth - (4 + 20) * scale, 4 * scale);
      ctx.quadraticCurveTo(finalWidth - 4 * scale, 4 * scale, finalWidth - 4 * scale, (4 + 20) * scale);
      ctx.lineTo(finalWidth - 4 * scale, finalHeight - (4 + 20) * scale);
      ctx.quadraticCurveTo(finalWidth - 4 * scale, finalHeight - 4 * scale, finalWidth - (4 + 20) * scale, finalHeight - 4 * scale);
      ctx.lineTo((4 + 20) * scale, finalHeight - 4 * scale);
      ctx.quadraticCurveTo(4 * scale, finalHeight - 4 * scale, 4 * scale, finalHeight - (4 + 20) * scale);
      ctx.lineTo(4 * scale, (4 + 20) * scale);
      ctx.quadraticCurveTo(4 * scale, 4 * scale, (4 + 20) * scale, 4 * scale);
      ctx.closePath();
      ctx.clip();

      // Draw top banner rectangle
      ctx.fillStyle = frameColorVal;
      ctx.fillRect(0, 0, finalWidth, paddingTop);
      ctx.restore();

      // Top text
      ctx.fillStyle = frameTextColorVal;
      ctx.font = `bold ${Math.round(22 * scale)}px 'Plus Jakarta Sans', -apple-system, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(frameTopTextVal, finalWidth / 2, paddingTop / 2 + 2 * scale);
    }

    // Draw QR code
    ctx.drawImage(qrImg, paddingSide, paddingTop);

    // Bottom text
    if (frameTextVal) {
      ctx.fillStyle = frameColorVal;
      ctx.font = `bold ${Math.round(26 * scale)}px 'Plus Jakarta Sans', -apple-system, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(frameTextVal, finalWidth / 2, finalHeight - paddingBottom / 2);
    }

  } else if (frameStyle === "minimal") {
    // Outer rect
    fillRoundRect(0, 0, finalWidth, finalHeight, 16 * scale, bgColorVal);
    // Thin frame border
    strokeRoundRect(3 * scale, 3 * scale, finalWidth - 6 * scale, finalHeight - 6 * scale, 13 * scale, frameColorVal, 3 * scale);

    // Draw QR code
    ctx.drawImage(qrImg, paddingSide, paddingTop);

    // Bottom text
    if (frameTextVal) {
      ctx.fillStyle = frameColorVal;
      ctx.font = `800 ${Math.round(24 * scale)}px 'Plus Jakarta Sans', -apple-system, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(frameTextVal, finalWidth / 2, finalHeight - paddingBottom / 2);
    }

  } else if (frameStyle === "badge") {
    // Thick solid colored background frame
    fillRoundRect(0, 0, finalWidth, finalHeight, 24 * scale, frameColorVal);

    // Top text (if exists)
    if (frameTopTextVal) {
      ctx.fillStyle = frameTextColorVal;
      ctx.font = `bold ${Math.round(22 * scale)}px 'Plus Jakarta Sans', -apple-system, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(frameTopTextVal, finalWidth / 2, paddingTop / 2);
    }

    // Draw a card background for the QR code
    fillRoundRect(paddingSide - 10 * scale, paddingTop - 10 * scale, size + 20 * scale, size + 20 * scale, 14 * scale, "#ffffff");

    // Draw QR code
    ctx.drawImage(qrImg, paddingSide, paddingTop);

    // Bottom text
    if (frameTextVal) {
      ctx.fillStyle = frameTextColorVal;
      ctx.font = `bold ${Math.round(26 * scale)}px 'Plus Jakarta Sans', -apple-system, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(frameTextVal, finalWidth / 2, finalHeight - paddingBottom / 2);
    }
  }

  // Clear container and append the framed canvas
  qrCanvas.innerHTML = "";
  qrCanvas.appendChild(canvas);
}

// ---- Generate QR Code ----
async function generateQR() {
  const text = dataInput.value.trim();
  if (!text) {
    dataInput.focus();
    dataInput.style.borderColor = "#ef4444";
    setTimeout(() => { dataInput.style.borderColor = ""; }, 1500);
    return;
  }

  const opts = buildOptions();

  // Clear previous
  qrCanvas.innerHTML = "";
  previewHint.classList.add("hidden");

  // Create new QR code
  qrCode = new QRCodeStyling(opts);

  const frameStyle = getActiveFrameStyle();
  if (frameStyle === "none") {
    qrCode.append(qrCanvas);
  } else {
    // Generate QR first, then render frame
    try {
      const blob = await qrCode.getRawData("png");
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => {
        drawFrame(img, opts.width);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    } catch (err) {
      console.error("Frame rendering failed:", err);
      qrCode.append(qrCanvas);
    }
  }

  // Enable export buttons
  btnDownloadPng.disabled = false;
  btnDownloadSvg.disabled = false;
  btnShare.disabled = false;

  // Ripple effect on button
  btnGenerate.classList.remove("ripple");
  void btnGenerate.offsetWidth; // force reflow
  btnGenerate.classList.add("ripple");
  setTimeout(() => btnGenerate.classList.remove("ripple"), 600);
}

// ---- Download PNG ----
function downloadPNG() {
  if (!qrCode) return;
  const frameStyle = getActiveFrameStyle();
  if (frameStyle === "none") {
    qrCode.download({ name: "qr-code", extension: "png" });
  } else {
    const canvas = qrCanvas.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "designer-qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }
}

// ---- Download SVG ----
function downloadSVG() {
  if (!qrCode) return;
  qrCode.download({ name: "qr-code", extension: "svg" });
}

// ---- Share ----
async function shareQR() {
  if (!qrCode) return;

  try {
    let blob;
    const frameStyle = getActiveFrameStyle();
    if (frameStyle === "none") {
      blob = await qrCode.getRawData("png");
    } else {
      const canvas = qrCanvas.querySelector("canvas");
      if (!canvas) return;
      blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    }
    const file = new File([blob], "qr-code.png", { type: "image/png" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "QR Code",
        text: "Check out this custom QR code!",
      });
    } else {
      // Fallback: copy image as blob to clipboard
      try {
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);
        showToast("QR code copied to clipboard!");
      } catch {
        alert("Sharing is not supported on this browser. Try downloading instead.");
      }
    }
  } catch (err) {
    console.error("Share failed:", err);
  }
}

// ---- Simple Toast Notification ----
function showToast(msg) {
  const toast = document.createElement("div");
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: "fixed",
    bottom: "24px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "rgba(16, 185, 129, 0.9)",
    color: "#fff",
    padding: "10px 24px",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontFamily: "var(--font-body)",
    zIndex: "9999",
    boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
    animation: "fadeInScale 0.3s ease-out",
  });
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ---- Apply Preset Theme ----
function applyPreset(presetName) {
  // If we are not on the designer page, navigate to it with the preset in URL
  if (!document.getElementById("designer-container") && !document.getElementById("qr-canvas")) {
    window.location.href = `designer.html?preset=${presetName}`;
    return;
  }
  
  const preset = presets[presetName];
  if (!preset) return;

  // Update dot style picker
  if (preset.dotsOptions.type) {
    dotStylePicker.querySelectorAll(".pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.value === preset.dotsOptions.type);
    });
  }

  // Update corner style picker
  if (preset.cornersSquareOptions.type) {
    cornerStylePicker.querySelectorAll(".pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.value === preset.cornersSquareOptions.type);
    });
  }

  // Update colors
  if (preset.dotsOptions.gradient) {
    useGradientCheckbox.checked = true;
    gradientControls.classList.remove("hidden");
    const stops = preset.dotsOptions.gradient.colorStops;
    gradientColor1.value = stops[0].color;
    gradientColor2.value = stops[stops.length - 1].color;
    dotColorInput.value = stops[0].color;
  } else {
    useGradientCheckbox.checked = false;
    gradientControls.classList.add("hidden");
    dotColorInput.value = preset.dotsOptions.color || "#000000";
  }

  if (preset.cornersSquareOptions.color) {
    cornerColorInput.value = preset.cornersSquareOptions.color;
  }

  if (preset.backgroundOptions.color) {
    bgColorInput.value = preset.backgroundOptions.color;
  }

  // Update frame picker and controls
  const framePicker = document.getElementById("frame-style-picker");
  const frameDetailsPanel = document.getElementById("frame-details-panel");
  const frameText = document.getElementById("frame-text");
  const frameTopText = document.getElementById("frame-top-text");
  const frameColor = document.getElementById("frame-color");
  const frameTextColor = document.getElementById("frame-text-color");

  if (preset.frame && framePicker) {
    framePicker.querySelectorAll(".pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.value === preset.frame.style);
    });
    if (preset.frame.style !== "none") {
      frameDetailsPanel.classList.remove("hidden");
    } else {
      frameDetailsPanel.classList.add("hidden");
    }
    frameText.value = preset.frame.text || "";
    frameTopText.value = preset.frame.topText || "";
    frameColor.value = preset.frame.color || "#000000";
    frameTextColor.value = preset.frame.textColor || "#ffffff";
  } else if (framePicker) {
    framePicker.querySelectorAll(".pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.value === "none");
    });
    frameDetailsPanel.classList.add("hidden");
  }

  // Update center logo if provided by preset
  if (preset.logo) {
    logoDataURL = preset.logo;
    logoPreviewImg.src = logoDataURL;
    uploadPlaceholder.classList.add("hidden");
    uploadPreview.classList.remove("hidden");
  } else {
    logoDataURL = "";
    logoUploadInput.value = "";
    uploadPlaceholder.classList.remove("hidden");
    uploadPreview.classList.add("hidden");
  }

  // Auto-generate if there's data
  if (dataInput.value.trim()) {
    generateQR();
  }
}

// ---- Event Listeners ----

document.addEventListener("DOMContentLoaded", () => {
  // Check URL for preset
  const urlParams = new URLSearchParams(window.location.search);
  const presetFromUrl = urlParams.get("preset");
  if (presetFromUrl && presets[presetFromUrl]) {
    setTimeout(() => {
      applyPreset(presetFromUrl);
    }, 100);
  }
});

// Only bind these if on designer page
if (document.getElementById("designer-container") || document.getElementById("qr-canvas")) {
  
  // Generate button
  btnGenerate.addEventListener("click", generateQR);

  // Enter key in input
  dataInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") generateQR();
  });

  // Download & Share buttons
  btnDownloadPng.addEventListener("click", downloadPNG);
  btnDownloadSvg.addEventListener("click", downloadSVG);
  btnShare.addEventListener("click", shareQR);

  // Dot style picker
  dotStylePicker.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    dotStylePicker.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    if (qrCode && dataInput.value.trim()) generateQR();
  });

  // Corner style picker
  cornerStylePicker.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    cornerStylePicker.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    if (qrCode && dataInput.value.trim()) generateQR();
  });

  // Color pickers — live update
  [dotColorInput, cornerColorInput, bgColorInput, gradientColor1, gradientColor2].forEach((input) => {
    input.addEventListener("input", () => {
      if (qrCode && dataInput.value.trim()) generateQR();
    });
  });

  // Gradient toggle
  useGradientCheckbox.addEventListener("change", () => {
    gradientControls.classList.toggle("hidden", !useGradientCheckbox.checked);
    if (qrCode && dataInput.value.trim()) generateQR();
  });

  // Frame style picker
  const framePicker = document.getElementById("frame-style-picker");
  const frameDetailsPanel = document.getElementById("frame-details-panel");
  if (framePicker) {
    framePicker.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill");
      if (!btn) return;
      framePicker.querySelectorAll(".pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const val = btn.dataset.value;
      if (val !== "none") {
        frameDetailsPanel.classList.remove("hidden");
      } else {
        frameDetailsPanel.classList.add("hidden");
      }
      if (qrCode && dataInput.value.trim()) generateQR();
    });
  }

  // Frame details inputs — live update
  ["frame-text", "frame-top-text", "frame-color", "frame-text-color"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        if (qrCode && dataInput.value.trim()) generateQR();
      });
    }
  });

  // Size slider
  qrSizeSlider.addEventListener("input", () => {
    sizeValue.textContent = qrSizeSlider.value;
    if (qrCode && dataInput.value.trim()) generateQR();
  });

  // Logo upload — click
  logoUploadArea.addEventListener("click", () => logoUploadInput.click());

  // Logo upload — drag & drop
  logoUploadArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    logoUploadArea.style.borderColor = "var(--accent)";
  });
  logoUploadArea.addEventListener("dragleave", () => {
    logoUploadArea.style.borderColor = "";
  });
  logoUploadArea.addEventListener("drop", (e) => {
    e.preventDefault();
    logoUploadArea.style.borderColor = "";
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleLogoFile(file);
    }
  });

  // Logo file input change
  logoUploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleLogoFile(file);
  });

  // Remove logo
  removeLogoBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    logoDataURL = "";
    logoUploadInput.value = "";
    uploadPlaceholder.classList.remove("hidden");
    uploadPreview.classList.add("hidden");
    if (qrCode && dataInput.value.trim()) generateQR();
  });
}

function handleLogoFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    logoDataURL = e.target.result;
    logoPreviewImg.src = logoDataURL;
    uploadPlaceholder.classList.add("hidden");
    uploadPreview.classList.remove("hidden");
    if (qrCode && dataInput.value.trim()) generateQR();
  };
  reader.readAsDataURL(file);
}

// Preset buttons
document.querySelectorAll(".chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyPreset(btn.dataset.preset);
  });
});