import footerData from "@/data/layout/footer.json";
import type { IFooterData } from "@/types/footer";
import { _TrustBadges } from "./_TrustBadges";
import { _FooterMain } from "./_FooterMain";
import { _Newsletter } from "./_Newsletter";
import { _FooterBottom } from "./_FooterBottom";

const data = footerData as IFooterData;

export function Footer() {
  return (
    <footer className="bg-surface text-body">
      <_TrustBadges badges={data.trustBadges} />
      <_FooterMain
        data={{
          about: data.about,
          columns: data.columns,
          locateUs: data.locateUs,
          contact: data.contact,
          social: data.social,
          paymentMethods: data.paymentMethods,
        }}
      />
      <_Newsletter heading={data.newsletter.heading} placeholder={data.newsletter.placeholder} />
      <_FooterBottom copyright={data.copyright} />
    </footer>
  );
}
