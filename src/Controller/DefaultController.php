<?php
/**
 * Created by PhpStorm.
 * User: ean
 * Date: 02.04.2018
 * Time: 11:46
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{

    /**
     * @Route("/", name="welcome")
     */
    public function indexAction()
    {
        return $this->render('/Default/index.html.twig');
    }
}