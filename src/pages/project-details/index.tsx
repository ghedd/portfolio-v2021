import React, { lazy, Suspense } from "react"
import {
  Chip,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from "@material-ui/core"

import MainLayout from "../../components/layouts/main-layout"
import SEO from "../../components/seo"
import ArticleHeading from "../../components/typography/article-heading"
import MobileActionsGroup, {
  iconSet,
} from "../../components/actions-group-dpage-mobile"
import SectionHeading from "../../components/typography/section-heading"

interface DetailLinkProps {
  label: string
  link: string
  iconName: keyof typeof iconSet
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      marginBottom: "clamp(3rem, 5vw, 5rem)",
    },
    chip: {
      marginLeft: theme.spacing(1),
      "&:first-of-type": {
        marginLeft: 0,
      },
    },
  })
)

const ProjectDetailsPage: React.FC = () => {
  const matches = useMediaQuery("(min-width: 600px)")
  const links: DetailLinkProps[] = [
    {
      label: "view live site",
      link: "/details-page/#",
      iconName: "iconWeb",
    },
    {
      label: "view code",
      link: "/details-page/#",
      iconName: "iconGitHub",
    },
    {
      label: "back to projects",
      link: "/projects",
      iconName: "iconBack",
    },
  ]

  const DesktopActionGroup = lazy(
    () => import("../../components/actions-group-dpage")
  )

  const classes = useStyles()
  return (
    <MainLayout>
      <SEO title="Title" />
      <img
        src="https://picsum.photos/1080/960.webp"
        style={{
          position: "relative",
          left: 0,
          width: "100%",
          height: "50vh",
          objectFit: "cover",
          marginBottom: "clamp(3rem, 5vh, 5rem)",
        }}
      />
      <Container maxWidth="lg">
        {!matches ? (
          <MobileActionsGroup actionsGroup={links} />
        ) : (
          <Suspense fallback={<MobileActionsGroup actionsGroup={links} />}>
            <DesktopActionGroup actionsGroup={links} />
          </Suspense>
        )}
        <ArticleHeading heading="Heading goes here" />
        <section className={classes.section}>
          <SectionHeading heading="Description" />
          <Typography variant="body1" component="p" color="textPrimary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non nisi
            repellendus quia aspernatur possimus illum excepturi id quae, fugit
            veritatis et. Eaque incidunt deserunt earum voluptates consequatur
            exercitationem quia! Deserunt laboriosam, possimus ducimus ipsa
            quidem repellat autem sit temporibus exercitationem. Temporibus
            soluta tenetur voluptas, ducimus recusandae fugit ullam corrupti
            excepturi! Amet officiis alias est eius illo. Dolores repellendus
            quo, dignissimos nesciunt fuga harum sequi est doloribus ab sunt,
            corrupti consequatur nemo quam illo eos vitae unde quas rerum,
            commodi nisi explicabo porro. Aperiam quam sequi perspiciatis
            doloremque possimus, porro, quae nesciunt atque aliquid, ullam
            corporis? Ipsum sed ea ipsa, eveniet odio at, hic vel saepe laborum
            blanditiis sint voluptatum fugiat itaque rem debitis vero labore
            qui? Sed, est ut exercitationem expedita temporibus facilis
            molestias, possimus a consequuntur, explicabo laboriosam labore.
            Dolore, sit libero sint quam impedit alias adipisci perspiciatis hic
            voluptas suscipit ut id quasi iusto quaerat est architecto, beatae
            esse placeat magni. Ipsum suscipit magnam, harum iste eius quaerat
            et eos illum officia! Quo delectus sint excepturi ipsum, doloremque
            cum harum quam modi rem numquam suscipit aliquam consequatur eos
            exercitationem magnam consectetur. Voluptatum repellat sit, odio
            soluta deserunt, animi tenetur suscipit quas laborum ducimus in
            quibusdam aspernatur, fuga aperiam.
          </Typography>
        </section>
        <section className={classes.section}>
          {/* map over a list of tools used in project */}
          <SectionHeading heading="Tools" />

          <Chip className={classes.chip} label="HTML" />
          <Chip className={classes.chip} label="CSS" />
          <Chip className={classes.chip} label="JavaScript" />
          <Chip className={classes.chip} label="React" />
        </section>
      </Container>
    </MainLayout>
  )
}

export default ProjectDetailsPage
