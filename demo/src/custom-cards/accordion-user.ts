import { css, CSSResultGroup, html, LitElement, nothing } from "lit";
import { customElement, property } from "lit/decorators";
import { until } from "lit/directives/until";
import "../../../src/components/ha-card";
import "../../../src/components/ha-button";
import "../../../src/components/ha-circular-progress";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { LovelaceCardConfig } from "../../../src/data/lovelace/config/card";
import { MockHomeAssistant } from "../../../src/fake_data/provide_hass";
import { Lovelace, LovelaceCard } from "../../../src/panels/lovelace/types";
import { selectedDemoConfig } from "../configs/demo-configs";

@customElement("accordion-user")
export class AccordionUser extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public lovelace?: Lovelace;

  @property({ type: Object }) hass!: MockHomeAssistant;

  @property({ type: Object }) config;

  private _hidden = localStorage.hide_demo_card;

  public getCardSize() {
    return this._hidden ? 0 : 2;
  }

  public setConfig(_config: LovelaceCardConfig) {
    if (_config) {
      this.config = _config;
    }
  }

  private async _getIconSvg(): Promise<string> {
    try {
      const module = await import(
        `../../public/assets/accordion/accordion-${this.config.iconPath}`
      );

      return module.default; // 필요한 경우 export된 이름을 조정
    } catch (error) {
      return "";
    }
  }

  private async _getIconSvgPath(iconPath): Promise<any> {
    try {
      return html`${unsafeHTML(iconPath)}`;
    } catch (err) {
      return "";
    }
  }

  protected render() {
    if (this._hidden) {
      return nothing;
    }

    return html`
      <ha-card>
        <div class="content">
          ${until(
            selectedDemoConfig.then(
              async (_) => html`
                <div class="layout">
                  <div>
                    ${this.config.iconSvg
                      ? await this._getIconSvgPath(this.config.iconSvg)
                      : this.config.iconPath
                        ? html`${unsafeHTML(await this._getIconSvg())}`
                        : nothing}
                    <span class="user">${this.config?.title}</span>
                  </div>
                  <div class="info">
                    <span class="number">${this.config?.value}</span>
                  </div>
                </div>
              `
            ),
            nothing
          )}
        </div>
      </ha-card>
    `;
  }

  protected firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    if (this._hidden) {
      this.style.display = "none";
    }
  }

  static get styles(): CSSResultGroup {
    return [
      css`
        .layout {
          display: flex;
          width: 100px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: var(--spacing---acc-spacing-xsmall, 8px);
          flex-shrink: 0;

          margin: 10px;
        }

        .number {
          align-self: center;

          color: var(--color-token-text-primary, #413e46);
          font-family: Pretendard;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 100%; /* 28px */
          letter-spacing: -0.2px;
        }

        svg {
          vertical-align: middle;
        }

        .user {
          color: var(--color-token-text-secondary, #6d6b71);

          /* Paragraph/600 */
          font-family: Pretendard;
          font-size: 15px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%; /* 24px */
          letter-spacing: -0.2px;
        }

        .title {
          color: var(--color-token-text-primary, #413e46);

          /* H2/700 */
          font-family: Pretendard;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 160%; /* 38.4px */
          letter-spacing: -0.2px;
        }

        a {
          color: var(--primary-color);
          display: inline-block;
        }

        .actions a {
          text-decoration: none;
        }

        .content {
          padding: 0 16px;
        }

        .content p {
          margin: 16px 0;
        }

        .picker {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
        }

        .picker ha-button {
          margin-right: 8px;
        }

        .label {
          padding-left: 16px;
        }

        .label small {
          display: block;
        }

        .actions {
          padding: 0px 8px 4px 8px;
        }
        @media only screen and (max-width: 500px) {
          .small-hidden {
            display: none;
          }
        }
      `,
    ];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "accordion-user": AccordionUser;
  }
}
