import React , { Component } from 'react';
import './styles.scss';
import {cssClassName} from 'utils';
const cn = cssClassName('O_Timeline');
import A_Container from 'A_Container';
import A_H from 'A_H';


class O_Timeline extends Component {
  render() {
    return (
      <div>
        <A_Container type='wide'>
          <div className={cn('timeline')}>
            <A_H type='section-c'>A quick walk through our history as a company:</A_H>
            <div className={cn('border-line')}>
              <section className={cn('year')}>
                <h3 className={cn('year-date')}>2016</h3>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>April</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Inception of the Humaniq idea by Alex Fork.</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>November</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Humaniq Whitebook is written and the original project team is formed.</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>December</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Humaniq.co website is launched and pre-ICO is announced</p>
                    </li>
                  </ul>
                </section>
              </section>
              <section className={cn('year')}>
                <h3 className={cn('year-date')}>2017</h3>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>February</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Smart contracts are being developed, due diligence and marketing campaign take place.</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>February</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Humaniq team meets with project partners in India. Alex Fork conducts the first performance tests of the project in unbanked regions of India.</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>February</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Humaniq announces first online hackathon</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>February</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Pre-ICO (crowdsale) is launched</p>
                    </li>
                  </ul>
                </section>

                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>March</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Alpha version of the app is available for testing on IOS and Android.</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>April</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Humaniq collects $1.5 mln in the first hour of their ICO.</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>May</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>App with new enchanced biometrics is being released.</p>
                    </li>
                  </ul>
                </section>
                <section className={cn('month')}>
                  <h4 className={cn('month-name')}>Now</h4>
                  <ul className={cn('month-list')}>
                    <li className={cn('month-list__li')}>
                      <p className={cn('month-list__p')}>Humaniq is 43 people now, working from 14 countries.</p>
                    </li>
                  </ul>
                </section>
              </section>
            </div>
          </div>
        </A_Container>
      </div>
    )
  }
}


O_Timeline.propTypes = {};

export default O_Timeline