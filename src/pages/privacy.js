import React from "react";
import "_styles/index.css";
import Font from "_styles";
import { screenSize } from "_store";
import { largestPhoneSize } from "_utils";
export const PrivacyPolicy = () => {
  const setWidth = screenSize((state) => state.setWidth);
  const setHeight = screenSize((state) => state.setHeight);

  const getCurrentWindowSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  window.addEventListener("resize", getCurrentWindowSize);

  const screenWidth = screenSize((state) => state.width);

  if (screenWidth > largestPhoneSize) {
    return (
      <div
        className="backgroundGradient"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Font.Heading3
          style={{
            color: "#8EAB3D",
            marginBottom: "2vh",
          }}
        >
          Privacy Policy
        </Font.Heading3>
        <Font.Sub4 style={{ marginBottom: "5vh", width: "70vw" }}>
          <p>
            We respect your privacy and are committed to protecting it through
            our compliance with this privacy policy (“Policy”). This Policy
            describes the types of information we may collect from you or that
            you may provide (“Personal Information”) in the “AG-Market” mobile
            application (“Mobile Application” or “Service”) and any of its
            related products and services (collectively, “Services”), and our
            practices for collecting, using, maintaining, protecting, and
            disclosing that Personal Information. It also describes the choices
            available to you regarding our use of your Personal Information and
            how you can access and update it.
          </p>
          <p>
            This Policy is a legally binding agreement between you (“User”,
            “you” or “your”) and this Mobile Application developer (“Operator”,
            “we”, “us” or “our”). If you are entering into this agreement on
            behalf of a business or other legal entity, you represent that you
            have the authority to bind such entity to this agreement, in which
            case the terms “User”, “you” or “your” shall refer to such entity.
            If you do not have such authority, or if you do not agree with the
            terms of this agreement, you must not accept this agreement and may
            not access and use the Mobile Application and Services. By accessing
            and using the Mobile Application and Services, you acknowledge that
            you have read, understood, and agree to be bound by the terms of
            this Policy. This Policy does not apply to the practices of
            companies that we do not own or control, or to individuals that we
            do not employ or manage.
          </p>
          <div class="wpembed-index">
            <h3>Table of contents</h3>
            <ol class="wpembed-index">
              <li>
                <a href="#collection-of-personal-information">
                  Collection of personal information
                </a>
              </li>
              <li>
                <a href="#privacy-of-children">Privacy of children</a>
              </li>
              <li>
                <a href="#use-and-processing-of-collected-information">
                  Use and processing of collected information
                </a>
              </li>
              <li>
                <a href="#managing-information">Managing information</a>
              </li>
              <li>
                <a href="#disclosure-of-information">
                  Disclosure of information
                </a>
              </li>
              <li>
                <a href="#retention-of-information">Retention of information</a>
              </li>
              <li>
                <a href="#social-media-features">Social media features</a>
              </li>
              <li>
                <a href="#links-to-other-resources">Links to other resources</a>
              </li>
              <li>
                <a href="#information-security">Information security</a>
              </li>
              <li>
                <a href="#data-breach">Data breach</a>
              </li>
              <li>
                <a href="#changes-and-amendments">Changes and amendments</a>
              </li>
              <li>
                <a href="#acceptance-of-this-policy">
                  Acceptance of this policy
                </a>
              </li>
              <li>
                <a href="#contacting-us">Contacting us</a>
              </li>
            </ol>
          </div>
          <h2 id="collection-of-personal-information">
            Collection of personal information
          </h2>
          <p>
            You can access and use the Mobile Application and Services without
            telling us who you are or revealing any information by which someone
            could identify you as a specific, identifiable individual. If,
            however, you wish to use some of the features offered in the Mobile
            Application, you may be asked to provide certain Personal
            Information (for example, your name and e-mail address).
          </p>
          <p>
            We receive and store any information you knowingly provide to us
            when you create an account, publish content, or fill any forms in
            the Mobile Application. When required, this information may include
            the following:
          </p>
          <ul>
            <li>
              Account details (such as user name, unique user ID, password, etc)
            </li>
            <li>
              Contact information (such as email address, phone number, etc)
            </li>
            <li>
              Basic personal information (such as name, country of residence,
              etc)
            </li>
            <li>
              Certain features on the mobile device (such as contacts, calendar,
              gallery, etc)
            </li>
          </ul>
          <p>
            You can choose not to provide us with your Personal Information, but
            then you may not be able to take advantage of some of the features
            in the Mobile Application. Users who are uncertain about what
            information is mandatory are welcome to contact us.
          </p>
          <h2 id="privacy-of-children">Privacy of children</h2>
          <p>
            We do not knowingly collect any Personal Information from children
            under the age of 18. If you are under the age of 18, please do not
            submit any Personal Information through the Mobile Application and
            Services. If you have reason to believe that a child under the age
            of 18 has provided Personal Information to us through the Mobile
            Application and Services, please contact us to request that we
            delete that child’s Personal Information from our Services.
          </p>
          <p>
            We encourage parents and legal guardians to monitor their children’s
            Internet usage and to help enforce this Policy by instructing their
            children never to provide Personal Information through the Mobile
            Application and Services without their permission. We also ask that
            all parents and legal guardians overseeing the care of children take
            the necessary precautions to ensure that their children are
            instructed to never give out Personal Information when online
            without their permission.
          </p>
          <h2 id="use-and-processing-of-collected-information">
            Use and processing of collected information
          </h2>
          <p>
            We act as a data controller and a data processor when handling
            Personal Information, unless we have entered into a data processing
            agreement with you in which case you would be the data controller
            and we would be the data processor.
          </p>
          <p>
            {" "}
            Our role may also differ depending on the specific situation
            involving Personal Information. We act in the capacity of a data
            controller when we ask you to submit your Personal Information that
            is necessary to ensure your access and use of the Mobile Application
            and Services. In such instances, we are a data controller because we
            determine the purposes and means of the processing of Personal
            Information.
          </p>
          <p>
            We act in the capacity of a data processor in situations when you
            submit Personal Information through the Mobile Application and
            Services. We do not own, control, or make decisions about the
            submitted Personal Information, and such Personal Information is
            processed only in accordance with your instructions. In such
            instances, the User providing Personal Information acts as a data
            controller.
          </p>
          <p>
            In order to make the Mobile Application and Services available to
            you, or to meet a legal obligation, we may need to collect and use
            certain Personal Information. If you do not provide the information
            that we request, we may not be able to provide you with the
            requested products or services. Any of the information we collect
            from you may be used for the following purposes:
          </p>
          <ul>
            <li>Create and manage user accounts</li>
            <li>Run and operate the Mobile Application and Services</li>
          </ul>
          <p>
            Processing your Personal Information depends on how you interact
            with the Mobile Application and Services, where you are located in
            the world and if one of the following applies: (i) you have given
            your consent for one or more specific purposes; (ii) provision of
            information is necessary for the performance of an agreement with
            you and/or for any pre-contractual obligations thereof; (iii)
            processing is necessary for compliance with a legal obligation to
            which you are subject; (iv) processing is related to a task that is
            carried out in the public interest or in the exercise of official
            authority vested in us; (v) processing is necessary for the purposes
            of the legitimate interests pursued by us or by a third party.
          </p>
          <p>
            {" "}
            Note that under some legislations we may be allowed to process
            information until you object to such processing by opting out,
            without having to rely on consent or any other of the legal bases.
            In any case, we will be happy to clarify the specific legal basis
            that applies to the processing, and in particular whether the
            provision of Personal Information is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </p>
          <h2 id="managing-information">Managing information</h2>
          <p>
            You are able to delete certain Personal Information we have about
            you. The Personal Information you can delete may change as the
            Mobile Application and Services change. When you delete Personal
            Information, however, we may maintain a copy of the unrevised
            Personal Information in our records for the duration necessary to
            comply with our obligations to our affiliates and partners, and for
            the purposes described below. If you would like to delete your
            Personal Information or permanently delete your account, you can do
            so by contacting us.
          </p>
          <h2 id="disclosure-of-information">Disclosure of information</h2>
          <p>
            {" "}
            Depending on the requested Services or as necessary to complete any
            transaction or provide any Service you have requested, we may share
            your information with our affiliates, contracted companies, and
            service providers (collectively, “Service Providers”) we rely upon
            to assist in the operation of the Mobile Application and Services
            available to you and whose privacy policies are consistent with ours
            or who agree to abide by our policies with respect to Personal
            Information. We will not share any personally identifiable
            information with third parties and will not share any information
            with unaffiliated third parties.
          </p>
          <p>
            Service Providers are not authorized to use or disclose your
            information except as necessary to perform services on our behalf or
            comply with legal requirements. Service Providers are given the
            information they need only in order to perform their designated
            functions, and we do not authorize them to use or disclose any of
            the provided information for their own marketing or other purposes.
          </p>
          <h2 id="retention-of-information">Retention of information</h2>
          <p>
            We will retain and use your Personal Information for the period
            necessary as long as your user account remains active, to enforce
            our agreements, resolve disputes, and unless a longer retention
            period is required or permitted by law.
          </p>
          <p>
            We may use any aggregated data derived from or incorporating your
            Personal Information after you update or delete it, but not in a
            manner that would identify you personally. Once the retention period
            expires, Personal Information shall be deleted. Therefore, the right
            to access, the right to erasure, the right to rectification, and the
            right to data portability cannot be enforced after the expiration of
            the retention period.
          </p>
          <h2 id="social-media-features">Social media features</h2>
          <p>
            Our Mobile Application and Services may include social media
            features, such as the Facebook and Twitter buttons, Share This
            buttons, etc (collectively, “Social Media Features”). These Social
            Media Features may collect your IP address, what page you are
            visiting on our Mobile Application and Services, and may set a
            cookie to enable Social Media Features to function properly. Social
            Media Features are hosted either by their respective providers or
            directly on our Mobile Application and Services. Your interactions
            with these Social Media Features are governed by the privacy policy
            of their respective providers.
          </p>
          <h2 id="links-to-other-resources">Links to other resources</h2>
          <p>
            The Mobile Application and Services contain links to other resources
            that are not owned or controlled by us. Please be aware that we are
            not responsible for the privacy practices of such other resources or
            third parties. We encourage you to be aware when you leave the
            Mobile Application and Services and to read the privacy statements
            of each and every resource that may collect Personal Information.
          </p>
          <h2 id="information-security">Information security</h2>
          <p>
            We secure information you provide on computer servers in a
            controlled, secure environment, protected from unauthorized access,
            use, or disclosure. We maintain reasonable administrative,
            technical, and physical safeguards in an effort to protect against
            unauthorized access, use, modification, and disclosure of Personal
            Information in our control and custody. However, no data
            transmission over the Internet or wireless network can be
            guaranteed.
          </p>
          <p>
            Therefore, while we strive to protect your Personal Information, you
            acknowledge that (i) there are security and privacy limitations of
            the Internet which are beyond our control; (ii) the security,
            integrity, and privacy of any and all information and data exchanged
            between you and the Mobile Application and Services cannot be
            guaranteed; and (iii) any such information and data may be viewed or
            tampered with in transit by a third party, despite best efforts.
          </p>
          <p>
            As the security of Personal Information depends in part on the
            security of the device you use to communicate with us and the
            security you use to protect your credentials, please take
            appropriate measures to protect this information.
          </p>
          <h2 id="data-breach">Data breach</h2>
          <p>
            In the event we become aware that the security of the Mobile
            Application and Services has been compromised or Users’ Personal
            Information has been disclosed to unrelated third parties as a
            result of external activity, including, but not limited to, security
            attacks or fraud, we reserve the right to take reasonably
            appropriate measures, including, but not limited to, investigation
            and reporting, as well as notification to and cooperation with law
            enforcement authorities. In the event of a data breach, we will make
            reasonable efforts to notify affected individuals if we believe that
            there is a reasonable risk of harm to the User as a result of the
            breach or if notice is otherwise required by law. When we do, we
            will send you an email.
          </p>
          <h2 id="changes-and-amendments">Changes and amendments</h2>
          <p>
            We reserve the right to modify this Policy or its terms related to
            the Mobile Application and Services at any time at our discretion.
            When we do, we will send you an email to notify you. We may also
            provide notice to you in other ways at our discretion, such as
            through the contact information you have provided.
          </p>
          <p>
            An updated version of this Policy will be effective immediately upon
            the posting of the revised Policy unless otherwise specified. Your
            continued use of the Mobile Application and Services after the
            effective date of the revised Policy (or such other act specified at
            that time) will constitute your consent to those changes. However,
            we will not, without your consent, use your Personal Information in
            a manner materially different than what was stated at the time your
            Personal Information was collected.
          </p>
          <h2 id="acceptance-of-this-policy">Acceptance of this policy</h2>
          <p>
            You acknowledge that you have read this Policy and agree to all its
            terms and conditions. By accessing and using the Mobile Application
            and Services and submitting your information you agree to be bound
            by this Policy. If you do not agree to abide by the terms of this
            Policy, you are not authorized to access or use the Mobile
            Application and Services. This privacy policy was created with the
            help of{" "}
            <a
              target="_blank"
              rel="noreferrer noopener external nofollow"
              href="https://www.websitepolicies.com"
            >
              WebsitePolicies
            </a>
            .
          </p>
          <h2 id="contacting-us">Contacting us</h2>
          <p>
            If you have any questions, concerns, or complaints regarding this
            Policy, the information we hold about you, or if you wish to
            exercise your rights, we encourage you to contact us using the
            details below:
          </p>
          <p>
            <a
              href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#116;e&#99;h&#64;a&#103;&#114;i&#100;&#97;t&#97;p&#111;&#114;&#116;&#97;&#108;.c&#111;m"
              target="_blank"
              rel="nofollow"
            >
              t&#101;&#99;h&#64;a&#103;ri&#100;&#97;&#116;a&#112;or&#116;a&#108;&#46;com
            </a>
          </p>
          <p>
            We will attempt to resolve complaints and disputes and make every
            reasonable effort to honor your wish to exercise your rights as
            quickly as possible and in any event, within the timescales provided
            by applicable data protection laws.
          </p>
          <p>This document was last updated on July 12, 2022</p>
        </Font.Sub4>
      </div>
    );
  } else
    return (
      <div
        className="backgroundGradient"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Font.Heading3
          style={{
            color: "#8EAB3D",
            marginBottom: "5px",
          }}
        >
          Privacy Policy
        </Font.Heading3>
        <Font.Sub4 style={{ marginBottom: "5vh", width: "80vw" }}>
          <p>
            We respect your privacy and are committed to protecting it through
            our compliance with this privacy policy (“Policy”). This Policy
            describes the types of information we may collect from you or that
            you may provide (“Personal Information”) in the “AG-Market” mobile
            application (“Mobile Application” or “Service”) and any of its
            related products and services (collectively, “Services”), and our
            practices for collecting, using, maintaining, protecting, and
            disclosing that Personal Information. It also describes the choices
            available to you regarding our use of your Personal Information and
            how you can access and update it.
          </p>
          <p>
            This Policy is a legally binding agreement between you (“User”,
            “you” or “your”) and this Mobile Application developer (“Operator”,
            “we”, “us” or “our”). If you are entering into this agreement on
            behalf of a business or other legal entity, you represent that you
            have the authority to bind such entity to this agreement, in which
            case the terms “User”, “you” or “your” shall refer to such entity.
            If you do not have such authority, or if you do not agree with the
            terms of this agreement, you must not accept this agreement and may
            not access and use the Mobile Application and Services. By accessing
            and using the Mobile Application and Services, you acknowledge that
            you have read, understood, and agree to be bound by the terms of
            this Policy. This Policy does not apply to the practices of
            companies that we do not own or control, or to individuals that we
            do not employ or manage.
          </p>
          <div class="wpembed-index">
            <h3>Table of contents</h3>
            <ol class="wpembed-index">
              <li>
                <a href="#collection-of-personal-information">
                  Collection of personal information
                </a>
              </li>
              <li>
                <a href="#privacy-of-children">Privacy of children</a>
              </li>
              <li>
                <a href="#use-and-processing-of-collected-information">
                  Use and processing of collected information
                </a>
              </li>
              <li>
                <a href="#managing-information">Managing information</a>
              </li>
              <li>
                <a href="#disclosure-of-information">
                  Disclosure of information
                </a>
              </li>
              <li>
                <a href="#retention-of-information">Retention of information</a>
              </li>
              <li>
                <a href="#social-media-features">Social media features</a>
              </li>
              <li>
                <a href="#links-to-other-resources">Links to other resources</a>
              </li>
              <li>
                <a href="#information-security">Information security</a>
              </li>
              <li>
                <a href="#data-breach">Data breach</a>
              </li>
              <li>
                <a href="#changes-and-amendments">Changes and amendments</a>
              </li>
              <li>
                <a href="#acceptance-of-this-policy">
                  Acceptance of this policy
                </a>
              </li>
              <li>
                <a href="#contacting-us">Contacting us</a>
              </li>
            </ol>
          </div>
          <h2 id="collection-of-personal-information">
            Collection of personal information
          </h2>
          <p>
            You can access and use the Mobile Application and Services without
            telling us who you are or revealing any information by which someone
            could identify you as a specific, identifiable individual. If,
            however, you wish to use some of the features offered in the Mobile
            Application, you may be asked to provide certain Personal
            Information (for example, your name and e-mail address).
          </p>
          <p>
            We receive and store any information you knowingly provide to us
            when you create an account, publish content, or fill any forms in
            the Mobile Application. When required, this information may include
            the following:
          </p>
          <ul>
            <li>
              Account details (such as user name, unique user ID, password, etc)
            </li>
            <li>
              Contact information (such as email address, phone number, etc)
            </li>
            <li>
              Basic personal information (such as name, country of residence,
              etc)
            </li>
            <li>
              Certain features on the mobile device (such as contacts, calendar,
              gallery, etc)
            </li>
          </ul>
          <p>
            You can choose not to provide us with your Personal Information, but
            then you may not be able to take advantage of some of the features
            in the Mobile Application. Users who are uncertain about what
            information is mandatory are welcome to contact us.
          </p>
          <h2 id="privacy-of-children">Privacy of children</h2>
          <p>
            We do not knowingly collect any Personal Information from children
            under the age of 18. If you are under the age of 18, please do not
            submit any Personal Information through the Mobile Application and
            Services. If you have reason to believe that a child under the age
            of 18 has provided Personal Information to us through the Mobile
            Application and Services, please contact us to request that we
            delete that child’s Personal Information from our Services.
          </p>
          <p>
            We encourage parents and legal guardians to monitor their children’s
            Internet usage and to help enforce this Policy by instructing their
            children never to provide Personal Information through the Mobile
            Application and Services without their permission. We also ask that
            all parents and legal guardians overseeing the care of children take
            the necessary precautions to ensure that their children are
            instructed to never give out Personal Information when online
            without their permission.
          </p>
          <h2 id="use-and-processing-of-collected-information">
            Use and processing of collected information
          </h2>
          <p>
            We act as a data controller and a data processor when handling
            Personal Information, unless we have entered into a data processing
            agreement with you in which case you would be the data controller
            and we would be the data processor.
          </p>
          <p>
            {" "}
            Our role may also differ depending on the specific situation
            involving Personal Information. We act in the capacity of a data
            controller when we ask you to submit your Personal Information that
            is necessary to ensure your access and use of the Mobile Application
            and Services. In such instances, we are a data controller because we
            determine the purposes and means of the processing of Personal
            Information.
          </p>
          <p>
            We act in the capacity of a data processor in situations when you
            submit Personal Information through the Mobile Application and
            Services. We do not own, control, or make decisions about the
            submitted Personal Information, and such Personal Information is
            processed only in accordance with your instructions. In such
            instances, the User providing Personal Information acts as a data
            controller.
          </p>
          <p>
            In order to make the Mobile Application and Services available to
            you, or to meet a legal obligation, we may need to collect and use
            certain Personal Information. If you do not provide the information
            that we request, we may not be able to provide you with the
            requested products or services. Any of the information we collect
            from you may be used for the following purposes:
          </p>
          <ul>
            <li>Create and manage user accounts</li>
            <li>Run and operate the Mobile Application and Services</li>
          </ul>
          <p>
            Processing your Personal Information depends on how you interact
            with the Mobile Application and Services, where you are located in
            the world and if one of the following applies: (i) you have given
            your consent for one or more specific purposes; (ii) provision of
            information is necessary for the performance of an agreement with
            you and/or for any pre-contractual obligations thereof; (iii)
            processing is necessary for compliance with a legal obligation to
            which you are subject; (iv) processing is related to a task that is
            carried out in the public interest or in the exercise of official
            authority vested in us; (v) processing is necessary for the purposes
            of the legitimate interests pursued by us or by a third party.
          </p>
          <p>
            {" "}
            Note that under some legislations we may be allowed to process
            information until you object to such processing by opting out,
            without having to rely on consent or any other of the legal bases.
            In any case, we will be happy to clarify the specific legal basis
            that applies to the processing, and in particular whether the
            provision of Personal Information is a statutory or contractual
            requirement, or a requirement necessary to enter into a contract.
          </p>
          <h2 id="managing-information">Managing information</h2>
          <p>
            You are able to delete certain Personal Information we have about
            you. The Personal Information you can delete may change as the
            Mobile Application and Services change. When you delete Personal
            Information, however, we may maintain a copy of the unrevised
            Personal Information in our records for the duration necessary to
            comply with our obligations to our affiliates and partners, and for
            the purposes described below. If you would like to delete your
            Personal Information or permanently delete your account, you can do
            so by contacting us.
          </p>
          <h2 id="disclosure-of-information">Disclosure of information</h2>
          <p>
            {" "}
            Depending on the requested Services or as necessary to complete any
            transaction or provide any Service you have requested, we may share
            your information with our affiliates, contracted companies, and
            service providers (collectively, “Service Providers”) we rely upon
            to assist in the operation of the Mobile Application and Services
            available to you and whose privacy policies are consistent with ours
            or who agree to abide by our policies with respect to Personal
            Information. We will not share any personally identifiable
            information with third parties and will not share any information
            with unaffiliated third parties.
          </p>
          <p>
            Service Providers are not authorized to use or disclose your
            information except as necessary to perform services on our behalf or
            comply with legal requirements. Service Providers are given the
            information they need only in order to perform their designated
            functions, and we do not authorize them to use or disclose any of
            the provided information for their own marketing or other purposes.
          </p>
          <h2 id="retention-of-information">Retention of information</h2>
          <p>
            We will retain and use your Personal Information for the period
            necessary as long as your user account remains active, to enforce
            our agreements, resolve disputes, and unless a longer retention
            period is required or permitted by law.
          </p>
          <p>
            We may use any aggregated data derived from or incorporating your
            Personal Information after you update or delete it, but not in a
            manner that would identify you personally. Once the retention period
            expires, Personal Information shall be deleted. Therefore, the right
            to access, the right to erasure, the right to rectification, and the
            right to data portability cannot be enforced after the expiration of
            the retention period.
          </p>
          <h2 id="social-media-features">Social media features</h2>
          <p>
            Our Mobile Application and Services may include social media
            features, such as the Facebook and Twitter buttons, Share This
            buttons, etc (collectively, “Social Media Features”). These Social
            Media Features may collect your IP address, what page you are
            visiting on our Mobile Application and Services, and may set a
            cookie to enable Social Media Features to function properly. Social
            Media Features are hosted either by their respective providers or
            directly on our Mobile Application and Services. Your interactions
            with these Social Media Features are governed by the privacy policy
            of their respective providers.
          </p>
          <h2 id="links-to-other-resources">Links to other resources</h2>
          <p>
            The Mobile Application and Services contain links to other resources
            that are not owned or controlled by us. Please be aware that we are
            not responsible for the privacy practices of such other resources or
            third parties. We encourage you to be aware when you leave the
            Mobile Application and Services and to read the privacy statements
            of each and every resource that may collect Personal Information.
          </p>
          <h2 id="information-security">Information security</h2>
          <p>
            We secure information you provide on computer servers in a
            controlled, secure environment, protected from unauthorized access,
            use, or disclosure. We maintain reasonable administrative,
            technical, and physical safeguards in an effort to protect against
            unauthorized access, use, modification, and disclosure of Personal
            Information in our control and custody. However, no data
            transmission over the Internet or wireless network can be
            guaranteed.
          </p>
          <p>
            Therefore, while we strive to protect your Personal Information, you
            acknowledge that (i) there are security and privacy limitations of
            the Internet which are beyond our control; (ii) the security,
            integrity, and privacy of any and all information and data exchanged
            between you and the Mobile Application and Services cannot be
            guaranteed; and (iii) any such information and data may be viewed or
            tampered with in transit by a third party, despite best efforts.
          </p>
          <p>
            As the security of Personal Information depends in part on the
            security of the device you use to communicate with us and the
            security you use to protect your credentials, please take
            appropriate measures to protect this information.
          </p>
          <h2 id="data-breach">Data breach</h2>
          <p>
            In the event we become aware that the security of the Mobile
            Application and Services has been compromised or Users’ Personal
            Information has been disclosed to unrelated third parties as a
            result of external activity, including, but not limited to, security
            attacks or fraud, we reserve the right to take reasonably
            appropriate measures, including, but not limited to, investigation
            and reporting, as well as notification to and cooperation with law
            enforcement authorities. In the event of a data breach, we will make
            reasonable efforts to notify affected individuals if we believe that
            there is a reasonable risk of harm to the User as a result of the
            breach or if notice is otherwise required by law. When we do, we
            will send you an email.
          </p>
          <h2 id="changes-and-amendments">Changes and amendments</h2>
          <p>
            We reserve the right to modify this Policy or its terms related to
            the Mobile Application and Services at any time at our discretion.
            When we do, we will send you an email to notify you. We may also
            provide notice to you in other ways at our discretion, such as
            through the contact information you have provided.
          </p>
          <p>
            An updated version of this Policy will be effective immediately upon
            the posting of the revised Policy unless otherwise specified. Your
            continued use of the Mobile Application and Services after the
            effective date of the revised Policy (or such other act specified at
            that time) will constitute your consent to those changes. However,
            we will not, without your consent, use your Personal Information in
            a manner materially different than what was stated at the time your
            Personal Information was collected.
          </p>
          <h2 id="acceptance-of-this-policy">Acceptance of this policy</h2>
          <p>
            You acknowledge that you have read this Policy and agree to all its
            terms and conditions. By accessing and using the Mobile Application
            and Services and submitting your information you agree to be bound
            by this Policy. If you do not agree to abide by the terms of this
            Policy, you are not authorized to access or use the Mobile
            Application and Services. This privacy policy was created with the
            help of{" "}
            <a
              target="_blank"
              rel="noreferrer noopener external nofollow"
              href="https://www.websitepolicies.com"
            >
              WebsitePolicies
            </a>
            .
          </p>
          <h2 id="contacting-us">Contacting us</h2>
          <p>
            If you have any questions, concerns, or complaints regarding this
            Policy, the information we hold about you, or if you wish to
            exercise your rights, we encourage you to contact us using the
            details below:
          </p>
          <p>
            <a
              href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#116;e&#99;h&#64;a&#103;&#114;i&#100;&#97;t&#97;p&#111;&#114;&#116;&#97;&#108;.c&#111;m"
              target="_blank"
              rel="nofollow"
            >
              t&#101;&#99;h&#64;a&#103;ri&#100;&#97;&#116;a&#112;or&#116;a&#108;&#46;com
            </a>
          </p>
          <p>
            We will attempt to resolve complaints and disputes and make every
            reasonable effort to honor your wish to exercise your rights as
            quickly as possible and in any event, within the timescales provided
            by applicable data protection laws.
          </p>
          <p>This document was last updated on July 12, 2022</p>
        </Font.Sub4>
      </div>
    );
};