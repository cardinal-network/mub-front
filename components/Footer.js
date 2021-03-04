import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#fff;
`

const FooterCopyRight = styled.div`
  width: 100%;
  background: #222;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  padding: 25px 0;
`

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <FooterColumn>
                    <h4>Cat1</h4>
                </FooterColumn>
                <FooterColumn>
                    <h4>Cat2</h4>
                </FooterColumn>
                <FooterColumn>
                    <h4>Cat3</h4>
                </FooterColumn>
                <FooterColumn>
                    <h4>Cat4</h4>
                </FooterColumn>
            </div>
        </div>
        <FooterCopyRight>
            <div className="container">
                <div className="row">
                    <FooterColumn>
                        <h4>Cat1</h4>
                    </FooterColumn>
                    <FooterColumn>
                        <h4>Cat2</h4>
                    </FooterColumn>
                </div>
            </div>
        </FooterCopyRight>
    </footer>
  )
}