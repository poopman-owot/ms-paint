//1154 modulated
// next: star select
//copy("[\x1b*]");

Permissions.can_color_cell = function() {
  return true
};
const painter = {
  brCursor: document.createElement("div"),
  brDraw: false,
  brLast: null,
  isProcessing: false,
  refTable: [
    "\u0020", "\uD833\uDEA8", "\uD833\uDEAB", "\uD83E\uDF82", "\uD833\uDD00", "\u2598", "\uD833\uDD01",
    "\uD833\uDD02", "\uD833\uDD03", "\uD833\uDD04", "\u259D", "\uD833\uDD05", "\uD833\uDD06",
    "\uD833\uDD07", "\uD833\uDD08", "\u2580", "\uD833\uDD09", "\uD833\uDD0A", "\uD833\uDD0B",
    "\uD833\uDD0C", "\uD83E\uDFE6", "\uD833\uDD0D", "\uD833\uDD0E", "\uD833\uDD0F", "\uD833\uDD10",
    "\uD833\uDD11", "\uD833\uDD12", "\uD833\uDD13", "\uD833\uDD14", "\uD833\uDD15", "\uD833\uDD16",
    "\uD833\uDD17", "\uD833\uDD18", "\uD833\uDD19", "\uD833\uDD1A", "\uD833\uDD1B", "\uD833\uDD1C",
    "\uD833\uDD1D", "\uD833\uDD1E", "\uD833\uDD1F", "\uD83E\uDFE7", "\uD833\uDD20", "\uD833\uDD21",
    "\uD833\uDD22", "\uD833\uDD23", "\uD833\uDD24", "\uD833\uDD25", "\uD833\uDD26", "\uD833\uDD27",
    "\uD833\uDD28", "\uD833\uDD29", "\uD833\uDD2A", "\uD833\uDD2B", "\uD833\uDD2C", "\uD833\uDD2D",
    "\uD833\uDD2E", "\uD833\uDD2F", "\uD833\uDD30", "\uD833\uDD31", "\uD833\uDD32", "\uD833\uDD33",
    "\uD833\uDD34", "\uD833\uDD35", "\uD83E\uDF85", "\uD833\uDEA3", "\uD833\uDD36", "\uD833\uDD37",
    "\uD833\uDD38", "\uD833\uDD39", "\uD833\uDD3A", "\uD833\uDD3B", "\uD833\uDD3C", "\uD833\uDD3D",
    "\uD833\uDD3E", "\uD833\uDD3F", "\uD833\uDD40", "\uD833\uDD41", "\uD833\uDD42", "\uD833\uDD43",
    "\uD833\uDD44", "\u2596", "\uD833\uDD45", "\uD833\uDD46", "\uD833\uDD47", "\uD833\uDD48", "\u258C",
    "\uD833\uDD49", "\uD833\uDD4A", "\uD833\uDD4B", "\uD833\uDD4C", "\u259E", "\uD833\uDD4D",
    "\uD833\uDD4E", "\uD833\uDD4F", "\uD833\uDD50", "\u259B", "\uD833\uDD51", "\uD833\uDD52",
    "\uD833\uDD53", "\uD833\uDD54", "\uD833\uDD55", "\uD833\uDD56", "\uD833\uDD57", "\uD833\uDD58",
    "\uD833\uDD59", "\uD833\uDD5A", "\uD833\uDD5B", "\uD833\uDD5C", "\uD833\uDD5D", "\uD833\uDD5E",
    "\uD833\uDD5F", "\uD833\uDD60", "\uD833\uDD61", "\uD833\uDD62", "\uD833\uDD63", "\uD833\uDD64",
    "\uD833\uDD65", "\uD833\uDD66", "\uD833\uDD67", "\uD833\uDD68", "\uD833\uDD69", "\uD833\uDD6A",
    "\uD833\uDD6B", "\uD833\uDD6C", "\uD833\uDD6D", "\uD833\uDD6E", "\uD833\uDD6F", "\uD833\uDD70",
    "\uD833\uDEA0", "\uD833\uDD71", "\uD833\uDD72", "\uD833\uDD73", "\uD833\uDD74", "\uD833\uDD75",
    "\uD833\uDD76", "\uD833\uDD77", "\uD833\uDD78", "\uD833\uDD79", "\uD833\uDD7A", "\uD833\uDD7B",
    "\uD833\uDD7C", "\uD833\uDD7D", "\uD833\uDD7E", "\uD833\uDD7F", "\uD833\uDD80", "\uD833\uDD81",
    "\uD833\uDD82", "\uD833\uDD83", "\uD833\uDD84", "\uD833\uDD85", "\uD833\uDD86", "\uD833\uDD87",
    "\uD833\uDD88", "\uD833\uDD89", "\uD833\uDD8A", "\uD833\uDD8B", "\uD833\uDD8C", "\uD833\uDD8D",
    "\uD833\uDD8E", "\uD833\uDD8F", "\u2597", "\uD833\uDD90", "\uD833\uDD91", "\uD833\uDD92",
    "\uD833\uDD93", "\u259A", "\uD833\uDD94", "\uD833\uDD95", "\uD833\uDD96", "\uD833\uDD97", "\u2590",
    "\uD833\uDD98", "\uD833\uDD99", "\uD833\uDD9A", "\uD833\uDD9B", "\u259C", "\uD833\uDD9C",
    "\uD833\uDD9D", "\uD833\uDD9E", "\uD833\uDD9F", "\uD833\uDDA0", "\uD833\uDDA1", "\uD833\uDDA2",
    "\uD833\uDDA3", "\uD833\uDDA4", "\uD833\uDDA5", "\uD833\uDDA6", "\uD833\uDDA7", "\uD833\uDDA8",
    "\uD833\uDDA9", "\uD833\uDDAA", "\uD833\uDDAB", "\u2582", "\uD833\uDDAC", "\uD833\uDDAD",
    "\uD833\uDDAE", "\uD833\uDDAF", "\uD833\uDDB0", "\uD833\uDDB1", "\uD833\uDDB2", "\uD833\uDDB3",
    "\uD833\uDDB4", "\uD833\uDDB5", "\uD833\uDDB6", "\uD833\uDDB7", "\uD833\uDDB8", "\uD833\uDDB9",
    "\uD833\uDDBA", "\uD833\uDDBB", "\uD833\uDDBC", "\uD833\uDDBD", "\uD833\uDDBE", "\uD833\uDDBF",
    "\uD833\uDDC0", "\uD833\uDDC1", "\uD833\uDDC2", "\uD833\uDDC3", "\uD833\uDDC4", "\uD833\uDDC5",
    "\uD833\uDDC6", "\uD833\uDDC7", "\uD833\uDDC8", "\uD833\uDDC9", "\uD833\uDDCA", "\uD833\uDDCB",
    "\uD833\uDDCC", "\uD833\uDDCD", "\uD833\uDDCE", "\uD833\uDDCF", "\uD833\uDDD0", "\uD833\uDDD1",
    "\uD833\uDDD2", "\uD833\uDDD3", "\uD833\uDDD4", "\uD833\uDDD5", "\uD833\uDDD6", "\uD833\uDDD7",
    "\uD833\uDDD8", "\uD833\uDDD9", "\uD833\uDDDA", "\u2584", "\uD833\uDDDB", "\uD833\uDDDC",
    "\uD833\uDDDD", "\uD833\uDDDE", "\u2599", "\uD833\uDDDF", "\uD833\uDDE0", "\uD833\uDDE1",
    "\uD833\uDDE2", "\u259F", "\uD833\uDDE3", "\u2586", "\uD833\uDDE4", "\uD833\uDDE5", "\u2588"
  ],
  cellToPixel(...cellCoords) {
    let x, y, z, w;
    if (Array.isArray(cellCoords[0])) {
      [x = 0, y = 0, z = 0, w = 0] = cellCoords[0];
    } else if (typeof cellCoords[0] === "object") {
      if ('tileX' in cellCoords[0]) {
        x = cellCoords[0].tileX;
      }
      if ('tileY' in cellCoords[0]) {
        y = cellCoords[0].tileY;
      }
      if ('charX' in cellCoords[0]) {
        z = cellCoords[0].charX;
      }
      if ('charY' in cellCoords[0]) {
        w = cellCoords[0].charY;
      }
    } else {
      [x = 0, y = 0, z = 0, w = 0] = cellCoords;
    }

    if (cellCoords.length > 4 || x === undefined || y === undefined || z === undefined || w === undefined) {
      console.error(`CellToPixelCoords: Invalid cellCoords. Arguments can either be ([x, y, z, w]) or (x,y,z,w) or an object with tileX, tileY, charX, charY. Your cellCoords was: ${cellCoords}`);
      return;
    }
    const X = Math.round(x) * tileW + z * cellW + Math.round(positionX) + Math.round(owotWidth / 2);
    const Y = Math.round(y) * tileH + w * cellH + Math.round(positionY) + Math.round(owotHeight / 2);
    return [X, Y];
  },
  subtract(source = [0], subtractBy = 0, roundResult = false) {
    if (Array.isArray(source)) {
      if (Array.isArray(subtractBy)) {
        if (source.length === subtractBy.length) {
          const resultArray = source.map((value, index) => {
            let result = value - subtractBy[index];
            if (roundResult) {
              result = Math.round(result);
            }
            return result;
          });
          return resultArray;
        }
      } else if (typeof subtractBy === 'number') {
        const resultArray = source.map((value) => {
          let result = value - subtractBy;
          if (roundResult) {
            result = Math.round(result);
          }
          return result;
        });
        return resultArray;
      }
    } else if (typeof source === 'object' && typeof subtractBy === 'object') {
      const resultObject = {};
      for (const key in source) {
        if (subtractBy.hasOwnProperty(key)) {
          resultObject[key] = source[key] - subtractBy[key];
          if (roundResult) {
            resultObject[key] = Math.round(resultObject[key]);
          }
        }
      }
      return resultObject;
    }
  },
  lerp(start = 0, end = 0, amt = 0.5, roundResult = false) {
    if (typeof start === 'object' && typeof end === 'object') {
      if (Array.isArray(start)) {
        return start.map((value, i) => painter.lerp(value, end[i], amt, roundResult));
      }
      const resultObject = {};
      for (const key in start) {
        if (end.hasOwnProperty(key)) {
          resultObject[key] = painter.lerp(start[key], end[key], amt, roundResult);
        }
      }
      return resultObject;
    }

    if (Array.isArray(start)) {
      if (typeof end === 'number') {
        return start.map((value) => painter.lerp(value, end, amt, roundResult));
      }
      if (Array.isArray(end)) {
        if (end.length === 1) {
          return start.map((value) => painter.lerp(value, end[0], amt, roundResult));
        }
        if (start.length === end.length) {
          return start.map((value, i) => painter.lerp(value, end[i], amt, roundResult));
        }
      }
    }

    let value = (1 - amt) * start + amt * end;
    if (roundResult !== false) {
      if (typeof roundResult === 'number') {
        const factor = 1 / roundResult;
        value = Math.round(value * factor) / factor;
      } else {
        value = Math.round(value);
      }
    }
    return value;
  },
  scrollWorld(offset = [0, 0]) {
    const [x, y] = offset
    const deltaX = x;
    const deltaY = y;
    positionY -= deltaY;
    positionX -= deltaX;
    w.emit("scroll", {
      deltaX: -deltaX,
      deltaY: -deltaY
    });
    return [deltaY, deltaX];
  },
  ptr: {
    writeBuffer: [],
    mouse: {
      downLeft: false,
      downRight: false,
      draw: false,
    },
    line: {
      start: null,
      end: null
    },
    drawMode: 0,
    curveControlPoints: [],
    corner: 0.2,
    controlPointPower: 1,
    ctrl: false,
    alt: false,
    shift: false,
    fill: false,
    altFill: false,
    delay: 10,
    cells: [],
    color: YourWorld.Color,
    bg: YourWorld.BgColor == -1 ? "#ffffff" : YourWorld.BgColor,
    mode: 'text',
    html: `<div id="o-ptr-info-container">
  <div id="o-ptr-info-top">
    <p id="o-ptr-info-title">Text Tool (t)</p><input type="button" onclick="painter.toggleInfo()" value="hide">

  </div>
  <div id="o-ptr-info-section">
    <div id="o-ptr-info-list">
      <div id="info-select" class="">
        <div>Default action: <span>Selects a region of cells.</span></div>

      </div>
      <div id="info-erase" class="">
        <div>Default action: <span>Erases a single octo-cell</span></div>
        <div>Ctrl: <span>Erases an entire cell</span></div>
        <div>Alt+Left-click: <span>Erase forground text only</span></div>
        <div>Alt+Right-click: <span>Erases background only</span></div>

      </div>
      <div id="info-bucket" class="">
        <div>Default action: <span>Fills an area with a color</span></div>
        <div>Ctrl: <span>Fills the background instead</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>

      </div>
      <div id="info-dropper" class="">
        <div>Default action: <span>Copies a cells color</span></div>
        <div>Alt: <span>Uses a browser-specific tool</span></div>
        <div>Left-click: <span>Copies to primary color</span></div>
        <div>Right-click: <span>Copies to secondary color</span></div>

      </div>
      <div id="info-zoom" class="">
        <div>Default action: <span>Zooms into an area</span></div>
        <div>Ctrl or Alt: <span>Zooms out</span></div>

      </div>
      <div id="info-pencil" class="">
        <div>Default action: <span>Draws an octo character to a cell</span></div>
        <div>Ctrl: <span>Draws a full cell</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>
      </div>

      <div id="info-line" class="">
        <div>Default action: <span>Draws a line from mouse-down to mouse-up.</span></div>
        <div>Ctrl: <span>Draws a full cell</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>
				<div>Esc: <span>Restart Tool</span></div>
      </div>

      <div id="info-shape" class="">
        <div>Default action: <span>Draws a continuous line from mouse-down to mouse-up.</span></div>
        <div>Ctrl: <span>Draws a full cell</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>
				<div>Esc: <span>Restart Tool</span></div>
      </div>

      <div id="info-square" class="">
        <div>Default action: <span>Draws a rectangle shape</span></div>
        <div>Ctrl: <span>Draws a full cell</span></div>
        <div>Alt: <span>Perfect Square</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>
				<div>Esc: <span>Restart Tool</span></div>
      </div>

      <div id="info-curve" class="">
        <div>Default action: <span>Draws a quadratic curve</span></div>
        <div>Ctrl: <span>Draws a full cell</span></div>
        <div>Alt: <span>Ends and commits the curve</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>
        <div>0-9: <span>Sets control point power</span></div>
				<div>Esc: <span>Restart Tool</span></div>
      </div>

      <div id="info-rounded" class="">
        <div>Default action: <span>Draws a rounded rectangle shape</span></div>
        <div>Ctrl: <span>Draws a full cell</span></div>
        <div>Alt: <span>Perfect Rounded Square</span></div>
        <div>Shift: <span>Even Corners</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>
				<div>0-9: <span>Sets corner rounding percent</span></div>
				<div>Esc: <span>Restart Tool</span></div>
      </div>

      <div id="info-circle" class="">
        <div>Default action: <span>Draws an oval shape</span></div>
        <div>Ctrl: <span>Draws a full cell</span></div>
        <div>Alt: <span>Perfect Circle</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>
				<div>Esc: <span>Restart Tool</span></div>
      </div>

      <div id="info-brush" class="">
        <div>Default action: <span>Replaces the background color</span></div>
        <div>Ctrl: <span>Replace the forground color instead</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>

      </div>
      <div id="info-spray" class="">
        <div>Default action: <span>Sprays an octo-pixel randomly within a radius.</span></div>
        <div>Ctrl: <span>Large radius with full blocks</span></div>
        <div>Alt: <span>Medium radius with octo-pixels</span></div>
        <div>Left-click: <span>Primary color</span></div>
        <div>Right-click: <span>Secondary color</span></div>

      </div>
      <div id="info-text" class="active">
        <div>Default action: <span>Standard owot behavior</span></div>
				<div>Note: <span>Tool shortcut keys do not work in this mode.</span></div>
      </div>
    </div>
  </div>
</div>

<div id="o-ptr-header-container">
  <div id="o-ptr-titlebar"> untitled - Paint</div>
  <div id="o-ptr-window-bar">
    <div class="o-ptr-window-bar-btn">File</div>
    <div class="o-ptr-window-bar-btn">Edit</div>
    <div class="o-ptr-window-bar-btn">View
      <div class="ptr-dropdown">
        <input type="button" onclick="painter.toggleInfo()" value="Toggle Info Window">
      </div>
    </div>
    <div class="o-ptr-window-bar-btn">Image</div>
    <div class="o-ptr-window-bar-btn">Colors</div>
    <div class="o-ptr-window-bar-btn">Help</div>
  </div>
</div>
<div id="o-ptr-side-container">
  <div data-value="star-select" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn disabled"></div>
  <div data-value="select" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="erase" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="bucket" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="dropper" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="zoom" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="pencil" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="brush" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="spray" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="text" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn active"></div>
  <div data-value="line" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="curve" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="square" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="shape" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="circle" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
  <div data-value="rounded" onclick="painter.handleToolClick(this)" class="o-ptr-tool-btn"></div>
</div>
<div id="o-ptr-bottom-container">
  <div onclick="painter.handleColorClick(this)" id="o-ptr-color-switch">
    <div class="o-ptr-color-switch-prev bg"></div>
    <div class="o-ptr-color-switch-prev main"></div>
  </div>
  <input oninput="painter.handleColorChange(this)" type="color" value="#000000">
  <input oninput="painter.handleColorChange(this)" type="color" value="#ffffff">
  <input oninput="painter.handleColorChange(this)" type="color" value="#ff0000">
  <input oninput="painter.handleColorChange(this)" type="color" value="#ff5900">
  <input oninput="painter.handleColorChange(this)" type="color" value="#ffae00">
  <input oninput="painter.handleColorChange(this)" type="color" value="#ffd500">
  <input oninput="painter.handleColorChange(this)" type="color" value="#b5f73b">
  <input oninput="painter.handleColorChange(this)" type="color" value="#48f73b">
  <input oninput="painter.handleColorChange(this)" type="color" value="#3bf7af">
  <input oninput="painter.handleColorChange(this)" type="color" value="#3bf4f7">
  <input oninput="painter.handleColorChange(this)" type="color" value="#3bd1f7">
  <input oninput="painter.handleColorChange(this)" type="color" value="#3b9cf7">
  <input oninput="painter.handleColorChange(this)" type="color" value="#3b41f7">
  <input oninput="painter.handleColorChange(this)" type="color" value="#903bf7">
  <input oninput="painter.handleColorChange(this)" type="color" value="#ce3bf7">
  <input oninput="painter.handleColorChange(this)" type="color" value="#f73ba9">
</div>


`,
    css: `#o-ptr-container {
  display: block;
  top: 0px;
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  font-family: sans-serif;
  font-size: 12px;
}

#o-ptr-header-container {
  display: block;
  width: 100%;
  height: 40px;
  background-color: #bfbfbf;
  border-bottom: 1px solid;
  pointer-events: all;
  cursor: default;
}

div#o\=ptr-titlebar {}

#o-ptr-titlebar {
  height: 20px;
  width: 100%;
  background-color: #02007d;
  color: white;
  padding-left: 1em;
  padding-top: 3px;
}

#o-ptr-side-container {
  background-color: #bfbfbf;
  width: 71px;
  height: 100%;
  border-right: 1px solid;
  border-top: 1px solid white;
  position: absolute;
  pointer-events: all;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  cursor: default;
}

#o-ptr-bottom-container {
  background-color: #bfbfbf;
  height: 22px;
  width: 100%;
  display: flex;
  bottom: 0px;
  position: absolute;
  border-top: 1px solid;
  outline: 1px solid white;
  pointer-events: all;
  cursor: default;
  padding-left: 75px;
}

.o-ptr-tool-btn {
  width: 25px;
  height: 24px;
}

.o-ptr-tool-btn,
.o-ptr-window-bar-btn:hover {
  box-shadow: inset 1px 1px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 0 rgba(0, 0, 0, 0.5);
}

.o-ptr-tool-btn:hover,
.o-ptr-tool-btn.active {
  box-shadow: inset 1px 1px 1px 0 rgba(255, 255, 255, 0.5), -1px -1px 0 rgba(0, 0, 0, 0.5);
  background-color: gainsboro
}

[data-value="star-select"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAIABAAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjBEMDhENjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjBEMDhFNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMEQwOEI2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMEQwOEM2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAABACwAAAAAGAAZAAACMIyPqcvtD2MEsgGa8FS3HqxJ2liFn4dmjLk6rPq8Rtd91FW7Z8qr8vTb9IbEotFYAAA7');
}

[data-value="select"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAIABAAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjBEMDkxNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjBEMDkyNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMEQwOEY2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMEQwOTA2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAABACwAAAAAGAAZAAACKoyPqcvtD6OcNIIAbsZatwuBlSQ6ZXIy6fhZbciSrsrV2x3n+s73/s8oAAA7');
}

[data-value="erase"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAKIFAL29AL29vf//////AAAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjI3RTE4Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjI3RTE5Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMEQwOTM2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMEQwOTQ2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAZAAADP1i63P4wykmrvTgrwnsmwhCGxAWKKGed40AAJcWmACy3ZB1Lc25PhIBw+PoBh0TjERlQmToejXRKrVqv2GwjAQA7')
}

[data-value="bucket"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAKIEAL29vQC9vf///wAAAP///wAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjI3RTFDNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjI3RTFENjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMjdFMUE2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMjdFMUI2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAEACwAAAAAGAAZAAADTEi63P4wykmrvXUM3IbYl7Z5wgdOIkB+5QmlQyDPoqSpMy263aDGscAO+NIogkMZb1EjAHfKSNMJFdqMTE0UxUNmltgMZ0wum8/ocgIAOw==')
}

[data-value="dropper"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAYAKIFAHt7e729vQC9vf///wAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjI3RTIwNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjI3RTIxNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMjdFMUU2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMjdFMUY2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAYAAADO1i63P4wykmrvZhozEjQBFeAYEaWJskRg5oNA7C9cRhebC3mwk33OxiQ0xMUjRcjyMhMMpuiqHRKfSQAADs=')
}

[data-value="zoom"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAYAKIFAHt7ewAAvb29vf///wAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjUxNjJBNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjUxNjJCNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMjdFMjI2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNTE2Mjk2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAYAAADUFi63P4wykmrJZhYhoUX2EYAQ/kBWkWYn5dOhDC07RvFM+1Ssf7ZkJ4PpPINgDcAbYACXITMgHRTyBACAmmAysBquQvvFFwQkxXjs3rNriQAADs=')
}

[data-value="pencil"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAKIFAL0AAL29vf//AP///wAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjUxNjJFNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjUxNjJGNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGNTE2MkM2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNTE2MkQ2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAZAAADO1i63P4wykmrvTg3wrUiQEh44DCMGQecpMChGCEMARwPrm0ReN2euoqMFhTKOppX0bg0ehbNp3RKvSQAADs=')
}

[data-value="brush"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAKIEAHt7e729AP///wAAAP///wAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjUxNjMyNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjUxNjMzNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGNTE2MzA2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNTE2MzE2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAEACwAAAAAGAAZAAADQUi63P4wykmrvXQM3EYIG6d4oDh+oUim3GoSrvqh7TyzmaZr2L73gqAQNxkIAMcgUWJEIgXLSDMJvfh+r6x2i0kAADs=')
}

[data-value="spray"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAKIFAL29vf///wAAvQAA/wAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3Rjc4Rjc4Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3Rjc4Rjc5Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGNzhGNzY2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNzhGNzc2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAZAAADTli63P4wykmrvdiKsnkWACiMRFmJYVEGgUmJCsGWwzDBcUvUA3GnKtqu5oPgYkJe8dFhlHbDZeO4ePakjmbjiZ1KXBJtxjMum8/otPqSAAA7')
}

[data-value="text"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAIABAAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3Rjc4RjdDNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3Rjc4RjdENjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGNzhGN0E2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNzhGN0I2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAABACwAAAAAGAAZAAACLoyPqcvtD6OctBpgEdj58r59FRZmZElhnjqxIRu9b5vMsYI6diCL3Q8MCofERgEAOw==')
}

[data-value="line"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAIABAAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3Rjc4RjgwNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjhFRThGNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGNzhGN0U2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNzhGN0Y2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAABACwAAAAAGAAZAAACJYyPqcvtD6OcNAJQ1c1p8+N9QfiRnJmhlUqxkyvBFibW9o3nSwEAOw==')
}

[data-value="curve"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAIABAAAAAP///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjhFRTkyNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjhFRTkzNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGOEVFOTA2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGOEVFOTE2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAABACwAAAAAGAAZAAACJoyPqcvtD6OcDwC6LFZ6o+sdYNh55XZiKbWyofgaLTuSdYzn+r4UADs=')
}

[data-value="square"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAYAJECAAAAAL29vf///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjhFRTk2Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjhFRTk3Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGOEVFOTQ2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGOEVFOTU2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAACACwAAAAAGAAYAAACNZSPqcvtD6OctFoBst68gQCGYgh44wmWzIeO6sK2pCnPa23DeErjrxKr/RKc4uaCTCqXTGQBADs=')
}

[data-value="shape"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAYAJECAL29vQAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RkI4NkExNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RkI4NkEyNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGOEVFOTg2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGOEVFOTk2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAACACwAAAAAGAAYAAACN5SPqcvtD6OctIaL8Qyg+0BxXgdK4liaI7mtQBqdX7vCkPxm14O7dtLzOYK1oe64qyiXzKZzUQAAOw==')
}

[data-value="circle"] {
  background-image: url('data:image/gif;base64,R0lGODlhGAAZAJECAL29vQAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RkI4NkE1Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RkI4NkE2Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGQjg2QTM2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGQjg2QTQ2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAACACwAAAAAGAAZAAACNZSPqcvtD6OctNqLZdg8zA2EIrBBwYiGXnOm6bq07ggr8qyyOO3cbs0AvYC9TimDTCqXzEcBADs=')
}

[data-value="rounded"] {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAMAAAAc9R5vAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LmMwMjA0YjJkZWYsIDIwMjMvMDIvMDItMTI6MTQ6MjQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2N0ZCODZBOTY3NjgxMUVFQjdEQ0VBNkNDMkI0MkI5NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2N0ZCODZBQTY3NjgxMUVFQjdEQ0VBNkNDMkI0MkI5NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RkI4NkE3Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY3RkI4NkE4Njc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hGrWdwAAAAlQTFRFvb29AAAA////NqcFDgAAAAN0Uk5T//8A18oNQQAAACtJREFUeNpiYMIBGIamBCMCoEgwMiAAI5IEsjhUZjBL4PQHbp8PsogCCDAAkU8Dp+SF43sAAAAASUVORK5CYII=')
}

.pencil-icon {
  cursor: url('data:image/gif;base64,R0lGODlhGAAZAKIFAL0AAL29vf//AP///wAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjUxNjJFNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjUxNjJGNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGNTE2MkM2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNTE2MkQ2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAZAAADO1i63P4wykmrvTg3wrUiQEh44DCMGQecpMChGCEMARwPrm0ReN2euoqMFhTKOppX0bg0ehbNp3RKvSQAADs=') 9 20, auto !important;
}

.precise-icon {
  cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAYUlEQVR42u3TQQ7AIAhEUef+h24lXbYlEDXU9LPRheCDqFpxCACArQFHD0m2NtkGAAAAvwOYYbTWa5J15yZeDSuR8jglT+1Xu+dnz39/ApFY9wZCt1f/AgAAAJQDZgQAACep+IQhsONPEQAAAABJRU5ErkJggg==') 16 16, auto !important;
}

.zoom-icon {
  cursor: url('data:image/gif;base64,R0lGODlhGAAYAKIFAHt7ewAAvb29vf///wAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjUxNjJBNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjUxNjJCNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMjdFMjI2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGNTE2Mjk2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAYAAADUFi63P4wykmrJZhYhoUX2EYAQ/kBWkWYn5dOhDC07RvFM+1Ssf7ZkJ4PpPINgDcAbYACXITMgHRTyBACAmmAysBquQvvFFwQkxXjs3rNriQAADs=') 12 12, auto !important;
}

.dropper-icon {
  cursor: url('data:image/gif;base64,R0lGODlhGAAYAKIFAHt7e729vQC9vf///wAAAP///wAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjI3RTIwNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjI3RTIxNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMjdFMUU2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMjdFMUY2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAFACwAAAAAGAAYAAADO1i63P4wykmrvZhozEjQBFeAYEaWJskRg5oNA7C9cRhebC3mwk33OxiQ0xMUjRcjyMhMMpuiqHRKfSQAADs=') 9 20, auto !important;
}

.bucket-icon {
  cursor: url('data:image/gif;base64,R0lGODlhGAAZAKIEAL29vQC9vf///wAAAP///wAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMmRlZiwgMjAyMy8wMi8wMi0xMjoxNDoyNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY3RjI3RTFDNjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY3RjI3RTFENjc2ODExRUVCN0RDRUE2Q0MyQjQyQjk3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjdGMjdFMUE2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjdGMjdFMUI2NzY4MTFFRUI3RENFQTZDQzJCNDJCOTciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAEACwAAAAAGAAZAAADTEi63P4wykmrvXUM3IbYl7Z5wgdOIkB+5QmlQyDPoqSpMy263aDGscAO+NIogkMZb1EjAHfKSNMJFdqMTE0UxUNmltgMZ0wum8/ocgIAOw==') 12 12, auto !important;
}

#o-ptr-window-bar {
  display: flex;
}

.o-ptr-window-bar-btn {
  margin-left: 6px;
  padding: 2px 5px;
}

.o-ptr-tool-btn.disabled {
  opacity: 0.2;
  pointer-events: none;
}

input[type="color"] {
  padding: 0px;
  margin: 0px;
  width: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  outline: none;
  height: 23px;
  margin-left: -4px;
}

#o-ptr-color-switch {
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 5px;
  background-color: gainsboro;
}

.o-ptr-color-switch-prev {
  display: block;
  width: 10px;
  height: 10px;
  background-color: aliceblue;
  border: 1px solid black;
  position: absolute;
}

.o-ptr-color-switch-prev.main {
  top: 3px;
  margin-left: 3px;
  background-color: black;
}

.o-ptr-color-switch-prev.bg {
  bottom: 3px;
  margin-left: 8px;
}
.br-cursor{

position : absolute;
width : ${Math.ceil(cellW / 2)}px;
height : ${Math.ceil(cellH / 4)}px;
background-color : rgba(0, 0, 255, 0.25);
pointer-events :none;
}
#o-ptr-info-container {
    width: 300px;
    position: fixed;
    top: 40px;
    right: 0px;
    background-color: #bfbfbf;
    border: 1px solid black;
}

#o-ptr-info-container {
}

#o-ptr-info-top {
    padding: 7px;
    background-color: #02007d;
    color: white;
    display: flex;
    justify-content: space-between;
}

#o-ptr-info-section {
    padding: 20px;
}

#o-ptr-info-list {
    list-style: none;
    width: 100%;
    height: 100%;
}

#o-ptr-info-list div span {
    font-weight: normal;
}

#o-ptr-info-list > div {display: none;}
    

#o-ptr-info-list .active {display: flex;width: 100%;height: 100%;flex-direction: row;flex-wrap: wrap;align-content: stretch;align-items: center;justify-content: space-between;font-weight: 600;}

#o-ptr-info-list .active div {width: 100%;display: flex;justify-content: space-between;}

#o-ptr-info-top input[type="button"] {
    padding: 1px 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    pointer-events: all;
}
.ptr-dropdown {
    display: none;
    background-color: #bfbfbf;
    position: absolute;
    margin-top: 1px;
    border: 1px solid black;
    margin-left: -5px;
}

.ptr-dropdown input[type="button"] {
    border: none;
    border-bottom: 1px solid black;
    padding: 4px;
    cursor: pointer;
}

.o-ptr-window-bar-btn:hover .ptr-dropdown {
    display: block;
}
.hidden{
display:none !important
}
`,
    elements: {
      container: document.createElement("div"),
      style: document.createElement("style"),
    }
  },
  setPtrMouse(e, down) {
    painter.ptr.mouse.downRight = false;
    painter.ptr.mouse.downLeft = false;
    if (e.button == 2) {
      painter.ptr.mouse.downRight = down;
    } //right-click
    else if (e.button == 0) {
      painter.ptr.mouse.downLeft = down;
    } //left-click
  },
  startEyeDropper(e) {
    if (!e.altKey || !window.EyeDropper) {
      const [x, y, z, w] = getTileCoordsFromMouseCoords(e.x, e.y)
      const chr = getCharInfo(x, y, z, w);
      const keysToInclude = ["public", "member", "owner"];
      const protectionArray = keysToInclude.map(key => styles[key]);
      const cellColor = resolveColorValue(protectionArray[getCharInfoXY(x, y, z, w).protection]);
      const emptyChar = ((chr.char.trim().length == 0 || [6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8203, 8204, 8205, 8239, 8287, 8288, 12288, 10240, 12644, 65279, 32].includes(chr.char.charCodeAt()) || chr.color === cellColor));
      const emptyBg = resolveColorValue(chr.bgColor) == cellColor || chr.bgColor == -1;
      let c = emptyChar && emptyBg ? cellColor : emptyChar ? int_to_hexcode(getCharBgColor(x, y, z, w)) : int_to_hexcode(getCharColor(x, y, z, w));
      if (typeof c == "number") {
        c = int_to_hexcode(c);
      }
      if (e.button == 0) {
        painter.ptr.color = c
      } else {
        painter.ptr.bg = c
      }
      document.querySelector(".o-ptr-color-switch-prev.main").style.backgroundColor = painter.ptr.color == 0 ? "#000000" : painter.ptr.color == -1 ? "#ffffff" : painter.ptr.color;
      document.querySelector(".o-ptr-color-switch-prev.bg").style.backgroundColor = painter.ptr.bg == 0 ? "#000000" : painter.ptr.bg == -1 ? "#ffffff" : painter.ptr.bg;
      painter.updateColors();
      return
    }
    const eyeDropper = new EyeDropper();
    eyeDropper
      .open()
      .then((result) => {
        painter.ptr.color = result.sRGBHex
        document.querySelector(".o-ptr-color-switch-prev.main").style.backgroundColor = painter.ptr.color == 0 ? "#000000" : painter.ptr.color == -1 ? "#ffffff" : painter.ptr.color;
        painter.updateColors();
      })
      .catch((e) => {});
  },
  preventChatOverlay() {
    setTimeout(function() {
      let left = parseInt(chat_window.style.left, 10);
      let bottom = parseInt(chat_window.style.bottom, 10);
      let maxHeight = (owotHeight - 22);
      chat_window.style.left = left < 71 ? "71px" : chat_window.style.left;
      const currentBottom = (owotHeight - (chat_window.offsetTop + chat_window.offsetHeight))
      chat_window.style.top = currentBottom < 22 ? (chat_window.offsetTop - 22) + "px" : chat_window.style.top;
      chat_window.style.bottom = "";
    }, 1)
  },
  clearCanvasClass() {
    owot.classList.forEach(function(e) {
      if (e !== "screen_canvas") {
        owot.classList.remove(e);
      }
    })
  },
  setActiveTool(el) {
    document.querySelectorAll(".o-ptr-tool-btn.active").forEach(function(e) {
      e.classList.remove("active")
    });
    el.classList.add("active");
  },
  handleColorClick(e) {
    let isSwitcher;
    if (e.target) {
      if (e.target.classList) {
        isSwitcher = e.target.classList.contains("o-ptr-color-switch-prev");
      }
      if (isSwitcher) {
        let a = structuredClone(painter.ptr.color);
        let b = structuredClone(painter.ptr.bg);
        painter.ptr.color = b;
        painter.ptr.bg = a;
        document.querySelector(".o-ptr-color-switch-prev.main").style.backgroundColor = painter.ptr.color == 0 ? "#000000" : painter.ptr.color == -1 ? "#ffffff" : painter.ptr.color;
        document.querySelector(".o-ptr-color-switch-prev.bg").style.backgroundColor = painter.ptr.bg == 0 ? "#000000" : painter.ptr.bg == -1 ? "#ffffff" : painter.ptr.bg;
        painter.updateColors();
      } else {
        painter.setPtrMouse(e, true);
        var inputElement = e.target.closest('input');
        if (inputElement) {
          const val = inputElement.value;
          if (painter.ptr.mouse.downLeft) {
            document.querySelector(".o-ptr-color-switch-prev.main").style.backgroundColor = val;
            painter.ptr.color = val;
          } else if (painter.ptr.mouse.downRight) {
            inputElement.click();
            document.querySelector(".o-ptr-color-switch-prev.bg").style.backgroundColor = val;
            painter.ptr.bg = val;
          }
        }
        painter.updateColors();
      }
    }
  },
  handleColorChange(el) {
    if (painter.ptr.mouse.downLeft) {
      document.querySelector(".o-ptr-color-switch-prev.main").style.backgroundColor = el.value;
      painter.ptr.color = el.value;
    } else if (painter.ptr.mouse.downRight) {
      document.querySelector(".o-ptr-color-switch-prev.bg").style.backgroundColor = el.value;
      painter.ptr.bg = el.value;
    }
    painter.updateColors();
  },
  updateColors() {
    YourWorld.Color = (painter.ptr.color == -1 || painter.ptr.color == '#ffffff') ? resolveColorValue('#ffffff') : resolveColorValue(painter.ptr.color);
    YourWorld.BgColor = (painter.ptr.bg == -1 || painter.ptr.bg == '#ffffff') ? -1 : resolveColorValue(painter.ptr.bg);
  },
  toggleInfo() {
    document.querySelector("#o-ptr-info-container").classList.toggle("hidden");
  },
  handleToolClick(el) {
    const toolType = el.getAttribute("data-value");
    painter.setActiveTool(el)
    painter.clearCanvasClass();
    w.disableCursor();
    w.disableDragging();
    w.regionSelect.stopSelectionUI();
    painter.brLast = null;
    painter.ptr.fill = false;
    painter.ptr.curveControlPoints.length = 0;
    painter.ptr.cells.length = 0;
    painter.ptr.line.start = null;
    painter.ptr.line.end = null;
    painter.ptr.ctrl = false;
    painter.ptr.alt = false;
    painter.ptr.shift = false;
    painter.ptr.mode = toolType;
    painter.ptr.writeBuffer.length = 0;
    switch (toolType) {
      case "select":
        owot.classList.add("precise-icon");
        w.regionSelect.startSelection();
        document.querySelector(`#o-ptr-info-title`).innerText = "Select Tool (s)";
        break;
      case "erase":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Erase Tool (e)";
        break;
      case "dropper":
        owot.classList.add("dropper-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Dropper tool (d)";
        break;
      case "zoom":
        owot.classList.add("zoom-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Zoom Tool (z)";
        break;
      case "pencil":
        owot.classList.add("pencil-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Pencil Tool (p)";
        break;
      case "bucket":
        owot.classList.add("bucket-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Fill Tool (f)";
        break;
      case "brush":
        document.querySelector(`#o-ptr-info-title`).innerText = "Brush Tool (b)";
        break;
      case "spray":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Graffiti Tool (g)";
        break;
      case "line":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Line Tool (l)";
        break;
      case "shape":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Shape Tool (k)";
        break;
      case "square":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Rectangle Tool (r)";
        break;
      case "circle":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Oval Tool (o)";
        break;
      case "rounded":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Rounded Rectangle Tool (w)";
        break;
      case "curve":
        owot.classList.add("precise-icon");
        document.querySelector(`#o-ptr-info-title`).innerText = "Quadratic Curve Tool (q)";
        break;
      case "text":
        document.querySelector(`#o-ptr-info-title`).innerText = "Text Tool (t)";
        w.enableDragging();
        w.enableCursor();
        break;
      default:
        // code block
    }
    document.querySelector("#o-ptr-info-list .active")?.classList.remove("active");
    document.querySelector(`#info-${painter.ptr.mode}`)?.classList.add("active");
  },
  applyDot(chr, x, y, erase) {
    var idx = painter.refTable.indexOf(chr);
    if (idx == -1) return chr;
    var pos = y * 2 + x;
    pos = 1 << pos;
    if (painter.ptr.drawMode == 0) {
      return painter.refTable[idx | pos];
    } else if (painter.ptr.drawMode == 1) {
      return painter.refTable[idx & (255 - pos)];
    }
    return chr;
  },
  processQueue() {
    if (painter.ptr.writeBuffer.length > 0 && !painter.isProcessing) {
      painter.isProcessing = true;
      const {
        e,
        forcemode,
        param
      } = painter.ptr.writeBuffer.shift();

      painter.processPoint(e, forcemode, param);

      setTimeout(() => {
        painter.isProcessing = false;
        painter.processQueue(); // Process the next call in the queue
      }, !("spray erase brush".includes(painter.ptr.mode)) << 3); // Set the throttle interval to 10ms
    }
  },
  doPoint(e, forcemode, param) {

    if (!e || "line shape square circle rounded curve".includes(painter.ptr.mode) && forcemode !== painter.ptr.mode) {
      return
    }

    painter.ptr.writeBuffer.push({
      e,
      forcemode,
      param
    });


  },
  processPoint(e, forcemode, param) {

    if (!e || "line shape square circle rounded curve".includes(painter.ptr.mode) && forcemode !== painter.ptr.mode) {
      return
    }

    var tileX = e.tileX;
    var tileY = e.tileY;
    var charX = e.charX;
    var charY = e.charY;

    var halfX = Math.floor(owotWidth / 2);
    var halfY = Math.floor(owotHeight / 2);
    var pageX = e.pageX - halfX;
    var pageY = e.pageY - halfY;

    // get absolute x/y mouse position
    var absX = pageX - positionX;
    var absY = pageY - positionY;

    // screen size of braille dot
    var segW = cellW / 2;
    var segH = cellH / 4;

    // absolute dot position
    var absBrX = Math.floor(absX / segW);
    var absBrY = Math.floor(absY / segH);
    var absBrX_L = Math.floor(absX / cellW);
    var absBrY_L = Math.floor(absY / cellH);
    const altType = painter.ptr.ctrl || painter.ptr.mode == "brush"
    const [mouseX, mouseY] = currentMousePosition;
    const radius = altType ? param + cellH : param + (cellW / 2);
    painter.brCursor.style.borderRadius = painter.ptr.mode == "spray" ? "100%" : "0%"
    painter.brCursor.style.width = painter.ptr.mode == "spray" ? radius * 2 + "px" : altType ? cellW + "px" : Math.ceil(cellW / 2) + "px";
    painter.brCursor.style.height = painter.ptr.mode == "spray" ? radius * 2 + "px" : altType ? cellH + "px" : Math.ceil(cellH / 4) + "px";
    painter.brCursor.style.left = painter.ptr.mode == "spray" ? mouseX - radius + "px" : altType ? (cellW * absBrX_L + halfX + positionX) + "px" : (segW * absBrX + halfX + positionX) + "px";
    painter.brCursor.style.top = painter.ptr.mode == "spray" ? mouseY - radius + "px" : altType ? (cellH * absBrY_L + halfY + positionY) + "px" : (segH * absBrY + halfY + positionY) + "px";
    painter.brCursor.style.opacity = "pencil erase brush spray ".includes(painter.ptr.mode) && (painter.ptr.mouse.downRight || painter.ptr.mouse.downLeft) ? 1 : 0;


    if (!painter.ptr.mouse.draw && !("line shape square circle rounded curve".includes(forcemode)) || !"pencil erase brush spray line shape square circle rounded curve".includes(painter.ptr.mode) || painter.ptr.mode == "spray" && forcemode !== "spray") {
      painter.brLast = null;
      return;
    }

    if (painter.brLast || painter.ptr.mode == "spray" && forcemode == "spray" || painter.ptr.mode == "pencil" && forcemode == "single") {
      var line = forcemode == "spray" || forcemode == "single" ?
        lineGen(absBrX, absBrY, absBrX, absBrY) :
        lineGen(painter.brLast[0], painter.brLast[1], absBrX, absBrY);

      function processNextPixel(i) {
        if (i < line.length) {
          var pixel = line[i];
          var abrX = pixel[0];
          var abrY = pixel[1];
          var cx = Math.floor(abrX / 2);
          var cy = Math.floor(abrY / 4);
          var brX = abrX - Math.floor(abrX / 2) * 2;
          var brY = abrY - Math.floor(abrY / 4) * 4;
          var chr = getCharInfoXY(cx, cy);
          const erasing = painter.ptr.mode == "erase";
          const brush = painter.ptr.mode == "brush";
          const keysToInclude = ["public", "member", "owner"];
          const protectionArray = keysToInclude.map(key => styles[key]);
          const cellColor = resolveColorValue(protectionArray[getCharInfoXY().protection]);
          const drawColor = erasing ? cellColor : brush && !painter.ptr.ctrl ? chr.color : painter.ptr.mouse.downRight || "line shape square circle rounded curve".includes(painter.ptr.mode) && param ? resolveColorValue(painter.ptr.bg) : resolveColorValue(painter.ptr.color);
          painter.ptr.drawMode = erasing ? 1 : Number(drawColor == cellColor);
          const dotChr = (() => {
            if (brush) {
              return chr.char;
            }
            if (erasing) {
              return painter.ptr.ctrl ? " " : painter.applyDot(chr.char, brX, brY);
            }
            return painter.ptr.ctrl ? (painter.ptr.mouse.downRight ? (painter.ptr.drawMode === 1 ? " " : "█") : "█") : painter.applyDot(chr.char, brX, brY);
          })();
          const charColor = painter.ptr.drawMode ? brush ? chr.color : chr.color : drawColor;
          const charBgColor = erasing ? cellColor : brush && !painter.ptr.ctrl ? painter.ptr.mouse.downRight ? resolveColorValue(painter.ptr.bg) : resolveColorValue(painter.ptr.color) : chr.bgColor;
          writeCharToXY(dotChr, charColor, cx, cy, charBgColor);

          setTimeout(function() {
            processNextPixel(i + 1);
          }, 10);
        }
      }

      processNextPixel(0);
    }
    painter.brLast = [absBrX, absBrY];
    if (painter.ptr.line.start && painter.ptr.line.end) {

      if ("line".includes(painter.ptr.mode)) {
        painter.ptr.line.start = painter.ptr.line.end = null;
        painter.brLast = null;
      } else if (painter.ptr.mode == "shape") {
        painter.ptr.line.start = painter.ptr.line.end = null;
      }
    }
  },

  moveElement(menuObject, pos) {
    const checkboxEl = menu.entries[menuObject - 1].element;
    const navUl = elm.nav_elm.children[0];
    const referenceNode = navUl.children[pos];
    navUl.insertBefore(checkboxEl, referenceNode);
    return checkboxEl;
  },
  setMode(mode) {
    document.querySelector(`.o-ptr-tool-btn[data-value="${mode}"]`).click();
  },
  ColorCell: class {
    constructor(tileX, tileY, charX, charY, targetColor, newColor, char) {
      this.tileX = tileX;
      this.tileY = tileY;
      this.charX = charX;
      this.charY = charY;
      this.targetColor = targetColor;
      this.newColor = newColor;
      this.char = char;
    }

    onCreate() {
      const colorCellInfo = getCharInfo(this.tileX, this.tileY, this.charX, this.charY);
      const editArray = painter.ptr.altFill ? [this.tileY, this.tileX, this.charY, this.charX, getDate(), this.char, nextObjId, colorCellInfo.color, this.newColor] : //bgcolor
        [this.tileY, this.tileX, this.charY, this.charX, getDate(), this.char, nextObjId, this.newColor, colorCellInfo.bgColor] //color

      tellEdit.push(editArray); // track local changes
      writeBuffer.push(editArray); // send edits to server
      nextObjId++;
      markCharacterAsUndoable(this.tileX, this.tileY, this.charX, this.charY);

      const nearbyCells = [{
          charX: this.charX - 1,
          charY: this.charY
        },
        {
          charX: this.charX + 1,
          charY: this.charY
        },
        {
          charX: this.charX,
          charY: this.charY - 1
        },
        {
          charX: this.charX,
          charY: this.charY + 1
        },
      ];

      for (const {
          charX,
          charY
        } of nearbyCells) {
        const adjustedCharX = charX < 0 ? 15 : charX > 15 ? 0 : charX;
        const adjustedCharY = charY < 0 ? 7 : charY > 7 ? 0 : charY;

        const newTileX = charX < 0 ? this.tileX - 1 : charX > 15 ? this.tileX + 1 : this.tileX;
        const newTileY = charY < 0 ? this.tileY - 1 : charY > 7 ? this.tileY + 1 : this.tileY;

        const nearbyCellInfo = getCharInfo(newTileX, newTileY, adjustedCharX, adjustedCharY);
        const nearbyCellChar = nearbyCellInfo.char;
        const nearbyCellCharBG = nearbyCellInfo.bgColor;
        const nearbyCellColor = nearbyCellInfo.color;
        const nearbyCellTargetColor = painter.ptr.altFill ? nearbyCellInfo.bgColor : nearbyCellInfo.color;
        if (
          !painter.cellExistsInArray(newTileX, newTileY, adjustedCharX, adjustedCharY, this.newColor, this.char)
        ) {



          if (this.char == nearbyCellChar && this.targetColor === nearbyCellTargetColor) {
            if (!painter.cellExistsInArray(newTileX, newTileY, adjustedCharX, adjustedCharY, nearbyCellTargetColor, nearbyCellChar)) {

              const newColorCell = new painter.ColorCell(newTileX, newTileY, adjustedCharX, adjustedCharY, nearbyCellTargetColor, this.newColor, nearbyCellChar);
              painter.ptr.cells.push(newColorCell);

            }
          }


        }
      }
    }
  },
  cellExistsInArray(tileX, tileY, charX, charY, targetColor, char) {
    return painter.ptr.cells.some(cell => (
      cell.tileX === tileX &&
      cell.tileY === tileY &&
      cell.charX === charX &&
      cell.charY === charY &&
      cell.targetColor === targetColor &&
      cell.char === char
    ));
  },
  beginFill(e) {

    let stopped = false;
    if (painter.ptr.fill) {
      painter.ptr.fill = false;
      stopped = true;
      return;
    }

    if (stopped) {
      return
    }
    painter.ptr.cells.length = 0;
    painter.ptr.altFill = e.altKey || e.ctrlKey;
    const [X, Y, x, y] = currentPosition;
    const colorCellInfo = getCharInfo(X, Y, x, y);
    const targetColor = painter.ptr.altFill ? colorCellInfo.bgColor : colorCellInfo.color;
    const char = colorCellInfo.char;
    const fillColor = (e.button == 0) ? painter.ptr.color : painter.ptr.bg;


    const newColorCell = new painter.ColorCell(X, Y, x, y, targetColor, resolveColorValue(fillColor), char);

    if (!painter.cellExistsInArray(X, Y, x, y, resolveColorValue(fillColor), char)) {
      painter.ptr.cells.push(newColorCell);
    }
    painter.ptr.fill = true;
    painter.processCell(0);
  },
  processCell(index) {
    if (!painter.ptr.fill) {
      return
    }
    if (index < painter.ptr.cells.length) {
      const cell = painter.ptr.cells[index];
      cell.onCreate();
      setTimeout(() => {
        if (!painter.ptr.fill) {
          return
        }
        painter.processCell(index + 1);
      }, painter.ptr.delay);
    } else {
      painter.ptr.fill = false;
    }
  },
  getRandomPointInCircle(centerX, centerY, radius) {
    const angle = Math.random() * 2 * Math.PI;
    const randomRadius = Math.random() * radius;
    const x = centerX + randomRadius * Math.cos(angle);
    const y = centerY + randomRadius * Math.sin(angle);
    return [x, y];
  },
  spray() {
    if (painter.ptr.mode !== "spray" || !painter.ptr.mouse.downLeft && !painter.ptr.mouse.downRight) {
      return
    }
    const [mouseX, mouseY] = currentMousePosition;
    const maxRadius = painter.ptr.alt ? cellH : painter.ptr.shift ? cellH * 2 : cellW;
    const [pageX, pageY] = painter.getRandomPointInCircle(mouseX, mouseY, maxRadius);
    const [tileX, tileY, charX, charY] = getTileCoordsFromMouseCoords(pageX, pageY);

    const e = {
      tileX: tileX,
      tileY: tileY,
      charX: charX,
      charY: charY,
      pageX: pageX,
      pageY: pageY,
    }
    painter.doPoint(e, "spray", maxRadius)
  },
  mouseToPoint(position = currentMousePosition) {
    const [mouseX, mouseY] = position;
    const [tileX, tileY, charX, charY] = getTileCoordsFromMouseCoords(mouseX, mouseY);
    const e = {
      tileX: tileX,
      tileY: tileY,
      charX: charX,
      charY: charY,
      pageX: mouseX,
      pageY: mouseY,
    }
    return e;
  },
  createRoundedRectangleCoordinates(startX, startY, endX, endY, borderRadiusSize, perfectSquare = false, evenEdges = true) {
    // Calculate the width and height of the rectangle
    let width = evenEdges ? Math.min(Math.abs(endX - startX), Math.abs(endY - startY)) : Math.abs(endX - startX);
    let height = evenEdges ? width : Math.abs(endY - startY);

    if (perfectSquare) {
      // If perfectSquare is true, set the width and height to the same value
      const size = Math.max(width, height);
      endX = startX + (endX > startX ? size : -size);
      endY = startY + (endY > startY ? size : -size);
      // Recalculate the width and height of the rectangle
      width = Math.abs(endX - startX);
      height = Math.abs(endY - startY);
    }

    // Rest of the code remains the same
    const borderRadiusX = (evenEdges ? width : width) * borderRadiusSize;
    const borderRadiusY = (evenEdges ? height : height) * borderRadiusSize;
    const minDistance = ~~(cellH / 4 - 1); // Minimum distance between points in pixels
    const topLeft = [Math.min(startX, endX), Math.min(startY, endY)];
    const bottomRight = [Math.max(startX, endX), Math.max(startY, endY)];
    const numPoints = 360; // You can adjust the number of points for smoother or coarser rounded corners
    const cornerPixels = [];
    let finish = false;

    function createRoundedCorner(centerX, centerY, radiusX, radiusY, corner) {
      let lastX = null;
      let lastY = null;

      const cornerPi = Math.PI / 2;
      for (let i = numPoints; i >= 0; i--) { // Reverse the loop
        let angle;
        if (corner === 'BR') {
          angle = (i / numPoints) * cornerPi; // Bottom-right corner
        } else if (corner === 'BL') {
          angle = ((i / numPoints) * cornerPi) + cornerPi; // Bottom-left corner
        } else if (corner === 'TL') {
          angle = ((i / numPoints) * cornerPi) + (cornerPi * 2); // Top-left corner
        } else if (corner === 'TR') {
          angle = ((i / numPoints) * cornerPi) + (cornerPi * 3); // Top-right corner
        }

        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);

        if (lastX !== null && lastY !== null) {
          const distance = Math.hypot(x - lastX, y - lastY);
          if (distance >= minDistance) {
            cornerPixels.push([Math.round(x), Math.round(y)]);
            lastX = x;
            lastY = y;
          }
        } else {
          cornerPixels.push([Math.round(x), Math.round(y)]);
          lastX = x;
          lastY = y;
          if (finish) {
            return;
          }
        }
      }
    }


    createRoundedCorner(topLeft[0] + borderRadiusX, bottomRight[1] - borderRadiusY, borderRadiusX, borderRadiusY, 'BL');
    createRoundedCorner(bottomRight[0] - borderRadiusX, bottomRight[1] - borderRadiusY, borderRadiusX, borderRadiusY, 'BR');
    createRoundedCorner(bottomRight[0] - borderRadiusX, topLeft[1] + borderRadiusY, borderRadiusX, borderRadiusY, 'TR');
    createRoundedCorner(topLeft[0] + borderRadiusX, topLeft[1] + borderRadiusY, borderRadiusX, borderRadiusY, 'TL');
    finish = true;
    createRoundedCorner(topLeft[0] + borderRadiusX, bottomRight[1] - borderRadiusY, borderRadiusX, borderRadiusY, 'BL');

    return cornerPixels;
  },
  doRounded(e, radius = painter.ptr.corner, evenCorners = e.shiftKey) {
    if (!painter.ptr.line.start && e.type == "mousedown") {
      painter.ptr.line.start = structuredClone(currentMousePosition);
    } else if (!painter.ptr.line.end && painter.ptr.line.start && e.type == "mouseup") {
      painter.ptr.line.end = structuredClone(currentMousePosition);
      const [startX, startY] = painter.ptr.line.start;
      const [endX, endY] = painter.ptr.line.end;
      const roundedCoordinates = painter.createRoundedRectangleCoordinates(startX, startY, endX, endY, radius, e.altKey, evenCorners);
      const cornerPixels = roundedCoordinates;
      painter.brLast = null;
      cornerPixels.forEach(coord => {
        painter.doPoint(painter.mouseToPoint(coord), painter.ptr.mode, e.button == 2);
      });

      painter.ptr.line.start = null;
      painter.ptr.line.end = null;
    }
  },
  doQcurve(e, line) {
    const endCurve = e.altKey;
    const pos = structuredClone(currentMousePosition);
    const points = painter.ptr.curveControlPoints;
    const power = ~~(Math.min(6, points.length) * 0.5);

    if (e.type == "mousedown" && !endCurve && !painter.ptr.line.start) {
      painter.ptr.curveControlPoints.push(pos);
      painter.ptr.line.start = pos;
    } else if (e.type == "mousedown" && !endCurve && painter.ptr.line.start && !painter.ptr.line.end) {
      for (i = 0; i < painter.ptr.controlPointPower; i++) {
        painter.ptr.curveControlPoints.push(pos);
      }


    } else if ((endCurve || line) && e.type == "mouseup" && points.length > 0 && !painter.ptr.line.end) {
      painter.ptr.curveControlPoints.push(pos)
      painter.ptr.line.end = pos;

      const quadraticCurve = painter.createQuadraticCurve(painter.ptr.curveControlPoints);
      painter.brLast = null;
      quadraticCurve.forEach(coord => {
        painter.doPoint(painter.mouseToPoint(coord), painter.ptr.mode, e.button == 2);
      });
      painter.ptr.line.start = null;
      painter.ptr.line.end = null;
      painter.ptr.curveControlPoints.length = 0;
    }
  },
  doLine(e) {
    painter.doQcurve(e, true)
  },
  createQuadraticCurve(inputCoords) {
    const resolution = 0.01;
    const curveCoords = [];

    function calculateQuadraticPoint(points, t) {
      if (points.length === 1) {
        return points[0];
      }
      const nextPoints = [];
      for (let i = 0; i < points.length - 1; i++) {
        const x = (1 - t) * points[i][0] + t * points[i + 1][0];
        const y = (1 - t) * points[i][1] + t * points[i + 1][1];

        nextPoints.push([x, y]);
      }
      return calculateQuadraticPoint(nextPoints, t);
    }
    for (let t = 0; t <= 1; t += resolution) {
      const curvePoint = calculateQuadraticPoint([...inputCoords], t);
      curveCoords.push([Math.round(curvePoint[0]), Math.round(curvePoint[1])]);
    }
    return curveCoords;
  },
  doRender() {

    if (!painter.isProcessing) {
      painter.processQueue();
    }
  },
};

painter.ptr.elements.container.id = 'o-ptr-container';
painter.ptr.elements.container.innerHTML = painter.ptr.html;
elm.main_view.appendChild(painter.ptr.elements.container);
painter.ptr.elements.style.textContent = painter.ptr.css;
document.head.appendChild(painter.ptr.elements.style);
painter.brCursor.classList.add("br-cursor")
elm.main_view.appendChild(painter.brCursor);
w.on("tilesrendered", function() {
  const offset = zoom >= 2 ? -1 : 0
  painter.brCursor.style.width = Math.ceil(cellW / 2) + offset + "px";
  painter.brCursor.style.height = Math.ceil(cellH / 4) + offset + "px";
});
w.on("mousemove", function(e) {


  if ((painter.ptr.mouse.downLeft || painter.ptr.mouse.downRight) && painter.ptr.mode !== "text" && "spray pencil erase brush".includes(painter.ptr.mode)) {
    painter.doPoint(e);
  }
});
var painterGridEnabled = false;
menuOptions.octogrid = menu.addCheckboxOption("Octo-grid", function() {
  painterGridEnabled = true;
  w.redraw();
  setRedrawPatterned("square");
}, function() {
  painterGridEnabled = false;
  w.redraw();
  setRedrawPatterned("square");
});
menu.hideEntry(menuOptions.octogrid);
painter.moveElement(menuOptions.octogrid, menuOptions.subgrid);

menu.entries[menuOptions.subgrid - 1].element.addEventListener("click", function(e) {
  if (e.target.checked) {
    menu.showEntry(menuOptions.octogrid);
  } else {
    menu.hideEntry(menuOptions.octogrid);
  }
})
document.addEventListener("mouseup", painter.preventChatOverlay)
document.addEventListener("click", painter.preventChatOverlay)
document.querySelector("#o-ptr-bottom-container").addEventListener('mousedown', painter.handleColorClick);
elm.main_view.addEventListener("contextmenu", function(e) {
  e.preventDefault();
})

owot.addEventListener("mousedown", function(e) {
  painter.setPtrMouse(e, true);
  painter.ptr.mouse.draw = true;
  painter.ptr.alt = e.altKey;
  painter.ptr.ctrl = e.ctrlKey;
  painter.ptr.shift = e.shiftKey;

  if ("line shape".includes(painter.ptr.mode)) {
    painter.doLine(e);
  } else if ("square".includes(painter.ptr.mode)) {
    painter.doRounded(e, 0)
  } else if ("circle".includes(painter.ptr.mode)) {
    painter.doRounded(e, 0.5, false)
  } else if ("rounded".includes(painter.ptr.mode)) {
    painter.doRounded(e)
  } else if ("curve".includes(painter.ptr.mode)) {
    painter.doQcurve(e);
  } else {
    painter.doPoint(e, "single");
  }
})

owot.addEventListener("mouseup", function(e) {
  painter.brCursor.style.opacity = 0;
  painter.ptr.alt = e.altKey;
  painter.ptr.ctrl = e.ctrlKey;
  painter.ptr.shift = e.shiftKey;
  painter.setPtrMouse(e);
  painter.ptr.mouse.draw = false;
  if (painter.ptr.mode == "dropper") {
    painter.startEyeDropper(e);
  }
  if (painter.ptr.mode == "bucket") {
    painter.beginFill(e);
  }
  if ("line shape".includes(painter.ptr.mode)) {
    painter.doLine(e);
  } else if ("square".includes(painter.ptr.mode)) {
    painter.doRounded(e, 0)
  } else if ("circle".includes(painter.ptr.mode)) {
    painter.doRounded(e, 0.5, false)
  } else if ("rounded".includes(painter.ptr.mode)) {
    painter.doRounded(e)
  } else if ("curve".includes(painter.ptr.mode)) {
    painter.doQcurve(e);
  }
})

owot.addEventListener("mousemove", function(e) {
  painter.ptr.shift = e.shiftKey;
  painter.ptr.ctrl = e.ctrlKey;
  painter.ptr.alt = e.altKey;



})

owot.addEventListener("click", function(e) {
  if (painter.ptr.mode == "zoom") {
    painter.scrollWorld(painter.lerp([0, 0], painter.subtract([e.x, e.y], [(owotWidth / 2), (owotHeight / 2)]), 0.5));
    if (e.ctrlKey || e.altKey) {
      changeZoom(userZoom * 90);
    } else {
      changeZoom(userZoom * 110);
    }
  }
  if (painter.ptr.mode == "select") {
    w.regionSelect.startSelection();
  }

})
w.on("keydown", function(e) {
  if (painter.ptr.mode == "text" || e.ctrlKey || e.altKey || e.shiftKey) {
    return;
  }

  const mode = painter.ptr.mode;
  const key = e.key;
  switch (key) {
    case 'p':
      painter.setMode("pencil")
      break;
    case 'b':
      painter.setMode("brush");
      break;
    case 'e':
      painter.setMode("erase");
      break;
    case 'd':
      painter.setMode("dropper");
      break;
    case 'z':
      painter.setMode("zoom");
      break;
    case 't':
      painter.setMode("text");
      break;
    case 's':
      painter.setMode("select");
      break;
    case 'f':
      painter.setMode("bucket");
      break;
    case 'g':
      painter.setMode("spray");
      break;
    case 'l':
      painter.setMode("line");
      break;
    case 'k':
      painter.setMode("shape");
      break;
    case 'r':
      painter.setMode("square");
      break;
    case 'o':
      painter.setMode("circle");
      break;
    case 'w':
      painter.setMode("rounded");
      break;
    case 'q':
      painter.setMode("curve");
      break;

    default:
      painter.setMode("text");
      painter.setMode(mode);
  }
  if (typeof parseInt(e.key) == "number" && !isNaN(parseInt(e.key))) {

    if (painter.ptr.mode == "rounded") {
      painter.ptr.corner = Math.min(0.5, parseInt(e.key) * 0.06);
    }
    if (painter.ptr.mode == "curve") {
      painter.ptr.controlPointPower = Math.max(1, parseInt(e.key));
    }
  }
})
w.on("frame", painterTick);

function painterTick(e) {
  painter.spray(e)
  previewRenders.forEach(preview_pixel => {
    preview_pixel.destroy();
  });


  if ("rounded circle square".includes(painter.ptr.mode)) {

    if (!painter.ptr.line.end && painter.ptr.line.start) {
      const radius = "square".includes(painter.ptr.mode) ? 0 : "circle".includes(painter.ptr.mode) ? 0.5 : painter.ptr.corner;
      const perfectCorners = "circle".includes(painter.ptr.mode) ? false : painter.ptr.shift;
      const potentialEnd = structuredClone(currentMousePosition);
      const [startX, startY] = painter.ptr.line.start;
      const [endX, endY] = potentialEnd;
      console.log(perfectCorners)
      const roundedCoordinates = painter.createRoundedRectangleCoordinates(startX, startY, endX, endY, radius, painter.ptr.alt, perfectCorners);
      const cornerPixels = roundedCoordinates;
      cornerPixels.forEach(coord => {
        const tempCell = new previewPixel(painter.mouseToPoint(coord), painter.ptr.mode, true)
      });
    }
  }

  if ("line curve shape".includes(painter.ptr.mode)) {
    const endCurve = painter.ptr.alt;
    const pos = structuredClone(currentMousePosition);
    const points = painter.ptr.curveControlPoints;
    const power = ~~(Math.min(6, points.length) * 0.5);

    if (points.length > 0 && !painter.ptr.line.end) {
      const previewPoints = structuredClone(painter.ptr.curveControlPoints);
      previewPoints.push(pos);

      const quadraticCurve = painter.createQuadraticCurve(previewPoints);
      quadraticCurve.forEach(coord => {
        const tempCell = new previewPixel(painter.mouseToPoint(coord), painter.ptr.mode, true)
      });

    }
  }





}



setInterval(painter.doRender, 10);
document.querySelector(".o-ptr-color-switch-prev.main").style.backgroundColor = int_to_hexcode(YourWorld.Color);
painter.ptr.color = int_to_hexcode(YourWorld.Color);
document.querySelector(".o-ptr-color-switch-prev.bg").style.backgroundColor = int_to_hexcode(YourWorld.BgColor);
painter.ptr.bg = int_to_hexcode(YourWorld.BgColor);
painter.updateColors();
drawGrid = function(renderCtx, gridColor, offsetX, offsetY, tileX, tileY) {
  if (subgridEnabled && zoom >= 0.3) {
    if (painterGridEnabled && zoom < 2 || !painterGridEnabled) {
      var b = 0xB9;
      if (zoom < 0.5) {
        b += (0xFF - b) * (0.5 - zoom) * 2;
      }
      b = Math.floor(b);
      renderCtx.strokeStyle = "rgb(" + b + ", " + b + ", " + b + ")";
      var dashSize = 1;
      renderCtx.setLineDash([dashSize]);
      renderCtx.lineWidth = dashSize;
      for (var x = 1; x < tileC; x++) {
        for (var y = 1; y < tileR; y++) {
          renderCtx.beginPath();
          renderCtx.moveTo(0, Math.floor(y * cellH) + 0.5);
          renderCtx.lineTo(tileW, Math.floor(y * cellH) + 0.5);
          renderCtx.stroke();
        }
        renderCtx.beginPath();
        renderCtx.moveTo(Math.floor(x * cellW) + 0.5, 0);
        renderCtx.lineTo(Math.floor(x * cellW) + 0.5, tileH);
        renderCtx.stroke();
      }
    }
  }
  if (painterGridEnabled && zoom >= 2) {
    var b = 0xB9;
    if (zoom < 0.5) {
      b += (0xFF - b) * (0.5 - zoom) * 2;
    }
    b = Math.floor(b);
    renderCtx.strokeStyle = "rgb(" + b + ", " + b + ", " + b + ")";
    var dashSize = 0;
    renderCtx.setLineDash([dashSize]);
    renderCtx.lineWidth = 1;
    for (var x = 1; x < tileC * 2; x++) {
      for (var y = 1; y < tileR * 4; y++) {
        renderCtx.beginPath();
        renderCtx.moveTo(0, Math.floor(y * (cellH / 4)) + 0.5);
        renderCtx.lineTo(tileW, Math.floor(y * (cellH / 4)) + 0.5);
        renderCtx.stroke();
      }
      renderCtx.beginPath();
      renderCtx.moveTo(Math.floor(x * (cellW / 2)) + 0.5, 0);
      renderCtx.lineTo(Math.floor(x * (cellW / 2)) + 0.5, tileH);
      renderCtx.stroke();
    }

  }
  renderCtx.fillStyle = gridColor;
  renderCtx.fillRect(Math.floor(offsetX), Math.floor(offsetY), tileWidth, 1);
  renderCtx.fillRect(Math.floor(offsetX), Math.floor(offsetY), 1, tileHeight);
}

const previewRenders = [];

class previewPixel {
  constructor(e, forcemode, param) {
    this.e = e;
    this.forcemode = forcemode;
    this.param = param;
    this.brCursor = document.createElement("div");
    this.brCursor.classList.add("br-cursor")
    this.render();
  }

  render() {
    elm.main_view.appendChild(this.brCursor);
    var halfX = Math.floor(owotWidth / 2);
    var halfY = Math.floor(owotHeight / 2);
    var pageX = this.e.pageX - halfX;
    var pageY = this.e.pageY - halfY;
    var absX = pageX - positionX;
    var absY = pageY - positionY;
    var segW = cellW / 2;
    var segH = cellH / 4;
    var absBrX = Math.floor(absX / segW);
    var absBrY = Math.floor(absY / segH);
    var absBrX_L = Math.floor(absX / cellW);
    var absBrY_L = Math.floor(absY / cellH);
    const altType = painter.ptr.ctrl || painter.ptr.mode == "brush"
    const [mouseX, mouseY] = currentMousePosition;
    const radius = altType ? this.param + cellH : this.param + (cellW / 2);
    this.brCursor.style.borderRadius = "0%";
    this.brCursor.style.width = altType ? cellW + "px" : Math.ceil(cellW / 2) + "px";
    this.brCursor.style.height = altType ? cellH + "px" : Math.ceil(cellH / 4) + "px";
    this.brCursor.style.left = altType ? (cellW * absBrX_L + halfX + positionX) + "px" : (segW * absBrX + halfX + positionX) + "px";
    this.brCursor.style.top = altType ? (cellH * absBrY_L + halfY + positionY) + "px" : (segH * absBrY + halfY + positionY) + "px";
    this.brCursor.style.opacity = "pencil erase brush spray line shape square circle rounded curve".includes(painter.ptr.mode) ? 1 : 0;
    previewRenders.push(this);
  }
  destroy() {
    this.brCursor.remove();
  }
}
