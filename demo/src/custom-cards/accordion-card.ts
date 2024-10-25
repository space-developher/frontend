import { css, CSSResultGroup, html, LitElement, nothing } from "lit";
import { customElement, property, state } from "lit/decorators";
import { until } from "lit/directives/until";
import "../../../src/components/ha-card";
import "../../../src/components/ha-button";
import "../../../src/components/ha-circular-progress";
import { LovelaceCardConfig } from "../../../src/data/lovelace/config/card";
import { MockHomeAssistant } from "../../../src/fake_data/provide_hass";
import { Lovelace, LovelaceCard } from "../../../src/panels/lovelace/types";
import { selectedDemoConfig } from "../configs/demo-configs";

import { AccordionLogo } from "./accordion-log";

@customElement("accordion-card")
export class AccordionCard extends LitElement implements LovelaceCard {
  @property({ attribute: false }) public lovelace?: Lovelace;

  @property({ type: Object }) hass!: MockHomeAssistant;

  @property({ type: Object }) config!: any;

  @state() protected _cards?: any;

  @state() protected _config?: any;

  private _hidden = localStorage.hide_demo_card;

  public getCardSize() {
    return this._hidden ? 0 : 2;
  }

  public setConfig(_config: LovelaceCardConfig) {}

  protected render() {
    if (this._hidden) {
      return nothing;
    }

    return html`
      <ha-card>
        <div class="content">
          ${until(
            selectedDemoConfig.then(
              (conf) => html`
                <div class="layout">
                  <div>${AccordionLogo}</div>
                  <div class="info">
                    <span class="title">${conf.name}</span>
                    <span>${``}</span>
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
          max-width: 1676px;
          padding: var(--spacing---acc-spacing-large, 16px) 16px;
          align-items: center;
          gap: var(--spacing---acc-spacing-medium, 12px);

          border-radius: var(--radius---acc-border-radius-medium, 8px);
          background: var(--color-token-background-card, #fff);

          /* card */
          box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.06);
        }

        .info {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
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
    "accordion-card": AccordionCard;
  }
}
