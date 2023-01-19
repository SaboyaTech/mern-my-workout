import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Workouts from '../components/workouts/workouts.component'
import WorkoutForm from '../components/workout-form/workout-form.component'
import logo from '../logo.png'

const user = {
  name: 'Saboya Dev',
  email: 'jose@example.com',
  imageUrl:
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISFRgVEhISGBgYEhoYGBgYGBgYGBgZGRgaGhgYGBgcIS4lHB4rHxoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHjEhJCE0NDQ0MTE0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTE0NDQ0NDE0NDQ0MTQ0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABCEAACAQIDBQUFBgQFAgcAAAABAgADEQQhMQUSQVFhBiJxgZETMqGx8AcUUsHR4UJicpIjM4Ky8VPSFSQ0Q1STov/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIhEBAQEBAAICAgMBAQAAAAAAAAECEQMhEjFBUWFxgTIi/9oADAMBAAIRAxEAPwD0IRiIRyNJQEICZDjEUc0GIxFHAI4CEyCShBiACToBcwCE0G0u1uFoiwcO1rhVN9OBIyE5vaXb53W2GTcbdvdrMfIaZa8ekvDr0O8izW56TxzG9q8Yxt7eplY5bq38So+rxVdt4qoQj1qhsxNyzDLQ2HQAyfGnXsVKorjeU3B/LIjxvJmeWbK7QVKTor1j7McRca5bwt7x0O6175jXOei4DaVOrYXs+d1sRmpAJF+BupHRgeMWKzDCMxTIUIQgOEUIU4xIxiQSBjkYwYDhCEoxRHEIxNMpQEICA44oxAYjEQkoBJRCMQKcVikpIXqMFUak9chOC7Q9sPbo1GgpUNcFicyLEgC2lyLeco+0Xbq1GGHpEEIxLn+e1gqnmM7+Nuc4t6hVRawbK/S35ftNSIyt5RbeN7hlB62Gf5zEYqehvY8vX64TFZtQM+nwy+uESuw04+IPXz8ZpGQ1QpnZTbUHUWNiB8PgZRiqvusLWsbEcL8L8DJU2NrAG/1b9Ijs+qR/lta99PrOTq8I17BTc94G/QjQ/H6vNtsHaDpvKH1uc/6SoIOoytof4QeE52srCwIItLaVYqMr3vfw0izsV7v2e2quIpIS4LhQHHHe0NxzuD85tp4fszbDUyHRipFr25jj1nsWydpJiUDprbvD8LcROas2EISAhCEKUBCAkEo5GMQHCKECgQhGJtlKAhAQHGIoxAclIiSgEpx2KFKm7toiFjmBp1OkyBOI+03HslJKKNbfJZ7fhUZA9Lkn/TNI8wxeINR2YXa7k3tbMm/gJHC4erWayLfnbh6S7Z2DbEOEpiwyLH8I/Wej7K2VTooFVbW16+MzvyTPr8t48fyc3szskzZ1D1nUYTYFFBbcB8f0mzROUtVZ5db1r8vVnx5n4YA2NQvf2a+kyFwtMZBRMrdiCTF66SRz21Oz9GrqgB5icftTsk6Z07kcp6eySqpRB1EZ8ms/VTXjzr7jxJ0em264Isfq07TsBt8Uq4So9kqdzPQNe6+GeXnN1t3YFOuhysRoRrOAWl93fvBgVYi1szaxuthlwzvPVjyTc/l5vJ47n+nv8Ux8DiVq00db2dA2eouMweo0MvMrkIQikURiKECUBCEB3hFCBUIQElNskIxCEBxiKMQJCSEiIxAlPHe2+MGKxT+z0QCmDfUi+8c+t56b2l2h93w1Rx7wQhc7d45DTOeO4Ym4BJzY73E8ePH9zKjp+x+zxTplrZk6851KTW7KTdpqJsUnl3e17MTmYy6aiXkCUIJbaSfTSQiEQitJWjMi8I3Wc6sYzrOJ7X7NXeFRRqCCRO4cTSbeob6ES418dSpvPyzYr+z7bYt91cWtd0bW97ErkMuJz1zndTxDDVnw9ZXS4KsDkbX5jjwuNDPaMDilq00dbWdQdQfLKe2/t4V0IQmVEIQgOOKOAoSVoQKRJSIkptkQhEIEoxEIxAlGJGBeEcv9ov8A6UZX/wAReVuOvTWec7Iw7VaoCjJdTPR+3z/+Ubnvpb1nNdi8OBQLnVnbPoDaNXmWsTum+pJYADhlMlGmDiMT7Px+U12J2i6jutw6fOeeTr0946YVgMvTrJriOc4QbeqA5t00EzaO3N615dZsXOpXZe1vE1YTTYbG7wBvIYnG7onK11kbgV85N8QttZxeP2qTkCZg0KtV2y3j5yzPpLp3gcc5jYlAwI5ia2kKm73gfT9T+UycJWJO63l+kxY1K4raeGKuy6EHL5j5T1Ps87thqRc3b2YuePS/M248Zwva2iFKOBqxB9DO27K3+608ye7kSBe1zllr4z0513MePc5ptYQhNMCEISAkhIxwJXhIwgRhCE6MiEIQAR3kS0iWl4nUmeK8jHKjn+3FJnwj7ovZlY+AOZnEbE2/Tw2HCVBUL7xNlA0bvC5JHOekbcrGnh6jBQ1k0PEE2PwM8r2js01ClVFe1SqEYAFiuagsTyzbp3RM3l9VvM1J2Myp2meobUcKzeLaeNhYesf3+uR38LTHX2qrbysb/CZ2Kwj01tSp5AWAFhb1M0bUMQT3ksbZNkxB4ZHIRJm/XG72fdqjFYmp/wBOmeiuv6mQoY4EhWVla+hifC4tj/iHu9WSbDZ+wjUU+1KFeHvZedhbxBjUzJ7M3X4b7ZaOwH6GVbeU00LObDnM/ZJX/Lpo1kG7YMRYA5Xe+8dOZi2nhlquKVen3BYgMxfwIY56655g2NwZ5Lz5PVLr4uLfG7wHswzc3YBUH9JJu/oPOZeErYz/ANupTUdEufVlmz2n2abVahtwAW/5zS1NiDeua+7c6MjAjzLT05+Fjhqbl/bYJiNok2XGUt78L09w/wCyOvtbHYezVUp2yG/uhkudBvIRbztJ4bZbNYJX3gDkCpIHUG9xNu2DqOhptusGUhjwItynO3Pfxf8AG/jefmf60WJ2zUxgCMihk74KXzuQlt03/EOM9P2DhTRw6I2RC3I6nMzzvCbPfBUUqOB7UsQ1jdcwCpPMjdJ/1T0zAVjUpo7asik+JAl+We8y5azrk1r8r4QhNMCIRwkBHFCA4QhCFCEiTOjIMiWkWaQvNJ1O8BIiSEIccUcCvE0RURkbRlKnzE5TC4M00ZCLblRvnf01nXzTY/3262/2iY8k9ddvFb9NUiE92+Q+UqqbJpub3YeBmW6heIHK+h8TwkWd1/hb0NvKcHpnGMmx6S5kb39RJ+ctxAVV3VA/bjI1MU5GSMbcgTMBBWrghdy29ZjfJRxXeGrHkNBrrHv8refTZdnaJA3iLF2LeAJ7vwtMjb+HNkcWuhN9fdIsb25HdPheS2cxU5zYYkB0OnG453mNftrP6adHJUAk9fGIYRTwmtxuzsTSUMtQEAWzICngLlvdPjqdNbS7CYqrYb1OoD/SbesfH12L2d4zfuoAyFpkJTshHFhbwvlK6OJP8Q3f6svgcz5TLLAm/AacLnn0yyHjnyE+i+2HtbC+0VE5uLeOg+c6TDjdAUaBQPQWmuwoBYdLkelvzmcDN+P9uPm16mf0y7wkKbSc7PORgIQgOEIQHaELwkRFjK2MkxkZ2YRMUZiEIYjEQkoBHFCUE57HVe+T/MfgZ0M0W26I3sv4hfzvn+U5+T/l18N/9NdWdWFiZhi6X3KlRT/I5X5Sp6L3yMgzbou08z2RgbUqVXNmqVHH8zM3zMvw20amGQJ7O4N7Xy43PzjwNcVHuTkMgPzm6eklRbMAR1ln8pb79MLD7cBGYseI4x1NvhRx8OJ8BMfG7EB71O55rxt0lmz9kre7gHx4Sa+M+2s9sYmI23WqIUanuqwtnqZr6XdOU7SrQpsN0hTOc2jhEpnI+EmdQv8AKWAe2Zm3XF5c+k5yjVJNgB9dZt8NROp5zGvtuX03+zql2m2vNPscZnwm2M6Y+nm8v/S1Gl4MxVMvptO2XGxZHFCVDgIQgEIQkRAyMcU7MEYo4QCOKEIcIrwJlBea3bKXQN+E5+B/cCbAmU4lN9GQ8Rbz4fGZ1Oyxc3mpXNWmq2wO6ZsqjWHK2R8ZrMehYXNyBPI90c4+CxpUvQYLbMLldvC4t8pl7L2m9Ve/7VWsAQOLbxyHXLQ2nV4YAoB09JEYdFbf903vcAG5ta5HE2m/lLOUmb31WsR6dmvXIzy3nZMrcL2ubyBajugjEXPd0cs2et1BuPSb1FpEAb6+8WItbM34ecnSSmv8Se6Rpz1MxeOmcacxtAvTRnptUNm4lhcEWFr6jetMKhsrHunta1TMi60zmQP5stZ26LTNiDvlRYZWUAaZcZXiXsrHpM/Pk9RdY9+65vY9Mk3YWt9Xm+tympo0ymZBFzfPlNjQfK5mdXtSeo3uykspbmflM28x8E6FEKMGUqCGGYN87iXXnXM5OPNq9tqYMtptMe8tQzcZrMjkEMnNsCEIQCEIQioxRyJM6sAxXgTI3hErxXivFeUSvC81WO7QYOj/AJmIpg8lO+39q3M5jaf2i01DDD0nY2yd7Kvjug3I8SI4Oyx+PpUE361REXmxtfoBqT0E4baf2igsVwlO4GtSpfPluIM/7iPCcBj9o1MXUL1ajOeZOQH4VGijoJWCALDSa4Oz2FtlqqutRiXBJJOrBiSD63HpNnQxIY7rZeJ4TzvA4o06iPwvut/S2R/I+U6tqpyI1/KeXyY5r+3p8eu5/p1dKnu5D3eEdSk012z9qB+6eGU3VOup1IynK9jvmyte+znbMCJdmPxvNvTxSAHnLGxSDxmLXSNfQwjrkSbTLNJVF20AyHWW/eU1v1mj2xtPKymZ4tvCxFcOxGU1faDHezotY5v3F8/eP9t/hJ4Y5XOpv9Ccv2nxftKwQHJEz/qbM/AL6zp48d1HHya5lueyPaUYY+zqk+ybMHM7jcwPwniBxz5zucPt/B1PdxFLwZgh9GsZ40DG7Xnr1iV5Jrj3ZHBFwQQdCMx6y1TPFNh9oKuGYezY7t81JO43iunnrPXMBtWlVRXFRF3lBszqCp4g585zuLlqa63NMyy8wcJjadQladRGI1CsCR1maDLESEciJK8qCEIQKZExmYO09q0cMm/VqADgBmzHkqjMzo5ssxE2nn20vtAqEkYekijgzks39qkAepnKbR2viMQb1q1Rh+G+6g8EWwmuD1jGdocHSv7TEUwRwB3z6LecL2s7YfeFKYcstPRmI3WfpbUL0OvGcde2kjUbhLwYzVmvln0ixdQ5INTrByEzkaCfxNqfhKJolhaS3pLKG6IGPUFwZ1uGU+zpvmVdAVbnbusD1VgVPhfjOVqEaDjlPQfs7FPE4Z8PU/gqFlsRvIHGTLy7wboZjeexrOvjXO4hzTfeGQLA/qJmU9vNbqL5/ObDtH2fq4a5Zd9Do4HdN9L/AID0PqZyDrunPTTwznH4y/bt3nuOnG2QBqb2zPmb/IwO2t5hmbDM/ID5zmEbQX5k34HLMHw+UaoTp9cQPhJ8MrPJp1FfbxAy/bT0mP7YuRnnY38h/wAes0lNC2W9wv4m2l50+wdk1KlgqkljroPL4eExrOZG5rWmRRBa+dlVSzsdERRdmPgPXIThKj77u2feckX1tfK/W1p6B27xVLB4f7nTIarVsapHBNc+V7WA5XM4BE0PMfLL5WnTxZ57c/Jrvo7GFpaqyQQTs4sKvTI7w8/1mdh8RvqFvZhp/wA8Ibsx69Lcsy6E2PQyo2mCx1bDOHpsVYaHX9jOtwHbvEtYH2RI4FPe/tIsZxNGvvCzZyDj2bBlORyMlnV69cwPbSg9hVR0PEjvr6jP4TfJtbDEXFelbq6r6gm4ni3t72a+sKtfhMfFevaf/FMN/wDIof8A2J+sJ4595HMekUfE66btn2iLtuUXO4BmVNt9vHiBOQL7wz+jMc1t4QD5TrzjCp2lbNGxzMgYCU5+Ei0aNl4mV1msIGMbs3hLPvAGTDzGnpwjpLYRbl4U1dTowkiJS1AHhIum4uRMdTixUubnID5zJ2bjqmGqrWotZlOnBl4ow4qf31AlBXIC4PO3PjJbthKPeti7Sp4zDpVTNHWxU57jDJ0cdD668Zz+2+xeHqEmmDTOvdzT+06eRE4zsT2nbBOVcj2TsN8G/da1t/0sD0A5T2JKlOogYDIgEFTcWPGctZal48lxHYzEL7m64/lNj6H8pVR7L1mO6y1BnpuNf1nrC0hfIgzOpJlpOeuuudftwuxuxO7Zqij/AFZ/DjOh2riqOzMM9W1yFAUcXc5KvQX9ACZvCwAzPCeR/aftn29dcOnuUc26uw0/0qf/ANGYznul1r04/GYipiHepUO87tvMeZ5dBYAAcAJbSXeUi/eGYH1zEqoraW7jA7wnqkcbUlYHOSMpxIa9w1r65C9+ecqZMu8SfHP4aQiz7yCbLn14Dz4+UjVpk5kk9OElRS2ckh1ECqhymQRvAr6ePCVqtmjc2N4FmGqd20MRVs0jox65/r8ZDE8D5QMj2kJj78IFSMVa3Ay4NMd33hcaiTSpcXmkSBkXNoX1kKxykAD7okXzPhJDUnkLfr8hIgXNvOFAGUAJMxWgQkMSLiWmKoIGvZDJKXXQ+UyykFUEQiNKura5H4es7vsN2rOFYUa5vRY91tfZn/s+U88xFC2Y4zYYXFUlpgOrh13rFLEPf3Q9zlY8uEUfRyUEcBhYgi4Iz16yZoAZWnnf2YdrkqAYWq+64H+FvHUfgBOpHDp4T0bF4pKaM9RgqqpYseAGs46jcrnu1W21wVEubF2utNNN5ran+Uak+XETxOs7OxdjdmYsx5km5PqZuu1W2amNrs5JVPdRT/Cg0uBxOZPj0nOYjFBe6uZ+Ams54a11c7qouSB9cBMZ9oE+4pPU/oJjGmzG7G5mZSpgLNsjC1Ha5c+WkvbPKUUdTMlBKJjSQU2MkZEyCxlvnFXXKTEGgVg3W/L5TGrOdJkYbipmKNc+EothHCRGNUUqbjzgj2PQ/OTV7+PKUulvA/A85RlE/KQbO0povfLpLSYATl45yVJcr8/lK9T0EtRrwqUiYAwJgRGsGgscCDRrBoJAHW4tKRSuJeRIiEY26VIZSQQQQQbEEZggjQ3nZbS7aV8XhqdKpkVH+K//AFCp7jEcMszzM5Vs8vq0hXO9ZRpy5yWRYjicWzZLkOfOLDUeJklo6TIQQIstpNdIqka6ShUhnMhZVTFpYpkEnkZNxIWlFqQYyCGSeQVIbNKmFmb+on1zk21ixGR8R+0oW9CQ3o4RRU96Sq6HwhCBTh/ePhMg8PrhCEKS8ZOnpHCAxE0cIEeEBHCBFoLCEBmIa/XSEICbj4Sse9CEhFolqwhKIvEscIFojhCBMyJhCAJLHhCBjtqJHFar4QhAqhCEI//Z',
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  /*{ name: 'Workouts', href: '#', current: false },
  { name: 'Routines', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false }, */
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const DashboardLayout = ({children}) => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white shadow-sm">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-12 w-auto lg:hidden"
                        src={logo}
                        alt="My Fitness Buddy Logo"
                      />
                      <img
                        className="hidden h-12 w-auto lg:block"
                        src={logo}
                        alt="My Fitness Buddy Logo"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-indigo-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                            'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pt-2 pb-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header className='bg-inherit'>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* Replace with your content */}
              {children}
              <div className="px-4 py-8 sm:px-0">
                <WorkoutForm />
                <Workouts />
              </div>
              {/* /End replace */}
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
