import React from 'react'
import dealsImg from "../../assets/deals.png"
const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
      <div className='deals__image'>
        <img src={dealsImg} alt="deals image" />
      </div>
      <div className='deals__content'>
        <h5>Get Up To 30% Discount</h5>
        <h4>Deals Of This Month</h4>
        <p>"Empowering Discounts for Women, Every Step of the Way! 🌸 Shop the latest in fashion, beauty, and essentials with up to 50% off. Unleash your style without breaking the bank—because you deserve the best, always!"</p>
        <div className='deals__countdown flex-wrap'>
            <div className='deals__countdown__card'>
                <h4>27</h4>
                <p>Days</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>02</h4>
                <p>Hours</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>29</h4>
                <p>Mins</p>
            </div>
            <div className='deals__countdown__card'>
                <h4>09</h4>
                <p>Secs</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default DealsSection
