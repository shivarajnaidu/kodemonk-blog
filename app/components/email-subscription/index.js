import React, { useRef, useState } from 'react'

// markup
const EmailSubscription = () => {
    const emailRef = useRef('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const validateEmail = (event) => {
        if (!isTouched) {
            setIsTouched(true);
        }

        setIsEmailValid(emailRef.current?.reportValidity());
    };

    const subscribeEmail = () => {
        console.log(emailRef.current?.value);
    };

    return (

        <div className="email-subscription py-3">
            <h2>Subscribe Updates</h2>
            <p>
                Get new updates from Kodemonk
                straight to your mail box
            </p>
            <div>
                <div className="py-3">
                    <input name="email"
                        ref={emailRef} className="form-control"
                        onChange={validateEmail} type="email" required placeholder="Your Email Address">
                    </input>
                    {!isEmailValid && isTouched && <div className="text-danger"><small>Invalid Email</small></div>}
                </div>
                <button disabled onClick={subscribeEmail} className="btn btn-dark w-100">Subscribe (Coming soon..)</button>
                {/* <button disabled={!isEmailValid || !isTouched} onClick={subscribeEmail} className="btn btn-dark w-100">Subscribe</button> */}
            </div>
        </div>

    )
}

export default EmailSubscription;
