import React from 'react';
import CardDetail from './CardDetail';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { getSinglePlant } from '../../apiCalls.js'
// jest.mock('../../apiCalls.js');

describe('CardDetail', () => {
  const plantToRender = {
    id: 123456,
    common_name: 'Japanese rose',
    scientific_name: 'Kerria japonica',
    plantType: 'Shrub',
    height: '250cm',
    plantInfo: 'mockURL',
    image: 'mockImageUrl'
  }

  const fakeAdd = jest.fn()
  const fakeRemove = jest.fn()

  it('should render a plant detail page', () => {
    // getSinglePlant.mockResolvedValue({})

    render(
      <MemoryRouter>
        <CardDetail addToPlan={fakeAdd}
        removeFromPlan={fakeRemove} {...plantToRender}/>
      </MemoryRouter>
    )

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByText('Add to Garden Plan')).toBeInTheDocument();
  })

  // it('should display info of a fetched plant on render', async () => {
  //   getSinglePlant.mockResolvedValue({
  //     data: {
  //       specifications: {
  //         growth_habit: 'Shrub',
  //         average_height: {
  //           cm: 250
  //         }
  //       },
  //       sources: [{
  //         url: "https://plants.usda.gov/core/profile?symbol=PITO2"
  //       }],
  //     }
  //   })
  //
  //   render(
  //     <MemoryRouter>
  //       <CardDetail addToPlan={fakeAdd}
  //       removeFromPlan={fakeRemove} {...plantToRender}/>
  //     </MemoryRouter>
  //   )
  //
  //   expect(screen.getByText('Japanese rose')).toBeInTheDocument();
  //   expect(screen.getByText('Kerria japonica')).toBeInTheDocument();
  //   expect(await waitFor( () => screen.getByText('Plant Type: Shrub'))).toBeInTheDocument()
  //   expect(await waitFor( () => screen.getByText('Height: 250cm'))).toBeInTheDocument()
  // })
  //
  // it('should invoke the addToPlan function on button click', () => {
  //   getSinglePlant.mockResolvedValue({
  //     data: {
  //       specifications: {
  //         growth_habit: 'Shrub',
  //         average_height: {
  //           cm: 250
  //         }
  //       },
  //       sources: [{
  //         url: "https://plants.usda.gov/core/profile?symbol=PITO2"
  //       }],
  //     }
  //   })
  //
  //   const mockNewPlant = {
  //     id: 123456,
  //     key: 123456,
  //     commonName: 'Japanese rose',
  //     scientificName: 'Kerria japonica'
  //   }
  //
  //   render(
  //     <MemoryRouter>
  //       <CardDetail addToPlan={fakeAdd}
  //       removeFromPlan={fakeRemove} {...plantToRender}/>
  //     </MemoryRouter>
  //   )
  //
  //   const addTo = screen.getByText('Add to Garden Plan')
  //   userEvent.click(addTo)
  //   expect(fakeAdd).toHaveBeenCalledWith(mockNewPlant);
  //   expect(fakeAdd).toHaveBeenCalledTimes(1);
  //   expect(screen.getByText('Remove from Garden Plan')).toBeInTheDocument()
  // })
})
