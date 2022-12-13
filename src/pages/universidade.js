import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Hr, Section, Input, LinkBox, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree, Menu } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"universidade"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Box min-width="100px" min-height="100px" order="-1" display="flex">
				<Image src="https://uploads.quarkly.io/6398ccc3f63de40026721907/images/00133a19556f4154b5b16b5612084c2e.png?v=2022-12-13T20:16:25.447Z" display="block" width="100px" height="100px" />
				<Text
					margin="0px 0 24px 0"
					text-align="center"
					font="--headline1"
					md-font="--headline3"
					color="rgba(0, 0, 0, 0.9)"
					display="block"
					overflow-x="visible"
				>
					{"          "}Estudoteca{"        "}
				</Text>
			</Box>
			<Hr min-height="10px" min-width="100%" margin="0px 0px 0px 0px" />
		</Section>
		<Section padding="80px 0 80px 0" background="#EDF2F6" sm-padding="60px 0 60px 0">
			<Override
				slot="SectionContent"
				flex-direction="row"
				justify-content="center"
				height="450px"
				min-width="10px"
				position="relative"
				left="-75px"
			/>
			<Components.QuarklycommunityKitTable />
		</Section>
		<Section background="--color-lightD2" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="35%" lg-width="100%" display="flex">
					<Box>
						<Text
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							ENVIAR
						</Text>
						<Text font="--headline2" max-width="500px" margin="30px 10px 0 0" text-align="left">
							Envia os teus documentos e contribui para a comunidade
						</Text>
					</Box>
				</Box>
				<Box width="65%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xeqpgrlv">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column" width="175px">
									<Box min-width="100px" min-height="100px">
										<Box sm-width="100%" display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Nome do documento
											</Text>
											<Box sm-width="100%" display="flex" flex-direction="column">
												<Input width="100%" type="email" name="email" />
											</Box>
											<Box sm-width="100%" display="flex" flex-direction="column">
												<Text font="--base" margin="0 0 4px 0">
													Opção
												</Text>
												<Input width="100%" name="name" type="text" />
											</Box>
										</Box>
									</Box>
									<Box min-width="100px" min-height="100px">
										<Box sm-width="100%" display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Disciplina
											</Text>
											<Box sm-width="100%" display="flex" flex-direction="column">
												<Input width="100%" type="email" name="email" />
											</Box>
											<Box sm-width="100%" display="flex" flex-direction="column">
												<Text font="--base" margin="0 0 4px 0">
													Disciplina
												</Text>
												<Input width="100%" name="name" type="text" />
											</Box>
										</Box>
									</Box>
								</Box>
								<Box
									min-width="100px"
									min-height="100px"
									height="250px"
									width="550px"
									display="block"
									background="#87878c"
								>
									<LinkBox
										display="block"
										text-align="center"
										justify-self="auto"
										align-self="center"
										width="400x"
										height="275px"
									/>
								</Box>
								<Box display="flex" flex-direction="column" align-items="center" grid-column="1 / span 2">
									<Button width="150px" height="50px">
										Enviar
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Parceiros
				</Text>
				<Text
					margin="25px 0px 0px 0px"
					font="--lead"
					display="block"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
					width="60%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box margin="40px 0px 0px 0px" display="flex" flex-direction="row" flex-wrap="wrap">
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2025.svg?v=2021-08-27T23:06:50.611Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2026.svg?v=2021-08-27T23:06:50.617Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2027.svg?v=2021-08-27T23:06:50.623Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2028.svg?v=2021-08-27T23:06:50.609Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2029.svg?v=2021-08-27T23:06:50.627Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2030.svg?v=2021-08-27T23:06:50.610Z" border-radius="16px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6398ccc3f63de40026721905"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});