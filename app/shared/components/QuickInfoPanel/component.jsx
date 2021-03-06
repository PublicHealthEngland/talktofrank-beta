import React from 'react'
import Heading from '../Heading/component'

class QuickInfoPanel extends React.Component {
  render() {
    return (
      <div
        className={
          'quick-info-panel ' +
          (this.props.className ? this.props.className : '')
        }
      >
        <div className="row">
          <div className="quick-info-panel__heading">
            <Heading
              type={this.props.heading}
              className="quick-info-panel__heading_title"
              text="Quick info"
            />
          </div>
          <div className="quick-info-panel__wrapper col-12">
            <p className="quick-info-panel__warning">
              How the drug works varies from person to person
            </p>
          </div>
          {this.props.quickInfoPanelFeelings && (
            <dl className="quick-info-panel__wrapper col-12 col-md-6">
              <dt className="quick-info-panel_title">How you might feel</dt>

              <dd className="quick-info-panel__description">
                {this.props.quickInfoPanelFeelings}
              </dd>
              <dd>
                <a
                  onClick={e => this.props.handleHowItFeelsClick(e)}
                  className="quick-info-panel__link"
                  href={
                    this.props.slug
                      ? `/drug/${this.props.slug}#how-it-feels`
                      : '#how-it-feels'
                  }
                >
                  Read more
                  <span className="visually-hidden">
                    &nbsp;about how it feels
                  </span>
                </a>
              </dd>
            </dl>
          )}
          {this.props.quickInfoPanelEffects && (
            <dl className="quick-info-panel__wrapper col-12 col-md-6">
              <dt className="quick-info-panel_title">Effects on your body</dt>
              <dd className="quick-info-panel__description">
                {this.props.quickInfoPanelEffects}
              </dd>
              <dd>
                <a
                  onClick={e => this.props.handleHowItFeelsClick(e)}
                  className="quick-info-panel__link"
                  href={
                    this.props.slug
                      ? `/drug/${this.props.slug}#how-it-feels`
                      : '#how-it-feels'
                  }
                >
                  Read more
                  <span className="visually-hidden">
                    &nbsp;about how it feels
                  </span>
                </a>
              </dd>
            </dl>
          )}
          {this.props.quickInfoPanelTimeToKickIn && (
            <dl className="quick-info-panel__wrapper col-12 col-md-6">
              <dt className="quick-info-panel_title">
                How long it takes to work
              </dt>

              <dd className="quick-info-panel__description">
                {this.props.quickInfoPanelTimeToKickIn}
              </dd>
              <dd>
                <a
                  onClick={e => this.props.handleDurationClick(e)}
                  className="quick-info-panel__link"
                  href={
                    this.props.slug
                      ? `/drug/${this.props.slug}#duration`
                      : '#duration'
                  }
                >
                  Read more
                  <span className="visually-hidden">
                    &nbsp;about how long it takes to work
                  </span>
                </a>
              </dd>
            </dl>
          )}
          {this.props.quickInfoPanelDuration && (
            <dl className="quick-info-panel__wrapper col-12 col-md-6">
              <dt className="quick-info-panel_title">
                How long the effects last
              </dt>
              <dd className="quick-info-panel__description">
                {this.props.quickInfoPanelDuration}
              </dd>
              <dd>
                <a
                  onClick={e => this.props.handleDurationClick(e)}
                  className="quick-info-panel__link"
                  href={
                    this.props.slug
                      ? `/drug/${this.props.slug}#duration`
                      : '#duration'
                  }
                >
                  Read more
                  <span className="visually-hidden">
                    &nbsp;about how long the effects last
                  </span>
                </a>
              </dd>
            </dl>
          )}
          {this.props.quickInfoPanelRisks && (
            <dl className="quick-info-panel__wrapper col-12 col-md-12">
              <dt className="quick-info-panel_title">Common risks</dt>
              <dd className="quick-info-panel__description">
                {this.props.quickInfoPanelRisks}
              </dd>
              <dd>
                <a
                  onClick={e => this.props.handleTheRisksClick(e)}
                  className="quick-info-panel__link"
                  href={
                    this.props.slug
                      ? `/drug/${this.props.slug}#the-risks`
                      : '#the-risks'
                  }
                >
                  Read more
                  <span className="visually-hidden">&nbsp;about the risks</span>
                </a>
              </dd>
            </dl>
          )}
        </div>
      </div>
    )
  }
}
export default QuickInfoPanel
