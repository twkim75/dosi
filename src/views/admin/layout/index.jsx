import Nav from './Nav';
import Header from './Header';
import { styled } from 'styled-components';

function Layout({ children }) {
  return (
    <AdminWrapper>
      {/* 네비게이션 바 */}
      <Nav></Nav>
      <AdminMain>
        <Header></Header>
        <Contents>{children}</Contents>
      </AdminMain>
    </AdminWrapper>
  );
}

export default Layout;

const AdminWrapper = styled.div`
  user-select: none;
  min-width: 1920px;
  height: 100vh;
  position: relative;
`;
const AdminMain = styled.div`
  padding-left: 258px;
  width: 100%;
  height: 100vh;
`;
const Contents = styled.div`
  height: calc(100vh - 65px);
  position: relative;
  overflow-y: scroll;
  padding: 70px 0px;
`;
