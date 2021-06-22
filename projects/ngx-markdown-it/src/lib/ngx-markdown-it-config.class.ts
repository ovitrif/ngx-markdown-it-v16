/*
 * @file ngx-markdown-it-config.class.ts
 *
 * @brief Config class
 * @author David Suárez
 * @date Mon, 21 Jun 20 19:45:15 +0200
 *
 * @license
 *
 * ngx-markdown-it: angular markdown-it module
 *
 * Copyright (c) 2021 David Suárez
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */

import * as MarkdownIt from "markdown-it";

export class NgxMarkdownItConfig {

  /**
   * Syntax rules and options for common use cases:
   *
   *   - default - similar to GFM, used when no preset name given.
   *   - "commonmark" - configures parser to strict CommonMark mode.
   *   - "zero" - all rules disabled.
   */
  presetName?: MarkdownIt.PresetName;

  /**
   * Plugins to apply.
   */
  plugins?: any[];
};
