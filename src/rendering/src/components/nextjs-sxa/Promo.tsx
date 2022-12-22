import React from 'react';
import {
  Image as JssImage,
  Link as JssLink,
  RichText as JssRichText,
  ImageField,
  LinkField,
  RichTextField,
} from '@sitecore-jss/sitecore-jss-nextjs';
//
//import * as FEAAS from '@sitecore-feaas/clientside/react';
interface Fields {
  PromoIcon: ImageField;
  PromoIcon2: ImageField; // DEMO TEAM CUSTOMIZATION - Additional field
  PromoText: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoLink: LinkField;
  PromoText2: RichTextField; // DEMO TEAM CUSTOMIZATION - Change to RichTextField
  PromoText3: RichTextField; // DEMO TEAM CUSTOMIZATION - Additional field
}
type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};
const PromoDefaultComponent = (props: PromoProps): JSX.Element => (
  <div className={`component promo ${props.params.styles}`}>
    <div className="component-content">
      <span className="is-empty-hint">Promo</span>
    </div>
  </div>
);
export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            {/* DEMO TEAM CUSTOMIZATION - Add fields */}
            <div className="field-promotext3">
              <JssRichText field={props.fields.PromoText3} />
            </div>
            <div className="field-promotext">
              <JssRichText field={props.fields.PromoText} />
            </div>
            <div className="field-promotext2">
              <JssRichText field={props.fields.PromoText2} />
            </div>
            {/* END CUSTOMIZATION */}
            <div className="field-promolink">
              {/* DEMO TEAM CUSTOMIZATION - Custom button classes */}
              <JssLink field={props.fields.PromoLink} className="btn--main btn--main--round" />
              {/* END CUSTOMIZATION */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <PromoDefaultComponent {...props} />;
};
export const WithText = (props: PromoProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;
  if (props.fields) {
    return (
      <div className={`component promo ${props.params.styles}`} id={id ? id : undefined}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            {/* DEMO TEAM CUSTOMIZATION - Replace Text with JssRichText */}
            <div>
              <div className="field-promotext">
                <JssRichText className="promo-text" field={props.fields.PromoText} />
              </div>
            </div>
            <div className="field-promotext">
              <JssRichText className="promo-text" field={props.fields.PromoText2} />
            </div>
            {/* END CUSTOMIZATION */}
          </div>
        </div>
      </div>
    );
  }
  return <PromoDefaultComponent {...props} />;
};
// DEMO TEAM CUSTOMIZATION - New variant
export const WithColumns = (props: PromoProps): JSX.Element => {
  if (props.fields) {
    return (
      <div className={`component promo promo-columns ${props.params.styles}`}>
        <div className="component-content">
          <div className="field-promoicon">
            <JssImage field={props.fields.PromoIcon} />
          </div>
          <div className="promo-text">
            <div className="text-cols">
              <div className="field-promotext">
                <JssImage field={props.fields.PromoIcon2} />
                <JssRichText className="rich-text" field={props.fields.PromoText} />
              </div>
              <div className="field-promotext2">
                <JssImage field={props.fields.PromoIcon2} />
                <JssRichText className="rich-text" field={props.fields.PromoText2} />
              </div>
              <div className="field-promotext3">
                <JssImage field={props.fields.PromoIcon2} />
                <JssRichText className="rich-text" field={props.fields.PromoText3} />
              </div>
            </div>
            <div className="field-promolink">
              <JssLink field={props.fields.PromoLink} className="btn--main btn--main--round" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <PromoDefaultComponent {...props} />;
};
// END CUSTOMIZATION
//adding in another comments line to force redeploy
// Steve's Component  CUSTOMIZATION - New variant
//eslint-disable-next-line @typescript-eslint/no-explicit-any
// Component: AnotherPromo
// Version:   Name
// URL:       https://components.sitecorecloud.io/components/94akWripwj
//eslint-disable-next-line @typescript-eslint/no-explicit-any
//FFS just work
/* 
const MyComponent = ({data}: any) => (
  <FEAAS.Component
    library="2uDvpJVin0LumiN2UWcSI9"
    component="94akWripwj"
    version="2XVwwuQdkP"
    revision="published"
    hostname="https://feaascompontsapiprod.blob.core.windows.net"
    data={data} />
);
const FromComponents = (props: PromoProps, version: string): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  console.log(version);
  if (props.fields && !sitecoreContext.pageEditing) {
    return (
      <div className={`component ${props.params.styles} innerSpaceS`}>
        <div className="component-content">
        <FEAAS.Stylesheet
  library="2uDvpJVin0LumiN2UWcSI9"
  hostname="https://feaascompontsapiprod.blob.core.windows.net" />
<MyComponent data={{"rXapTW7GUz":{"Text":"Promo Title Text","Image":"url_to_image_asset","Link":"https://lighthouse-hub.sitecoresandbox.cloud/api/public/content/f6fb36b2b2ce486fbaba68bdcb534792?v=8f2d362f","Text 2":"Promo Text Two","Text 3":"Promo Text Three"}}} />
        </div>
      </div>
    );
  } else if (props.fields && sitecoreContext.pageEditing) {
    return Default(props);
  }
  return <PromoDefaultComponent {...props} />;
};
// END CUSTOMIZATION */