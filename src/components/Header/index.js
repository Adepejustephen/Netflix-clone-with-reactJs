import React, { useState} from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
    Background, Container, Logo, ButtonLink, Dropdown,
    Picture, LinkText,
    Search,
    Profile,
    FeatureCallOut,
    SearchIcon,
    SearchInput,
    PlayButton, Text,
    Feature} from './styles/Header'


const Header = ({ children, ...restprops}) => {
    return (
        <Background {...restprops}> {children} </Background>
    )
}

Header.Frame = function HeaderFrame({children, ...restprops}) {
    return <Container {...restprops}>{ children} </Container>
}

Header.Logo = function HeaderLogo({ to, ...restprops}) {
    return <RouterLink to={to}>
        <Logo {...restprops} />
     </RouterLink>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature>{children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <LinkText {...restProps}>{children}</LinkText>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButton({ children, ...restprops }) {
    return <ButtonLink {...restprops}> {children} </ButtonLink>
}

export default Header
