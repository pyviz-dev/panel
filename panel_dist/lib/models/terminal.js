import { HTMLBox } from "@bokehjs/models/layouts/html_box";
import { div } from "@bokehjs/core/dom";
import { PanelHTMLBoxView, set_size } from "./layout";
export class TerminalView extends PanelHTMLBoxView {
    connect_signals() {
        super.connect_signals();
        this.connect(this.model.properties.output.change, this.write);
        this.connect(this.model.properties._clears.change, this.clear);
    }
    render() {
        super.render();
        this.container = div({ class: "terminal-container" });
        set_size(this.container, this.model);
        this.term = this.getNewTerminal();
        this.term.onData((value) => {
            this.handleOnData(value);
        });
        this.webLinksAddon = this.getNewWebLinksAddon();
        this.term.loadAddon(this.webLinksAddon);
        this.term.open(this.container);
        this.term.onRender(() => {
            if (!this._rendered) {
                this.fit();
            }
        });
        this.write();
        this.el.appendChild(this.container);
    }
    getNewTerminal() {
        const wn = window;
        if (wn.Terminal)
            return new wn.Terminal(this.model.options);
        else
            return new wn.xtermjs.Terminal(this.model.options);
    }
    getNewWebLinksAddon() {
        const wn = window;
        if (wn.WebLinksAddon)
            return new wn.WebLinksAddon.WebLinksAddon();
        else
            return new wn.xtermjsweblinks.WebLinksAddon();
    }
    getNewFitAddon() {
        const wn = window;
        if (wn.FitAddon)
            return new wn.FitAddon.FitAddon();
        else
            return new wn.xtermjsfit.FitAddon();
    }
    handleOnData(value) {
        // Hack to handle repeating keyboard inputs
        if (this.model.input === value)
            this.model._value_repeats += 1;
        else
            this.model.input = value;
    }
    write() {
        const text = this.model.output;
        if (text == null || !text.length)
            return;
        // https://stackoverflow.com/questions/65367607/how-to-handle-new-line-in-xterm-js-while-writing-data-into-the-terminal
        const cleaned = text.replace(/\r?\n/g, "\r\n");
        // var text = Array.from(cleaned, (x) => x.charCodeAt(0))
        this.term.write(cleaned);
    }
    clear() {
        // https://stackoverflow.com/questions/65367607/how-to-handle-new-line-in-xterm-js-while-writing-data-into-the-terminal
        this.term.clear();
    }
    fit() {
        const width = this.layout.inner_bbox.width;
        const height = this.layout.inner_bbox.height;
        const renderer = this.term._core._renderService;
        const cell_width = renderer.dimensions.actualCellWidth;
        const cell_height = renderer.dimensions.actualCellHeight;
        if (cell_width === 0 || cell_height === 0)
            return;
        const cols = Math.max(2, Math.floor(width / cell_width));
        const rows = Math.max(1, Math.floor(height / cell_height));
        if (this.term.rows !== rows || this.term.cols !== cols) {
            renderer.clear();
            this.term.resize(cols, rows);
        }
        this._rendered = true;
    }
    after_layout() {
        super.after_layout();
        this.fit();
    }
    resize_layout() {
        super.resize_layout();
        this.fit();
    }
}
TerminalView.__name__ = "TerminalView";
// The Bokeh .ts model corresponding to the Bokeh .py model
export class Terminal extends HTMLBox {
    constructor(attrs) {
        super(attrs);
    }
    static init_Terminal() {
        this.prototype.default_view = TerminalView;
        this.define(({ Any, Int, String }) => ({
            options: [Any, {}],
            output: [String,],
            input: [String,],
            _clears: [Int, 0],
            _value_repeats: [Int, 0],
        }));
    }
}
Terminal.__name__ = "Terminal";
Terminal.__module__ = "panel.models.terminal";
Terminal.init_Terminal();
//# sourceMappingURL=terminal.js.map