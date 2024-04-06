import img2 from './big_img.png'
export default function lastFunction() {
    return (
        <div className="contienter">
            <div className="row flex_query">
                <div className="padding_12">
                    <div className="div1_last">


                        <div className="header_parent for_last_com">
                            <span className="top_text">
                                Dine In or Take Away
                            </span>
                            <span className="text_black start">
                                Get Your Order 24/7 Right At Your Doorsteps
                            </span>
                            <div className="flex_dots">
                                <span className="big_dot"></span>
                                <span className="dots"></span>
                                <span className="dots"></span>
                                <span className="dots"></span>
                            </div>
                        </div>


                        <p className="paragraph">
                            Plant-based diets may offer an advantage over those that are not plant based with respect to prevention and management of diabetes. the adventist health studies found that vegetarians have approximately half the risk of developing diabetes
                        </p>
                        <div className="button_parent">
                            <div className="first_btn">order food</div>
                            <div className="second_btn">search now</div>
                        </div>
                    </div>
                </div>
                <div className="padding_12 w_100">
                    <div className="img_settings">
                        <img src={img2} className="img_big" />
                    </div>
                </div>

            </div>
        </div>
    )
}