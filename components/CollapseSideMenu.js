import styled from 'styled-components';

const CollapseSideMenuWrapper = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.shadow_1};
  width: 100%;
  height: 400px;
  border-radius: 6px;
  margin: 20px 0;
  padding: 0 0 10px 0;
  text-align:center;
  button{
    width: 100%;
    background: #444;
    color: #fff;
    border: 0;
    padding: 25px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    &:hover {
        background: #474747;
    }
  }
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    /* width: 100%; */
    padding: 25px;
    li{
        label{
            margin-left: 10px;
        }
    }
  }
  @media (max-width: 1100px){
    display: none;
  }
`;

export default function CollapseSideMenu(props) {
  const {title, data} = props;
  return (
    <CollapseSideMenuWrapper>
        <button>{title}</button>
        {data ? 
        <ul>
          {data.map((prodSubCatDataItem) => (
              <li key={prodSubCatDataItem.id}>
                  <input type="radio" id={prodSubCatDataItem.id} name={prodSubCatDataItem.slug} value={prodSubCatDataItem.slug} />
                  <label for={prodSubCatDataItem.title}>{prodSubCatDataItem.title} ({prodSubCatDataItem.count})</label>
              </li>
          )
          )}
        </ul>
        : ''}
    </CollapseSideMenuWrapper>
  )
}